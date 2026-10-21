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
clinical: {
      anatomy: [
        "The lumbar spine consists of five vertebrae (L1–L5) between the thoracic spine and the sacrum. Their size and shape help support the loads transmitted through the trunk.",
        "Intervertebral discs lie between most adjacent vertebral bodies. Each disc has a tough outer annulus fibrosus and a softer, gel-like nucleus pulposus. Discs help distribute loads and permit movement.",
        "Facet joints are paired joints at the back of adjacent vertebrae. Together with the discs and other structures, they guide and limit spinal movement.",
        "Ligaments help stabilise the spine, while muscles of the trunk, back, abdomen and hips contribute to movement, control and load transfer.",
        "Nerve roots leave the spinal canal through openings between vertebrae. The lower spinal canal also contains nerve roots called the cauda equina. Significant compression of these roots can be a medical emergency."
      ],
      mechanisms: [
        "Low back pain can arise through several mechanisms. In many cases, a single painful structure cannot be identified reliably, even after an appropriate clinical assessment.",
        "Muscles, ligaments and other tissues can become painful following unfamiliar activity, sudden increases in workload or injury. Pain does not automatically mean that tissue damage is severe.",
        "Disc-related conditions can produce back pain and sometimes leg symptoms. A disc bulge or herniation on imaging does not by itself prove that the finding is causing pain.",
        "Nerve-root irritation or dysfunction may cause pain radiating into the leg, sometimes accompanied by tingling, altered sensation, weakness or changes in reflexes.",
        "Less commonly, back pain may be associated with fracture, infection, cancer or other specific disease. Clinical history, examination and sometimes investigations help determine whether these possibilities need consideration."
      ],
      riskFactors: [
        "A previous episode of low back pain increases the likelihood of experiencing further episodes.",
        "Repeated heavy physical demands, awkward or sustained working postures, and sudden increases in workload may contribute to symptoms in some people.",
        "Low physical activity and reduced physical capacity may make some daily demands harder to tolerate, although inactivity is not the sole cause of back pain.",
        "Poor sleep, psychological distress, fear of movement, low confidence in recovery and work-related difficulties can influence pain and recovery, particularly when symptoms persist.",
        "Age, general health, occupational demands and access to appropriate care may also be relevant. Risk factors vary between individuals and do not establish the cause of a particular person's pain.",
        "In Nigerian settings, physically demanding work such as farming, trading, lifting loads, prolonged transport journeys and some caregiving tasks may be relevant to an individual's activity history."
      ],
      clinicalDistinctions: [
        "Nonspecific low back pain describes pain for which a specific underlying cause has not been established. It is real pain and may still substantially affect daily function.",
        "Referred pain may be felt in the buttock or thigh even when the person does not have nerve-root dysfunction. The distribution of pain alone cannot reliably identify its source.",
        "Radicular pain describes pain associated with irritation of a spinal nerve root. Radiculopathy refers to nerve-root dysfunction that may involve sensory, motor or reflex changes. The terms are related but not interchangeable.",
        "Serious spinal or non-spinal causes are less common, but need consideration when the history, examination or warning signs raise concern.",
        "Imaging findings must be interpreted alongside symptoms and examination. Common age-related changes can occur in people without back pain."
      ],
      assessment: [
        "A physiotherapist may ask about onset, symptom behaviour, previous episodes, trauma, pain distribution, leg symptoms, medical history, sleep, work demands and limitations in daily activities.",
        "Physical assessment may include observation, lumbar and hip movement, functional tasks, walking and relevant strength testing.",
        "When nerve-root involvement is suspected, a clinician may assess lower-limb muscle strength, sensation, reflexes and appropriate neurodynamic tests.",
        "No single movement test, posture, muscle weakness or special test should be used alone to determine the cause of low back pain.",
        "Assessment findings help guide management, identify the need for medical referral and establish functional goals. Imaging is not routinely required for every episode; it may be appropriate when serious pathology is suspected or the result would change management."
      ],
      rehabilitation: [
        "Education should provide a clear explanation, encourage appropriate self-management and avoid creating unnecessary fear of normal movement.",
        "For many people, continuing tolerable daily activities and gradually returning to usual tasks is preferable to prolonged bed rest.",
        "Exercise should be selected according to the individual's presentation, preferences, capacity and goals. Options may include graded activity, strengthening, mobility exercises, walking or other aerobic activity.",
        "Exercise dose and difficulty should be adjusted to the person's response and functional capacity. There is no single exercise programme that suits everyone with low back pain.",
        "Manual therapy may be considered for selected individuals as part of a broader treatment programme that includes exercise and self-management, rather than as a stand-alone cure.",
        "Persistent pain may require a broader plan that considers sleep, confidence with movement, psychological and social factors, work demands and barriers to activity.",
        "New or progressive neurological deficits, suspected serious pathology or a significant deterioration require reassessment and appropriate referral rather than simply increasing exercise intensity."
      ],
      progress: [
        "Agree on meaningful goals with the individual, such as walking for longer, returning to work, sleeping better or completing daily tasks with less difficulty.",
        "Monitor function, activity tolerance, symptom trends and participation rather than relying on pain intensity alone.",
        "Progress activity gradually according to the individual's response, recovery and goals.",
        "If function deteriorates, new symptoms appear or progress stalls, reassess the presentation and consider whether the plan or referral pathway needs to change."
      ],
      references: [
        {
          title: "NICE guideline NG59: Low back pain and sciatica in over 16s",
          url: "https://www.nice.org.uk/guidance/ng59",
          note: "Guidance on assessment, self-management, exercise and treatment."
        },
        {
          title: "WHO guideline for chronic primary low back pain",
          url: "https://www.who.int/publications/i/item/9789240081789",
          note: "Guidance on non-surgical care for adults with chronic primary low back pain."
        }
      ]
    },
    
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
