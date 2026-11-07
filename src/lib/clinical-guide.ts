export type ClinicalReference = { id: string; citation: string; url: string };
export type ClinicalTable = { caption: string; headings: string[]; rows: string[][] };
export type ClinicalSection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  table?: ClinicalTable;
  note?: string;
  sources: string[];
};
export type ClinicalGuide = {
  title: string;
  description: string;
  safety: string;
  sections: ClinicalSection[];
  references: ClinicalReference[];
};

export const neckGuideLinks = [
  { title: "Neck pain and cervical strain", to: "/conditions/neck-pain" },
  { title: "Cervical radiculopathy", to: "/conditions/cervical-radiculopathy" },
  { title: "Cervical spondylosis", to: "/conditions/cervical-spondylosis" },
  { title: "Whiplash-associated disorders", to: "/conditions/whiplash-associated-disorders" },
  { title: "Cervicogenic headache", to: "/conditions/cervicogenic-headache" },
] as const;

export function clinicalHead(guide: ClinicalGuide, path: string) {
  const title = `${guide.title} — PhysioGuide Nigeria`;
  const url = `https://naija-pain-safety-guide.lovable.app${path}`;
  return {
    meta: [
      { title },
      { name: "description", content: guide.description },
      { property: "og:title", content: title },
      { property: "og:description", content: guide.description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}