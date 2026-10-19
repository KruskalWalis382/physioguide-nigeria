import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, Disclaimer } from "@/components/SiteLayout";
import { guides } from "@/lib/guides";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PhysioGuide Nigeria — Understand muscle and joint pain" },
      { name: "description", content: "Free educational guides on back, knee and neck pain for Nigerians, with a safety checker and advice on when to seek professional care." },
      { property: "og:title", content: "PhysioGuide Nigeria" },
      { property: "og:description", content: "Understand common muscle and joint pain and know when to seek care." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

const extra = [
  { to: "/checker", title: "Safety checker", short: "Check for warning signs that need urgent or professional care." },
  { to: "/movement", title: "Gentle movement", short: "Simple, low-risk movement ideas and when to stop." },
  { to: "/faq", title: "Questions", short: "Answers to common questions about pain and physiotherapy." },
] as const;

function Index() {
  return (
    <SiteLayout>
      <section className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">Health education for Nigerians</p>
        <h1 className="text-3xl sm:text-4xl">Understand your back, knee and neck pain — and know when to get help</h1>
        <p className="text-muted-foreground">
          Clear, simple information about common muscle and joint pain, general self-care, and the warning signs that need a health professional.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link to="/checker" className="btn btn-accent">Start the safety checker</Link>
          <Link to="/guides/$slug" params={{ slug: "low-back-pain" }} className="btn btn-outline">Read the guides</Link>
        </div>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-2xl">Guides</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {guides.map((g) => (
            <Link key={g.slug} to="/guides/$slug" params={{ slug: g.slug }} className="card block border-t-4 border-t-accent hover:shadow-md">
              <h3 className="text-lg">{g.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{g.short}</p>
              <span className="mt-3 inline-block text-sm font-semibold text-accent">Read guide →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-2xl">Tools and information</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {extra.map((e) => (
            <Link key={e.to} to={e.to} className="card block hover:shadow-md">
              <h3 className="text-lg">{e.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{e.short}</p>
              <span className="mt-3 inline-block text-sm font-semibold text-accent">Open →</span>
            </Link>
          ))}
        </div>
      </section>

      <div className="mt-10"><Disclaimer /></div>
    </SiteLayout>
  );
}
