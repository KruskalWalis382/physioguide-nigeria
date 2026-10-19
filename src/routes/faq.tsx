import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, Disclaimer } from "@/components/SiteLayout";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Frequently asked questions — PhysioGuide Nigeria" },
      { name: "description", content: "Answers to common questions about muscle and joint pain, physiotherapy and this website." },
      { property: "og:title", content: "FAQ — PhysioGuide Nigeria" },
      { property: "og:description", content: "Common questions about pain and physiotherapy." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Faq,
});

const faqs = [
  { q: "Can this website tell me what is wrong with me?", a: "No. PhysioGuide Nigeria gives general education only. Only a qualified health professional who assesses you in person can explain the cause of your pain." },
  { q: "Should I rest completely when my back hurts?", a: "For most common back pain, long bed rest is not recommended. Gentle activity within comfort is usually better. If you have any warning signs, seek medical care first." },
  { q: "What does a physiotherapist do?", a: "A physiotherapist assesses movement, muscles and joints, explains what may be contributing to pain, and gives advice and treatment suited to the individual." },
  { q: "Do I need a scan or X-ray?", a: "Many people with common back, knee or neck pain do not need a scan. A doctor or physiotherapist can decide if imaging is needed after assessing you." },
  { q: "Is my information saved?", a: "No. We do not ask for your name or contact details, and the safety checker answers stay on your phone. Nothing is sent to a server." },
  { q: "What should I do in an emergency?", a: "Go to the nearest hospital emergency department immediately. Do not rely on this website in an emergency." },
];

function Faq() {
  return (
    <SiteLayout>
      <div className="space-y-6">
        <h1 className="text-3xl">Frequently asked questions</h1>
        <div className="space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="card">
              <summary className="cursor-pointer font-semibold text-primary">{f.q}</summary>
              <p className="mt-3">{f.a}</p>
            </details>
          ))}
        </div>
        <Disclaimer />
      </div>
    </SiteLayout>
  );
}
