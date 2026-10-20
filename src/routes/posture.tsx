import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, Disclaimer } from "@/components/SiteLayout";
import { Picture } from "@/components/Picture";
import desk from "@/assets/ergo-desk.jpg";
import phone from "@/assets/ergo-phone.jpg";
import lifting from "@/assets/ergo-lifting.jpg";
import sleep from "@/assets/ergo-sleep.jpg";
import nutrition from "@/assets/nutrition.jpg";

export const Route = createFileRoute("/posture")({
  head: () => ({
    meta: [
      { title: "Everyday posture and healthy habits — PhysioGuide Nigeria" },
      { name: "description", content: "Simple tips for desk work, phone use, lifting, sleep and eating well to look after your muscles and joints." },
      { property: "og:title", content: "Everyday posture and healthy habits — PhysioGuide Nigeria" },
      { property: "og:description", content: "Practical daily habits for desk work, phones, lifting, sleep and food." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Posture,
});

const tips = [
  { img: desk, title: "Desk and laptop work", alt: "Nigerian man working at a desk with good posture", points: ["Raise the screen near eye level (books under a laptop work well)", "Feet flat, back supported", "Stand up and move every 30–45 minutes"] },
  { img: phone, title: "Phone use", alt: "Woman holding her phone up at eye level", points: ["Lift the phone closer to eye level instead of bending your neck", "Take short breaks from scrolling", "Gently turn your head side to side now and then"] },
  { img: lifting, title: "Lifting and carrying", alt: "Man lifting a box safely with bent knees", points: ["Keep the load close to your body", "Bend your knees and hips, not just your back", "Avoid twisting while lifting; turn with your feet", "Split heavy loads or ask for help"] },
  { img: sleep, title: "Sleep", alt: "Person sleeping on their side with a pillow between the knees", points: ["Use a pillow that keeps your neck in line", "A pillow between the knees can help side sleepers", "Aim for regular sleep times"] },
  { img: nutrition, title: "Eating well", alt: "Plate of Nigerian food with vegetables, beans and fish", points: ["Fill half the plate with vegetables like ugu, efo or garden egg", "Include protein such as beans, fish, eggs or chicken", "Drink enough clean water through the day", "Limit sugary drinks and very salty or fried food"] },
];

function Posture() {
  return (
    <SiteLayout>
      <div className="space-y-6">
        <h1 className="text-3xl">Everyday posture and healthy habits</h1>
        <p>There is no single "perfect" posture. Changing position often and staying active matters most. These are general tips, not a treatment plan.</p>
        {tips.map((t) => (
          <section key={t.title} className="card overflow-hidden p-0">
            <Picture src={t.img} alt={t.alt} />
            <div className="space-y-2 p-4">
              <h2 className="text-xl">{t.title}</h2>
              <ul className="list-disc space-y-1 pl-5">{t.points.map((p) => <li key={p}>{p}</li>)}</ul>
            </div>
          </section>
        ))}
        <Disclaimer />
      </div>
    </SiteLayout>
  );
}
