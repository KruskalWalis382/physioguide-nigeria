/** Educational context, not a diagnosis or an individual rehabilitation plan. */
export interface SpecialtyDetail {
  id: string;
  sections: { title: string; text: string }[];
  referral: string;
  references: { title: string; url: string }[];
}

export const specialtyDetails: Record<string, SpecialtyDetail> = {
  Musculoskeletal: {
    id: "musculoskeletal",
    sections: [
      { title: "What this specialty involves", text: "Musculoskeletal physiotherapy supports people whose pain, injury or joint problems affect movement and everyday tasks. The focus is not simply a scan finding: it is what the person can do, what matters to them and how to rebuild confidence and physical capacity." },
      { title: "Relevant anatomy and physiology", text: "Bones and joints provide support and movement; muscles generate force, tendons transmit it and ligaments help stabilise joints. Nerves carry sensation and movement signals. Pain is influenced by tissue sensitivity, the nervous system, sleep, stress and previous experiences; pain intensity alone does not measure tissue damage." },
      { title: "Conditions and clinical presentation", text: "Examples include osteoarthritis, back or neck pain, tendon problems and recovery after a fracture or orthopaedic operation. Presentations can include pain with loading, stiffness, swelling, reduced strength or difficulty walking, reaching and carrying. Similar symptoms can have different causes, so examination is needed rather than self-diagnosis." },
      { title: "Physiotherapy assessment", text: "The clinician asks about onset, injury, medicines, general health, work demands and warning signs. Examination may assess joint movement, strength, sensation, walking and tasks such as rising from a chair. A patient-specific functional scale and repeat measures of movement or strength help track agreed goals; imaging is not automatically necessary." },
      { title: "Treatment and rehabilitation approaches", text: "Education, appropriately graded activity and strengthening are matched to the person's findings and preferences. Loading is reviewed as capacity improves; manual techniques may be an adjunct rather than the whole plan. After surgery, restrictions and the surgical team's advice guide progression. Useful goals include tolerating stairs or returning to work, not a guaranteed pain-free deadline." },
    ],
    referral: "Seek urgent medical assessment for a hot, swollen joint with fever, major trauma with deformity or inability to bear weight, or new progressive weakness. Back pain with new bladder or bowel dysfunction or saddle-area numbness needs emergency assessment. Unexplained weight loss, persistent fever or concerning pain with a cancer history needs prompt medical review.",
    references: [
      { title: "NICE NG59 — Low back pain and sciatica", url: "https://www.nice.org.uk/guidance/ng59" },
      { title: "NICE NG226 — Osteoarthritis", url: "https://www.nice.org.uk/guidance/ng226" },
    ],
  },
  Neurological: {
    id: "neurological",
    sections: [
      { title: "What this specialty involves", text: "Neurological physiotherapy helps people with brain, spinal cord or peripheral nerve conditions develop or regain functional movement. It addresses safe mobility and participation alongside other professionals, recognising that recovery and long-term support needs differ greatly between people." },
      { title: "Relevant anatomy and physiology", text: "The brain and spinal cord coordinate movement, sensation and posture through nerve pathways. Injury can affect selective movement, muscle tone, sensation, coordination and balance. Neuroplasticity describes the nervous system's ability to adapt with experience; meaningful, repeated practice can support learning but does not guarantee full recovery." },
      { title: "Conditions and clinical presentation", text: "Stroke, spinal cord injury, Parkinson's disease, multiple sclerosis and nerve injuries are examples. Weakness, altered tone, fatigue, slowed movement or sensory loss may affect rolling in bed, transfers and walking. Attention, vision, speech and cognition can also affect rehabilitation and require input from the wider team." },
      { title: "Physiotherapy assessment", text: "Assessment covers previous function, the home environment, falls, fatigue, communication and the person's priorities. The therapist observes posture, voluntary movement, tone, sensation, balance, transfers and gait. Measures such as a timed walking test, the Berg Balance Scale or a transfer assessment are chosen only when appropriate and safe." },
      { title: "Treatment and rehabilitation approaches", text: "Task-specific practice may include sitting balance, getting out of bed, standing and walking with suitable support. Strength and aerobic activity can be included when medically appropriate. Equipment, positioning and caregiver training support safety; the therapist adapts practice for fatigue and learning needs. Shared goals might include using the toilet with less assistance or walking to a nearby shop." },
    ],
    referral: "Sudden facial droop, arm weakness, speech difficulty or sudden new loss of balance or vision needs emergency medical assessment for possible stroke. New or rapidly worsening limb weakness, breathing or swallowing difficulty also needs urgent assessment. In someone with a spinal cord injury, a sudden severe headache with sweating or flushing may signal an emergency and should not be treated as an exercise problem.",
    references: [
      { title: "NICE NG236 — Stroke rehabilitation in adults", url: "https://www.nice.org.uk/guidance/ng236" },
      { title: "NICE NG71 — Parkinson's disease in adults", url: "https://www.nice.org.uk/guidance/ng71" },
    ],
  },
  Paediatric: {
    id: "paediatric",
    sections: [
      { title: "What this specialty involves", text: "Paediatric physiotherapy supports movement, development and participation from infancy through adolescence. Care is family-centred: the child and caregivers help set goals that fit play, school and home life, rather than treating a child as a small adult." },
      { title: "Development, anatomy and physiology", text: "Growing bones, joints, muscles and the developing nervous system influence posture and movement. Skills such as head control, sitting and walking develop over time with individual variation. Prematurity and health conditions can affect development; milestones inform assessment but a single age comparison is not a diagnosis." },
      { title: "Conditions and clinical presentation", text: "Examples include cerebral palsy, developmental movement difficulties, neuromuscular conditions and rehabilitation after injury. A child may have difficulty with balance, coordination, moving between positions or keeping up in play. Pain, fatigue and restricted joint movement may limit participation; specialist teams manage clubfoot pathways and other structural concerns." },
      { title: "Physiotherapy assessment", text: "The therapist asks about birth and development, medical history, pain, feeding concerns, play and family priorities. Observation uses age-appropriate tasks and considers movement quality, tone, range and strength. Measures such as the Gross Motor Function Measure may help monitor cerebral palsy; tools are selected for the child's age and condition rather than used as a universal checklist." },
      { title: "Treatment and rehabilitation approaches", text: "Play-based movement practice, supported mobility, positioning and appropriate equipment can help children participate. Caregivers learn safe ways to assist without overwhelming the child or family. Work with teachers and other clinicians may address seating, school access and communication. Goals could include joining playground activities or transferring more comfortably, while protecting growth and wellbeing." },
    ],
    referral: "Loss of previously acquired skills, new weakness or a new persistent change in walking needs prompt medical assessment. A child who is acutely unwell with fever and a painful swollen joint or refuses to bear weight needs urgent assessment. Breathing difficulty, a first seizure or severe injury requires emergency care; suspected abuse or neglect requires appropriate safeguarding referral.",
    references: [
      { title: "NICE NG62 — Cerebral palsy in under 25s", url: "https://www.nice.org.uk/guidance/ng62" },
      { title: "NICE CG145 — Spasticity in under 19s", url: "https://www.nice.org.uk/guidance/cg145" },
    ],
  },
  Cardiorespiratory: {
    id: "cardiorespiratory",
    sections: [
      { title: "What this specialty involves", text: "Cardiorespiratory physiotherapy supports breathing, physical activity and recovery in people with lung or heart conditions, and after major illness or surgery. In hospital it may contribute to early mobilisation and respiratory care; outpatient pulmonary or cardiac rehabilitation uses a coordinated clinical programme." },
      { title: "Relevant anatomy and physiology", text: "The diaphragm and chest-wall muscles move air into the lungs; gas exchange transfers oxygen into the blood and removes carbon dioxide. The heart and circulation deliver oxygen to working muscles. Airway obstruction, retained secretions, heart dysfunction and deconditioning can limit activity in different ways, so interventions must match the actual problem." },
      { title: "Conditions and clinical presentation", text: "Examples include chronic obstructive pulmonary disease, bronchiectasis, recovery after intensive care and stable heart disease in an appropriate rehabilitation pathway. Breathlessness, fatigue, cough, sputum and reduced walking tolerance may be present. New breathlessness is not automatically deconditioning and should first be medically assessed." },
      { title: "Physiotherapy assessment", text: "History includes symptoms, recent admissions, smoking exposure, medicines and the person's usual activity. Assessment can include breathing pattern, cough effectiveness, mobility, oxygen saturation, heart rate and blood pressure when indicated. Breathlessness ratings and supervised walking tests may monitor function; testing requires clinical screening and suitable monitoring." },
      { title: "Treatment and rehabilitation approaches", text: "Clinically supervised rehabilitation may combine aerobic activity, strength work, pacing and education. Airway-clearance techniques are used when secretion retention and the condition justify them, not for everyone with breathlessness. Monitoring and symptom response guide progression; oxygen and medicines remain within the relevant prescriber's plan. Functional goals may include bathing or climbing steps with manageable symptoms." },
    ],
    referral: "New or severe chest pain, severe breathlessness at rest, blue lips, fainting or sudden confusion needs emergency medical care, not breathing exercises. Coughing blood or sudden unexplained breathlessness requires urgent assessment. Stop rehabilitation and seek clinical review for new dizziness, chest discomfort or marked deterioration; monitoring limits are set by the treating team, not this website.",
    references: [
      { title: "NICE NG115 — COPD in over 16s", url: "https://www.nice.org.uk/guidance/ng115" },
      { title: "NICE NG185 — Acute coronary syndromes (including rehabilitation)", url: "https://www.nice.org.uk/guidance/ng185" },
    ],
  },
  Sports: {
    id: "sports",
    sections: [
      { title: "What this specialty involves", text: "Sports physiotherapy supports people participating in recreational or competitive sport, from injury assessment to safe return to training. It considers the athlete's health, sport demands and workload rather than simply a match date. Injury prevention and communication with coaches form part of the role." },
      { title: "Relevant anatomy and physiology", text: "Muscles and tendons generate and transmit force; joints and ligaments guide and stabilise movement. Sporting tasks require strength, endurance, coordination and rapid force production. Tissue healing and adaptation take time, while a sudden increase in workload can exceed current capacity; readiness is not determined by pain alone." },
      { title: "Conditions and clinical presentation", text: "Common examples include ankle sprains, knee ligament injuries, muscle strains and tendon-related pain. Swelling, loss of strength, reduced movement, giving way or pain with running and jumping may limit performance. Head injury and illness require separate medical pathways and should not be managed as ordinary muscle soreness." },
      { title: "Physiotherapy assessment", text: "Assessment considers the injury mechanism, prior injuries, training changes, recovery and competition demands. Examination may include movement, strength, balance and relevant joint tests. Later-stage running, hopping or agility tests are selected when safe; strength comparisons, task quality and psychological readiness inform decisions alongside the wider clinical team." },
      { title: "Treatment and rehabilitation approaches", text: "Rehabilitation progresses from appropriate movement and loading to strength, power and sport-specific tasks. Running, jumping and contact exposure are reintroduced according to criteria, healing and symptoms, not a generic timetable. Return to participation, return to sport and return to performance are distinct stages. Decisions are shared and acknowledge residual risk rather than promising injury-free play." },
    ],
    referral: "Suspected fracture or dislocation, an open injury or a limb that becomes cold, numb or unusually painful needs urgent medical assessment. After a possible concussion, remove the athlete from play and arrange assessment; do not return them the same day. Worsening headache, repeated vomiting, seizure or reduced consciousness after head injury requires emergency care. Collapse with chest pain or severe breathing difficulty is also an emergency.",
    references: [
      { title: "2016 Bern consensus — Return to sport", url: "https://bjsm.bmj.com/content/50/14/853" },
      { title: "Amsterdam 2022 consensus — Concussion in sport", url: "https://bjsm.bmj.com/content/57/11/695" },
    ],
  },
  "Geriatric (older adults)": {
    id: "geriatric",
    sections: [
      { title: "What this specialty involves", text: "Geriatric physiotherapy supports mobility, confidence and independence in older adults, including people living with several health conditions. Age alone does not determine potential. Planning respects the person's priorities, support network and ability to manage everyday tasks." },
      { title: "Relevant anatomy and physiology", text: "Ageing can change muscle strength, bone health, vision, sensation and the body's response to activity, but the extent varies. Frailty describes reduced reserve and greater vulnerability to stressors; it is not inevitable in every older person. Balance relies on vision, the inner ear, sensation and muscle responses working together." },
      { title: "Conditions and clinical presentation", text: "Falls, reduced mobility after illness, arthritis and frailty commonly prompt referral. Slow walking, difficulty rising from a chair, fatigue and fear of falling may restrict shopping, bathing or visiting others. Medicines, poor vision, blood-pressure changes and cognition can also contribute, so falls are not always a simple balance problem." },
      { title: "Physiotherapy assessment", text: "The therapist asks about falls and near-falls, dizziness, medicines, health conditions, daily function and home hazards. Assessment may examine walking, transfers, strength and balance and check a walking aid. Measures such as gait speed, a chair-rise test or Timed Up and Go can track function but should not alone label a person's falls risk; comprehensive assessment may involve other professionals." },
      { title: "Treatment and rehabilitation approaches", text: "Individually appropriate strength, balance and functional practice may support independence. Walking aids, home adaptations and caregiver education are considered alongside medicine review or vision care by the relevant professionals. Progression allows for fatigue and health changes. Goals could include safely reaching the bathroom or using steps to leave the house, not merely improving a test score." },
    ],
    referral: "A fall followed by severe hip pain or inability to stand needs urgent assessment for injury. A head injury, especially in someone taking blood-thinning medicine, warrants urgent medical advice. Sudden confusion, fainting, new weakness or chest pain should not be dismissed as ageing. Recurrent unexplained falls or rapid functional decline needs prompt medical review.",
    references: [
      { title: "NICE NG249 — Falls: assessment and prevention", url: "https://www.nice.org.uk/guidance/ng249" },
      { title: "NICE NG56 — Multimorbidity", url: "https://www.nice.org.uk/guidance/ng56" },
    ],
  },
  "Women's and pelvic health": {
    id: "pelvic-health",
    sections: [
      { title: "What this specialty involves", text: "Pelvic health physiotherapy addresses pelvic floor function and related bladder, bowel and pelvic symptoms, alongside pregnancy-related musculoskeletal concerns and postpartum recovery. Some pelvic health services also care for men and people of other genders. Specialist training, privacy and informed consent are essential." },
      { title: "Relevant anatomy and physiology", text: "The pelvic floor is a group of muscles and connective tissues supporting the pelvic organs and contributing to continence. These muscles need coordination and relaxation as well as strength, working with breathing and abdominal pressure. Pregnancy, childbirth, surgery and other factors can affect function; not every pelvic symptom is caused by weakness." },
      { title: "Conditions and clinical presentation", text: "Examples include urine leakage with coughing, urgency, pelvic organ prolapse symptoms, pelvic pain and pregnancy-related back or pelvic girdle pain. Symptoms may restrict lifting, walking, exercise or sexual activity. Persistent pain or bladder symptoms need assessment rather than an assumption that they are a normal consequence of childbirth." },
      { title: "Physiotherapy assessment", text: "A sensitive history explores symptoms, pregnancy or birth history, surgery, daily activities and the person's goals. Assessment may include posture, movement, breathing and a bladder diary. An internal examination is offered only when clinically appropriate by a suitably trained professional, with explicit consent and appropriate chaperone arrangements; it is not mandatory and consent may be withdrawn." },
      { title: "Treatment and rehabilitation approaches", text: "Education, bladder-habit advice and tailored pelvic floor training may help when indicated. Some people require relaxation and coordination work rather than more contractions. Postpartum or pregnancy-related rehabilitation considers healing, symptoms and obstetric advice, with gradual return to functional activity. Care may involve obstetric, gynaecology, urology or other specialists; there is no universal exercise prescription here." },
    ],
    referral: "Heavy bleeding, severe abdominal or pelvic pain, fever or fainting during pregnancy or after birth needs urgent medical assessment. Chest pain, sudden breathlessness or a painful swollen leg also requires urgent care. New urinary retention or bladder/bowel changes with saddle numbness or leg weakness is an emergency. Blood in urine, unexplained bleeding or a new pelvic mass needs prompt medical review.",
    references: [
      { title: "NICE NG210 — Pelvic floor dysfunction", url: "https://www.nice.org.uk/guidance/ng210" },
      { title: "NICE NG123 — Urinary incontinence and pelvic organ prolapse in women", url: "https://www.nice.org.uk/guidance/ng123" },
    ],
  },
  "Community rehabilitation": {
    id: "community",
    sections: [
      { title: "What this specialty involves", text: "Community rehabilitation supports function and participation where people live, learn and work. It can connect clinical rehabilitation with disability inclusion, education, livelihoods and social support. The aim is meaningful participation and access, not simply moving hospital exercises into someone's home." },
      { title: "Function, environment and participation", text: "Relevant body systems depend on the person's condition: a stroke, spinal injury or arthritis each creates different needs. The International Classification of Functioning framework considers body function, activities, participation and environmental factors together. An inaccessible doorway, transport cost or lack of assistance may limit participation as much as physical impairment." },
      { title: "Patient needs and clinical presentation", text: "Examples include support after hospital discharge, long-term disability, mobility difficulties and caregiver strain. Challenges may involve bed-to-chair transfers, toileting, avoiding pressure injuries, returning to school or accessing work. The assessment considers what the person wants to do and the actual barriers, not just a diagnosis." },
      { title: "Physiotherapy assessment", text: "With consent, the therapist reviews health and function in the real home or community setting. Assessment can examine transfers, walking or wheelchair mobility, seating, skin-risk concerns, caregiver capacity and access. Agreed goals and repeated observation of daily tasks monitor progress. Equipment must be fitted and checked rather than borrowed without assessing suitability." },
      { title: "Treatment and rehabilitation approaches", text: "Task practice, assistive products, caregiver education and practical environmental adaptations may support independence. In Nigerian settings, planning can consider compound layouts, uneven paths, transport, water access and what the family can realistically sustain, without assuming all homes are alike. Coordination with local health services, schools and disability organisations helps maintain follow-up and participation." },
    ],
    referral: "New severe breathlessness, chest pain, stroke signs or rapidly worsening weakness requires emergency care even when rehabilitation is home-based. Fever with a worsening wound, a new pressure injury or unexplained functional decline needs timely clinical review. Suspected abuse, neglect or unsafe caregiving needs safeguarding support. Community care must include an agreed referral pathway, not substitute for necessary hospital assessment.",
    references: [
      { title: "WHO — Community-based rehabilitation guidelines", url: "https://www.who.int/publications/i/item/9789241548052" },
      { title: "WHO — International Classification of Functioning, Disability and Health", url: "https://www.who.int/standards/classifications/international-classification-of-functioning-disability-and-health" },
    ],
  },
};