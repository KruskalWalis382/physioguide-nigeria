import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout, Disclaimer } from "@/components/SiteLayout";
import { regions } from "@/lib/conditions";
import { neckGuideLinks } from "@/lib/clinical-guide";

export const Route = createFileRoute("/conditions/$region")({
  head: () => ({ meta: [
    { title: "Conditions by Body Region — PhysioGuide Nigeria" },
    { name: "description", content: "Explore conditions within a body region and open their educational guides." },
    { property: "og:title", content: "Conditions by Body Region — PhysioGuide Nigeria" },
    { property: "og:description", content: "Explore conditions within a body region and open their educational guides." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ] }),
  component: RegionPage,
});

function RegionPage() {
  const { region: regionSlug } = Route.useParams();

  const region = regions.find((item) =>
    item.name
      .toLowerCase()
      .replace(/&/g, "and")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "") === regionSlug
  );

  if (!region) {
    throw notFound();
  }

  return (
    <SiteLayout>
      <main className="mx-auto max-w-7xl space-y-8 px-4 py-10 sm:px-6 lg:px-8">
        <Link
          to="/conditions"
          className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:underline"
        >
          ← Back to Explore Conditions
        </Link>

        <section className="rounded-3xl bg-slate-950 px-6 py-10 text-white sm:px-10">
          <p className="text-sm font-bold uppercase tracking-widest text-teal-300">
            Explore by body region
          </p>

          <h1 className="mt-4 text-3xl font-extrabold sm:text-5xl">
            {region.name}
          </h1>

          <p className="mt-4 max-w-2xl leading-7 text-slate-300">
            {region.description}
          </p>
        </section>

        <section className="space-y-5">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">
              Conditions in this region
            </h2>
            <p className="mt-2 text-muted-foreground">
              Select a condition to explore its clinical learning guide.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {region.conditions.map((condition) => (
              <div
                key={condition}
                className="flex items-center justify-between gap-3 rounded-xl border border-border bg-card p-5"
              >
                <span className="font-medium">{condition}</span>

                {condition === "Neck pain and cervical strain" &&
                region.name === "Neck and Cervical Spine" ? (
                  <Link
                    to="/conditions/neck-pain"
                    className="shrink-0 text-sm font-semibold text-teal-700 hover:underline"
                  >
                    Read guide →
                  </Link>
                ) : (
                  <span className="shrink-0 text-xs text-muted-foreground">
                    Guide coming soon
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>

        <Disclaimer />
      </main>
    </SiteLayout>
  );
}
