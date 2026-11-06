
import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { regions, slugifyRegionName } from "@/lib/conditions";
import { SiteLayout, Disclaimer } from "@/components/SiteLayout";



export const Route = createFileRoute("/conditions")({
  head: () => ({ meta: [
    { title: "Explore Conditions — PhysioGuide Nigeria" },
    { name: "description", content: "Explore muscle, joint and movement conditions by body region." },
    { property: "og:title", content: "Explore Conditions — PhysioGuide Nigeria" },
    { property: "og:description", content: "Search the educational condition library by body region or condition." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ] }),
  component: ConditionsPage,
});

function ConditionsPage() {
  const [search, setSearch] = useState("");


  const filteredRegions = regions
    .map((region) => ({
      ...region,
      conditions: region.conditions.filter((condition) =>
        `${condition} ${region.name}`
          .toLowerCase()
          .includes(search.trim().toLowerCase())
      ),
    }))
    .filter(
      (region) =>
        region.conditions.length > 0 ||
        region.name.toLowerCase().includes(search.trim().toLowerCase())
    );

  return (
    <SiteLayout>
      <main className="mx-auto max-w-7xl space-y-10 px-4 py-10 sm:px-6 lg:px-8">
        <section className="relative overflow-hidden rounded-3xl bg-slate-950 px-6 py-10 text-white sm:px-10 sm:py-14">
          <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-teal-400/10 blur-3xl" />
          <div className="relative max-w-3xl space-y-5">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-300">
              PhysioGuide Nigeria
            </p>
            <h1 className="text-3xl font-extrabold leading-tight sm:text-5xl">
              Understand your condition. Understand your movement.
            </h1>
            <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              Explore common health conditions by body region. Learn about
              anatomy, causes, symptoms, assessment, rehabilitation and when
              to seek professional care.
            </p>
            <div className="flex flex-wrap gap-3 pt-2 text-sm font-medium">
              <span className="rounded-full border border-white/20 px-4 py-2">
                10 body regions
              </span>
              
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Explore by body region
            </h2>
            <p className="max-w-3xl leading-7 text-muted-foreground">
              Choose a region to discover the conditions associated with it.
              Use the search box to find a specific condition.
            </p>
          </div>

          <label htmlFor="condition-search" className="sr-only">
            Search conditions or body regions
          </label>
          <input
            id="condition-search"
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search conditions or body regions..."
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-base outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20"
          />
        </section>

       
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
  {filteredRegions.map((region) => (
    <Link
      key={region.name}
      to="/conditions/$region"
      params={{ region: slugifyRegionName(region.name) }}
      className="group flex min-h-52 flex-col rounded-2xl border border-border bg-card p-5 text-left transition duration-200 hover:-translate-y-1 hover:border-teal-600/50 hover:shadow-lg"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-600/10 text-2xl text-teal-700">
        {region.icon}
      </div>

      <div className="mt-5 flex-1">
        <h3 className="text-lg font-bold group-hover:text-teal-700">
          {region.name}
        </h3>

        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          {region.description}
        </p>
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
        <span className="text-sm font-semibold text-teal-700">
          Explore region
        </span>
        <span className="text-teal-700" aria-hidden="true">→</span>
      </div>
    </Link>
  ))}
</section>
        
        {filteredRegions.length === 0 && (
          <div className="rounded-2xl border border-dashed border-border px-6 py-12 text-center">
            <h3 className="text-lg font-bold">No matching conditions found</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Try another condition name or body region.
            </p>
          </div>
        )}

        <section className="rounded-2xl border border-border p-5 sm:p-7">
          <h2 className="text-xl font-bold">How to use this library</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            <div>
              <h3 className="font-semibold">For the public</h3>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                Understand common symptoms and learn when to seek qualified
                healthcare advice.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">For students</h3>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                Build knowledge of anatomy, mechanisms, clinical features and
                rehabilitation principles.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">For clinicians</h3>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                Use condition guides as learning resources alongside current
                clinical guidelines and professional judgement.
              </p>
            </div>
          </div>
        </section>

        <p className="text-sm leading-6 text-muted-foreground">
          This educational library does not replace an individual assessment
          by a qualified healthcare professional. Seek urgent medical care
          for severe or rapidly worsening symptoms.
        </p>

        <Disclaimer />
      </main>
    </SiteLayout>
  );
    }
      
