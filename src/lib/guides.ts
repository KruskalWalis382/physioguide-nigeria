export interface Guide {
  slug: string;
  title: string;
  short: string;
  intro: string;
  causes: string[];
  advice: string[];
  seeHelp: string[];
  urgent: string[];
}

export const guides: Guide[] = [
  {
    slug: "low-back-pain",
    title: "Low back pain",
    short: "Why it happens, what usually helps, and warning signs.",
    intro:
      "Low back pain is very common and most episodes settle over days to weeks. Pain does not always mean serious damage. This guide gives general information only and cannot tell you the cause of your pain.",
    causes: [
      "Strain of muscles or ligaments, for example after lifting, bending or a sudden movement",
      "Long periods of sitting, standing or carrying loads (e.g. long drives, market work, farming)",
      "Age-related changes in the spine, which are common and often painless",
      "Irritation of a nerve, which can cause pain spreading down the leg",
      "Stress, poor sleep and low activity, which can make pain feel worse",
    ],
    advice: [
      "Stay gently active. Short walks and normal daily tasks are usually better than long bed rest.",
      "Change position often; avoid sitting for long without a break.",
      "A warm cloth or heat pack may ease stiffness.",
      "If you consider pain medicine, ask a pharmacist or doctor what is safe for you.",
      "Return to heavier work gradually.",
    ],
    seeHelp: [
      "Pain is not improving after a few weeks, or is getting worse",
      "Pain spreads down the leg with tingling or numbness",
      "Pain stops you working, sleeping or doing daily tasks",
      "You have fever, unexplained weight loss or a past history of cancer",
    ],
    urgent: [
      "New difficulty passing urine, or loss of bladder or bowel control",
      "Numbness around the groin, genitals, buttocks or inner thighs (saddle area)",
      "New or worsening significant weakness in the legs",
      "Pain after a major injury such as a road accident or bad fall",
    ],
  },
  {
    slug: "knee-pain",
    title: "Knee pain",
    short: "Common reasons for knee pain and when to get it checked.",
    intro:
      "Knee pain affects people of all ages, from young athletes to older adults. Many cases improve with sensible activity changes. This guide is general information and cannot tell you what is causing your pain.",
    causes: [
      "Overuse, such as a sudden increase in walking, running, football or stairs",
      "Twisting injuries during sport or a fall",
      "Wear-related joint changes (often called osteoarthritis), common with age",
      "Irritation around the kneecap, often linked to squatting, kneeling or stairs",
      "Weak or tired thigh and hip muscles",
    ],
    advice: [
      "Reduce activities that clearly worsen pain for a while, but keep moving gently.",
      "Build up walking or sport gradually rather than all at once.",
      "Wear comfortable, supportive footwear.",
      "A cool pack wrapped in cloth may ease a recent flare; never put ice directly on skin.",
      "Keeping a healthy body weight can reduce load on the knees.",
    ],
    seeHelp: [
      "The knee locks, gives way or will not fully straighten",
      "Swelling that does not settle within a few days",
      "Pain lasting more than a few weeks or limiting daily life",
    ],
    urgent: [
      "Unable to put any weight on the leg after an injury",
      "An obvious deformity after a fall or accident",
      "A hot, red, very swollen knee, especially with fever",
    ],
  },
  {
    slug: "neck-pain",
    title: "Neck pain",
    short: "Everyday causes of neck pain and safety information.",
    intro:
      "Neck pain and stiffness are common and often linked to posture, sleep or stress. Most cases ease within a few weeks. This guide is general information and cannot tell you the cause of your pain.",
    causes: [
      "Long periods looking down at a phone or laptop",
      "Sleeping in an awkward position or with an unsuitable pillow",
      "Carrying heavy loads on the head or shoulders",
      "Muscle tension from stress",
      "Age-related changes in the neck, which are common",
    ],
    advice: [
      "Keep your neck moving gently within comfort.",
      "Raise your phone or screen closer to eye level and take regular breaks.",
      "Warmth on the neck and shoulders may ease tight muscles.",
      "Try a pillow that keeps your neck in line with your body.",
    ],
    seeHelp: [
      "Pain spreading into the arm with tingling or numbness",
      "Pain that is not improving after a few weeks",
      "Pain with fever, unexplained weight loss or a past history of cancer",
    ],
    urgent: [
      "Neck pain after a major injury such as a road accident, fall or diving accident",
      "New weakness, clumsiness or numbness in the arms or hands, or trouble walking steadily",
      "Sudden severe headache, fainting, trouble speaking or seeing",
      "Chest pain or difficulty breathing",
    ],
  },
];

export const getGuide = (slug: string) => guides.find((g) => g.slug === slug);
