import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout, Disclaimer } from "@/components/SiteLayout";
import { Picture } from "@/components/Picture";
import { buildPlan, type Days, type Level } from "@/lib/workout";
import hero from "@/assets/workout-hero.jpg";
import squat from "@/assets/ex-squat.jpg";
import pushup from "@/assets/ex-pushup.jpg";
import bridge from "@/assets/ex-bridge.jpg";
import lunge from "@/assets/ex-lunge.jpg";
import tableRow from "@/assets/ex-table-row.jpg";
import backpackRow from "@/assets/ex-backpack-row.jpg";

export const Route = createFileRoute("/workout")({
  head: () => ({
    meta: [
      { title: "Home workout planner — PhysioGuide Nigeria" },
      { name: "description", content: "Build a simple weekly strength routine at home with no equipment, using a chair, table or backpack." },
      { property: "og:title", content: "Home workout planner — PhysioGuide Nigeria" },
      { property: "og:description", content: "A simple weekly home strength routine with pictures of each exercise." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Workout,
});

const exercises = [
  { img: squat, name: "Chair squat / squat", how: "Feet hip-width apart. Sit back towards a chair and stand up again, keeping knees in line with toes." },
  { img: pushup, name: "Push-up", how: "Hands on a wall or table to start. Lower your chest with a straight body, then push back up." },
  { img: bridge, name: "Glute bridge", how: "Lie on your back, knees bent. Squeeze your buttocks and lift your hips, then lower slowly." },
  { img: lunge, name: "Reverse lunge", how: "Step one foot back and bend both knees gently. Push through the front foot to return. Hold a wall if needed." },
  { img: tableRow, name: "Table row", how: "Lie under a sturdy table, hold the edge and pull your chest up towards it. Only use a very strong table." },
  { img: backpackRow, name: "Backpack row", how: "Lean forward with a flat back, holding a backpack with books. Pull it towards your belly, then lower." },
];

function Workout() {
  const [level, setLevel] = useState<Level>("beginner");
  const [days, setDays] = useState<Days>(3);
  const plan = buildPlan(level, days);
  return (
    <SiteLayout>
      <div className="space-y-6">
        <Picture src={hero} alt="A young Nigerian woman doing a squat at home" priority className="rounded-xl" />
        <h1 className="text-3xl">Home workout planner</h1>
        <p>Choose your level and how many days a week you can train. The plan updates straight away. This is general fitness information, not treatment for pain or injury.</p>

        <fieldset className="card space-y-3">
          <legend className="font-semibold">Your level</legend>
          <div className="flex gap-2">
            {(["beginner", "intermediate"] as Level[]).map((l) => (
              <button key={l} type="button" aria-pressed={level === l} onClick={() => setLevel(l)} className={`btn flex-1 ${level === l ? "btn-accent" : "btn-outline"}`}>
                {l === "beginner" ? "Beginner" : "Intermediate"}
              </button>
            ))}
          </div>
          <p className="font-semibold">Days per week</p>
          <div className="flex gap-2">
            {([2, 3, 4] as Days[]).map((d) => (
              <button key={d} type="button" aria-pressed={days === d} onClick={() => setDays(d)} className={`btn flex-1 ${days === d ? "btn-accent" : "btn-outline"}`}>
                {d} days
              </button>
            ))}
          </div>
        </fieldset>

        <section className="card space-y-3" aria-live="polite">
          <h2 className="text-xl">Your week</h2>
          <p className="text-sm">{plan.sets} of {plan.reps} for each exercise. Rest {plan.restBetweenSets} between sets.</p>
          <ul className="space-y-3">
            {plan.days.map((d) => (
              <li key={d.day} className={`rounded-lg border p-3 ${d.rest ? "bg-muted" : ""}`}>
                <p className="font-semibold">{d.day}: <span className={d.rest ? "text-muted-foreground" : "text-accent"}>{d.focus}</span></p>
                {!d.rest && <ul className="mt-1 list-disc pl-5 text-sm">{d.exercises.map((e) => <li key={e}>{e}</li>)}</ul>}
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl">How to do each exercise</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {exercises.map((e) => (
              <div key={e.name} className="card overflow-hidden p-0">
                <Picture src={e.img} alt={`Person doing a ${e.name}`} />
                <div className="p-4">
                  <h3 className="text-lg">{e.name}</h3>
                  <p className="mt-1 text-sm">{e.how}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="card border-2 border-destructive bg-danger-soft">
          <p><strong>Stop</strong> if you feel chest pain, dizziness, severe shortness of breath or sharp pain. If you have a heart, lung or joint condition, are pregnant or recovering from injury, ask a health professional first.</p>
        </div>
        <Link to="/checker" className="btn btn-outline">Check warning signs first</Link>
        <Disclaimer />
      </div>
    </SiteLayout>
  );
}
