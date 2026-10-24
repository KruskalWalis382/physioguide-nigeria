import { QueryClient } from "@tanstack/react-query";
import { createMemoryHistory, createRouter, RouterProvider } from "@tanstack/react-router";
import { fireEvent, render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { routeTree } from "@/routeTree.gen";
import { specialtyDetails } from "@/lib/specialties";

async function renderAbout() {
  const router = createRouter({
    routeTree,
    context: { queryClient: new QueryClient() },
    history: createMemoryHistory({ initialEntries: ["/about"] }),
  });
  render(<RouterProvider router={router} />);
  await screen.findByRole("heading", { level: 1 });
}

describe("Independent specialty expansion", () => {
  it.each(Object.entries(specialtyDetails))("%s opens and collapses only its own details", async (_title, detail) => {
    await renderAbout();
    const panel = document.getElementById(`specialty-detail-${detail.id}`);
    expect(panel).not.toBeNull();
    if (!panel || !panel.parentElement) throw new Error("Missing specialty panel");
    const button = within(panel.parentElement).getByRole("button", { name: "Click to see more" });
    expect(button).toHaveAttribute("aria-controls", panel.id);
    expect(button).toHaveAttribute("aria-expanded", "false");
    expect(panel).not.toBeVisible();

    fireEvent.click(button);
    expect(button).toHaveAttribute("aria-expanded", "true");
    expect(panel).toBeVisible();
    expect(screen.getAllByRole("button", { name: "Click to see more" })).toHaveLength(7);
    for (const other of Object.values(specialtyDetails).filter((value) => value.id !== detail.id)) {
      expect(document.getElementById(`specialty-detail-${other.id}`)).not.toBeVisible();
    }
    fireEvent.click(within(panel.parentElement).getByRole("button", { name: "Show less" }));
    expect(panel).not.toBeVisible();
    expect(button).toHaveAttribute("aria-expanded", "false");
  });

  it("keeps another card open when the first is collapsed", async () => {
    await renderAbout();
    const buttons = screen.getAllByRole("button", { name: "Click to see more" });
    const first = buttons[0];
    const second = buttons[1];
    if (!first || !second) throw new Error("Missing specialty buttons");
    fireEvent.click(first);
    fireEvent.click(second);
    expect(first).toHaveAttribute("aria-expanded", "true");
    expect(second).toHaveAttribute("aria-expanded", "true");
    fireEvent.click(first);
    expect(first).toHaveAttribute("aria-expanded", "false");
    expect(second).toHaveAttribute("aria-expanded", "true");
  });
});