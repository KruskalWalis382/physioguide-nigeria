import { createFileRoute } from "@tanstack/react-router";
import { ClinicalLearningGuide } from "@/components/ClinicalLearningGuide";
import { clinicalHead } from "@/lib/clinical-guide";
import { cervicalSpondylosisGuide } from "@/lib/neck-guides/cervical-spondylosis";

export const Route = createFileRoute("/conditions/cervical-spondylosis")({
  head: () => clinicalHead(cervicalSpondylosisGuide, "/conditions/cervical-spondylosis"),
  component: CervicalSpondylosisPage,
});

function CervicalSpondylosisPage() {
  return <ClinicalLearningGuide guide={cervicalSpondylosisGuide} />;
}
