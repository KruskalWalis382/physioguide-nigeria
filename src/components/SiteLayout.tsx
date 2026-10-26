import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { ArrowUpRight, Menu, X, ShieldCheck, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const primaryNav = [
  { to: "/", label: "Home" },
  { to: "/conditions", label: "Conditions" },
  { to: "/about", label: "Explore physiotherapy" },
  { to: "/learning", label: "Learning" },
] as const;
const resources = [
  { to: "/movement", label: "Movement & exercise" },
  { to: "/workout", label: "Workout planner" },
  { to: "/posture", label: "Healthy habits" },
  { to: "/faq", label: "FAQs" },
  { to: "/contact", label: "Contact" },
] as const;
const guideLinks = [
  { slug: "low-back-pain", label: "Back pain" },
  { slug: "knee-pain", label: "Knee pain" },
  { slug: "neck-pain", label: "Neck pain" },
];

export function Logo() {
  return <Link to="/" className="site-logo" aria-label="PhysioGuide Nigeria home"><img src="/logo-horizontal-light.svg" alt="PhysioGuide Nigeria logo" width={300} height={64} /></Link>;
}

export function SiteLayout({ children, appearance = "reading" }: { children: ReactNode; appearance?: "reading" | "aurora" }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`site-shell ${appearance === "aurora" ? "aurora-theme" : "reading-theme"}`}>
      <a href="#main" className="skip-link">Skip to content</a>
      <header className="site-header site-chrome">
        <div className="header-inner">
          <Logo />
          <nav className="desktop-nav" aria-label="Main">
            {primaryNav.map(n => <Link key={n.to} to={n.to} className="nav-link" activeProps={{ className: "nav-link is-active" }} activeOptions={{ exact: true }}>{n.label}</Link>)}
            <details className="resource-menu">
              <summary className="nav-link">Resources <ChevronDown size={14} aria-hidden="true" /></summary>
              <div className="resource-dropdown">
                {resources.map(n => <Link key={n.to} to={n.to} className="nav-link" onClick={e => e.currentTarget.closest("details")?.removeAttribute("open")}>{n.label}</Link>)}
                <div className="dropdown-divider" />
                {guideLinks.map(g => <Link key={g.slug} to="/guides/$slug" params={{ slug: g.slug }} className="nav-link" onClick={e => e.currentTarget.closest("details")?.removeAttribute("open")}>{g.label}</Link>)}
              </div>
            </details>
          </nav>
          <Button asChild variant="glass" className="header-checker"><Link to="/checker"><ShieldCheck aria-hidden="true" /> Safety checker <ArrowUpRight aria-hidden="true" /></Link></Button>
          <Button variant="ghost" size="icon" className="mobile-toggle" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
        </div>
        {open && <nav id="main-nav" className="mobile-nav" aria-label="Main">
          {[...primaryNav, { to: "/checker", label: "Safety checker" } as const, ...resources].map(n => <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="nav-link" activeProps={{ className: "nav-link is-active" }} activeOptions={{ exact: true }}>{n.label}<ArrowUpRight size={16} aria-hidden="true" /></Link>)}
          {guideLinks.map(g => <Link key={g.slug} to="/guides/$slug" params={{ slug: g.slug }} onClick={() => setOpen(false)} className="nav-link">{g.label}<ArrowUpRight size={16} aria-hidden="true" /></Link>)}
        </nav>}
      </header>
      <main id="main" className={appearance === "aurora" ? "homepage-main" : "reading-main"}>{children}</main>
      <footer className="site-footer site-chrome">
        <div className="footer-inner">
          <div className="footer-top"><Logo /><p>Movement. Knowledge. Possibility.</p><Link to="/contact" className="footer-contact">Contact <ArrowUpRight size={16} aria-hidden="true" /></Link></div>
          <div className="footer-links">{[...primaryNav.slice(1), ...resources, { to: "/checker", label: "Safety checker" } as const].map(n => <Link key={n.to} to={n.to}>{n.label}</Link>)}</div>
          <p>This website provides general educational information about common muscle and joint pain. It does not diagnose, treat or replace assessment by a qualified health professional such as a physiotherapist or doctor. In an emergency, go to the nearest hospital emergency department immediately.</p>
          <p>We do not collect your name, contact details or health answers. The safety checker runs only on your phone and nothing is sent anywhere.</p>
          <div className="footer-bottom"><span>© {new Date().getFullYear()} PhysioGuide Nigeria</span><span>Education, not diagnosis.</span></div>
        </div>
      </footer>
    </div>
  );
}

export function Disclaimer() {
  return <p className="rounded-lg border-l-4 border-accent bg-teal-soft p-4 text-sm"><strong>Educational information only.</strong> This is not a diagnosis or treatment plan. If you are worried, please see a physiotherapist, doctor or other qualified health professional.</p>;
}
