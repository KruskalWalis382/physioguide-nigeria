import { createFileRoute } from "@tanstack/react-router";
import { ClinicalLearningGuide } from "@/components/ClinicalLearningGuide";
import { clinicalHead } from "@/lib/clinical-guide";
import { whiplashGuide } from "@/lib/neck-guides/whiplash-associated-disorders";

export const Route = createFileRoute("/conditions/whiplash-associated-disorders")({
  head: () => clinicalHead(whiplashGuide, "/conditions/whiplash-associated-disorders"),
  component: WhiplashPage,
});

function WhiplashPage() {
  return <ClinicalLearningGuide guide={whiplashGuide} />;
}
