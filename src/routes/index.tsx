import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Activity, BookOpen, GraduationCap, ShieldCheck, MoveUpRight, Dumbbell, HeartPulse, CircleHelp, LockKeyhole } from "lucide-react";
import { SiteLayout, Disclaimer } from "@/components/SiteLayout";
import { Button } from "@/components/ui/button";
import { Reveal, SectionHeading } from "@/components/Aurora";
import { guides } from "@/lib/guides";
import { Picture } from "@/components/Picture";
import hero from "@/assets/aurora-movement.jpg";
import physio from "@/assets/hero-physio.jpg";
import back from "@/assets/guide-back.jpg";
import knee from "@/assets/guide-knee.jpg";
import neck from "@/assets/guide-neck.jpg";
import workoutImg from "@/assets/workout-hero.jpg";
import deskImg from "@/assets/ergo-desk.jpg";

const guideImg: Record<string, string> = { "low-back-pain": back, "knee-pain": knee, "neck-pain": neck };
export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "PhysioGuide Nigeria — Movement, Knowledge & Health" },
    { name: "description", content: "Explore physiotherapy, understand common muscle and joint pain, and discover movement education and safety tools for Nigeria." },
    { property: "og:title", content: "PhysioGuide Nigeria — Movement, Knowledge & Health" },
    { property: "og:description", content: "Physiotherapy career discovery, clinical learning, and public health education for Nigeria." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});
const pathways = [
  { number: "01", icon: GraduationCap, title: "Explore the profession", category: "CAREER DISCOVERY", description: "Discover what physiotherapists do, where they work, and the opportunities the profession offers in Nigeria.", to: "/about" },
  { number: "02", icon: BookOpen, title: "Build your knowledge", category: "PROFESSIONAL LEARNING", description: "Build your understanding of anatomy, movement, clinical assessment, rehabilitation, and evidence-informed practice.", to: "/learning" },
  { number: "03", icon: Activity, title: "Understand your health", category: "CONDITIONS & HEALTH", description: "Understand common muscle and joint conditions, explore general self-care, and learn when to seek professional help.", to: "/conditions" },
] as const;

function Index() {
  return <SiteLayout appearance="aurora">
    <section className="home-hero" aria-labelledby="home-title">
      <img className="hero-image" src={hero} alt="A Nigerian woman performing a standing shoulder mobility stretch in a glass studio" width={1920} height={1024} fetchPriority="high" />
      <div className="hero-shade" aria-hidden="true" />
      <div className="hero-inner">
        <div className="hero-copy">
          <p className="eyebrow hero-enter"><span className="status-dot" /> KNOWLEDGE THAT MOVES YOU</p>
          <h1 id="home-title" className="hero-enter">PhysioGuide<br /><span>Nigeria.</span></h1>
          <p className="hero-intro hero-enter">Understand your body.<br />Explore the science of movement.</p>
          <p className="hero-description hero-enter">A space for everyone to discover physiotherapy, build knowledge, and make informed decisions about their health.</p>
          <div className="hero-actions hero-enter"><Button asChild variant="aurora" size="lg"><Link to="/conditions">Explore conditions <ArrowUpRight aria-hidden="true" /></Link></Button><Button asChild variant="glass" size="lg"><Link to="/checker"><ShieldCheck aria-hidden="true" /> Safety checker</Link></Button></div>
          <p className="hero-note hero-enter"><LockKeyhole size={14} aria-hidden="true" /> Educational. Private. Free to explore.</p>
        </div>
        <div className="hero-caption"><Activity size={20} aria-hidden="true" /><div><span>THE HUMAN POTENTIAL</span><p>Made for movement.</p></div></div>
      </div>
      <div className="hero-bottom"><span>FOR THE CURIOUS. FOR THE LEARNERS. FOR EVERYONE.</span><a href="#pathways">Discover your pathway <ArrowRight size={16} aria-hidden="true" /></a></div>
    </section>

    <section id="pathways" className="home-section pathway-section">
      <Reveal><div className="section-top"><SectionHeading eyebrow="YOUR JOURNEY STARTS HERE" title="Different goals. One place to begin." /><p className="section-aside">For the people moving forward.<br />And the people helping them get there.</p></div>
      <div className="pathway-grid">{pathways.map(p => <Link key={p.number} to={p.to} className="pathway glass-surface"><div className="pathway-top"><p.icon size={26} aria-hidden="true" /><span>{p.number}</span></div><p className="eyebrow">{p.category}</p><h3>{p.title}</h3><p className="text-muted-foreground">{p.description}</p><span className="pathway-arrow"><ArrowUpRight size={21} aria-hidden="true" /><span className="sr-only">Explore {p.title}</span></span></Link>)}</div></Reveal>
    </section>

    <section id="health-guides" className="home-section conditions-section">
      <Reveal><div className="section-top"><SectionHeading eyebrow="A LITTLE UNDERSTANDING GOES A LONG WAY" title="Your body. Better understood.">Clear explanations of common muscle and joint problems, with practical information and guidance on when to seek care.</SectionHeading><Button asChild variant="glass"><Link to="/conditions">All conditions <ArrowUpRight aria-hidden="true" /></Link></Button></div>
      <div className="guide-grid">{guides.map((g, i) => <Link key={g.slug} to="/guides/$slug" params={{ slug: g.slug }} className="home-guide glass-surface"><div className="guide-photo"><Picture src={guideImg[g.slug] ?? physio} alt={`Educational photograph accompanying the ${g.title} guide`} ratio="aspect-[4/3]" /><span className="photo-label">CONDITION GUIDE / 0{i + 1}</span><span className="photo-arrow"><ArrowUpRight size={20} aria-hidden="true" /></span></div><div className="guide-copy"><h3>{g.title}</h3><p>{g.short}</p><span className="text-accent">Explore the guide <ArrowRight size={16} aria-hidden="true" /></span></div></Link>)}</div></Reveal>
    </section>

    <section id="tools" className="home-section tools-section">
      <Reveal><SectionHeading eyebrow="SMALL STEPS. MORE POSSIBILITIES." title="Put knowledge into motion.">Explore movement, everyday habits, and tools for more informed decisions.</SectionHeading>
      <div className="tool-grid">
        <Link to="/workout" className="feature-tool"><Picture src={workoutImg} alt="Woman exercising at home" ratio="aspect-[5/4]" /><div className="feature-tool-copy"><Dumbbell size={24} aria-hidden="true" /><p className="eyebrow">YOUR SPACE. YOUR PACE.</p><h3>Build your body.<br />No gym required.</h3><span>Open workout planner <ArrowUpRight size={18} aria-hidden="true" /></span></div></Link>
        <div className="tool-column"><Link to="/movement" className="compact-tool glass-surface"><MoveUpRight size={25} aria-hidden="true" /><div><h3>Movement & exercise</h3><p>Simple movement ideas, with clear safety information.</p></div><ArrowUpRight size={20} aria-hidden="true" /></Link><Link to="/posture" className="habits-tool glass-surface"><Picture src={deskImg} alt="Man working at a desk" ratio="aspect-square" /><div><p className="eyebrow">EVERYDAY WELLBEING</p><h3>Better habits.<br />Every day.</h3><span>Explore healthy habits <ArrowUpRight size={16} aria-hidden="true" /></span></div></Link><Link to="/faq" className="compact-tool glass-surface"><CircleHelp size={25} aria-hidden="true" /><div><h3>Questions, answered.</h3><p>Common questions about pain and physiotherapy.</p></div><ArrowUpRight size={20} aria-hidden="true" /></Link></div>
      </div></Reveal>
    </section>

    <section className="safety-band"><Reveal className="safety-inner"><div className="safety-symbol"><HeartPulse size={38} aria-hidden="true" /></div><div><p className="eyebrow">KNOW WHEN TO SEEK HELP</p><h2>Good information.<br />Safer decisions.</h2><p>Review warning signs and understand when to seek medical care. Our educational safety checker is not a diagnosis or a replacement for professional assessment.</p></div><div className="safety-action"><Button asChild variant="aurora" size="lg"><Link to="/checker">Review warning signs <ArrowUpRight aria-hidden="true" /></Link></Button><span><LockKeyhole size={14} aria-hidden="true" /> Your answers stay on your device.</span></div></Reveal></section>
    <div className="home-section home-disclaimer"><Disclaimer /></div>
  </SiteLayout>;
}
