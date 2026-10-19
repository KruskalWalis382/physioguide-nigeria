import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { WHATSAPP_MESSAGE, WHATSAPP_NUMBER } from "@/lib/site-config";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — PhysioGuide Nigeria" },
      { name: "description", content: "How to contact PhysioGuide Nigeria with general questions." },
      { property: "og:title", content: "Contact — PhysioGuide Nigeria" },
      { property: "og:description", content: "Get in touch with general questions." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Contact,
});

function Contact() {
  const link = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
  return (
    <SiteLayout>
      <div className="space-y-6">
        <h1 className="text-3xl">Contact</h1>
        <p>For general questions about this website, you can reach us on WhatsApp.</p>
        <div className="card space-y-3">
          {WHATSAPP_NUMBER ? (
            <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-accent w-full">Chat on WhatsApp</a>
          ) : (
            <p className="text-muted-foreground">WhatsApp contact is coming soon.</p>
          )}
          <p className="text-sm text-muted-foreground">Please do not send personal medical records. We cannot diagnose or give personal treatment advice by message.</p>
        </div>
        <p className="rounded-lg border-2 border-destructive bg-danger-soft p-4 font-semibold">In an emergency, do not message us — go to the nearest hospital emergency department.</p>
      </div>
    </SiteLayout>
  );
}
