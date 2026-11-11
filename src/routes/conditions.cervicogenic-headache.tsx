import { createFileRoute } from "@tanstack/react-router";
import { ClinicalLearningGuide } from "@/components/ClinicalLearningGuide";
import { clinicalHead } from "@/lib/clinical-guide";
import { cervicogenicHeadacheGuide } from "@/lib/neck-guides/cervicogenic-headache";

export const Route = createFileRoute("/conditions/cervicogenic-headache")({
  head: () => clinicalHead(cervicogenicHeadacheGuide, "/conditions/cervicogenic-headache"),
  component: CervicogenicHeadachePage,
});

function CervicogenicHeadachePage() {
  return <ClinicalLearningGuide guide={cervicogenicHeadacheGuide} />;
}
