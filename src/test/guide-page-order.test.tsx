import { QueryClient } from "@tanstack/react-query";
import { createMemoryHistory, createRouter, RouterProvider } from "@tanstack/react-router";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";

/**
 * The low back pain guide must lead with practical, patient-friendly sections and keep
 * the clinical detail collapsed below them. Ordering is behaviour the site depends on,
 * so it is asserted from the rendered document rather than from the source text.
 */
async function renderGuide(slug: string) {
  const router = createRouter({
    routeTree,
    context: { queryClient: new QueryClient() },
    history: createMemoryHistory({ initialEntries: [`/guides/${slug}`] }),
  });

  render(<RouterProvider router={router} />);
  await screen.findByRole("heading", { level: 1 });
  return document.body.textContent ?? "";
}

function headingPositions(names: string[]) {
  // <summary> carries the clinical section's label, so it counts as a section marker too.
  const markers = Array.from(document.querySelectorAll("h1, h2, summary")).map((h) => h.textContent ?? "");
  return names.map((name) => {
    const index = markers.indexOf(name);
    expect(index, `"${name}" should be rendered as a section marker`).toBeGreaterThanOrEqual(0);
    return index;
  });
}

describe("Low back pain guide layout", () => {
  it("shows practical sections before the clinical details", async () => {
    await renderGuide("low-back-pain");

    const order = headingPositions([
      "Common reasons",
      "General self-care that often helps",
      "Book a professional assessment if",
      "Get urgent medical help if",
      "Explore the clinical details",
    ]);

    expect(order).toEqual([...order].sort((a, b) => a - b));
  });

  it("keeps every clinical subsection and reference inside the collapsible details", async () => {
    await renderGuide("low-back-pain");

    const details = document.querySelector("details");
    expect(details, "clinical content should sit inside a <details> element").not.toBeNull();
    expect(details?.hasAttribute("open"), "clinical content should start collapsed").toBe(false);

    for (const heading of [
      "Anatomy: Understanding your lower back",
      "How low back pain develops",
      "Risk factors and everyday demands",
      "Clinical distinctions",
      "What a physiotherapy assessment involves",
      "Evidence-informed rehabilitation",
      "Monitoring progress",
      "Clinical guidelines and further reading",
    ]) {
      expect(details?.textContent, `missing clinical section: ${heading}`).toContain(heading);
    }

    const links = Array.from(details!.querySelectorAll("a"));
    const hrefs = links.map((a) => a.getAttribute("href"));
    expect(hrefs).toContain("https://www.nice.org.uk/guidance/ng59");
    expect(hrefs).toContain("https://www.who.int/publications/i/item/9789240081789");
  });

  it("expands and collapses the clinical details when the summary is clicked", async () => {
    await renderGuide("low-back-pain");

    const details = document.querySelector("details")!;
    fireEvent.click(screen.getByText("Explore the clinical details"));
    expect(details.hasAttribute("open"), "clicking the summary should open the section").toBe(true);

    fireEvent.click(screen.getByText("Explore the clinical details"));
    expect(details.hasAttribute("open"), "clicking again should close it").toBe(false);
  });

  it("links to the safety checker and movement page after the urgent section", async () => {
    await renderGuide("low-back-pain");

    const checker = screen.getByRole("link", { name: "Use the safety checker" });
    const movement = screen.getByRole("link", { name: "Gentle movement ideas" });
    const urgent = Array.from(document.querySelectorAll("h2")).find((h) => h.textContent === "Get urgent medical help if")!;
    const details = document.querySelector("details")!;

    expect(urgent.compareDocumentPosition(checker) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    expect(checker.compareDocumentPosition(details) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    expect(checker.getAttribute("href")).toBe("/checker");
    expect(movement.getAttribute("href")).toBe("/movement");
  });
});

describe("Other condition guides", () => {
  it.each([
    ["knee-pain", "Anatomy: Understanding your knee", "https://www.nice.org.uk/guidance/ng226"],
    ["neck-pain", "Anatomy: Understanding your neck", "https://cks.nice.org.uk/topics/neck-pain-non-specific/"],
  ])("%s shows practical sections before collapsed clinical details", async (slug, anatomy, ref) => {
    await renderGuide(slug);

    const order = headingPositions([
      "Common reasons",
      "General self-care that often helps",
      "Book a professional assessment if",
      "Get urgent medical help if",
      "Explore the clinical details",
    ]);
    expect(order).toEqual([...order].sort((a, b) => a - b));

    const details = document.querySelector("details")!;
    expect(details.hasAttribute("open")).toBe(false);
    expect(details.textContent).toContain(anatomy);
    expect(details.textContent).not.toContain("lower back");
    const hrefs = Array.from(details.querySelectorAll("a")).map((a) => a.getAttribute("href"));
    expect(hrefs).toContain(ref);
  });
});
