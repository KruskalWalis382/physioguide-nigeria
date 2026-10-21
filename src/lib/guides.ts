export interface ClinicalReference {
  title: string;
  url: string;
  note: string;
}

export interface ClinicalDetails {
  anatomy: string[];
  mechanisms: string[];
  riskFactors: string[];
  clinicalDistinctions: string[];
  assessment: string[];
  rehabilitation: string[];
  progress: string[];
  references: ClinicalReference[];
}

export interface Guide {
  slug: string;
  title: string;
  short: string;
  intro: string;
  clinical?: ClinicalDetails;
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
    clinical: {
      anatomy: [
        "The knee is formed where the thigh bone (femur) meets the shin bone (tibia), with the kneecap (patella) sliding in a groove at the front of the femur.",
        "Two C-shaped cartilage pads called menisci sit between the femur and tibia and help spread load across the joint.",
        "Ligaments, including the anterior and posterior cruciate ligaments and the medial and lateral collateral ligaments, help keep the joint stable.",
        "The quadriceps muscles at the front of the thigh connect to the kneecap and, through the patellar tendon, to the tibia. The hamstrings, calf and hip muscles also help control knee movement.",
        "Joint cartilage covers the bone ends and allows smooth movement. Small fluid-filled sacs (bursae) reduce friction around the joint."
      ],
      mechanisms: [
        "Knee pain can arise from several structures, and the cause is not always clear from symptoms alone.",
        "Overuse, such as a sudden increase in running, jumping, stairs or squatting, may make tissues around the kneecap or tendons painful.",
        "Twisting or direct-impact injuries can damage ligaments or menisci, sometimes with rapid swelling, locking or giving way.",
        "Osteoarthritis involves changes in the whole joint, including cartilage and bone. Joint changes seen on X-ray do not always match the level of pain or function.",
        "Less commonly, knee pain may be caused by infection, gout, inflammatory arthritis, fracture or pain referred from the hip. A hot, red, swollen knee needs prompt medical assessment."
      ],
      riskFactors: [
        "Older age, previous knee injury and higher body weight are associated with knee osteoarthritis.",
        "Sudden changes in training or activity load can contribute to overuse-related knee pain.",
        "Reduced strength or endurance of the thigh and hip muscles may make some activities harder to tolerate.",
        "Work and daily activities involving frequent kneeling, squatting, stair climbing or carrying loads, such as farming, trading or domestic work, may be relevant to an individual's history.",
        "Risk factors vary between individuals and do not establish the cause of a particular person's pain."
      ],
      clinicalDistinctions: [
        "Patellofemoral pain usually presents as pain around or behind the kneecap, often aggravated by squatting, stairs, running or prolonged sitting with bent knees.",
        "Knee osteoarthritis is a clinical diagnosis in many adults; NICE advises that it can often be diagnosed without imaging in people aged 45 or over with typical activity-related joint pain and no or short morning stiffness.",
        "Ligament and meniscal injuries often follow a specific injury and may be associated with swelling, instability, locking or catching.",
        "Tendon-related pain, such as patellar tendinopathy, is usually felt at a specific location and is related to loading the tendon, for example during jumping.",
        "Inability to bear weight after injury, a hot swollen joint, fever or obvious deformity suggests the need for urgent medical assessment rather than self-management."
      ],
      assessment: [
        "A physiotherapist may ask about how the pain began, any injury, swelling, locking or giving way, aggravating activities, previous problems, general health and functional goals.",
        "Physical assessment may include observation, walking, knee and hip movement, strength testing, functional tasks such as squatting or stairs, and ligament or meniscal tests where relevant.",
        "Hip and foot assessment may be included, as problems in nearby joints can influence or refer pain to the knee.",
        "No single test should be used alone to determine the cause of knee pain; findings are interpreted together.",
        "Imaging is not routinely required for every case; it may be appropriate after significant injury, when serious pathology is suspected, or when the result would change management."
      ],
      rehabilitation: [
        "Education should explain the likely nature of the problem, encourage appropriate activity and address concerns about movement and joint damage.",
        "Therapeutic exercise, including strengthening of the thigh and hip muscles, is a core treatment for knee osteoarthritis and patellofemoral pain.",
        "Activity may need to be adjusted temporarily, then built up gradually, rather than stopped completely.",
        "Weight management may be discussed where appropriate for people with knee osteoarthritis who are overweight.",
        "Manual therapy, taping or supportive devices may be considered for selected individuals alongside exercise, not as a stand-alone treatment.",
        "Suspected ligament rupture, locking, fracture, infection or a hot swollen joint requires medical assessment and referral."
      ],
      progress: [
        "Agree on meaningful goals, such as walking further, climbing stairs, kneeling for work or returning to sport.",
        "Monitor function, strength, swelling and activity tolerance rather than pain intensity alone.",
        "Progress exercise difficulty and activity gradually according to the individual's response.",
        "If swelling increases, the knee gives way, new symptoms appear or progress stalls, reassess and consider referral."
      ],
      references: [
        {
          title: "NICE guideline NG226: Osteoarthritis in over 16s: diagnosis and management",
          url: "https://www.nice.org.uk/guidance/ng226",
          note: "Guidance on diagnosis, exercise, weight management and treatment of osteoarthritis."
        },
        {
          title: "Crossley et al. (2016) Patellofemoral pain consensus statement (British Journal of Sports Medicine)",
          url: "https://bjsm.bmj.com/content/50/14/839",
          note: "International consensus on diagnosis and management of patellofemoral pain."
        }
      ]
    },
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
    clinical: {
      anatomy: [
        "The cervical spine consists of seven vertebrae (C1–C7) that support the head and allow a wide range of movement, including nodding, turning and tilting.",
        "Intervertebral discs lie between most cervical vertebrae, and paired facet joints at the back of the spine guide and limit movement.",
        "Muscles of the neck, upper back and shoulder girdle help hold the head up, control movement and support arm use.",
        "The spinal cord passes through the cervical spinal canal, and nerve roots leave between the vertebrae to supply the shoulders, arms and hands. Compression of the cord or nerve roots can cause symptoms beyond the neck.",
        "Arteries supplying the brain also pass through the neck, which is one reason why some neck symptoms combined with neurological signs need urgent medical attention."
      ],
      mechanisms: [
        "Most neck pain is described as nonspecific: a single painful structure usually cannot be identified reliably, and symptoms often settle over weeks.",
        "Sustained or unfamiliar postures, such as long periods looking down at a phone or carrying loads, may make neck tissues feel sore or stiff. Posture alone does not explain every case.",
        "Irritation of a cervical nerve root may cause pain spreading into the arm, sometimes with tingling, numbness, weakness or reflex changes.",
        "Injuries such as road traffic collisions can strain neck tissues (sometimes called whiplash-associated disorders) and occasionally cause fractures, which need medical assessment.",
        "Less commonly, neck pain is linked to compression of the spinal cord, infection, inflammatory disease, cancer or problems with blood vessels. History, examination and sometimes investigations help decide whether these need consideration."
      ],
      riskFactors: [
        "A previous episode of neck pain increases the likelihood of further episodes.",
        "Prolonged desk, laptop or phone use without breaks, and work involving sustained head or arm positions, may contribute to symptoms in some people.",
        "Carrying heavy loads on the head or shoulders, which is common in some Nigerian work settings, may be relevant to an individual's activity history.",
        "Poor sleep, stress, psychological distress and low confidence in recovery can influence how pain is experienced and how quickly it improves.",
        "Risk factors vary between individuals and do not establish the cause of a particular person's pain."
      ],
      clinicalDistinctions: [
        "Nonspecific neck pain describes pain for which a specific underlying cause has not been established. It is real pain and may still affect daily function.",
        "Cervical radiculopathy refers to nerve-root dysfunction, which may cause arm pain with sensory, motor or reflex changes in a pattern linked to the affected root.",
        "Cervical myelopathy refers to compression of the spinal cord. Signs may include clumsy hands, difficulty with fine tasks, unsteady walking or changes in both arms or legs, and this needs prompt medical assessment.",
        "Neck pain after trauma requires consideration of possible fracture or instability before movement-based treatment.",
        "Imaging findings such as disc or joint changes are common with age and must be interpreted alongside symptoms and examination."
      ],
      assessment: [
        "A physiotherapist may ask about onset, injury, pain location, arm symptoms, headaches, dizziness, work and screen habits, sleep, general health and how symptoms affect daily activities.",
        "Physical assessment may include observation, neck and upper-back movement, shoulder movement and relevant functional tasks.",
        "When nerve involvement is suspected, a clinician may assess arm strength, sensation, reflexes and coordination, and may check for signs of spinal cord involvement.",
        "No single posture, movement or test should be used alone to determine the cause of neck pain.",
        "Imaging is not routinely required for nonspecific neck pain; it may be appropriate after significant trauma, with progressive neurological signs, or when serious pathology is suspected."
      ],
      rehabilitation: [
        "Education should reassure where appropriate, explain the usually favourable course of nonspecific neck pain and encourage staying active.",
        "Continuing usual activities as tolerated is generally preferable to prolonged rest or routine use of a soft collar.",
        "Exercise may include neck mobility, strengthening of the neck and upper back, and general physical activity, chosen according to the individual's presentation and goals.",
        "Manual therapy may be considered for selected individuals alongside exercise and self-management rather than as a stand-alone treatment.",
        "Practical changes to work set-up, screen height and breaks may be discussed, while recognising that no single posture is perfect.",
        "New or progressive neurological symptoms, signs of spinal cord involvement or suspected serious pathology require medical reassessment and referral."
      ],
      progress: [
        "Agree on meaningful goals, such as working at a computer comfortably, driving, sleeping better or carrying usual loads.",
        "Monitor function, movement, arm symptoms and participation rather than pain intensity alone.",
        "Progress exercise and activity gradually according to the individual's response.",
        "If symptoms worsen, new neurological signs appear or progress stalls, reassess and consider whether referral is needed."
      ],
      references: [
        {
          title: "NICE Clinical Knowledge Summaries: Neck pain – non-specific",
          url: "https://cks.nice.org.uk/topics/neck-pain-non-specific/",
          note: "Summary of assessment, red flags and management of non-specific neck pain."
        },
        {
          title: "Blanpied et al. (2017) Neck Pain: Revision 2017 Clinical Practice Guidelines (JOSPT)",
          url: "https://www.jospt.org/doi/10.2519/jospt.2017.0302",
          note: "Physiotherapy clinical practice guideline for neck pain."
        }
      ]
    },
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
