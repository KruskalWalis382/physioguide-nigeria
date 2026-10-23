
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, Disclaimer } from "@/components/SiteLayout";

export const Route = createFileRoute("/learning")({
  head: () => ({
    meta: [
      { title: "Learn Physiotherapy — PhysioGuide Nigeria" },
      {
        name: "description",
        content:
          "Explore physiotherapy anatomy, biomechanics, assessment, clinical reasoning, rehabilitation, and evidence-informed practice.",
      },
    ],
  }),
  component: LearningPage,
});

const topics = [
  {
    number: "01",
    title: "Anatomy and biomechanics",
    description:
      "Understand body structures, joint function, movement, muscle actions, and the biomechanics behind everyday activities.",
    points: [
      "Musculoskeletal anatomy",
      "Joint movements and muscle function",
      "Normal movement and common dysfunctions",
    ],
  },
  {
    number: "02",
    title: "Physiotherapy assessment",
    description:
      "Develop a structured approach to collecting relevant information and examining a person's physical function.",
    points: [
      "Subjective history and symptom analysis",
      "Inspection, palpation, movement, and power",
      "Selecting appropriate special tests",
    ],
  },
  {
    number: "03",
    title: "Clinical reasoning",
    description:
      "Learn to interpret assessment findings, identify impairments, recognise warning signs, and set meaningful rehabilitation goals.",
    points: [
      "Connecting findings with functional problems",
      "Recognising when referral is needed",
      "Setting measurable, person-centred goals",
    ],
  },
  {
    number: "04",
    title: "Rehabilitation and exercise",
    description:
      "Explore how rehabilitation is planned, progressed, and adapted to individual goals, capacity, and clinical presentation.",
    points: [
      "Exercise selection and dosage",
      "Mobility, strength, balance, and function",
      "Monitoring response and progress",
    ],
  },
  {
    number: "05",
    title: "Evidence-informed practice",
    description:
      "Build the habit of using credible research, clinical guidance, professional expertise, and patient preferences together.",
    points: [
      "Finding reliable clinical guidelines",
      "Understanding research evidence",
      "Applying evidence to individual circumstances",
    ],
  },
  {
    number: "06",
    title: "Professional practice",
    description:
      "Strengthen the professional habits needed for safe, respectful, and effective physiotherapy care.",
    points: [
      "Communication and patient education",
      "Documentation and confidentiality",
      "Ethics, teamwork, and continuing development",
    ],
  },
];

function LearningPage() {
  return (
    <SiteLayout>
      <article className="space-y-10">
        <header className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Professional learning
          </p>
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
            Build your physiotherapy knowledge
          </h1>
          <p className="text-lg leading-8 text-muted-foreground">
            A learning hub for physiotherapy students, interns, and young
            professionals who want to understand the human body, assess movement,
            reason through clinical problems, and support safe rehabilitation.
          </p>
          <p className="leading-7">
            Start with the fundamentals, connect theory to clinical practice,
            and keep developing your knowledge through reliable evidence and
            reflective learning.
          </p>
        </header>

        <section className="rounded-xl border bg-card p-5 space-y-3">
          <h2 className="text-xl font-bold">How to use this learning hub</h2>
          <ol className="list-decimal space-y-2 pl-5 leading-7">
            <li>Build a foundation in anatomy and normal movement.</li>
            <li>Learn how to collect and organise assessment findings.</li>
            <li>Practise connecting impairments with functional limitations.</li>
            <li>Explore rehabilitation principles and progress monitoring.</li>
            <li>Use current evidence and clinical supervision to guide practice.</li>
          </ol>
        </section>

        <section className="space-y-5">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">Explore learning areas</h2>
            <p className="leading-7 text-muted-foreground">
              These topic areas provide a foundation for structured learning.
              More detailed lessons and case-based resources can be added as the
              platform develops.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {topics.map((topic) => (
              <section
                key={topic.number}
                className="card flex h-full flex-col gap-3 border-t-4 border-t-accent"
              >
                <span className="text-sm font-bold tracking-widest text-accent">
                  {topic.number}
                </span>
                <h3 className="text-xl font-bold">{topic.title}</h3>
                <p className="text-sm leading-6 text-muted-foreground">
                  {topic.description}
                </p>
                <ul className="list-disc space-y-2 pl-5 text-sm leading-6">
                  {topic.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Connect learning to practice</h2>
          <p className="leading-7 text-muted-foreground">
            Use the existing PhysioGuide resources to explore condition
            information and practise thinking about movement, safety, and
            rehabilitation. These resources support learning; they do not
            replace clinical supervision or individual assessment.
          </p>

          <div className="grid gap-3 sm:grid-cols-2">
            <Link
              to="/guides/$slug"
              params={{ slug: "low-back-pain" }}
              className="card transition-shadow hover:shadow-md"
            >
              <h3 className="font-bold">Condition guides</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Explore anatomy, risk factors, assessment, and rehabilitation
                information for common conditions.
              </p>
              <span className="mt-3 inline-block text-sm font-semibold text-accent">
                Read a guide →
              </span>
            </Link>

            <Link
              to="/movement"
              className="card transition-shadow hover:shadow-md"
            >
              <h3 className="font-bold">Movement resources</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Explore general movement information and safety considerations.
              </p>
              <span className="mt-3 inline-block text-sm font-semibold text-accent">
                Explore movement →
              </span>
            </Link>

            <Link
              to="/checker"
              className="card transition-shadow hover:shadow-md"
            >
              <h3 className="font-bold">Safety checker</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Review warning signs and understand when further medical
                assessment may be needed.
              </p>
              <span className="mt-3 inline-block text-sm font-semibold text-accent">
                Review safety information →
              </span>
            </Link>

            <Link
              to="/"
              className="card transition-shadow hover:shadow-md"
            >
              <h3 className="font-bold">PhysioGuide homepage</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Return to the main hub to explore the full range of resources.
              </p>
              <span className="mt-3 inline-block text-sm font-semibold text-accent">
                Back to home →
              </span>
            </Link>
          </div>
        </section>

        <section className="rounded-xl border bg-card p-5 space-y-3">
          <h2 className="text-xl font-bold">A note on clinical practice</h2>
          <p className="leading-7 text-muted-foreground">
            Educational material should be interpreted in context. Clinical
            decisions must consider the individual, current evidence, relevant
            professional guidance, and the scope of practice. Seek appropriate
            supervision when a case is beyond your competence.
          </p>
        </section>

        <Disclaimer />
      </article>
    </SiteLayout>
  );
                }

