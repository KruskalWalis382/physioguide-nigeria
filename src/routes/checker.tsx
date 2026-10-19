import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout, Disclaimer } from "@/components/SiteLayout";
import { concernSigns, emergencySigns, getResult, optionsFor, type Area, type Option } from "@/lib/checker";

export const Route = createFileRoute("/checker")({
  head: () => ({
    meta: [
      { title: "Pain safety checker — PhysioGuide Nigeria" },
      { name: "description", content: "An educational checker for warning signs with back, knee or neck pain. It does not diagnose." },
      { property: "og:title", content: "Pain safety checker — PhysioGuide Nigeria" },
      { property: "og:description", content: "Check for warning signs and learn when to seek care." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Checker,
});

const areas: { id: Area; label: string }[] = [
  { id: "back", label: "Lower back" },
  { id: "neck", label: "Neck" },
  { id: "knee", label: "Knee" },
  { id: "other", label: "Somewhere else" },
];

function CheckList({ options, selected, onToggle, noneLabel, none, onNone }: {
  options: Option[]; selected: string[]; onToggle: (id: string) => void;
  noneLabel: string; none: boolean; onNone: () => void;
}) {
  return (
    <div className="space-y-2">
      {options.map((o) => (
        <label key={o.id} className="card flex cursor-pointer items-start gap-3 p-4">
          <input type="checkbox" className="mt-1 h-5 w-5 accent-accent" checked={selected.includes(o.id)} onChange={() => onToggle(o.id)} />
          <span>{o.label}</span>
        </label>
      ))}
      <label className="card flex cursor-pointer items-start gap-3 p-4">
        <input type="checkbox" className="mt-1 h-5 w-5 accent-accent" checked={none} onChange={onNone} />
        <span className="font-semibold">{noneLabel}</span>
      </label>
    </div>
  );
}

function Checker() {
  const [step, setStep] = useState(0);
  const [area, setArea] = useState<Area | null>(null);
  const [emergency, setEmergency] = useState<string[]>([]);
  const [noEmergency, setNoEmergency] = useState(false);
  const [concerns, setConcerns] = useState<string[]>([]);
  const [noConcerns, setNoConcerns] = useState(false);

  const toggle = (list: string[], set: (v: string[]) => void, clearNone: () => void) => (id: string) => {
    clearNone();
    set(list.includes(id) ? list.filter((x) => x !== id) : [...list, id]);
  };

  const restart = () => {
    setStep(0); setArea(null); setEmergency([]); setNoEmergency(false); setConcerns([]); setNoConcerns(false);
    window.scrollTo(0, 0);
  };
  const go = (n: number) => { setStep(n); window.scrollTo(0, 0); };

  const emOpts = optionsFor(emergencySigns, area);
  const coOpts = optionsFor(concernSigns, area);
  const result = getResult(emergency, concerns);
  const label = (list: Option[], ids: string[]) => list.filter((o) => ids.includes(o.id)).map((o) => o.label);

  return (
    <SiteLayout>
      <div className="space-y-6">
        <h1 className="text-3xl">Safety checker</h1>
        {step === 0 && (
          <p className="text-muted-foreground">
            Answer a few questions about warning signs. This tool does <strong>not</strong> diagnose or recommend treatment — it only shows general safety advice. Your answers stay on your phone and are not sent anywhere.
          </p>
        )}
        <p className="text-sm font-semibold text-accent" aria-live="polite">
          {step < 3 ? `Step ${step + 1} of 3` : "Your safety information"}
        </p>

        {step === 0 && (
          <fieldset className="space-y-3">
            <legend className="mb-2 text-xl font-bold text-primary">Where is your main pain?</legend>
            {areas.map((a) => (
              <label key={a.id} className="card flex cursor-pointer items-center gap-3 p-4">
                <input type="radio" name="area" className="h-5 w-5 accent-accent" checked={area === a.id} onChange={() => { setArea(a.id); setEmergency([]); setConcerns([]); setNoEmergency(false); setNoConcerns(false); }} />
                <span>{a.label}</span>
              </label>
            ))}
            <button className="btn btn-primary w-full disabled:opacity-50" disabled={!area} onClick={() => go(1)}>Next</button>
            {!area && <p className="text-sm text-muted-foreground">Choose one option to continue.</p>}
          </fieldset>
        )}

        {step === 1 && (
          <fieldset className="space-y-3">
            <legend className="mb-2 text-xl font-bold text-primary">Do you have any of these right now? Tick all that apply.</legend>
            <CheckList options={emOpts} selected={emergency} onToggle={toggle(emergency, setEmergency, () => setNoEmergency(false))}
              noneLabel="None of these" none={noEmergency} onNone={() => { setNoEmergency(!noEmergency); setEmergency([]); }} />
            <div className="flex gap-3">
              <button className="btn btn-outline flex-1" onClick={() => go(0)}>Back</button>
              <button className="btn btn-primary flex-1 disabled:opacity-50" disabled={!noEmergency && emergency.length === 0} onClick={() => go(emergency.length ? 3 : 2)}>Next</button>
            </div>
          </fieldset>
        )}

        {step === 2 && (
          <fieldset className="space-y-3">
            <legend className="mb-2 text-xl font-bold text-primary">Do any of these apply to you? Tick all that apply.</legend>
            <CheckList options={coOpts} selected={concerns} onToggle={toggle(concerns, setConcerns, () => setNoConcerns(false))}
              noneLabel="None of these" none={noConcerns} onNone={() => { setNoConcerns(!noConcerns); setConcerns([]); }} />
            <div className="flex gap-3">
              <button className="btn btn-outline flex-1" onClick={() => go(1)}>Back</button>
              <button className="btn btn-primary flex-1 disabled:opacity-50" disabled={!noConcerns && concerns.length === 0} onClick={() => go(3)}>See result</button>
            </div>
          </fieldset>
        )}

        {step === 3 && (
          <section className="space-y-4" aria-live="polite">
            {result === "urgent" && (
              <div className="card space-y-3 border-2 border-destructive bg-danger-soft">
                <h2 className="text-2xl text-destructive">Seek urgent medical assessment now</h2>
                <p>You selected one or more possible emergency warning signs:</p>
                <ul className="list-disc pl-5">{label(emergencySigns, emergency).map((l) => <li key={l}>{l}</li>)}</ul>
                <p className="font-semibold">Please go to the nearest hospital emergency department today. Do not wait to see if it improves, and do not try exercises first.</p>
                <p className="text-sm">These signs do not mean you definitely have a serious problem, but they need to be checked by a doctor quickly.</p>
              </div>
            )}
            {result === "soon" && (
              <div className="card space-y-3 border-2 border-warning bg-warning-soft">
                <h2 className="text-2xl">Arrange a professional assessment</h2>
                <p>You selected:</p>
                <ul className="list-disc pl-5">{label(concernSigns, concerns).map((l) => <li key={l}>{l}</li>)}</ul>
                <p>It is sensible to see a doctor or physiotherapist soon to have this checked. If you get worse or any emergency warning sign appears, seek urgent care.</p>
              </div>
            )}
            {result === "general" && (
              <div className="card space-y-3 border-2 border-accent bg-teal-soft">
                <h2 className="text-2xl">No warning signs selected</h2>
                <p>Based on your answers, you did not select any of the warning signs listed. This does not rule out a problem — it only means none of these listed signs were ticked.</p>
                <p>You can read the general guides and movement information. If pain does not improve, gets worse, or you are worried, see a health professional. If any warning sign develops, seek urgent care.</p>
              </div>
            )}
            <div className="flex flex-col gap-3">
              {area && area !== "other" && (
                <Link to="/guides/$slug" params={{ slug: area === "back" ? "low-back-pain" : `${area}-pain` }} className="btn btn-outline">Read the {area === "back" ? "low back" : area} pain guide</Link>
              )}
              <button className="btn btn-primary" onClick={restart}>Start again</button>
            </div>
          </section>
        )}
        <Disclaimer />
      </div>
    </SiteLayout>
  );
}
