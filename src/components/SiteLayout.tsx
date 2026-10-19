import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/guides/low-back-pain", label: "Back pain" },
  { to: "/guides/knee-pain", label: "Knee pain" },
  { to: "/guides/neck-pain", label: "Neck pain" },
  { to: "/checker", label: "Safety checker" },
  { to: "/movement", label: "Movement" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2 no-underline" aria-label="PhysioGuide Nigeria home">
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-lg font-bold text-accent-foreground">P</span>
      <span className="text-lg font-bold leading-tight text-primary-foreground">
        PhysioGuide <span className="font-normal opacity-80">Nigeria</span>
      </span>
    </Link>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex min-h-screen flex-col">
      <a href="#main" className="sr-only focus:not-sr-only focus:p-2">Skip to content</a>
      <header className="sticky top-0 z-20 bg-primary">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <Logo />
          <button
            className="btn rounded-lg border border-primary-foreground/40 text-primary-foreground lg:hidden"
            aria-expanded={open}
            aria-controls="main-nav"
            onClick={() => setOpen(!open)}
          >
            {open ? "Close" : "Menu"}
          </button>
          <nav className="hidden lg:block" aria-label="Main">
            <ul className="flex gap-1">
              {nav.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="rounded-md px-2 py-2 text-sm text-primary-foreground/85 hover:text-primary-foreground" activeProps={{ className: "underline underline-offset-4 text-primary-foreground" }} activeOptions={{ exact: true }}>
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        {open && (
          <nav id="main-nav" className="border-t border-primary-foreground/20 lg:hidden" aria-label="Main">
            <ul className="mx-auto max-w-5xl px-2 py-2">
              {nav.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} onClick={() => setOpen(false)} className="block rounded-md px-3 py-3 text-primary-foreground" activeProps={{ className: "bg-primary-foreground/10 font-semibold" }} activeOptions={{ exact: true }}>
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      <main id="main" className="mx-auto w-full max-w-3xl flex-1 px-4 py-8">{children}</main>

      <footer className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-3xl space-y-3 px-4 py-8 text-sm">
          <p className="font-bold">PhysioGuide Nigeria</p>
          <p className="opacity-90">
            This website provides general educational information about common muscle and joint pain. It does not diagnose, treat or replace assessment by a qualified health professional such as a physiotherapist or doctor. In an emergency, go to the nearest hospital emergency department immediately.
          </p>
          <p className="opacity-90">We do not collect your name, contact details or health answers. The safety checker runs only on your phone and nothing is sent anywhere.</p>
          <p className="opacity-75">© {new Date().getFullYear()} PhysioGuide Nigeria</p>
        </div>
      </footer>
    </div>
  );
}

export function Disclaimer() {
  return (
    <p className="rounded-lg border-l-4 border-accent bg-teal-soft p-4 text-sm">
      <strong>Educational information only.</strong> This is not a diagnosis or treatment plan. If you are worried, please see a physiotherapist, doctor or other qualified health professional.
    </p>
  );
}
