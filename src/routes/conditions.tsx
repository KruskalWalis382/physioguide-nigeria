
import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout, Disclaimer } from "@/components/SiteLayout";

const regions = [
  {
    name: "Neck and Cervical Spine",
    icon: "◉",
    description: "Conditions affecting the neck, cervical vertebrae, nerves and surrounding tissues.",
    conditions: [
      "Neck pain and cervical strain",
      "Cervical radiculopathy",
      "Cervical spondylosis",
      "Whiplash-associated disorders",
      "Cervicogenic headache",
    ],
  },
  {
    name: "Back and Spine",
    icon: "↕",
    description: "Explore spinal conditions, back pain and disorders affecting spinal nerves.",
    conditions: [
      "Non-specific low back pain",
      "Lumbar radiculopathy (sciatica)",
      "Lumbar spinal stenosis",
      "Lumbar disc herniation",
      "Spondylolisthesis",
    ],
  },
  {
    name: "Shoulder",
    icon: "◎",
    description: "Conditions affecting shoulder movement, stability, tendons and joints.",
    conditions: [
      "Rotator cuff-related shoulder pain",
      "Adhesive capsulitis (frozen shoulder)",
      "Shoulder osteoarthritis",
      "Shoulder dislocation",
      "Acromioclavicular joint injuries",
    ],
  },
  {
    name: "Elbow, Wrist and Hand",
    icon: "◇",
    description: "Learn about upper-limb pain, tendon problems, nerve compression and injuries.",
    conditions: [
      "Lateral elbow tendinopathy",
      "Medial elbow tendinopathy",
      "Carpal tunnel syndrome",
      "De Quervain's tenosynovitis",
      "Wrist and hand fractures",
    ],
  },
  {
    name: "Hip and Pelvis",
    icon: "◎",
    description: "Conditions affecting hip joints, pelvic regions and everyday mobility.",
    conditions: [
      "Hip osteoarthritis",
      "Greater trochanteric pain syndrome",
      "Hip fractures",
      "Femoroacetabular impingement",
      "Sacroiliac-region pain",
    ],
  },
  {
    name: "Knee",
    icon: "◉",
    description: "Explore knee pain, joint conditions, ligament injuries and rehabilitation.",
    conditions: [
      "Knee osteoarthritis",
      "Patellofemoral pain",
      "Anterior cruciate ligament injury",
      "Meniscal injury",
      "Patellar tendinopathy",
    ],
  },
  {
    name: "Ankle and Foot",
    icon: "◇",
    description: "Understand conditions affecting walking, balance, the ankle and foot.",
    conditions: [
      "Lateral ankle sprain",
      "Achilles tendinopathy",
      "Plantar heel pain",
      "Plantar fasciopathy",
      "Ankle fractures",
    ],
  },
  {
    name: "Neurological Conditions",
    icon: "⌁",
    description: "Learn how neurological conditions can affect movement, balance and function.",
    conditions: [
      "Stroke and post-stroke disability",
      "Cerebral palsy",
      "Parkinson's disease",
      "Multiple sclerosis",
      "Peripheral nerve injuries",
    ],
  },
  {
    name: "Chest and Respiratory",
    icon: "♡",
    description: "Conditions where respiratory physiotherapy and rehabilitation may help.",
    conditions: [
      "Chronic obstructive pulmonary disease",
      "Asthma and exercise limitations",
      "Pneumonia recovery",
      "Bronchiectasis",
      "Postoperative respiratory complications",
    ],
  },
  {
    name: "Paediatric and Other Conditions",
    icon: "✳",
    description: "Explore childhood movement conditions and other important rehabilitation needs.",
    conditions: [
      "Developmental dysplasia of the hip",
      "Clubfoot",
      "Developmental motor delay",
      "Idiopathic scoliosis",
      "Osteoporosis and fragility fractures",
    ],
  },
];

export const Route = createFileRoute("/conditions")({
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
              <span className="rounded-full border border-white/20 px-4 py-2">
                50 conditions to explore
              </span>
              <span className="rounded-full border border-white/20 px-4 py-2">
                Evidence-informed learning
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

          <p className="text-sm text-muted-foreground" aria-live="polite">
            {filteredRegions.reduce(
              (total, region) => total + region.conditions.length,
              0
            )}{" "}
            matching conditions across {filteredRegions.length} regions
          </p>
        </section>

        <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {filteredRegions.map((region, index) => (
            <article
              key={region.name}
              className="group flex flex-col rounded-2xl border border-border bg-card p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-teal-600/50 hover:shadow-lg"
            >
              <div className="mb-4 flex items-start justify-between gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-600/10 text-2xl text-teal-700">
                  {region.icon}
                </span>
                <span className="rounded-full bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="text-xl font-bold">{region.name}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {region.description}
              </p>

              <div className="my-5 h-px bg-border" />

              <h4 className="mb-3 text-sm font-bold uppercase tracking-wide">
                Conditions in this region
              </h4>

              <ul className="space-y-3">
                {region.conditions.map((condition) => (
                  <li key={condition} className="flex gap-2 text-sm leading-5">
                    <span className="mt-0.5 text-teal-600">•</span>
                    <span>{condition}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-5">
                <p className="rounded-lg bg-muted/60 px-3 py-2 text-xs leading-5 text-muted-foreground">
                  Detailed condition guides are being developed and reviewed.
                </p>
              </div>
            </article>
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
      
