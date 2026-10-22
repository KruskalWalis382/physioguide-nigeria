
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, Disclaimer } from "@/components/SiteLayout";
import { guides } from "@/lib/guides";
import { Picture } from "@/components/Picture";
import hero from "@/assets/hero-physio.jpg";
import back from "@/assets/guide-back.jpg";
import knee from "@/assets/guide-knee.jpg";
import neck from "@/assets/guide-neck.jpg";
import workoutImg from "@/assets/workout-hero.jpg";
import deskImg from "@/assets/ergo-desk.jpg";

const guideImg: Record<string, string> = {
  "low-back-pain": back,
  "knee-pain": knee,
  "neck-pain": neck,
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PhysioGuide Nigeria — Explore, Learn and Understand Health" },
      {
        name: "description",
        content:
          "Discover physiotherapy careers, build clinical knowledge, and explore evidence-informed health education for Nigerians.",
      },
      { property: "og:title", content: "PhysioGuide Nigeria" },
      {
        property: "og:description",
        content:
          "One platform connecting physiotherapy career discovery, clinical learning, and public health education.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

const pathways = [
  {
    number: "01",
    eyebrow: "CAREER DISCOVERY",
    title: "Explore Physiotherapy",
    description:
      "Discover what physiotherapists do, where they work, and the opportunities the profession offers in Nigeria.",
    action: "Discover the profession",
    href: "/about" as const,
    style: "border-t-4 border-t-primary",
  },
  {
    number: "02",
    eyebrow: "PROFESSIONAL LEARNING",
    title: "Learn Physiotherapy",
    description:
      "Build your understanding of anatomy, movement, clinical assessment, rehabilitation, and evidence-informed practice.",
    action: "Explore clinical topics",
    href: "/guides/$slug" as const,
    params: { slug: "low-back-pain" },
    style: "border-t-4 border-t-accent",
  },
  {
    number: "03",
    eyebrow: "PUBLIC HEALTH EDUCATION",
    title: "Conditions & Health",
    description:
      "Understand common muscle and joint conditions, explore general self-care, and learn when to seek professional help.",
    action: "Explore health guides",
    href: "/guides/$slug" as const,
    params: { slug: "low-back-pain" },
    style: "border-t-4 border-t-primary",
  },
];

const extra = [
  {
    to: "/checker",
    title: "Safety checker",
    short: "Review warning signs and understand when to seek medical care.",
  },
  {
    to: "/movement",
    title: "Gentle movement",
    short: "Explore simple movement ideas and learn when to stop.",
  },
  {
    to: "/workout",
    title: "Home workout planner",
    short: "Build a weekly activity plan based on your selected preferences.",
  },
  {
    to: "/posture",
    title: "Everyday habits",
    short: "Explore desk habits, phone use, lifting, sleep, and daily activity.",
  },
  {
    to: "/faq",
    title: "Questions",
    short: "Find answers to common questions about pain and physiotherapy.",
  },
] as const;

function Index() {
  return (
    <SiteLayout>
      <section className="grid items-center gap-6 sm:gap-8 md:grid-cols-2">
        <div className="space-y-5">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Physiotherapy knowledge for everyone
          </p>

          <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Discover physiotherapy. Build knowledge. Understand your health.
          </h1>

          <p className="text-base leading-7 text-muted-foreground">
            Whether you are considering a career in physiotherapy, studying the
            profession, or looking for reliable health information, start here.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href="#pathways" className="btn btn-accent text-center">
              Find your pathway
            </a>
            <Link
              to="/checker"
              className="btn btn-outline text-center"
            >
              Visit the safety checker
            </Link>
          </div>

          <p className="text-sm text-muted-foreground">
            Clear explanations. Evidence-informed learning. A Nigerian
            perspective.
          </p>
        </div>

        <Picture
          src={hero}
          alt="A physiotherapist helping a patient with a knee exercise"
          priority
          className="w-full rounded-xl"
        />
      </section>

      <section id="pathways" className="mt-14 space-y-5 scroll-mt-6">
        <div className="max-w-2xl space-y-2">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Start here
          </p>
          <h2 className="text-2xl font-bold sm:text-3xl">
            One platform. Three pathways.
          </h2>
          <p className="text-muted-foreground leading-7">
            Find information that matches your interests, whether you are
            exploring the profession, developing your clinical knowledge, or
            learning about your health.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {pathways.map((pathway) => (
            <article
              key={pathway.number}
              className={`card flex h-full flex-col gap-3 p-5 transition-shadow hover:shadow-md ${pathway.style}`}
            >
              <span className="text-sm font-bold tracking-widest text-accent">
                {pathway.number}
              </span>

              <p className="text-xs font-semibold tracking-wide text-muted-foreground">
                {pathway.eyebrow}
              </p>

              <h3 className="text-xl font-bold">{pathway.title}</h3>

              <p className="flex-1 text-sm leading-6 text-muted-foreground">
                {pathway.description}
              </p>

              {pathway.href === "/about" ? (
                <Link
                  to={pathway.href}
                  className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-accent"
                >
                  {pathway.action} <span aria-hidden="true">→</span>
                </Link>
              ) : (
                <Link
                  to={pathway.href}
                  params={pathway.params}
                  className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-accent"
                >
                  {pathway.action} <span aria-hidden="true">→</span>
                </Link>
              )}
            </article>
          ))}
        </div>
      </section>

      <section id="health-guides" className="mt-14 space-y-5 scroll-mt-6">
        <div className="max-w-2xl space-y-2">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Conditions & health
          </p>
          <h2 className="text-2xl font-bold sm:text-3xl">
            Understand common conditions
          </h2>
          <p className="leading-7 text-muted-foreground">
            Explore clear explanations of common muscle and joint problems,
            including possible causes, relevant anatomy, risk factors, and
            evidence-informed rehabilitation.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              to="/guides/$slug"
              params={{ slug: guide.slug }}
              className="card block overflow-hidden p-0 transition-shadow hover:shadow-md"
            >
              <Picture
                src={guideImg[guide.slug] ?? hero}
                alt={`Illustration for ${guide.title}`}
                className="w-full"
              />
              <div className="space-y-2 p-4">
                <h3 className="text-lg font-bold">{guide.title}</h3>
                <p className="text-sm leading-6 text-muted-foreground">
                  {guide.short}
                </p>
                <span className="inline-block pt-1 text-sm font-semibold text-accent">
                  Read guide <span aria-hidden="true">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="tools" className="mt-14 space-y-5 scroll-mt-6">
        <div className="max-w-2xl space-y-2">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Practical resources
          </p>
          <h2 className="text-2xl font-bold sm:text-3xl">
            Learn, move, and make informed decisions
          </h2>
          <p className="leading-7 text-muted-foreground">
            Explore the tools and educational resources already available on
            PhysioGuide Nigeria.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Picture
            src={workoutImg}
            alt="Woman exercising at home"
            className="w-full rounded-lg"
          />
          <Picture
            src={deskImg}
            alt="Person working at a desk"
            className="w-full rounded-lg"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {extra.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="card block transition-shadow hover:shadow-md"
            >
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {item.short}
              </p>
              <span className="mt-3 inline-block text-sm font-semibold text-accent">
                Explore resource <span aria-hidden="true">→</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-14 rounded-xl border bg-card p-5 sm:p-7">
        <h2 className="text-xl font-bold">
          Health information should help you make informed decisions.
        </h2>
        <p className="mt-3 leading-7 text-muted-foreground">
          PhysioGuide Nigeria provides educational information, not a personal
          diagnosis or a substitute for assessment by a qualified health
          professional. Seek appropriate medical care when symptoms are
          concerning or urgent.
        </p>
        <div className="mt-5">
          <Link to="/checker" className="btn btn-accent">
            Review warning signs
          </Link>
        </div>
      </section>

      <div className="mt-10">
        <Disclaimer />
      </div>
    </SiteLayout>
  );
}
