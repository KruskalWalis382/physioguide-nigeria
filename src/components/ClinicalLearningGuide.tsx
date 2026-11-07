import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, ShieldAlert } from "lucide-react";
import { SiteLayout, Disclaimer } from "@/components/SiteLayout";
import { Button } from "@/components/ui/button";
import { neckGuideLinks, type ClinicalGuide } from "@/lib/clinical-guide";

export function ClinicalLearningGuide({ guide }: { guide: ClinicalGuide }) {
  return (
    <SiteLayout appearance="aurora-page">
      <div className="space-y-10">
        <nav aria-label="Breadcrumb" className="flex flex-wrap gap-2 text-sm text-muted-foreground">
          <Link to="/conditions" className="hover:text-accent underline">Conditions</Link><span aria-hidden="true">/</span>
          <Link to="/conditions/$region" params={{ region: "neck-and-cervical-spine" }} className="hover:text-accent underline">Neck and Cervical Spine</Link>
        </nav>
        <header className="space-y-5 border-b border-border pb-8">
          <p className="eyebrow">Clinical learning · Neck and Cervical Spine</p>
          <h1 className="text-3xl leading-tight sm:text-4xl">{guide.title}</h1>
          <p className="max-w-3xl text-lg text-muted-foreground">{guide.description}</p>
          <Disclaimer />
          <p className="text-sm text-muted-foreground">For students, clinicians and interested readers. Examination and rehabilitation decisions require an appropriately qualified professional; these examples are not an individual exercise programme.</p>
        </header>
        <aside aria-label="Urgent referral information" className="rounded-lg border border-destructive bg-danger-soft p-5">
          <h2 className="flex items-center gap-2 text-xl"><ShieldAlert className="shrink-0 text-destructive" aria-hidden="true" /> Safety first</h2>
          <p className="mt-3">{guide.safety}</p>
        </aside>
        <div className="grid items-start gap-8 lg:grid-cols-[210px_minmax(0,1fr)]">
          <aside className="border-y border-border py-5 lg:sticky lg:top-24 lg:max-h-[75vh] lg:overflow-y-auto">
            <h2 className="text-lg">On this page</h2>
            <nav aria-label="Guide sections" className="mt-4 space-y-3">
              {guide.sections.map((section, i) => <a key={section.id} href={`#${section.id}`} className="block text-sm text-muted-foreground hover:text-accent">{i + 1}. {section.title}</a>)}
              <a href="#references" className="block text-sm text-muted-foreground hover:text-accent">16. Evidence and references</a>
            </nav>
          </aside>
          <article className="min-w-0 space-y-10">
            {guide.sections.map((section, i) => (
              <section key={section.id} id={section.id} className="scroll-mt-28 space-y-4 border-b border-border pb-8">
                <h2 className="text-2xl">{i + 1}. {section.title}</h2>
                {section.paragraphs.map((p) => <p key={p} className="leading-7">{p}</p>)}
                {section.bullets && <ul className="list-disc space-y-3 pl-5">{section.bullets.map(b => <li key={b}>{b}</li>)}</ul>}
                {section.table && <div role="region" aria-label={section.table.caption} tabIndex={0} className="overflow-x-auto rounded-lg border border-border">
                  <table className="w-full min-w-[560px] text-left text-sm">
                    <caption className="bg-secondary px-4 py-3 text-left font-semibold">{section.table.caption}</caption>
                    <thead className="bg-muted"><tr>{section.table.headings.map(h => <th key={h} scope="col" className="p-4 align-top">{h}</th>)}</tr></thead>
                    <tbody>{section.table.rows.map((row, rowIndex) => <tr key={rowIndex} className="border-t border-border">{row.map((cell, cellIndex) => cellIndex === 0 ? <th key={cellIndex} scope="row" className="p-4 align-top font-semibold">{cell}</th> : <td key={cellIndex} className="p-4 align-top leading-6">{cell}</td>)}</tr>)}</tbody>
                  </table>
                </div>}
                {section.note && <aside className="border-l-4 border-accent bg-teal-soft p-4 text-sm"><strong>Clinical interpretation. </strong>{section.note}</aside>}
                <p className="flex flex-wrap gap-2 text-xs text-muted-foreground">Sources: {section.sources.map(id => <a key={id} href={`#ref-${id}`} className="text-accent underline">[{id}]</a>)}</p>
              </section>
            ))}
            <section id="references" className="scroll-mt-28 space-y-5">
              <h2 className="text-2xl">16. Evidence and references</h2>
              <p>Guidelines support clinical decision-making, not automatic treatment selection. Evidence strength and limitations are described in the relevant sections. Research populations and access to investigations may differ from Nigerian practice; referral urgency should not be reduced because resources are limited.</p>
              <ol className="space-y-5">{guide.references.map(ref => <li key={ref.id} id={`ref-${ref.id}`} className="scroll-mt-28 text-sm"><span className="font-semibold">[{ref.id}] </span>{ref.citation}<a href={ref.url} target="_blank" rel="noopener noreferrer" className="mt-1 flex items-center gap-2 text-accent underline">Read source <ArrowUpRight size={14} aria-hidden="true" /><span className="sr-only">: {ref.citation} (opens in a new tab)</span></a></li>)}</ol>
            </section>
          </article>
        </div>
        <section className="border-t border-border pt-8">
          <h2 className="text-2xl">Continue learning</h2>
          <nav aria-label="Other neck guides" className="mt-4 flex flex-col items-start gap-4">{neckGuideLinks.filter(link => link.title !== guide.title).map(link => <Link key={link.to} to={link.to} className="text-accent underline">{link.title} →</Link>)}</nav>
          <Button asChild variant="glass" className="mt-6"><Link to="/conditions/$region" params={{ region: "neck-and-cervical-spine" }}><ArrowLeft aria-hidden="true" /> Back to Neck and Cervical Spine</Link></Button>
        </section>
        <Disclaimer />
      </div>
    </SiteLayout>
  );
}