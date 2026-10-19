import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout, Disclaimer } from "@/components/SiteLayout";
import { getGuide } from "@/lib/guides";

export const Route = createFileRoute("/guides/$slug")({
  loader: ({ params }) => {
    const guide = getGuide(params.slug);
    if (!guide) throw notFound();
    return guide;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} guide — PhysioGuide Nigeria` },
          { name: "description", content: loaderData.short },
          { property: "og:title", content: `${loaderData.title} guide — PhysioGuide Nigeria` },
          { property: "og:description", content: loaderData.short },
          { property: "og:type", content: "article" },
          { name: "twitter:card", content: "summary" },
        ]
      : [{ title: "Guide not found — PhysioGuide Nigeria" }, { name: "robots", content: "noindex" }],
  }),
  component: GuidePage,
  notFoundComponent: () => (
    <SiteLayout>
      <h1 className="text-2xl">Guide not found</h1>
      <Link to="/" className="btn btn-primary mt-4">Back to home</Link>
    </SiteLayout>
  ),
});

function List({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5">
      {items.map((i) => <li key={i}>{i}</li>)}
    </ul>
  );
}

function GuidePage() {
  const g = Route.useLoaderData();
  return (
    <SiteLayout>
      <article className="space-y-6">
        <h1 className="text-3xl">{g.title}</h1>
        <p>{g.intro}</p>
        <section className="card space-y-3">
          <h2 className="text-xl">Common reasons</h2>
          <p className="text-sm text-muted-foreground">These are general possibilities, not an explanation of your own pain.</p>
          <List items={g.causes} />
        </section>
        <section className="card space-y-3">
          <h2 className="text-xl">General self-care that often helps</h2>
          <List items={g.advice} />
          <p className="text-sm text-muted-foreground">If any of this makes your pain clearly worse, stop and seek advice.</p>
        </section>
        <section className="card space-y-3 border-warning bg-warning-soft">
          <h2 className="text-xl">Book a professional assessment if</h2>
          <List items={g.seeHelp} />
        </section>
        <section className="card space-y-3 border-2 border-destructive bg-danger-soft">
          <h2 className="text-xl text-destructive">Get urgent medical help if</h2>
          <List items={g.urgent} />
          <p className="font-semibold">Go to the nearest hospital emergency department straight away.</p>
        </section>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link to="/checker" className="btn btn-accent">Use the safety checker</Link>
          <Link to="/movement" className="btn btn-outline">Gentle movement ideas</Link>
        </div>
        <Disclaimer />
      </article>
    </SiteLayout>
  );
}
