import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { specialtyDetails } from "@/lib/specialties";
import { SiteLayout, Disclaimer } from "@/components/SiteLayout";
import { Picture } from "@/components/Picture";
import hero from "@/assets/hero-physio.jpg";
import imgBack from "@/assets/guide-back.jpg";
import imgKnee from "@/assets/guide-knee.jpg";
import imgNeck from "@/assets/guide-neck.jpg";
import imgSquat from "@/assets/ex-squat.jpg";
import imgBridge from "@/assets/ex-bridge.jpg";
import imgLunge from "@/assets/ex-lunge.jpg";
import imgWorkout from "@/assets/workout-hero.jpg";
import imgDesk from "@/assets/ergo-desk.jpg";
import imgLifting from "@/assets/ergo-lifting.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Explore Physiotherapy in Nigeria — Careers & Profession | PhysioGuide Nigeria" },
      {
        name: "description",
        content:
          "Learn what physiotherapists do, explore specialties, the general study pathway in Nigeria, work settings, ethics and regulation, plus a career-exploration quiz.",
      },
      { property: "og:title", content: "Explore Physiotherapy in Nigeria — PhysioGuide Nigeria" },
      {
        property: "og:description",
        content: "A career and profession hub for anyone curious about physiotherapy in Nigeria.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: AboutPage,
});

const sections = [
  { id: "discover", label: "Discover" },
  { id: "specialties", label: "Specialties" },
  { id: "study", label: "Study in Nigeria" },
  { id: "careers", label: "Careers" },
  { id: "practice", label: "Ethics & regulation" },
  { id: "quiz", label: "Quiz" },
  { id: "faq", label: "FAQ" },
  { id: "references", label: "References" },
];

const journey = [
  { title: "Presentation or referral", text: "A person attends directly or is referred by a doctor or another professional." },
  { title: "Assessment", text: "History, observation, movement, strength, function and safety screening." },
  { title: "Identify problems", text: "Movement, pain, function and participation problems are identified and explained." },
  { title: "Shared goals", text: "Goals are agreed with the person, based on what matters in their daily life." },
  { title: "Intervention", text: "Exercise, education, functional training and other appropriate approaches." },
  { title: "Reassessment", text: "Progress is measured and the plan is adjusted." },
  { title: "Discharge or ongoing care", text: "Self-management, onward referral or continued support as needed." },
];

const compare = [
  { role: "Physiotherapy", text: "Focuses on movement, physical function and rehabilitation through assessment, exercise, education and physical approaches." },
  { role: "Medicine", text: "Doctors diagnose and manage disease, prescribe medicines, order and interpret many investigations, and may perform surgery." },
  { role: "Nursing", text: "Nurses provide continuous clinical care, monitoring, medication administration, health education and patient advocacy." },
  { role: "Occupational therapy", text: "Focuses on enabling participation in meaningful daily activities (self-care, work, leisure), often by adapting tasks or environments." },
];

const specialties = [
  { title: "Musculoskeletal", img: imgBack, alt: "Physiotherapist assessing a person's lower back", focus: "Muscles, joints, bones and soft tissues.", conditions: "Back and neck pain, osteoarthritis, sprains, recovery after fractures or orthopaedic surgery.", scenario: "A trader with ongoing low back pain struggles to lift goods at the market.", goals: "Pain education, graded exercise, lifting strategies, return to work." },
  { title: "Neurological", img: imgLunge, alt: "Person practising a controlled stepping movement", focus: "Movement problems caused by conditions of the brain, spinal cord or nerves.", conditions: "Stroke, spinal cord injury, Parkinson's disease, multiple sclerosis, nerve injuries.", scenario: "A man recovering from a stroke wants to walk safely around his compound.", goals: "Balance and walking training, strength, task practice, carer education." },
  { title: "Paediatric", img: imgBridge, alt: "Simple floor-based movement exercise", focus: "Movement, development and participation in babies, children and adolescents.", conditions: "Developmental delay, cerebral palsy, clubfoot follow-up, childhood injuries.", scenario: "A child with cerebral palsy wants to join classmates in play.", goals: "Play-based activity, positioning, mobility aids, family guidance." },
  { title: "Cardiorespiratory", img: imgWorkout, alt: "Person doing light physical activity", focus: "Breathing, airway clearance and exercise tolerance.", conditions: "Chronic lung disease, recovery after surgery or intensive care, heart conditions in appropriate programmes.", scenario: "A woman feels breathless climbing stairs after a long hospital stay.", goals: "Breathing techniques, graded activity, pulmonary or cardiac rehabilitation." },
  { title: "Sports", img: imgSquat, alt: "Person performing a bodyweight squat", focus: "Injury prevention, rehabilitation and return to sport.", conditions: "Ligament injuries, muscle strains, tendon problems, overuse injuries.", scenario: "A university footballer is recovering from a knee ligament injury.", goals: "Progressive strengthening, agility, load management, return-to-play testing." },
  { title: "Geriatric (older adults)", img: imgKnee, alt: "Physiotherapist examining an older person's knee", focus: "Mobility, balance and independence in later life.", conditions: "Falls risk, frailty, arthritis, reduced mobility after illness.", scenario: "A grandmother is afraid of falling when going to the toilet at night.", goals: "Balance and strength work, home safety advice, walking aids." },
  { title: "Women's and pelvic health", img: imgNeck, alt: "Physiotherapist supporting a patient", focus: "Pelvic floor function and physical health around pregnancy and beyond.", conditions: "Pregnancy-related pelvic or back pain, postnatal recovery, bladder control problems.", scenario: "A new mother leaks urine when she coughs and wants to return to exercise.", goals: "Pelvic floor training, education, graded return to activity." },
  { title: "Community rehabilitation", img: imgLifting, alt: "Person demonstrating safe lifting technique", focus: "Rehabilitation at home and in the community, often where hospital access is limited.", conditions: "Long-term disability, recovery after hospital discharge, mobility limitations.", scenario: "A young man with a spinal injury needs support to move safely at home.", goals: "Home programmes, carer training, mobility equipment, community participation." },
];

const studySteps = [
  { title: "Research recognised programmes", text: "Look for universities offering physiotherapy, and confirm the programme's current approval status with the university and the National Universities Commission (NUC)." },
  { title: "Check admission requirements", text: "Requirements are set by JAMB and each university. Science subjects such as Biology, Chemistry, Physics, English and Mathematics are commonly relevant, but confirm the exact subject combinations and cut-off marks for the current year." },
  { title: "Academic and clinical training", text: "Training combines basic medical sciences (such as anatomy and physiology), physiotherapy theory and supervised practical work." },
  { title: "Supervised clinical placements", text: "Students practise under supervision in clinical settings to develop safe assessment and treatment skills." },
  { title: "Internship, registration and licensing", text: "Before practising, graduates must meet the requirements of the Medical Rehabilitation Therapists (Registration) Board of Nigeria (MRTB). Confirm current internship and registration rules directly with the MRTB." },
];

const workSettings = [
  { title: "Public and private hospitals", tasks: "Ward rehabilitation, outpatient clinics, post-surgical care, intensive care support." },
  { title: "Private clinics and rehabilitation centres", tasks: "Outpatient assessment, exercise programmes, follow-up appointments, clinic administration." },
  { title: "Sports organisations", tasks: "Pitch-side support, injury rehabilitation, prevention programmes, working with coaches." },
  { title: "Community and home-based care", tasks: "Home visits, carer training, mobility and equipment advice." },
  { title: "Teaching and research", tasks: "Lecturing, supervising students, conducting and publishing research." },
  { title: "Occupational health and ergonomics", tasks: "Workplace assessments, manual-handling training, work-related injury prevention." },
  { title: "Digital health, education and entrepreneurship", tasks: "Health education content, telehealth where appropriate, starting a practice." },
];

const scenarios = [
  {
    q: "A patient's relative asks you, in the waiting area, what is wrong with the patient. The patient has not given permission to share information.",
    options: ["Tell the relative briefly, since they are family", "Politely decline and ask the patient what they want shared", "Ask a colleague to tell the relative instead"],
    correct: 1,
    why: "Confidentiality: health information is shared only with the patient's consent or where the law requires it. Family relationships alone do not remove this duty.",
  },
  {
    q: "During assessment, a person with back pain reports new numbness around the groin and difficulty passing urine.",
    options: ["Continue with the planned exercises", "Advise rest and review next week", "Stop, explain the concern and arrange urgent medical assessment"],
    correct: 2,
    why: "Safe practice and referral: these can be emergency warning signs. Recognising problems outside physiotherapy scope and referring urgently protects the patient.",
  },
  {
    q: "You want to use a new technique you saw online, but you have not been trained in it and the evidence is unclear.",
    options: ["Try it, because the patient wants something new", "Explain options honestly, use approaches you are competent in, and seek training and evidence first", "Use it without telling the patient"],
    correct: 1,
    why: "Competence, evidence-informed practice and informed consent: practise within your training, be honest about options, and let the patient make an informed choice.",
  },
];

const quiz = [
  "I am curious about how the human body moves.",
  "I enjoy biology and other science subjects.",
  "I like solving practical problems step by step.",
  "I am comfortable talking with and listening to different people.",
  "I would find it rewarding to help someone regain function gradually.",
  "I am willing to keep learning throughout my career.",
];
const scale = ["Not really", "Somewhat", "Very much"];

const faqs = [
  { q: "What do physiotherapists do?", a: "They assess movement and physical function, explain problems, agree goals and use exercise, education and other physical approaches to help people move and function better." },
  { q: "Where do physiotherapists work?", a: "Hospitals, private clinics, rehabilitation centres, sports teams, communities and homes, universities, workplaces and digital health services." },
  { q: "How do I study physiotherapy in Nigeria?", a: "Apply through JAMB to a university offering an approved physiotherapy programme. Check the current subject combination, cut-off marks and programme details on official JAMB and university sources." },
  { q: "Are clinical placements and registration required?", a: "Supervised clinical training is part of physiotherapy education, and practising requires registration with the MRTB. Confirm current internship and licensing requirements directly with the MRTB." },
  { q: "How is physiotherapy different from related professions?", a: "Physiotherapy focuses on movement and physical function. Doctors diagnose and manage disease and prescribe medicines, nurses provide ongoing clinical care, and occupational therapists focus on participation in daily activities. They often work together." },
  { q: "What career options exist after qualification?", a: "Clinical practice in different specialties, sports, community work, teaching and research, workplace health, management and entrepreneurship. Many pursue further study and continuing professional development." },
  { q: "What skills help physiotherapy students?", a: "Interest in science, communication and empathy, problem-solving, practical hand skills, time management, teamwork and a commitment to ongoing learning." },
];

const references = [
  { group: "Official Nigerian sources", items: [
    { title: "Joint Admissions and Matriculation Board (JAMB)", url: "https://www.jamb.gov.ng", note: "Admission process, subject combinations and current requirements." },
    { title: "National Universities Commission (NUC)", url: "https://www.nuc.edu.ng", note: "Approved universities and programme information." },
    { title: "Medical Rehabilitation Therapists (Registration) Board of Nigeria (MRTB)", url: "https://mrtb.gov.ng", note: "Professional registration and regulation. Verify the current web address if the link does not open." },
  ]},
  { group: "General physiotherapy information", items: [
    { title: "World Physiotherapy — What is physiotherapy?", url: "https://world.physio/resources/what-is-physiotherapy", note: "International description of the profession." },
    { title: "World Health Organization — Rehabilitation fact sheet", url: "https://www.who.int/news-room/fact-sheets/detail/rehabilitation", note: "Why rehabilitation matters for health." },
  ]},
];

function AboutPage() {
  const [answers, setAnswers] = useState<(number | null)[]>(quiz.map(() => null));
  const [showSummary, setShowSummary] = useState(false);
  const [picks, setPicks] = useState<(number | null)[]>(scenarios.map(() => null));

  const done = answers.every((a) => a !== null);
  const score = answers.reduce<number>((s, a) => s + (a ?? 0), 0);
  const max = quiz.length * 2;
  const low = quiz.filter((_, i) => answers[i] === 0);

  return (
    <SiteLayout>
      <article className="space-y-14">
        <header className="space-y-5">
          <Picture src={hero} alt="Physiotherapist working with a patient" priority className="rounded-2xl" ratio="aspect-[16/9]" />
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Career and profession hub</p>
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl">Explore physiotherapy in Nigeria</h1>
          <p className="text-lg leading-8 text-muted-foreground">
            Physiotherapy helps people develop, maintain and restore movement and functional ability throughout life. Discover what the profession involves, its specialties, how to study it in Nigeria and whether it might suit you.
          </p>
          <nav aria-label="On this page" className="flex flex-wrap gap-2">
            {sections.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="rounded-full border border-accent px-3 py-1.5 text-sm font-medium text-accent hover:bg-teal-soft">
                {s.label}
              </a>
            ))}
          </nav>
        </header>

        <section id="discover" className="scroll-mt-24 space-y-5">
          <h2 className="text-2xl font-bold">Discover physiotherapy</h2>
          <div className="card space-y-3">
            <p className="leading-7">Physiotherapists <strong>assess</strong> movement, strength, balance and function; help people <strong>manage</strong> pain, injury, disability and long-term conditions; support <strong>prevention</strong> through activity and education; and use <strong>interventions</strong> such as exercise, functional training, education and, where appropriate, manual techniques.</p>
            <p className="leading-7">The aim is practical: helping people move, work, care for themselves, stay independent and take part in life with a better quality of life.</p>
          </div>

          <h3 className="text-xl font-bold">How physiotherapy differs from related professions</h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {compare.map((c) => (
              <div key={c.role} className="card space-y-1">
                <p className="font-bold text-primary">{c.role}</p>
                <p className="text-sm leading-6 text-muted-foreground">{c.text}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">These professions overlap and frequently work together as one team around the patient.</p>

          <h3 className="text-xl font-bold">A typical patient journey</h3>
          <ol className="relative space-y-4 border-l-2 border-accent pl-6">
            {journey.map((j, i) => (
              <li key={j.title} className="relative">
                <span className="absolute -left-[2.15rem] flex h-7 w-7 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground">{i + 1}</span>
                <p className="font-semibold">{j.title}</p>
                <p className="text-sm leading-6 text-muted-foreground">{j.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="specialties" className="scroll-mt-24 space-y-5">
          <h2 className="text-2xl font-bold">Explore physiotherapy specialties</h2>
          <p className="text-muted-foreground">These are examples of practice areas. Many physiotherapists work across more than one.</p>
          <div className="grid gap-4 sm:grid-cols-2">
            {specialties.map((s) => <SpecialtyCard key={s.title} specialty={s} />)}
          </div>
        </section>

        
<section id="study" className="scroll-mt-24 space-y-6">
  <div className="space-y-3">
    <p className="text-sm font-semibold uppercase tracking-wider text-accent">
      Your education pathway
    </p>
    <h2 className="text-2xl font-bold">
      Study Physiotherapy in Nigeria
    </h2>
    <p className="max-w-3xl leading-7 text-muted-foreground">
      Physiotherapy combines medical science, movement, rehabilitation and
      patient care. Studying it requires more than reading textbooks:
      students develop practical skills, learn clinical reasoning and gain
      supervised experience with people who have different health needs.
      The pathway below can help you understand what to investigate before
      applying.
    </p>
  </div>

  <div className="grid gap-4 sm:grid-cols-2">
    {[
      {
        number: "01",
        title: "Choose a recognised programme",
        text: "Identify Nigerian universities offering Physiotherapy. Check the current programme status, admission information, curriculum and available clinical training facilities. Do not rely on an old admission advert or an unofficial social media post.",
      },
      {
        number: "02",
        title: "Understand admission requirements",
        text: "Review the current JAMB UTME subject combination, O'Level requirements, accepted examination sittings and university-specific conditions. Biology, Chemistry and Physics are commonly relevant science subjects, but you must verify the exact requirements for your chosen university and admission year. Direct Entry applicants should check the applicable conditions separately.",
      },
      {
        number: "03",
        title: "Prepare for the academic workload",
        text: "Expect to study subjects such as anatomy, physiology, pathology, biomechanics, kinesiology, exercise therapy, electrotherapy and clinical assessment. The exact course structure and duration vary by programme and must be confirmed with the university.",
      },
      {
        number: "04",
        title: "Develop practical skills",
        text: "Learning includes movement analysis, patient communication, examination techniques, exercise prescription, clinical reasoning, professional ethics and safe handling. Practical competence develops through teaching, practice, feedback and supervision.",
      },
      {
        number: "05",
        title: "Take clinical placements seriously",
        text: "Clinical education helps students connect classroom knowledge with real patient care. Placements may expose students to musculoskeletal, neurological, paediatric, cardiorespiratory and other rehabilitation settings, depending on the programme and placement opportunities.",
      },
      {
        number: "06",
        title: "Confirm the graduation-to-practice pathway",
        text: "Graduation alone should not be assumed to authorise independent practice. Confirm the current requirements for internship, registration and professional practice directly with the relevant university and the Medical Rehabilitation Therapists (Registration) Board of Nigeria (MRTB).",
      },
    ].map((step) => (
      <article key={step.number} className="card space-y-3">
        <div className="flex items-start gap-3">
          <span
            className="flex size-10 shrink-0 items-center justify-center rounded-full bg-teal-soft font-bold text-accent"
            aria-hidden="true"
          >
            {step.number}
          </span>
          <h3 className="pt-1 text-lg font-bold">{step.title}</h3>
        </div>
        <p className="text-sm leading-7 text-muted-foreground">
          {step.text}
        </p>
      </article>
    ))}
  </div>

  <div className="space-y-4 rounded-xl border bg-card p-5 sm:p-6">
    <h3 className="text-xl font-bold">
      What should you check before applying?
    </h3>
    <p className="leading-7 text-muted-foreground">
      Use this checklist when comparing universities. Admission requirements
      and professional rules can change, so confirm the latest information
      before making a decision.
    </p>

    <ul className="space-y-3">
      {[
        "The university currently offers the Physiotherapy programme.",
        "The programme's approval and accreditation status have been verified through the appropriate official bodies.",
        "The current JAMB subject combination and O'Level requirements are clear.",
        "The university's current cut-off mark and additional admission conditions have been checked.",
        "The curriculum, practical facilities and clinical placement arrangements have been reviewed.",
        "The university can explain the current graduation, internship and professional registration pathway.",
        "The total cost, accommodation options and other study expenses have been considered.",
      ].map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span
            className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full border border-accent text-xs text-accent"
            aria-hidden="true"
          >
            ✓
          </span>
          <span className="text-sm leading-6">{item}</span>
        </li>
      ))}
    </ul>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-bold">
      Official resources for prospective students
    </h3>
    <div className="grid gap-3 sm:grid-cols-3">
      {[
        {
          title: "Joint Admissions and Matriculation Board",
          acronym: "JAMB",
          text: "Check current admission guidance and UTME information.",
          url: "https://www.jamb.gov.ng",
        },
        {
          title: "National Universities Commission",
          acronym: "NUC",
          text: "Consult official university and programme information.",
          url: "https://www.nuc.edu.ng",
        },
        {
          title: "Medical Rehabilitation Therapists Board",
          acronym: "MRTB",
          text: "Check professional registration and regulatory guidance.",
          url: "https://mrtb.gov.ng",
        },
      ].map((resource) => (
        <article key={resource.acronym} className="card space-y-3">
          <p className="text-sm font-semibold text-accent">
            {resource.acronym}
          </p>
          <h4 className="font-bold">{resource.title}</h4>
          <p className="text-sm leading-6 text-muted-foreground">
            {resource.text}
          </p>
          <a
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center font-semibold text-accent underline underline-offset-4"
          >
            Visit official website ↗
          </a>
        </article>
      ))}
    </div>
  </div>

  <div className="rounded-xl border-l-4 border-accent bg-teal-soft p-4">
    <h3 className="font-bold">A final piece of advice</h3>
    <p className="mt-2 text-sm leading-7">
      Choose a programme based on verified information, not only its
      popularity or location. Speak with the university's admissions office
      and, where possible, current students or practising physiotherapists.
      This section is an educational guide, not an official admission notice
      or guarantee of eligibility.
    </p>
  </div>
</section>


        
<section id="careers" className="scroll-mt-24 space-y-6">
  <div className="space-y-3">
    <p className="text-sm font-semibold uppercase tracking-wider text-accent">
      Build your future
    </p>
    <h2 className="text-2xl font-bold">
      Career opportunities and work settings
    </h2>
    <p className="max-w-3xl leading-7 text-muted-foreground">
      Physiotherapy offers different ways to contribute to health and
      rehabilitation. Your daily responsibilities depend on your training,
      experience, work setting and professional scope. You may work directly
      with patients, support injury prevention, educate communities,
      contribute to research or help improve healthcare services.
    </p>
  </div>

  <Picture
    src={imgDesk}
    alt="Workplace desk set-up, an example of ergonomics work"
    ratio="aspect-[16/7]"
    className="rounded-xl"
  />

  <div className="grid gap-3 sm:grid-cols-2">
    {workSettings.map((w) => (
      <div key={w.title} className="card space-y-2">
        <p className="font-bold">{w.title}</p>
        <p className="text-sm leading-6 text-muted-foreground">
          <strong>Example tasks:</strong> {w.tasks}
        </p>
      </div>
    ))}
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-bold">
      What can a physiotherapist do in these settings?
    </h3>

    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {[
        {
          title: "Clinical assessment and rehabilitation",
          text: "Assess movement, strength, balance, function and activity limitations; agree goals with patients; deliver appropriate rehabilitation; and monitor progress.",
        },
        {
          title: "Prevention and health education",
          text: "Teach safe movement, physical activity, injury prevention, workplace ergonomics and practical ways to maintain function.",
        },
        {
          title: "Sports and performance support",
          text: "Contribute to injury rehabilitation, graded return to sport, physical conditioning and collaboration with coaches and other healthcare professionals.",
        },
        {
          title: "Community and home-based care",
          text: "Support people living with disability or long-term conditions, identify barriers to participation and help improve independence in daily activities.",
        },
        {
          title: "Teaching and research",
          text: "Support student learning, develop educational resources, participate in research and use evidence to improve rehabilitation practice.",
        },
        {
          title: "Health technology and entrepreneurship",
          text: "Contribute to digital health education, accessible rehabilitation resources, service development and responsible healthcare innovation.",
        },
      ].map((role) => (
        <article key={role.title} className="card space-y-2">
          <h4 className="font-bold">{role.title}</h4>
          <p className="text-sm leading-7 text-muted-foreground">
            {role.text}
          </p>
        </article>
      ))}
    </div>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-bold">
      Skills that support career growth
    </h3>
    <p className="leading-7 text-muted-foreground">
      Clinical knowledge is essential, but effective physiotherapy also
      requires sound judgement, communication, teamwork and a commitment
      to learning.
    </p>

    <div className="grid gap-3 sm:grid-cols-2">
      {[
        {
          title: "Clinical reasoning",
          text: "Connect assessment findings with relevant evidence, identify priorities and recognise when referral is necessary.",
        },
        {
          title: "Communication and empathy",
          text: "Listen carefully, explain information in understandable language and involve patients in decisions about their care.",
        },
        {
          title: "Evidence-informed practice",
          text: "Read research critically, consult relevant guidelines and combine evidence with clinical expertise and patient preferences.",
        },
        {
          title: "Teamwork and professionalism",
          text: "Collaborate with other professionals, respect confidentiality, maintain appropriate boundaries and practise within your competence.",
        },
        {
          title: "Documentation and organisation",
          text: "Keep accurate clinical records, set measurable goals, monitor outcomes and manage time and responsibilities appropriately.",
        },
        {
          title: "Digital and business skills",
          text: "Use appropriate digital tools, communicate health information responsibly and understand service management where relevant to your role.",
        },
      ].map((skill) => (
        <article key={skill.title} className="card space-y-2">
          <h4 className="font-bold">{skill.title}</h4>
          <p className="text-sm leading-7 text-muted-foreground">
            {skill.text}
          </p>
        </article>
      ))}
    </div>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-bold">
      How can a physiotherapy career develop?
    </h3>
    <p className="leading-7 text-muted-foreground">
      Career development is not always a straight line. Opportunities depend
      on qualifications, experience, available positions, professional
      requirements and personal interests.
    </p>

    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {[
        {
          stage: "01",
          title: "Graduate",
          text: "Build a strong foundation in clinical knowledge, professional conduct and supervised practice.",
        },
        {
          stage: "02",
          title: "Early-career clinician",
          text: "Strengthen assessment, treatment planning, documentation and communication skills while seeking feedback and mentorship.",
        },
        {
          stage: "03",
          title: "Develop an area of interest",
          text: "Gain further experience in a clinical area and pursue relevant training or postgraduate education where appropriate.",
        },
        {
          stage: "04",
          title: "Broaden your contribution",
          text: "Explore opportunities in advanced clinical responsibilities, teaching, research, management, community services or entrepreneurship.",
        },
      ].map((stage) => (
        <article key={stage.stage} className="card space-y-3">
          <span
            className="flex size-10 items-center justify-center rounded-full bg-teal-soft font-bold text-accent"
            aria-hidden="true"
          >
            {stage.stage}
          </span>
          <h4 className="font-bold">{stage.title}</h4>
          <p className="text-sm leading-7 text-muted-foreground">
            {stage.text}
          </p>
        </article>
      ))}
    </div>
  </div>

  <div className="card space-y-3">
    <h3 className="text-xl font-bold">Growing your career</h3>
    <p className="leading-7">
      Continuing professional development (CPD) helps physiotherapists keep
      their knowledge and skills current. Depending on your goals, this may
      include courses, professional workshops, mentorship, postgraduate
      study, research, teaching or leadership development.
    </p>
    <p className="leading-7 text-muted-foreground">
      Before pursuing a specialisation, additional qualification or private
      practice, check the relevant professional requirements and make sure
      your activities remain within your competence and scope of practice.
      Job availability and income vary by location, setting, experience and
      other factors; no particular outcome is guaranteed.
    </p>
  </div>
</section>

        <section id="practice" className="scroll-mt-24 space-y-5">
          <h2 className="text-2xl font-bold">Professional practice and regulation</h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {[
              ["Ethics and accountability", "Acting honestly and taking responsibility for your decisions."],
              ["Informed consent", "Explaining options, benefits and risks so the person can choose freely."],
              ["Confidentiality", "Protecting personal health information."],
              ["Safe, patient-centred care", "Putting the person's safety, values and goals first."],
              ["Multidisciplinary teamwork", "Working with doctors, nurses, therapists and others."],
              ["Evidence-informed decisions", "Combining research, clinical experience and patient preferences."],
              ["Boundaries and referral", "Recognising when a problem is outside your competence and referring."],
              ["Regulation (MRTB)", "In Nigeria, the MRTB registers and regulates physiotherapists and other medical rehabilitation therapists."],
            ].map(([t, d]) => (
              <li key={t} className="card space-y-1">
                <p className="font-bold">{t}</p>
                <p className="text-sm leading-6 text-muted-foreground">{d}</p>
              </li>
            ))}
          </ul>

          <h3 className="text-xl font-bold">Ethical scenarios</h3>
          <div className="space-y-4">
            {scenarios.map((s, i) => {
              const pick = picks[i];
              return (
                <fieldset key={s.q} className="card space-y-3">
                  <legend className="sr-only">Scenario {i + 1}</legend>
                  <p className="font-semibold">Scenario {i + 1}: {s.q}</p>
                  <div className="space-y-2">
                    {s.options.map((o, j) => {
                      const state = pick === null ? "" : j === s.correct ? "border-accent bg-teal-soft" : j === pick ? "border-destructive" : "";
                      return (
                        <button
                          key={o}
                          type="button"
                          aria-pressed={pick === j}
                          onClick={() => setPicks(picks.map((p, k) => (k === i ? j : p)))}
                          className={`block w-full rounded-lg border p-3 text-left text-sm ${state}`}
                        >
                          {o}
                        </button>
                      );
                    })}
                  </div>
                  {pick !== null && (
                    <p role="status" className="text-sm leading-6">
                      <strong>{pick === s.correct ? "Good choice." : "Not the best option."}</strong> {s.why}
                    </p>
                  )}
                </fieldset>
              );
            })}
          </div>
          <p className="text-sm text-muted-foreground">These examples illustrate general principles and do not replace official MRTB or professional guidance.</p>
        </section>

        <section id="quiz" className="scroll-mt-24 space-y-5">
          <h2 className="text-2xl font-bold">Is physiotherapy right for you?</h2>
          <p className="text-muted-foreground">A short reflection exercise. It cannot measure your personality or decide your career for you. Your answers stay on your device.</p>
          <div className="space-y-3">
            {quiz.map((q, i) => (
              <fieldset key={q} className="card space-y-2">
                <legend className="font-semibold">{q}</legend>
                <div className="flex flex-wrap gap-2">
                  {scale.map((label, v) => (
                    <button
                      key={label}
                      type="button"
                      aria-pressed={answers[i] === v}
                      onClick={() => { setAnswers(answers.map((a, k) => (k === i ? v : a))); setShowSummary(false); }}
                      className={`btn ${answers[i] === v ? "btn-primary" : "btn-outline"}`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </fieldset>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <button type="button" className="btn btn-primary" disabled={!done} onClick={() => setShowSummary(true)}>
              {done ? "See my summary" : "Answer all questions to continue"}
            </button>
            <button type="button" className="btn btn-outline" onClick={() => { setAnswers(quiz.map(() => null)); setShowSummary(false); }}>
              Restart quiz
            </button>
          </div>
          {showSummary && done && (
            <div role="status" className="card space-y-2 border-l-4 border-accent">
              <p className="font-bold">Your summary</p>
              <p className="leading-7">
                {score >= max * 0.7
                  ? "Many of your interests match common parts of physiotherapy work. It may be worth exploring further, for example by talking to a physiotherapist or visiting a clinic."
                  : score >= max * 0.4
                    ? "Some of your interests match parts of physiotherapy. Learning more about daily work in different settings could help you decide."
                    : "Fewer of your current interests match typical physiotherapy work. Interests can change, and other health or science careers may also be worth exploring."}
              </p>
              {low.length > 0 && (
                <p className="text-sm text-muted-foreground">Areas to reflect on: {low.join(" ")}</p>
              )}
              <p className="text-sm text-muted-foreground">This is not a test of ability or a guarantee of success.</p>
            </div>
          )}
        </section>

        <section id="faq" className="scroll-mt-24 space-y-4">
          <h2 className="text-2xl font-bold">Frequently asked questions</h2>
          {faqs.map((f) => (
            <details key={f.q} className="card">
              <summary className="cursor-pointer font-semibold text-primary">{f.q}</summary>
              <p className="mt-3 leading-7">{f.a}</p>
            </details>
          ))}
        </section>

        <section id="references" className="scroll-mt-24 space-y-4">
          <h2 className="text-2xl font-bold">References and useful links</h2>
          {references.map((g) => (
            <div key={g.group} className="space-y-2">
              <h3 className="font-bold">{g.group}</h3>
              <ul className="space-y-2">
                {g.items.map((r) => (
                  <li key={r.url} className="text-sm leading-6">
                    <a href={r.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-accent underline underline-offset-2">{r.title}</a>
                    <span className="text-muted-foreground"> — {r.note}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <p className="text-sm text-muted-foreground">Check university admission pages directly for programme-specific requirements.</p>
        </section>

        <section className="space-y-4 rounded-xl border bg-card p-5">
          <h2 className="text-xl font-bold">Continue exploring</h2>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link to="/guides/$slug" params={{ slug: "low-back-pain" }} className="btn btn-primary">Explore health guides</Link>
            <Link to="/checker" className="btn btn-outline">Visit the safety checker</Link>
            <Link to="/" className="btn btn-outline">Back to homepage</Link>
          </div>
        </section>

        <Disclaimer />
      </article>
    </SiteLayout>
  );
}

function SpecialtyCard({ specialty: s }: { specialty: (typeof specialties)[number] }) {
  const [expanded, setExpanded] = useState(false);
  const detail = specialtyDetails[s.title];
  if (!detail) return null;
  const headingId = `specialty-heading-${detail.id}`;
  const panelId = `specialty-detail-${detail.id}`;

  return (
    <div className="card self-start overflow-hidden p-0">
      <Picture src={s.img} alt={s.alt} ratio="aspect-[16/9]" />
      <div className="space-y-3 p-5">
        <h3 id={headingId} className="text-lg font-bold">{s.title}</h3>
        <p className="text-sm leading-6"><strong>Focus:</strong> {s.focus}</p>
        <p className="text-sm leading-6"><strong>Common problems:</strong> {s.conditions}</p>
        <Button
          type="button"
          variant="outline"
          className="min-h-12 whitespace-normal border-accent text-accent hover:bg-teal-soft hover:text-accent"
          aria-expanded={expanded}
          aria-controls={panelId}
          onClick={() => setExpanded((current) => !current)}
        >
          {expanded ? "Show less" : "Click to see more"}
          {expanded ? <ChevronUp aria-hidden="true" /> : <ChevronDown aria-hidden="true" />}
        </Button>
        <section id={panelId} aria-labelledby={headingId} hidden={!expanded}>
          <div className="space-y-5 border-t pt-5 text-sm leading-6 motion-safe:animate-in motion-safe:fade-in motion-safe:duration-200">
            <p className="border-l-4 border-accent bg-teal-soft p-3">Educational examples, not a diagnosis or an individual treatment plan. Assessment and rehabilitation are adapted by qualified professionals within their scope.</p>
            {detail.sections.map((section) => (
              <div key={section.title} className="space-y-2">
                <h4 className="font-semibold text-primary">{section.title}</h4>
                <p>{section.text}</p>
              </div>
            ))}
            <div className="space-y-2">
              <h4 className="font-semibold text-primary">Practical clinical example</h4>
              <p><strong>Scenario:</strong> {s.scenario}</p>
              <p><strong>Rehabilitation focus:</strong> {s.goals}</p>
              <p className="text-muted-foreground">The clinician agrees meaningful goals with the person, assesses safety and reviews progress before changing activity or support.</p>
            </div>
            <div className="space-y-2 border-l-4 border-destructive bg-danger-soft p-3">
              <h4 className="font-semibold text-destructive">When referral or urgent medical assessment is needed</h4>
              <p>{detail.referral}</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-primary">Further learning and references</h4>
              <ul className="list-disc space-y-2 pl-5">
                {detail.references.map((reference) => (
                  <li key={reference.url}>
                    <a href={reference.url} target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2">{reference.title}</a>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground">These sources cover selected conditions and principles, not every aspect of the specialty. International guidance must be considered alongside Nigerian professional scope and local referral services.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
