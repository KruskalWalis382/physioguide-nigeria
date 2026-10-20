import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, Disclaimer } from "@/components/SiteLayout";
import { Picture } from "@/components/Picture";
import bridge from "@/assets/ex-bridge.jpg";

export const Route = createFileRoute("/movement")({
  head: () => ({
    meta: [
      { title: "Gentle movement information — PhysioGuide Nigeria" },
      { name: "description", content: "A few simple, low-risk movement examples with clear advice on when to stop." },
      { property: "og:title", content: "Gentle movement information — PhysioGuide Nigeria" },
      { property: "og:description", content: "Simple, low-risk movement ideas and when to stop." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Movement,
});

const moves = [
  { title: "Short walks", how: "Walk at a comfortable pace for a few minutes, once or twice a day. Increase slowly if it feels fine." },
  { title: "Shoulder rolls", how: "Sitting or standing tall, slowly roll your shoulders backwards in circles 5–10 times." },
  { title: "Gentle neck turns", how: "Slowly turn your head to look over one shoulder, as far as is comfortable, then the other. Repeat 5 times each side. Do not force it." },
  { title: "Knee to chest (lying)", how: "Lie on your back with knees bent. Gently hug one knee towards your chest, hold for a few breaths, then swap. Repeat 3–5 times." },
  { title: "Sit to stand", how: "From a firm chair, stand up slowly and sit back down with control. Use your hands if needed. Repeat 5 times." },
];

function Movement() {
  return (
    <SiteLayout>
      <div className="space-y-6">
        <Picture src={bridge} alt="Person doing a gentle exercise lying on a mat" priority className="rounded-xl" />
        <h1 className="text-3xl">Gentle movement information</h1>
        <p>Staying gently active is often helpful for common muscle and joint pain. Below are a few general, low-risk examples. They are <strong>not</strong> a personal exercise programme and are not based on the safety checker.</p>
        <div className="card space-y-2 border-2 border-destructive bg-danger-soft">
          <h2 className="text-xl text-destructive">Stop and seek advice if</h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>Your pain becomes clearly worse during or after moving</li>
            <li>You feel new numbness, tingling or weakness</li>
            <li>You feel dizzy, short of breath or have chest pain</li>
          </ul>
          <p className="text-sm">Do not try these if you have any emergency warning sign — seek urgent medical care instead.</p>
        </div>
        <ol className="space-y-4">
          {moves.map((m, i) => (
            <li key={m.title} className="card">
              <h3 className="text-lg"><span className="text-accent">{i + 1}.</span> {m.title}</h3>
              <p className="mt-1">{m.how}</p>
            </li>
          ))}
        </ol>
        <p className="text-muted-foreground">Mild discomfort can be normal when you start moving again, but it should settle quickly. A physiotherapist can give advice suited to you.</p>
        <Link to="/checker" className="btn btn-accent w-full sm:w-auto">Check warning signs first</Link>
        <Link to="/workout" className="btn btn-outline w-full sm:w-auto">Try the home workout planner</Link>
        <Disclaimer />
      </div>
    </SiteLayout>
  );
}
