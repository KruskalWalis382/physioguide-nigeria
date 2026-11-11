import { createFileRoute } from "@tanstack/react-router";
import { ClinicalLearningGuide } from "@/components/ClinicalLearningGuide";
import { clinicalHead } from "@/lib/clinical-guide";
import { cervicalRadiculopathyGuide } from "@/lib/neck-guides/cervical-radiculopathy";

export const Route = createFileRoute("/conditions/cervical-radiculopathy")({
  head: () => clinicalHead(cervicalRadiculopathyGuide, "/conditions/cervical-radiculopathy"),
  component: CervicalRadiculopathyPage,
});

function CervicalRadiculopathyPage() {
  return <ClinicalLearningGuide guide={cervicalRadiculopathyGuide} />;
}
