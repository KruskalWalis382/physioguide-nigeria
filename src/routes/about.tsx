
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, Disclaimer } from "@/components/SiteLayout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Explore Physiotherapy in Nigeria — PhysioGuide Nigeria" },
      {
        name: "description",
        content:
          "Discover what physiotherapists do, conditions they help manage, where they work, and how to pursue physiotherapy in Nigeria.",
      },
    ],
  }),
  component: AboutPage,
});

const areas = [
  {
    title: "Musculoskeletal health",
    description:
      "Helping people manage problems affecting muscles, bones, joints, and movement, including back pain, osteoarthritis, and injuries.",
  },
  {
    title: "Neurological rehabilitation",
    description:
      "Supporting people living with conditions such as stroke, spinal cord injury, and other neurological disorders to improve movement and function.",
  },
  {
    title: "Paediatric physiotherapy",
    description:
      "Supporting children's movement, development, participation, and functional abilities.",
  },
  {
    title: "Cardiorespiratory care",
    description:
      "Helping people manage breathing, exercise tolerance, and physical recovery in appropriate clinical settings.",
  },
  {
    title: "Sports and exercise rehabilitation",
    description:
      "Helping people recover from injuries, rebuild physical capacity, and return safely to their activities.",
  },
  {
    title: "Older adult rehabilitation",
    description:
      "Supporting mobility, balance, strength, independence, and physical function as people age.",
  },
];

function AboutPage() {
  return (
    <SiteLayout>
      <article className="space-y-10">
        <header className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Explore the profession
          </p>
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
            Understanding physiotherapy
          </h1>
          <p className="text-lg leading-8 text-muted-foreground">
            Physiotherapy helps people develop, maintain, and restore movement
            and functional ability throughout life. It combines clinical
            assessment, movement, exercise, education, and other appropriate
            interventions to support health and participation in everyday life.
          </p>
        </header>

        <section className="card space-y-3">
          <h2 className="text-2xl font-bold">What do physiotherapists do?</h2>
          <p className="leading-7">
            Physiotherapists assess movement and physical function, identify
            problems that may benefit from physiotherapy, develop individualised
            rehabilitation plans, monitor progress, and educate people about
            their health.
          </p>
          <p className="leading-7">
            Their work may involve exercise prescription, functional training,
            manual techniques where appropriate, mobility support, prevention
            strategies, and collaboration with other healthcare professionals.
          </p>
        </section>

        <section className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">
              Areas of physiotherapy practice
            </h2>
            <p className="leading-7 text-muted-foreground">
              Physiotherapists work with people of different ages and needs.
              These are examples of practice areas, not separate limits on
              professional scope.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {areas.map((area) => (
              <section key={area.title} className="card space-y-2">
                <h3 className="text-lg font-bold">{area.title}</h3>
                <p className="text-sm leading-6 text-muted-foreground">
                  {area.description}
                </p>
              </section>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">
            Where can physiotherapists work?
          </h2>
          <ul className="list-disc space-y-2 pl-5 leading-7">
            <li>Teaching and specialist hospitals</li>
            <li>General hospitals and rehabilitation centres</li>
            <li>Private physiotherapy clinics</li>
            <li>Sports organisations and fitness settings</li>
            <li>Community health and home-based care</li>
            <li>Universities, research, and health education</li>
            <li>Occupational health and other appropriate clinical settings</li>
          </ul>
        </section>

        <section className="card space-y-4">
          <h2 className="text-2xl font-bold">
            Interested in studying physiotherapy in Nigeria?
          </h2>
          <p className="leading-7">
            Start by researching accredited university programmes, current
            admission requirements, and the professional registration process.
            Requirements can change, so confirm them with the relevant
            university and the appropriate Nigerian regulatory body before
            making an application.
          </p>
          <p className="leading-7">
            Physiotherapy training requires academic study, practical clinical
            education, and the development of professional skills. A genuine
            interest in movement, rehabilitation, science, communication, and
            helping people can provide a useful starting point.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold">Is physiotherapy right for you?</h2>
          <p className="leading-7">
            Consider whether you enjoy understanding how the human body works,
            solving practical problems, communicating with people, and
            supporting gradual improvements in function. The profession also
            requires patience, ethical practice, continued learning, and respect
            for each person's circumstances.
          </p>
        </section>

        <section className="rounded-xl border bg-card p-5 space-y-4">
          <h2 className="text-xl font-bold">Continue exploring</h2>
          <p className="leading-7 text-muted-foreground">
            Explore common conditions and learn how physiotherapy knowledge
            can help you better understand movement and health.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              to="/guides/$slug"
              params={{ slug: "low-back-pain" }}
              className="btn btn-primary"
            >
              Explore health guides
            </Link>
            <Link to="/checker" className="btn btn-outline">
              Visit the safety checker
            </Link>
            <Link to="/" className="btn btn-outline">
              Back to homepage
            </Link>
          </div>
        </section>

        <Disclaimer />
      </article>
    </SiteLayout>
  );
}
