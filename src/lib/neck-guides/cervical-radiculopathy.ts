import type { ClinicalGuide } from "@/lib/clinical-guide";

export const cervicalRadiculopathyGuide: ClinicalGuide = {
  title: "Cervical radiculopathy",
  description:
    "A clinical learning guide to cervical radiculopathy: how irritation or compression of a cervical nerve root produces arm pain, sensory change and weakness, how it is assessed, and how evidence-informed physiotherapy management is structured.",
  safety:
    "Seek urgent medical assessment for rapidly progressive arm or hand weakness, new clumsiness or unsteadiness when walking, loss of bladder or bowel control, numbness around the saddle area, or severe pain after significant trauma. These can indicate spinal cord involvement or another serious cause and should not wait for a routine appointment.",
  sections: [
    {
      id: "overview",
      title: "Overview and definition",
      paragraphs: [
        "Cervical radiculopathy describes a set of symptoms and signs caused by irritation or compression of a cervical nerve root as it leaves the spinal canal. Because each nerve root supplies a recognisable region of skin (dermatome), a group of muscles (myotome) and sometimes a reflex, root involvement typically produces symptoms that travel beyond the neck into the shoulder, arm or hand in a pattern that corresponds to the affected level.",
        "The term radiculopathy strictly means objective neurological involvement — altered sensation, weakness or reflex change — while radicular pain refers to pain radiating from root irritation without necessarily producing a deficit. In practice the two often coexist. This distinction matters clinically: radiating pain alone has a broader differential diagnosis than radiating pain with confirmed neurological signs.",
        "Cervical radiculopathy is a clinical diagnosis supported by examination findings. Imaging can confirm a structural cause but does not by itself establish that a root is symptomatic, because age-related changes are common in people without symptoms.",
      ],
      sources: ["iyer2016", "blanpied2017"],
    },
    {
      id: "anatomy",
      title: "Anatomy and biomechanics",
      paragraphs: [
        "Eight cervical nerve roots (C1–C8) exit the cervical spine. From C3 downwards, each root is named for the vertebra below its exit level: the C6 root leaves between the C5 and C6 vertebrae. Roots travel laterally through the intervertebral foramina, bounded by the uncovertebral joints and disc in front and the facet joints behind.",
        "The foramen narrows naturally with neck extension and ipsilateral rotation or side-flexion, and widens with flexion. This is why positions that close the foramen can provoke radicular symptoms and why opening positions may ease them — a relationship used both in examination and in symptom management.",
        "After exiting, the roots contribute to the brachial plexus, which supplies the upper limb. Because the plexus and peripheral nerves continue through the shoulder and arm, compression at more distant sites (for example the thoracic outlet or the median nerve at the wrist) can mimic root-level symptoms and must be distinguished during examination.",
      ],
      sources: ["iyer2016"],
    },
    {
      id: "epidemiology",
      title: "Epidemiology and risk factors",
      paragraphs: [
        "Cervical radiculopathy is less common than non-specific neck pain. Population studies suggest it occurs most often in middle age, with disc-related presentations more frequent in younger adults and degenerative foraminal narrowing more frequent with increasing age. Reported incidence figures vary between populations and study methods, so precise numbers should be treated cautiously.",
        "The levels most frequently reported as symptomatic are C7 (from the C6–C7 segment) and C6 (from C5–C6), followed by C5 and C8, reflecting the mobility and loading of the lower cervical spine.",
      ],
      bullets: [
        "Age-related disc and foraminal degeneration",
        "Sustained or repetitive neck postures and heavy manual work",
        "Smoking, which is associated with disc degeneration",
        "Previous neck injury",
        "Vibration exposure (for example some driving and machinery work)",
      ],
      note: "Risk factors describe association, not certainty. Many people with these exposures never develop radiculopathy, and many people with radiculopathy have none of them.",
      sources: ["iyer2016", "blanpied2017"],
    },
    {
      id: "pathophysiology",
      title: "Pathophysiology",
      paragraphs: [
        "Two broad mechanisms account for most cases. In younger adults, a disc herniation can protrude posterolaterally and compress or chemically irritate the adjacent root. In older adults, gradual degenerative change — disc height loss, uncovertebral and facet joint osteophytes — narrows the foramen and produces what is sometimes called spondylotic radiculopathy.",
        "Compression alone does not fully explain symptoms. Inflammation around the root contributes substantially to pain, which helps explain why symptoms can settle over weeks even when the structural change persists, and why imaging appearance correlates imperfectly with symptom severity.",
        "A proportion of disc herniations reduce in size over time through natural resorption processes. This biological tendency towards improvement underpins the guideline preference for a trial of conservative management in the absence of progressive neurological deficit or myelopathy.",
      ],
      sources: ["iyer2016", "blanpied2017"],
    },
    {
      id: "presentation",
      title: "Clinical presentation",
      paragraphs: [
        "The typical presentation is neck pain with pain radiating into the arm, often described as sharp, burning or electric, accompanied by tingling or numbness in a recognisable distribution. Symptoms may follow an acute event or develop gradually. Patients often report that certain neck positions worsen arm symptoms, and some find relief resting the hand on top of the head, which reduces tension on the root.",
        "The table below summarises commonly taught patterns. Real presentations vary, dermatomes overlap between individuals, and these patterns are guides to reasoning rather than rules.",
      ],
      table: {
        caption: "Commonly described cervical nerve root patterns (individual variation is normal)",
        headings: ["Root", "Sensory change often described", "Motor group often involved", "Reflex that may be reduced"],
        rows: [
          ["C5", "Lateral upper arm", "Shoulder abduction, elbow flexion", "Biceps"],
          ["C6", "Lateral forearm, thumb and index finger", "Wrist extension, elbow flexion", "Brachioradialis"],
          ["C7", "Middle finger, dorsal forearm", "Elbow extension, wrist flexion", "Triceps"],
          ["C8", "Medial forearm, ring and little finger", "Finger flexion, grip", "None reliably"],
        ],
      },
      note: "Clinical interpretation. A single abnormal finding is weak evidence. Diagnosis rests on a pattern of concordant symptoms and signs, not on one dermatome chart or one test.",
      sources: ["iyer2016", "wainner2003"],
    },
    {
      id: "subjective",
      title: "Subjective assessment",
      paragraphs: [
        "The history establishes the symptom pattern, behaviour and context. Key areas include the onset and mechanism (acute versus gradual, any trauma), the distribution of pain and sensory change, aggravating and easing positions, and the presence of weakness noticed in daily tasks such as gripping, lifting or fine finger movement.",
        "Equally important are questions that screen for serious pathology: gait disturbance or clumsiness suggesting cord involvement; fever, unexplained weight loss or night pain suggesting systemic disease; and bladder or bowel change. In the Nigerian context it is also important to ask about access to investigations and prior treatments, and to avoid assuming imaging is readily available.",
        "Baseline symptom severity and function should be recorded using a patient-reported measure so that change can be judged objectively at reassessment.",
      ],
      sources: ["blanpied2017", "iyer2016"],
    },
    {
      id: "objective",
      title: "Objective examination",
      paragraphs: [
        "Examination combines active neck movement assessment, a neurological screen of the upper limbs (sensation, myotomal strength, reflexes) and provocation tests. Upper limb neural tissue provocation tests assess mechanosensitivity of the nerve and its sheath.",
        "Commonly used provocation tests include Spurling's test (extension with ipsilateral side-flexion and rotation, sometimes with compression), the cervical distraction test, active rotation range, and the upper limb neurodynamic test. Wainner and colleagues reported that a cluster of four findings — positive Spurling's, positive distraction, positive upper limb neurodynamic test (median nerve bias) and cervical rotation less than 60 degrees towards the symptomatic side — improved diagnostic confidence when several were positive together.",
      ],
      bullets: [
        "Spurling's test: tends to be specific but not very sensitive — a positive result supports the diagnosis, a negative one does not exclude it",
        "Distraction test: relief of arm symptoms supports root involvement",
        "Upper limb neurodynamic tests: tend to be sensitive but less specific — useful for ruling out when clearly negative",
        "Neurological deficit (dermatomal sensory loss, myotomal weakness, reflex change) increases confidence that a root is genuinely compromised",
      ],
      note: "Clinical interpretation. No single special test diagnoses radiculopathy. Clusters of findings are more informative than isolated tests, and even clusters have limitations — they were studied in selected populations and can perform differently in general practice.",
      sources: ["wainner2003", "thoomes2018", "blanpied2017"],
    },
    {
      id: "differential",
      title: "Differential diagnosis and clinical reasoning",
      paragraphs: [
        "Arm pain with neck involvement is not automatically radiculopathy. Reasoning should actively consider alternatives and look for features that fit or do not fit a root pattern.",
      ],
      bullets: [
        "Referred pain from cervical facet joints, discs or muscles: often diffuse, lacks dermatomal sensory change and neurological signs",
        "Peripheral entrapment (carpal tunnel syndrome, cubital tunnel syndrome): symptoms distal to the entrapment site, neck movement does not reproduce them, nerve conduction findings differ",
        "Shoulder pathology (rotator cuff-related pain): pain on shoulder movement rather than neck movement, no neurological signs",
        "Brachial plexus pathology or thoracic outlet involvement: pattern crosses multiple root levels",
        "Myelopathy: gait disturbance, hand clumsiness, hyperreflexia or other upper motor neurone signs — changes management urgency entirely",
      ],
      note: "Clinical interpretation. Double crush — coexisting root and peripheral nerve involvement — is possible, so finding one diagnosis does not always exclude another.",
      sources: ["iyer2016", "blanpied2017"],
    },
    {
      id: "red-flags",
      title: "Red flags, precautions and referral",
      paragraphs: [
        "Most cervical radiculopathy is managed conservatively in the first instance, but several presentations warrant prompt medical or surgical opinion rather than routine physiotherapy progression.",
      ],
      bullets: [
        "Progressive or severe motor weakness — for example a rapidly worsening wrist drop or grip failure",
        "Any features of cervical myelopathy: unsteady gait, hand clumsiness, hyperreflexia, bladder or bowel change — refer urgently",
        "Severe unremitting night pain, fever, unexplained weight loss or history of malignancy — consider serious pathology",
        "Radicular symptoms after significant trauma — fracture or instability must be excluded first",
        "Multilevel or bilateral deficits, which widen the differential beyond simple root compression",
      ],
      note: "Clinical interpretation. The threshold for referral should be lower where access to imaging and surgical opinion is limited or delayed; a progressive deficit should not be observed indefinitely while awaiting investigations.",
      sources: ["blanpied2017", "iyer2016"],
    },
    {
      id: "investigations",
      title: "Investigations and imaging indications",
      paragraphs: [
        "Imaging is not required for every presentation. Guidelines generally support a period of conservative management without imaging when the examination is consistent with radiculopathy, there are no red flags, and symptoms are improving or stable.",
        "Magnetic resonance imaging is the preferred investigation when imaging is indicated: progressive neurological deficit, suspicion of myelopathy, red-flag features, or persistent disabling symptoms where surgery or injection is being considered. Computed tomography may be used where MRI is unavailable or contraindicated, recognising its limitations for soft tissue and its radiation dose.",
        "Electrodiagnostic studies (nerve conduction studies and electromyography) can help distinguish radiculopathy from peripheral entrapment when the clinical picture is unclear, but they have false negatives, particularly early in the course, and do not replace clinical assessment.",
        "A recurring caution in the literature is that degenerative and disc changes on imaging are common in people without symptoms. Imaging findings must be matched to the clinical pattern before they are attributed causative significance.",
      ],
      sources: ["blanpied2017", "iyer2016"],
    },
    {
      id: "management",
      title: "Physiotherapy management and evidence-informed rehabilitation",
      paragraphs: [
        "Clinical practice guidelines support a conservative first-line approach for cervical radiculopathy without progressive deficit. The evidence base is moderate at best: many interventions show benefit, but few have strong, consistent support, and no single treatment is established as superior for all patients.",
        "Commonly supported components include education and reassurance about the generally favourable natural history, an individualised exercise programme, and manual therapy — including cervical and thoracic mobilisation or manipulation — as part of a multimodal package. Mechanical traction has some supporting evidence within multimodal care, though study quality varies.",
        "What the evidence does not support is prolonged passive care alone, prolonged collar immobilisation, or treatment plans that continue unchanged without reassessment. Management should be matched to irritability: highly irritable presentations begin with symptom-calming strategies and gentle activity; less irritable presentations progress more quickly towards loading and function.",
      ],
      note: "Clinical interpretation. Evidence strength differs between components. Education, exercise and multimodal manual therapy have the most consistent guideline support; traction and specific techniques have weaker or more variable evidence. Present options honestly rather than promising outcomes.",
      sources: ["blanpied2017", "thoomes2018"],
    },
    {
      id: "exercise",
      title: "Exercise prescription: position, technique, progression and regression",
      paragraphs: [
        "Exercise prescription is individualised; the examples below illustrate principles rather than a fixed programme, and no universal dosage has been established by research. Dosage — sets, repetitions, holds and frequency — should be set by the treating clinician according to irritability, response and goals.",
        "Early or irritable presentations typically emphasise positions and movements that ease arm symptoms. This may include supported postures that open the foramen, gentle active range-of-motion work within a comfortable range, and isometric or low-load deep neck flexor and scapular muscle activation. Technique priorities are comfort, symptom behaviour during and after exercise, and avoiding sustained end-range positions that provoke radiating symptoms.",
        "As symptoms settle and centralise (arm symptoms retreating towards the neck is generally a favourable sign), loading progresses: increased range, resistance for the deep neck flexors and scapular stabilisers, and gradual reintroduction of provoking positions and work or sport tasks. Neural mobilisation techniques, where used, are dosed conservatively and monitored for after-response.",
        "Regression is appropriate when symptoms flare: reduce range, load or frequency, return to a previously tolerated level, and reassess. A flare that does not settle with regression, or any progression of weakness, warrants clinical review rather than further exercise adjustment.",
      ],
      sources: ["blanpied2017"],
    },
    {
      id: "outcome-measures",
      title: "Outcome measures and reassessment",
      paragraphs: [
        "Baseline and follow-up measurement allows progress to be judged on evidence rather than impression. Commonly used patient-reported measures in neck and radicular presentations include the Neck Disability Index and the numeric pain rating scale; a patient-specific functional scale can capture the activities that matter most to the individual.",
        "Physical reassessment tracks the neurological examination (strength, sensation, reflexes), cervical range of motion, and the response to previously positive provocation tests. Neurological status should be monitored deliberately at each review, because deterioration changes management.",
        "A reasonable reassessment rhythm is every few visits in the early phase. Lack of improvement over an expected timeframe, worsening neurological signs, or escalating pain should trigger treatment review and consideration of referral rather than simply more of the same.",
      ],
      sources: ["blanpied2017"],
    },
    {
      id: "prognosis",
      title: "Prognosis and return to function",
      paragraphs: [
        "The natural history of cervical radiculopathy is generally favourable: many people improve substantially over weeks to months with conservative care, and a proportion of disc herniations resorb over time. However, recovery is not guaranteed, timelines vary, and some people develop persistent symptoms.",
        "Factors associated with slower recovery in the literature include higher initial pain and disability, older age, and psychosocial factors such as low recovery expectations and high distress. These are associations at group level and should not be used to predict an individual's outcome with certainty.",
        "Return to work and activity is usually graded: modified duties or reduced loads first, building towards full function as symptoms and strength allow. Decisions about return to heavy manual work or contact sport should consider the neurological examination and, where relevant, medical or surgical advice.",
      ],
      sources: ["iyer2016", "blanpied2017"],
    },
    {
      id: "education",
      title: "Patient education and prevention",
      paragraphs: [
        "Education is a core treatment component, not an afterthought. Key messages include: the condition usually improves; arm symptoms reflect an irritated nerve root rather than ongoing damage in most cases; staying active within tolerance supports recovery; and prolonged rest or collar use is generally unhelpful.",
        "Practical self-management includes finding positions that ease arm symptoms, pacing aggravating activities rather than avoiding all activity, and simple ergonomic adjustments to sustained postures at work. Smoking cessation is a reasonable general health recommendation given its association with disc degeneration.",
        "Prevention of recurrence centres on maintaining neck and shoulder girdle strength and movement, managing sustained postures, and early attention to recurrent symptoms. Patients should know which changes — progressive weakness, gait or bladder disturbance — require urgent review rather than self-management.",
      ],
      sources: ["blanpied2017", "iyer2016"],
    },
  ],
  references: [
    {
      id: "iyer2016",
      citation:
        "Iyer S, Kim HJ. Cervical radiculopathy. Current Reviews in Musculoskeletal Medicine. 2016;9(3):272–280.",
      url: "https://pubmed.ncbi.nlm.nih.gov/27250042/",
    },
    {
      id: "blanpied2017",
      citation:
        "Blanpied PR, Gross AR, Elliott JM, et al. Neck Pain: Revision 2017 — Clinical Practice Guidelines. Journal of Orthopaedic & Sports Physical Therapy. 2017;47(7):A1–A83.",
      url: "https://pubmed.ncbi.nlm.nih.gov/28666405/",
    },
    {
      id: "wainner2003",
      citation:
        "Wainner RS, Fritz JM, Irrgang JJ, Boninger ML, Delitto A, Allison S. Reliability and diagnostic accuracy of the clinical examination and patient self-report measures for cervical radiculopathy. Spine. 2003;28(1):52–62.",
      url: "https://pubmed.ncbi.nlm.nih.gov/12544957/",
    },
    {
      id: "thoomes2018",
      citation:
        "Thoomes EJ, van Geest S, van der Windt DA, et al. Value of physical tests in diagnosing cervical radiculopathy: a systematic review. The Spine Journal. 2018;18(1):179–189.",
      url: "https://pubmed.ncbi.nlm.nih.gov/28838857/",
    },
  ],
};
