import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, Disclaimer } from "@/components/SiteLayout";

export const Route = createFileRoute("/conditions/neck-pain")({
  component: NeckPainPage,
});

const sections = [
  { id: "anatomy", label: "Relevant anatomy" },
  { id: "causes", label: "Causes and risk factors" },
  { id: "mechanism", label: "Pathophysiology" },
  { id: "features", label: "Clinical features" },
  { id: "assessment", label: "Assessment" },
  { id: "management", label: "Physiotherapy management" },
  { id: "safety", label: "Red flags and referral" },
  { id: "recovery", label: "Recovery and prevention" },
  { id: "references", label: "References" },
];

function AnatomyDiagram() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-white p-4 text-slate-900">
      <svg
        viewBox="0 0 620 390"
        role="img"
        aria-labelledby="neck-diagram-title neck-diagram-description"
        className="mx-auto block w-full max-w-2xl"
      >
        <title id="neck-diagram-title">
          Schematic of the cervical spine
        </title>
        <desc id="neck-diagram-description">
          Simplified educational view of the cervical vertebrae,
          intervertebral discs and nerve roots.
        </desc>

        <rect width="620" height="390" rx="16" fill="#F8FAFC" />

        <text x="28" y="32" fontSize="13" fill="#475569" fontWeight="600">
          CERVICAL SPINE · SIDE VIEW
        </text>

        <path
          d="M245 65 C220 100 220 145 237 178 C246 199 244 231 235 260 C230 281 242 309 264 328"
          fill="none"
          stroke="#CBD5E1"
          strokeWidth="30"
          strokeLinecap="round"
        />

        <path
          d="M266 64 C247 104 249 143 263 177 C273 205 269 232 263 259 C259 283 269 307 284 326"
          fill="none"
          stroke="#F1F5F9"
          strokeWidth="17"
          strokeLinecap="round"
        />

        {Array.from({ length: 7 }, (_, i) => {
          const y = 69 + i * 37;
          const x = 268 + Math.sin(i * 0.45) * 7;

          return (
            <g key={i}>
              <path
                d={`M${x - 16} ${y} Q${x - 23} ${y - 5} ${x - 17} ${y - 11} L${x + 12} ${y - 11} Q${x + 23} ${y - 5} ${x + 18} ${y + 2} L${x + 12} ${y + 10} L${x - 12} ${y + 10} Z`}
                fill="#CBD5E1"
                stroke="#64748B"
                strokeWidth="1.5"
              />
              <rect
                x={x - 13}
                y={y + 11}
                width="27"
                height="5"
                rx="2"
                fill="#0D9488"
              />
              <path
                d={`M${x - 18} ${y + 1} L${x - 37} ${y + 8} L${x - 43} ${y + 3}`}
                fill="none"
                stroke="#D97706"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <text x={x + 31} y={y + 4} fontSize="11" fill="#334155">
                {`C${i + 1}`}
              </text>
            </g>
          );
        })}

        <path
          d="M258 55 C245 95 245 145 258 181 C269 214 261 253 260 289 C260 303 267 315 276 328"
          fill="none"
          stroke="#64748B"
          strokeWidth="3"
          strokeDasharray="4 4"
        />

        <g fill="#0F766E" fontSize="13" fontWeight="600">
          <text x="365" y="89">Vertebral body</text>
          <text x="365" y="101" fontSize="10" fill="#64748B" fontWeight="400">
            Supports and bears load
          </text>
          <path d="M354 94 L310 94" stroke="#0F766E" strokeWidth="1.5" />

          <text x="365" y="151">Intervertebral disc</text>
          <text x="365" y="163" fontSize="10" fill="#64748B" fontWeight="400">
            Helps distribute load
          </text>
          <path d="M354 155 L311 155" stroke="#0F766E" strokeWidth="1.5" />

          <text x="365" y="224">Nerve roots</text>
          <text x="365" y="236" fontSize="10" fill="#64748B" fontWeight="400">
            Carry sensory and motor signals
          </text>
          <path d="M354 225 L231 225" stroke="#D97706" strokeWidth="1.5" />
        </g>

        <text x="28" y="365" fontSize="10" fill="#64748B">
          Simplified educational schematic — not to scale.
        </text>
      </svg>

      <p className="mt-2 text-sm leading-6 text-slate-600">
        The cervical spine contains seven vertebrae (C1–C7).
        Discs, joints, ligaments, muscles and nerves work together
        to support the head and permit movement.
      </p>
    </div>
  );
}

function NeckPainPage() {
  return (
    <SiteLayout>
      <main className="mx-auto max-w-7xl space-y-10 px-4 py-8 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
          <Link to="/" className="underline underline-offset-4">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link to="/conditions" className="underline underline-offset-4">
            Clinical Conditions
          </Link>
          <span className="mx-2">/</span>
          <span aria-current="page">Neck Pain</span>
        </nav>

        <header className="relative overflow-hidden rounded-3xl bg-slate-950 px-6 py-10 text-white sm:px-10 sm:py-14">
          <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-teal-400/10 blur-3xl" />
          <div className="relative max-w-3xl space-y-5">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-300">
              Clinical Conditions · Neck and Cervical Spine
            </p>
            <h1 className="text-3xl font-extrabold leading-tight sm:text-5xl">
              Neck Pain and Cervical Strain
            </h1>
            <p className="text-lg leading-8 text-slate-300">
              Understand the structures of the neck, why pain develops,
              how clinicians assess it, and how appropriate rehabilitation
              can help restore movement and function.
            </p>
            <div className="flex flex-wrap gap-2 text-sm">
              <span className="rounded-full border border-white/20 px-3 py-2">
                Anatomy
              </span>
              <span className="rounded-full border border-white/20 px-3 py-2">
                Clinical assessment
              </span>
              <span className="rounded-full border border-white/20 px-3 py-2">
                Physiotherapy
              </span>
            </div>
          </div>
        </header>

        <div className="grid gap-8 lg:grid-cols-[240px_minmax(0,1fr)]">
          <aside className="h-fit rounded-2xl border border-border p-5 lg:sticky lg:top-24">
            <h2 className="font-bold">On this page</h2>
            <nav className="mt-4 space-y-3">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="block text-sm leading-5 text-muted-foreground transition hover:text-teal-700"
                >
                  {section.label}
                </a>
              ))}
            </nav>
          </aside>

          <article className="min-w-0 space-y-10">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold">1. Overview</h2>
              <p className="leading-7">
                Neck pain refers to pain or discomfort between the base
                of the skull and the upper thoracic region. It may occur
                with stiffness, reduced movement, headache or discomfort
                extending into the shoulder and upper back.
              </p>
              <p className="leading-7">
                Cervical strain describes injury or irritation involving
                muscle or tendon tissue in the neck. However, not all neck
                pain is a strain. Joint, nerve, inflammatory and other
                medical conditions can produce similar symptoms.
              </p>
              <div className="rounded-xl border-l-4 border-teal-600 bg-teal-600/5 p-4">
                <h3 className="font-bold">Important distinction</h3>
                <p className="mt-1 text-sm leading-6">
                  Neck pain is a symptom, not a diagnosis by itself.
                  History and examination help determine whether the
                  presentation is consistent with uncomplicated
                  musculoskeletal pain or requires further investigation.
                </p>
              </div>
            </section>

            <section id="anatomy" className="scroll-mt-24 space-y-4">
              <h2 className="text-2xl font-bold">
                2. Relevant anatomy and normal function
              </h2>
              <p className="leading-7">
                The cervical spine contains seven vertebrae, C1 to C7.
                The upper cervical region contributes substantially to
                head rotation and nodding, while the lower cervical
                region contributes to flexion, extension, rotation
                and side-bending.
              </p>

              <AnatomyDiagram />

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    title: "Vertebrae and joints",
                    text: "Provide structural support and guide movement. Facet joints contribute to movement and load distribution.",
                  },
                  {
                    title: "Intervertebral discs",
                    text: "Discs between most adjacent cervical vertebral bodies help distribute loads and permit movement. C1–C2 is an important exception.",
                  },
                  {
                    title: "Muscles and tendons",
                    text: "Support and move the head and neck. Cervical and shoulder-girdle muscles also contribute to endurance and postural control.",
                  },
                  {
                    title: "Nerves and spinal cord",
                    text: "Cervical nerve roots contribute to sensation and muscle function in the upper limb. The spinal cord carries signals between the brain and body.",
                  },
                ].map((item) => (
                  <div key={item.title} className="rounded-xl border border-border p-4">
                    <h3 className="font-bold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              <p className="text-sm leading-6 text-muted-foreground">
                This simplified schematic is educational and is not
                suitable for diagnosing a structural injury.
              </p>
            </section>

            
            <section id="causes" className="scroll-mt-24 space-y-5">
              <div className="space-y-2">
                <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                  03 · Causes and risk factors
                </p>
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  What can cause neck pain?
                </h2>
                <p className="leading-7 text-muted-foreground">
                  Neck pain may arise from muscles, joints, discs, nerves or
                  other structures. Several factors can contribute at the same
                  time. The presence of a risk factor does not automatically
                  mean that it is the cause of an individual’s pain.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border bg-card p-5">
                  <h3 className="mb-2 font-semibold">Muscle and joint strain</h3>
                  <p className="text-sm leading-6 text-muted-foreground">
                    Sudden unfamiliar activity, prolonged positioning, repeated
                    movements or a rapid increase in workload may irritate
                    muscles and other neck tissues.
                  </p>
                </div>
                <div className="rounded-2xl border bg-card p-5">
                  <h3 className="mb-2 font-semibold">Prolonged positioning</h3>
                  <p className="text-sm leading-6 text-muted-foreground">
                    Long periods reading, studying, using a phone or working
                    at a poorly arranged desk may contribute to discomfort,
                    particularly when breaks and movement are limited.
                  </p>
                </div>
                <div className="rounded-2xl border bg-card p-5">
                  <h3 className="mb-2 font-semibold">Stress and poor sleep</h3>
                  <p className="text-sm leading-6 text-muted-foreground">
                    Stress, fatigue and disrupted sleep can increase muscle
                    tension, sensitivity to pain and difficulty recovering.
                    These factors do not mean the pain is imaginary.
                  </p>
                </div>
                <div className="rounded-2xl border bg-card p-5">
                  <h3 className="mb-2 font-semibold">Injury or underlying conditions</h3>
                  <p className="text-sm leading-6 text-muted-foreground">
                    Falls, road traffic crashes, sports injuries, age-related
                    changes, nerve irritation and inflammatory or infectious
                    conditions may also cause neck symptoms.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-muted/40 p-5">
                <h3 className="mb-2 font-semibold">Common contributing factors</h3>
                <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-muted-foreground">
                  <li>Suddenly increasing exercise or physical workload.</li>
                  <li>Limited movement breaks during long periods of sitting.</li>
                  <li>Previous episodes of neck pain or injury.</li>
                  <li>Low physical activity or reduced tolerance for activity.</li>
                  <li>Work demands, psychological stress or poor sleep.</li>
                  <li>Ergonomic arrangements that make comfortable movement difficult.</li>
                </ul>
              </div>
            </section>

            <section id="mechanism" className="scroll-mt-24 space-y-5">
              <div className="space-y-2">
                <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                  04 · Understanding the mechanism
                </p>
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  How does neck pain develop?
                </h2>
                <p className="leading-7 text-muted-foreground">
                  Neck pain is not explained by one mechanism in every person.
                  Understanding the likely contributors helps a clinician
                  choose appropriate education, activity and treatment.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex gap-4 rounded-2xl border p-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 font-bold text-primary">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold">Tissue loading or irritation</h3>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      A change in activity, sustained position or injury may
                      place demands on tissues that exceed their current
                      tolerance. This can trigger pain and protective muscle
                      responses.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 rounded-2xl border p-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 font-bold text-primary">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold">Sensitivity and guarding</h3>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      The nervous system may become more protective. Movement
                      can feel painful or restricted, and surrounding muscles
                      may tighten. Pain intensity alone does not reliably show
                      how much tissue damage is present.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 rounded-2xl border p-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 font-bold text-primary">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold">Changes in activity</h3>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      Avoiding movement for too long may reduce confidence and
                      physical tolerance. Gradually returning to suitable
                      activities can help restore function when serious causes
                      have been excluded.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border-l-4 border-primary bg-muted/40 p-5">
                <h3 className="font-semibold">Important distinction</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Cervical strain usually refers to irritation or injury of
                  muscles and related soft tissues. Neck pain with nerve
                  involvement may produce symptoms into the shoulder or arm,
                  including tingling, numbness or weakness. These presentations
                  need appropriate assessment rather than assuming every case
                  is a simple strain.
                </p>
              </div>
            </section>

            <section id="features" className="scroll-mt-24 space-y-5">
              <div className="space-y-2">
                <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                  05 · Signs and symptoms
                </p>
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  How may it present?
                </h2>
                <p className="leading-7 text-muted-foreground">
                  Symptoms vary according to the cause, severity and individual.
                  The following features are common but cannot establish a
                  diagnosis on their own.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border bg-card p-5">
                  <h3 className="mb-3 font-semibold">Local symptoms</h3>
                  <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-muted-foreground">
                    <li>Aching, soreness or sharp pain in the neck.</li>
                    <li>Stiffness or reduced comfortable movement.</li>
                    <li>Muscle tenderness around the neck and shoulders.</li>
                    <li>Pain that changes with certain movements or positions.</li>
                    <li>Difficulty with driving, reading, sleeping or working.</li>
                  </ul>
                </div>
                <div className="rounded-2xl border bg-card p-5">
                  <h3 className="mb-3 font-semibold">Possible nerve-related symptoms</h3>
                  <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-muted-foreground">
                    <li>Pain spreading into one shoulder or arm.</li>
                    <li>Tingling or altered sensation in the arm or hand.</li>
                    <li>Numbness or a feeling of reduced strength.</li>
                    <li>Symptoms that change with neck or arm position.</li>
                  </ul>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    New, persistent or worsening weakness or numbness requires
                    prompt medical assessment.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border p-5">
                <h3 className="font-semibold">Impact on daily life</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  A person may struggle to turn the head, concentrate, sleep
                  comfortably, carry objects, study or complete work duties.
                  Assessment should therefore consider function and personal
                  goals, not pain intensity alone.
                </p>
              </div>
            </section>

            <section id="assessment" className="scroll-mt-24 space-y-5">
              <div className="space-y-2">
                <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                  06 · Clinical assessment
                </p>
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  How is neck pain assessed?
                </h2>
                <p className="leading-7 text-muted-foreground">
                  A physiotherapist or other qualified clinician combines the
                  person's history, relevant examination findings and safety
                  screening. No single test can accurately identify every
                  cause of neck pain.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">1. Subjective assessment</h3>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    The clinician asks when symptoms started, whether there was
                    an injury, where the pain travels, what aggravates or eases
                    it, how sleep and daily activities are affected, and
                    whether there are associated symptoms or previous episodes.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">2. Screening for serious causes</h3>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    Questions about trauma, fever, unexplained weight loss,
                    cancer history, severe headache, dizziness with neurological
                    symptoms, walking or balance changes, and progressive
                    weakness help determine whether urgent medical review is
                    needed.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">3. Physical examination</h3>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    When appropriate, examination may include comfortable neck
                    movement, strength, sensation, reflexes, upper-limb
                    function, relevant shoulder assessment and selected
                    clinical tests. The findings are interpreted together,
                    not in isolation.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">4. Function and outcome measures</h3>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    The clinician may record pain intensity and use a suitable
                    measure such as the Neck Disability Index to understand
                    how symptoms affect everyday activities. The same measure
                    can help monitor change over time.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">5. Investigations when indicated</h3>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    Imaging is not routinely required for uncomplicated neck
                    pain. A medical practitioner may request imaging or other
                    tests when the history and examination suggest trauma,
                    serious disease, significant neurological involvement or
                    another specific indication.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-muted/40 p-5">
                <h3 className="font-semibold">Assessment should guide the plan</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Treatment should reflect the person's presentation, goals,
                  preferences and response to care. If symptoms are unusual,
                  worsening or not improving as expected, the clinician should
                  review the working explanation and consider referral.
                </p>
              </div>
            </section>

            
            <section id="management" className="scroll-mt-24 space-y-5">
              <div className="space-y-2">
                <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                  07 · Physiotherapy management
                </p>
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  What may help neck pain?
                </h2>
                <p className="leading-7 text-muted-foreground">
                  Management depends on the cause, symptoms, examination
                  findings and personal goals. For uncomplicated neck pain,
                  care commonly combines education, appropriate activity and
                  exercises selected for the individual.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border bg-card p-5">
                  <h3 className="mb-2 font-semibold">Education and reassurance</h3>
                  <p className="text-sm leading-6 text-muted-foreground">
                    Explain the likely nature of the problem, discuss recovery
                    expectations and address concerns. Understanding symptoms
                    can help people make informed decisions and remain involved
                    in their recovery.
                  </p>
                </div>
                <div className="rounded-2xl border bg-card p-5">
                  <h3 className="mb-2 font-semibold">Keep moving appropriately</h3>
                  <p className="text-sm leading-6 text-muted-foreground">
                    When serious causes have been excluded, comfortable
                    movement and a gradual return to usual activities are often
                    preferable to prolonged rest. Modify activities that
                    substantially worsen symptoms.
                  </p>
                </div>
                <div className="rounded-2xl border bg-card p-5">
                  <h3 className="mb-2 font-semibold">Individualised exercise</h3>
                  <p className="text-sm leading-6 text-muted-foreground">
                    Depending on assessment, a programme may include gentle
                    neck movement, strengthening, endurance, shoulder-girdle
                    exercise or general physical activity. The starting level
                    should suit the person's capacity and symptoms.
                  </p>
                </div>
                <div className="rounded-2xl border bg-card p-5">
                  <h3 className="mb-2 font-semibold">Manual therapy when appropriate</h3>
                  <p className="text-sm leading-6 text-muted-foreground">
                    A trained clinician may consider selected mobilisation or
                    soft-tissue techniques alongside active rehabilitation.
                    These techniques should be explained, consented to and
                    chosen after screening for contraindications.
                  </p>
                </div>
                <div className="rounded-2xl border bg-card p-5">
                  <h3 className="mb-2 font-semibold">Work and study adjustments</h3>
                  <p className="text-sm leading-6 text-muted-foreground">
                    Arrange frequently used items comfortably, support the
                    forearms when useful, vary positions and take regular
                    movement breaks. There is no single perfect posture that
                    everyone must maintain all day.
                  </p>
                </div>
                <div className="rounded-2xl border bg-card p-5">
                  <h3 className="mb-2 font-semibold">Sleep and recovery habits</h3>
                  <p className="text-sm leading-6 text-muted-foreground">
                    A comfortable sleeping position, adequate rest and
                    manageable daily activity may support recovery. A pillow
                    should be comfortable rather than forcing the neck into a
                    particular position.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border-l-4 border-primary bg-muted/40 p-5">
                <h3 className="font-semibold">Exercise safety</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Stop an activity and seek professional advice if it causes
                  severe or rapidly worsening pain, new numbness or weakness,
                  dizziness with other concerning symptoms, or loss of
                  coordination. Do not attempt forceful neck manipulation or
                  copy an exercise programme without considering your
                  circumstances.
                </p>
              </div>
            </section>

            <section id="safety" className="scroll-mt-24 space-y-5">
              <div className="space-y-2">
                <p className="text-sm font-semibold uppercase tracking-widest text-destructive">
                  08 · Safety and referral
                </p>
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  When should you seek urgent help?
                </h2>
                <p className="leading-7 text-muted-foreground">
                  Most neck pain is not caused by a medical emergency, but some
                  symptoms need prompt assessment. Do not rely on an online
                  guide to rule out a serious condition.
                </p>
              </div>

              <div className="space-y-3">
                <div className="rounded-2xl border border-destructive/40 p-5">
                  <h3 className="font-semibold">Seek emergency medical care</h3>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-muted-foreground">
                    <li>
                      Neck pain after a major accident or significant trauma,
                      especially with severe pain or difficulty moving.
                    </li>
                    <li>
                      Sudden weakness or numbness, facial drooping, difficulty
                      speaking, new severe imbalance or other possible stroke
                      symptoms.
                    </li>
                    <li>
                      Sudden, unusually severe neck pain or headache with
                      neurological symptoms, fainting or visual disturbance.
                    </li>
                    <li>
                      New difficulty walking, marked loss of coordination, or
                      rapidly progressing weakness in the arms or legs.
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl border p-5">
                  <h3 className="font-semibold">Arrange prompt medical review</h3>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-muted-foreground">
                    <li>
                      Fever, severe headache and a very stiff neck, particularly
                      with confusion, light sensitivity or feeling seriously
                      unwell.
                    </li>
                    <li>
                      Unexplained weight loss, a history of cancer, or persistent
                      pain that is unusual or progressively worsening.
                    </li>
                    <li>
                      New or worsening arm or hand weakness, persistent
                      numbness, or symptoms affecting both arms.
                    </li>
                    <li>
                      Neck pain with other significant unexplained symptoms or
                      pain that does not improve as expected.
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-sm leading-6 text-muted-foreground">
                This list is not exhaustive. If you are concerned about severe
                or rapidly changing symptoms, seek appropriate medical care.
                In Nigeria, use the nearest suitable emergency department or
                local emergency service where available.
              </p>
            </section>

            <section id="recovery" className="scroll-mt-24 space-y-5">
              <div className="space-y-2">
                <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                  09 · Recovery and prevention
                </p>
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  Supporting recovery and reducing recurrence
                </h2>
                <p className="leading-7 text-muted-foreground">
                  Recovery varies. Many uncomplicated episodes improve over
                  time, but the course depends on the underlying cause, health,
                  activity demands and other individual factors.
                </p>
              </div>

              <div className="space-y-3">
                {[
                  {
                    title: "Build activity gradually",
                    text: "Return to normal tasks in manageable steps. Increase workload or exercise progressively instead of making sudden large changes.",
                  },
                  {
                    title: "Vary positions regularly",
                    text: "Break up long periods of sitting, reading or phone use. Change position and move comfortably rather than trying to hold one rigid posture.",
                  },
                  {
                    title: "Maintain general physical activity",
                    text: "Choose suitable activities you can sustain, such as walking or other enjoyable movement, adapting the amount to your health and current symptoms.",
                  },
                  {
                    title: "Address contributing factors",
                    text: "Where possible, improve sleep routines, manage workload, take breaks and seek support for stress that is affecting daily life.",
                  },
                  {
                    title: "Review persistent symptoms",
                    text: "Seek assessment if pain is severe, keeps returning, interferes substantially with daily activities or is not following an expected recovery course.",
                  },
                ].map((item) => (
                  <div key={item.title} className="rounded-2xl border p-4">
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl border bg-card p-5">
                <h3 className="font-semibold">Track meaningful progress</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Improvement may include easier head movement, better sleep,
                  less interference with work or study, and increased
                  confidence with daily tasks. Progress is not always a
                  straight line; a temporary increase in discomfort does not
                  necessarily mean that damage has occurred.
                </p>
              </div>
            </section>

            <section id="references" className="scroll-mt-24 space-y-5">
              <div className="space-y-2">
                <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                  10 · Further reading
                </p>
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  Sources and clinical guidance
                </h2>
                <p className="leading-7 text-muted-foreground">
                  The following publications and health resources inform this
                  educational overview. Clinical decisions should be based on
                  a person's assessment and current professional guidance.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href="https://pubmed.ncbi.nlm.nih.gov/28666405/"
                  target="_blank"
                  rel="noreferrer"
                  className="group block rounded-2xl border p-5 transition-colors hover:bg-muted/50"
                >
                  <h3 className="font-semibold group-hover:text-primary">
                    Neck Pain: Revision 2017 — Clinical Practice Guidelines
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Blanpied PR and colleagues. Journal of Orthopaedic & Sports
                    Physical Therapy, 2017. Clinical guidance on classification,
                    examination and management of neck pain.
                  </p>
                  <span className="mt-3 inline-block text-sm font-medium text-primary">
                    Read on PubMed ↗
                  </span>
                </a>

                <a
                  href="https://pubmed.ncbi.nlm.nih.gov/29228289/"
                  target="_blank"
                  rel="noreferrer"
                  className="group block rounded-2xl border p-5 transition-colors hover:bg-muted/50"
                >
                  <h3 className="font-semibold group-hover:text-primary">
                    Clinical Practice Guideline for Physical Therapy Assessment
                    and Treatment in Patients With Nonspecific Neck Pain
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Bier JD and colleagues. Physical Therapy, 2018. Guidance
                    addressing physical therapy assessment and treatment for
                    nonspecific neck pain.
                  </p>
                  <span className="mt-3 inline-block text-sm font-medium text-primary">
                    Read on PubMed ↗
                  </span>
                </a>

                <a
                  href="https://www.nhs.uk/symptoms/neck-pain-and-stiff-neck/"
                  target="_blank"
                  rel="noreferrer"
                  className="group block rounded-2xl border p-5 transition-colors hover:bg-muted/50"
                >
                  <h3 className="font-semibold group-hover:text-primary">
                    Neck pain and stiff neck
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    NHS public health guidance on common neck pain, self-care
                    and symptoms that warrant medical advice.
                  </p>
                  <span className="mt-3 inline-block text-sm font-medium text-primary">
                    Read NHS guidance ↗
                  </span>
                </a>
              </div>

              <p className="text-xs leading-5 text-muted-foreground">
                Educational content only. This page is not a substitute for
                professional assessment, diagnosis or treatment. It should be
                reviewed by a suitably qualified clinician before being used
                as formal clinical guidance.
              </p>
            </section>

            <section className="rounded-3xl border bg-muted/30 p-6 sm:p-8">
              <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
                Continue exploring clinical conditions
              </h2>
              <p className="mt-2 leading-7 text-muted-foreground">
                Neck pain is only one of many conditions that can affect
                movement and daily function. Explore the condition library
                for more educational guides as they become available.
              </p>
              <Link
                to="/conditions"
                className="mt-5 inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Back to all conditions
              </Link>
            </section>
          </article>
        </div>
        <Disclaimer />
      </main>
    </SiteLayout>
  );
      }
