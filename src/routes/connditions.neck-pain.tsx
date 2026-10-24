
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
          A simplified side view of seven cervical vertebrae, the
          intervertebral discs, spinal canal and cervical nerve roots.
          This is a conceptual diagram and not a diagnostic image.
        </desc>

        <rect width="620" height="390" rx="16" fill="#F8FAFC" />

        <text x="28" y="32" fontSize="13" fill="#475569" fontWeight="600">
          CERVICAL SPINE · SIDE VIEW
        </text>

        <path
          d="M245 65 C220 100 220 145 237 178
             C246 199 244 231 235 260
             C230 281 242 309 264 328"
          fill="none"
          stroke="#CBD5E1"
          strokeWidth="30"
          strokeLinecap="round"
        />

        <path
          d="M266 64 C247 104 249 143 263 177
             C273 205 269 232 263 259
             C259 283 269 307 284 326"
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
                d={`M${x - 16} ${y}
                    Q${x - 23} ${y - 5} ${x - 17} ${y - 11}
                    L${x + 12} ${y - 11}
                    Q${x + 23} ${y - 5} ${x + 18} ${y + 2}
                    L${x + 12} ${y + 10}
                    L${x - 12} ${y + 10} Z`}
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
                d={`M${x - 18} ${y + 1} L${x - 37} ${y + 8}
                    L${x - 43} ${y + 3}`}
                fill="none"
                stroke="#D97706"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <text
                x={x + 31}
                y={y + 4}
                fontSize="11"
                fill="#334155"
              >
                {`C${i + 1}`}
              </text>
            </g>
          );
        })}

        <path
          d="M258 55 C245 95 245 145 258 181
             C269 214 261 253 260 289
             C260 303 267 315 276 328"
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
          <path
            d="M354 94 L310 94"
            stroke="#0F766E"
            strokeWidth="1.5"
            fill="none"
          />

          <text x="365" y="151">Intervertebral disc</text>
          <text x="365" y="163" fontSize="10" fill="#64748B" fontWeight="400">
            Helps distribute load
          </text>
          <path
            d="M354 155 L311 155"
            stroke="#0F766E"
            strokeWidth="1.5"
            fill="none"
          />

          <text x="365" y="224">Cervical nerve roots</text>
          <text x="365" y="236" fontSize="10" fill="#64748B" fontWeight="400">
            Carry sensory and motor signals
          </text>
          <path
            d="M354 225 L231 225"
            stroke="#D97706"
            strokeWidth="1.5"
            fill="none"
          />
        </g>

        <text x="28" y="365" fontSize="10" fill="#64748B">
          Simplified educational schematic — not to scale.
        </text>
      </svg>

      <p className="mt-2 text-sm leading-6 text-slate-600">
        The cervical spine consists of seven vertebrae (C1–C7).
        Intervertebral discs, joints, ligaments, muscles and nerves
        work together to support the head and permit movement.
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
                Neck pain refers to pain or discomfort felt between the
                base of the skull and the upper thoracic region. It may
                occur with stiffness, reduced movement, headache or pain
                extending into the shoulder and upper back.
              </p>
              <p className="leading-7">
                <strong>Cervical strain</strong> describes injury or
                irritation involving muscle or tendon tissue in the neck.
                It can occur after an unusual movement, sustained loading
                or sudden force. However, not all neck pain is a strain:
                joint, nerve, inflammatory and other medical conditions
                can produce similar symptoms.
              </p>
              <div className="rounded-xl border-l-4 border-teal-600 bg-teal-600/5 p-4">
                <h3 className="font-bold">Important distinction</h3>
                <p className="mt-1 text-sm leading-6">
                  Neck pain is a symptom, not a diagnosis by itself.
                  The history and examination help determine whether
                  symptoms are consistent with uncomplicated
                  musculoskeletal pain or require further investigation.
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
                region contributes to flexion, extension, rotation and
                side-bending.
              </p>

              <AnatomyDiagram />

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    title: "Vertebrae and joints",
                    text: "Provide structural support and guide movement. The facet joints contribute to movement and load distribution.",
                  },
                  {
                    title: "Intervertebral discs",
                    text: "Between most adjacent cervical vertebral bodies, discs help distribute loads and permit movement. C1–C2 is an important exception.",
                  },
                  {
                    title: "Muscles and tendons",
                    text: "Support and move the head and neck. The cervical and shoulder-girdle muscles also contribute to endurance and postural control.",
                  },
                  {
                    title: "Nerves and spinal cord",
                    text: "Cervical nerve roots contribute to sensation and muscle function in the upper limb. The spinal cord carries signals between the brain and body.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-border p-4"
                  >
                    <h3 className="font-bold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              <p className="text-sm leading-6 text-muted-foreground">
                Anatomy note: the cervical spine also contains important
                ligaments, blood vessels and other structures. This
                schematic is simplified and is not suitable for diagnosing
                a structural injury.
              </p>
            </section>

            <section id="causes" className="scroll-mt-24 space-y-4">
              <h2 className="text-2xl font-bold">
                3. Aetiology and risk factors
              </h2>
              <p className="leading-7">
                Neck pain can develop through several interacting
                mechanisms. A risk factor may contribute to symptoms
                but does not prove the cause in an individual.
              </p>

              <div className="space-y-3">
                {[
                  {
                    title: "Muscle or tendon overload",
                    text: "A sudden increase in activity, unfamiliar lifting, prolonged work or repeated loading may aggravate cervical and shoulder-girdle tissues.",
                  },
                  {
                    title: "Sudden force or trauma",
                    text: "A fall, collision or rapid acceleration-deceleration event can cause neck injury. Trauma requires appropriate screening before routine exercise.",
                  },
                  {
                    title: "Sustained positions and workload",
                    text: "Long periods in one position, limited breaks and demanding work may be associated with symptoms. There is no single posture that explains every case.",
                  },
                  {
                    title: "Previous episodes and health factors",
                    text: "A history of neck pain, reduced physical activity, sleep disturbance and other health factors may influence symptom persistence or recovery.",
                  },
                  {
                    title: "Stress and recovery",
                    text: "Stress, fear of movement, low mood and poor sleep can influence pain, muscle activity, coping and participation. These factors do not mean the pain is imaginary.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-border p-4"
                  >
                    <h3 className="font-bold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section id="mechanism" className="scroll-mt-24 space-y-4">
              <h2 className="text-2xl font-bold">4. Pathophysiology</h2>
              <p className="leading-7">
                In an uncomplicated strain, loading may exceed the
                tolerance of muscle or tendon tissue, producing local
                tissue irritation and a pain response. Protective muscle
                activity and sensitivity can temporarily limit movement.
                Symptoms may settle as the tissues and nervous system
                recover and normal activity is gradually restored.
              </p>
              <p className="leading-7">
                Neck pain is not always explained by tissue damage.
                Pain is influenced by biological, psychological and
                social factors. In persistent cases, increased sensitivity,
                sleep problems, stress, fear of movement and reduced
                activity can interact with physical impairments.
              </p>
              <p className="leading-7">
                If a cervical nerve root is affected, a person may
                experience radiating arm pain, altered sensation,
                tingling or weakness. Spinal cord involvement can cause
                more widespread neurological problems and needs prompt
                medical assessment.
              </p>
            </section>

            <section id="features" className="scroll-mt-24 space-y-4">
              <h2 className="text-2xl font-bold">
                5. Clinical features
              </h2>
              <h3 className="text-lg font-bold">Common symptoms</h3>
              <ul className="list-disc space-y-2 pl-6 leading-7">
                <li>Pain or aching around the neck and upper shoulders.</li>
                <li>Stiffness or reduced cervical range of motion.</li>
                <li>Discomfort with prolonged positions or certain movements.</li>
                <li>Muscle tenderness or a feeling of tightness.</li>
                <li>Difficulty with driving, sleeping, reading or work tasks.</li>
                <li>Headache or shoulder-region discomfort in some people.</li>
              </ul>

              <h3 className="text-lg font-bold">
                Features that need closer assessment
              </h3>
              <ul className="list-disc space-y-2 pl-6 leading-7">
                <li>Pain radiating into an arm, especially with tingling or numbness.</li>
                <li>New or progressive weakness in the arm or hand.</li>
                <li>Problems with balance, walking, hand coordination or dexterity.</li>
                <li>Severe pain following trauma or symptoms that are worsening unexpectedly.</li>
              </ul>
              <p className="text-sm leading-6 text-muted-foreground">
                Symptoms overlap between conditions. These features alone
                do not establish a diagnosis.
              </p>
            </section>

            <section id="assessment" className="scroll-mt-24 space-y-4">
              <h2 className="text-2xl font-bold">
                6. Clinical assessment
              </h2>
              <p className="leading-7">
                Assessment should be individualised and performed by an
                appropriately qualified clinician. The aim is to understand
                the person's presentation, identify functional problems,
                screen for serious pathology and decide whether referral
                or further investigation is needed.
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-bold">A. Subjective assessment</h3>
                  <ul className="mt-2 list-disc space-y-2 pl-6 leading-7">
                    <li>Onset, mechanism of injury and symptom progression.</li>
                    <li>Pain location, behaviour, severity and aggravating or easing factors.</li>
                    <li>Headache, dizziness, arm symptoms and neurological changes.</li>
                    <li>Trauma, fever, unexplained weight loss, medical history and other red flags.</li>
                    <li>Sleep, work demands, daily activities, expectations and goals.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold">B. Objective examination</h3>
                  <ul className="mt-2 list-disc space-y-2 pl-6 leading-7">
                    <li>Observation and functional movement, without assuming posture alone is the cause.</li>
                    <li>Cervical active range of motion, within safe and comfortable limits.</li>
                    <li>Relevant palpation when indicated and likely to inform care.</li>
                    <li>Upper-limb strength, sensation and reflexes when neurological involvement is suspected.</li>
                    <li>Appropriate neurological, vascular or other screening based on the history.</li>
                    <li>Validated outcome measures, such as a numerical pain rating and Neck Disability Index, where appropriate.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold">C. Differential considerations</h3>
                  <p className="mt-2 leading-7">
                    Depending on the presentation, the clinician may
                    consider cervical radiculopathy, cervical myelopathy,
                    fracture, infection, inflammatory disease, malignancy
                    or referred pain from another source. Special tests
                    should be selected and interpreted as part of the
                    whole examination, not in isolation.
                  </p>
                </div>
              </div>   
<section id="management" className="scroll-mt-24 space-y-4">
              <h2 className="text-2xl font-bold">
                7. Physiotherapy management
              </h2>
              <p className="leading-7">
                Management depends on the diagnosis, symptom severity,
                irritability, duration, functional limitations and
                individual goals. For uncomplicated neck pain, education
                and appropriately graded activity are generally central
                to care. Exercise and manual therapy may be useful when
                selected for the person's presentation.
              </p>

              <div className="space-y-4">
                {[
                  {
                    title: "Education and reassurance",
                    text: "Explain the likely presentation, encourage appropriate activity and address unhelpful fear of movement. Avoid promising a fixed recovery time.",
                  },
                  {
                    title: "Gentle range-of-motion exercise",
                    text: "When appropriate, comfortable cervical rotation, flexion and extension can help maintain movement. Start within tolerance and avoid forcing painful end ranges.",
              },
                  {
                    title: "Strength and endurance",
                    text: "Progressive cervical and shoulder-girdle exercises may be introduced according to symptoms, examination findings and functional goals.",
                  },
                  {
                    title: "Functional and aerobic activity",
                    text: "Gradually resume relevant daily tasks, walking and other tolerated activity. Adapt workload and take movement breaks when they help manage symptoms.",
                  },
                  {
                    title: "Manual therapy",
                    text: "A trained clinician may consider appropriate mobilisation as part of a broader plan, commonly alongside exercise and education. It is not essential or suitable for everyone.",
                  },
                  {
                    title: "Self-management and review",
                    text: "Agree on meaningful goals, monitor symptoms and function, review response to treatment and adjust the programme. Refer for further assessment if the presentation changes or progress is unexpectedly poor.",
                  },
  ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-border p-4"
                  >
                    <h3 className="font-bold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="rounded-xl border-l-4 border-amber-500 bg-amber-500/5 p-4">
                <h3 className="font-bold">Exercise safety</h3>
                <p className="mt-1 text-sm leading-6">
                  This guide does not prescribe an individual treatment
                  programme. Stop an exercise that causes new or increasing
                  radiating pain, numbness, weakness, dizziness or other
                  concerning symptoms, and seek appropriate clinical advice.
                  Do not attempt forceful neck manipulation on yourself.
                </p>
              </div>
            </section>

              <section id="safety" className="scroll-mt-24 space-y-4">
              <h2 className="text-2xl font-bold">
                8. Red flags and referral
              </h2>
              <p className="leading-7">
                Most uncomplicated neck pain is not an emergency, but
                certain symptoms require urgent assessment.
              </p>

              <div className="rounded-2xl border border-red-500/40 bg-red-500/5 p-5">
                <h3 className="text-lg font-bold text-red-700">
                  Seek emergency medical care
                </h3>
                <ul className="mt-3 list-disc space-y-2 pl-6 leading-7">
                  <li>Neck pain after a serious accident, fall or other significant trauma.</li>
                  <li>Sudden facial droop, speech difficulty, one-sided weakness or other possible stroke symptoms.</li>
                  <li>Sudden severe neck pain or headache with new neurological symptoms, collapse or visual disturbance.</li>
                  <li>New difficulty walking, marked loss of coordination or rapidly worsening limb weakness.</li>
                  <li>Neck pain with chest pain, severe breathing difficulty or other signs of a possible medical emergency.</li>
                </ul>

                <h3 className="mt-5 font-bold">
                  Arrange prompt medical assessment
                </h3>
                <ul className="mt-2 list-disc space-y-2 pl-6 leading-7">
                  <li>Fever or feeling seriously unwell alongside neck pain or stiffness.</li>
                  <li>New or progressive numbness, tingling or weakness.</li>
                  <li>Unexplained weight loss, a history of cancer or persistent unexplained pain.</li>
                  <li>Severe or worsening symptoms, especially when accompanied by other concerning features.</li>
                </ul>
              </div>

              <p className="text-sm leading-6 text-muted-foreground">
                This is not an exhaustive list. Red flags must be interpreted
                in context, and their absence does not rule out every serious
                condition. When in doubt, seek medical evaluation.
              </p>
            </section>

              <section id="recovery" className="scroll-mt-24 space-y-4">
              <h2 className="text-2xl font-bold">
                9. Recovery and prevention
              </h2>
              <p className="leading-7">
                Many episodes of uncomplicated neck pain improve over days
                to weeks, although recovery varies. Persistent or recurrent
                symptoms may require a broader assessment and an
                individualised rehabilitation plan.
              </p>
              <ul className="list-disc space-y-2 pl-6 leading-7">
                <li>Build physical activity and exercise gradually.</li>
                <li>Vary working positions and take breaks when useful.</li>
                <li>Develop neck and shoulder-girdle strength and endurance as appropriate.</li>
                <li>Address sleep, stress and barriers to normal activity.</li>
                <li>Seek assessment when symptoms persist, recur frequently or affect daily function.</li>
              </ul>
              <p className="leading-7">
                No single pillow, posture or exercise can guarantee
                prevention. Strategies should be practical, sustainable
                and matched to the individual's needs.
              </p>
            </section>

              <section id="references" className="scroll-mt-24 space-y-4">
              <h2 className="text-2xl font-bold">
                10. References and further reading
              </h2>
              <p className="leading-7">
                These sources support the general educational information
                in this guide. They do not replace an individual clinical
                assessment, and guideline recommendations should be
                interpreted in context.
              </p>

              <ol className="list-decimal space-y-4 pl-6">
                <li className="leading-6">
                  Blanpied PR, Gross AR, Elliott JM, et al. Neck Pain:
                  Revision 2017. <em>Journal of Orthopaedic & Sports
                  Physical Therapy.</em> 2017;47(7):A1–A83.
                  <a
                    href="https://pubmed.ncbi.nlm.nih.gov/28666405/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-1 font-semibold text-teal-700 underline underline-offset-4"
                  >
                    Read guideline record
                  </a>
                  
              </li>
                <li className="leading-6">
                  Bier JD, Scholten-Peeters WGM, Staal JB, et al.
                  Clinical Practice Guideline for Physical Therapy
                  Assessment and Treatment in Patients With Nonspecific
                  Neck Pain. <em>Physical Therapy.</em> 2018;98(3):162–171.
                  <a
                    href="https://pubmed.ncbi.nlm.nih.gov/29228289/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-1 font-semibold text-teal-700 underline underline-offset-4"
                  >
                    Read guideline record
                  </a>
                  .
                </li>
                <li className="leading-6">
                  National Health Service (NHS). Neck pain and stiff neck.
                  <a
                    href="https://www.nhs.uk/symptoms/neck-pain-and-stiff-neck/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-1 font-semibold text-teal-700 underline underline-offset-4"
                  >
                    Read patient guidance
                  </a>
                  .
                </li>
              </ol>
            </section>

              <section className="rounded-2xl border border-border bg-muted/30 p-5 sm:p-7">
              <h2 className="text-xl font-bold">
                Continue exploring clinical conditions
              </h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Return to the library to explore other body regions.
                Additional detailed condition guides will be developed
                separately.
              </p>
              <Link
                to="/conditions"
                className="mt-4 inline-flex rounded-xl bg-teal-700 px-5 py-3 font-semibold text-white transition hover:bg-teal-800"
              >
                Browse all conditions
              </Link>
            </section>
          </article>
        </div>

        <p className="text-sm leading-6 text-muted-foreground">
          Educational information only. This page cannot diagnose a
          condition or replace assessment and care from a qualified
          healthcare professional.
        </p>

        <Disclaimer />
      </main>
    </SiteLayout>
  );
      }
      
