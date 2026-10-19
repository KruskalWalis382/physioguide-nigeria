// Educational safety checker logic. It NEVER diagnoses.
// It only sorts answers into one of three general safety messages.
// Warning signs always win over reassuring answers.

export type Area = "back" | "neck" | "knee" | "other";

export interface Option {
  id: string;
  label: string;
  areas?: Area[]; // if set, only shown for these areas
}

export const emergencySigns: Option[] = [
  { id: "bladder", label: "New difficulty passing urine, or loss of bladder control", areas: ["back"] },
  { id: "bowel", label: "New loss of bowel control", areas: ["back"] },
  { id: "saddle", label: "Numbness around the groin, genitals, buttocks or inner thighs (saddle area)", areas: ["back"] },
  { id: "legweak", label: "New or worsening significant weakness in one or both legs", areas: ["back"] },
  { id: "trauma", label: "Pain started after a major injury (e.g. road accident, bad fall)" },
  { id: "chest", label: "Chest pain or pressure" },
  { id: "breathing", label: "Difficulty breathing" },
  { id: "armweak", label: "New weakness, clumsiness or numbness in arms or hands, or trouble walking steadily", areas: ["neck"] },
  { id: "cantbear", label: "Unable to put any weight on the leg after an injury", areas: ["knee"] },
];

export const concernSigns: Option[] = [
  { id: "fever", label: "Fever, chills or feeling generally very unwell" },
  { id: "weight", label: "Unexplained weight loss" },
  { id: "cancer", label: "A past history of cancer" },
  { id: "night", label: "Constant pain that does not ease with rest or is worse at night" },
  { id: "hotjoint", label: "A hot, red or very swollen joint", areas: ["knee"] },
  { id: "locking", label: "The knee locks, gives way or will not straighten", areas: ["knee"] },
  { id: "headache", label: "Severe or unusual headache, or dizziness with neck pain", areas: ["neck"] },
  { id: "notimproving", label: "Pain lasting more than 6 weeks, or getting steadily worse" },
];

export type ResultLevel = "urgent" | "soon" | "general";

export function optionsFor(list: Option[], area: Area | null) {
  return list.filter((o) => !o.areas || (area && o.areas.includes(area)));
}

export function getResult(emergency: string[], concerns: string[]): ResultLevel {
  if (emergency.length > 0) return "urgent";
  if (concerns.length > 0) return "soon";
  return "general";
}
