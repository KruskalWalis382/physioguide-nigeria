import type { ClinicalGuide } from "@/lib/clinical-guide";

export const cervicogenicHeadacheGuide: ClinicalGuide = {
  title: "Cervicogenic headache",
  description:
    "A clinical learning guide to cervicogenic headache: how neck disorders can generate head pain through the trigeminocervical complex, how this headache is distinguished from migraine and tension-type headache, and what evidence-informed management looks like.",
  safety:
    "Headache can occasionally signal serious disease. Seek urgent medical assessment for a sudden 'thunderclap' headache, headache with fever and stiff neck, headache with new weakness, numbness, confusion, vision loss or difficulty speaking, a new or changing headache pattern after age 50, headache worsened by coughing or lying down, or headache after significant head injury. Do not assume a headache is coming from the neck until serious causes have been considered.",
  sections: [
    {
      id: "overview",
      title: "Overview and definition",
      paragraphs: [
        "Cervicogenic headache is head pain caused by a disorder of the cervical spine or its soft tissues. It is a referred pain: the problem is in the neck, but the pain is felt in the head. The International Classification of Headache Disorders (ICHD-3) defines it formally and, crucially, requires evidence that a cervical disorder is actually causing the headache — not merely that neck pain and headache coexist.",
        "This distinction is the central challenge of the condition. Neck pain is common, headache is common, and they often occur together without one causing the other. ICHD-3 explicitly cautions that cervical imaging abnormalities are frequent in people without headache and are suggestive but not firm evidence of causation.",
        "Cervicogenic headache is generally considered an uncommon cause of headache compared with migraine and tension-type headache, which makes careful differential diagnosis — not assumption — the starting point of good care.",
      ],
      sources: ["ichd3"],
    },
    {
      id: "anatomy",
      title: "Anatomy and biomechanics: the trigeminocervical complex",
      paragraphs: [
        "The anatomical basis for cervicogenic headache is the trigeminocervical complex (also called the trigeminocervical nucleus) in the upper cervical spinal cord and brainstem. Here, sensory fibres from the upper three cervical nerve roots converge onto the same second-order neurones that receive input from the trigeminal nerve, which supplies sensation to the face and head.",
        "Because of this convergence, pain signals arising from upper cervical structures — the C1–C2 and C2–C3 facet joints, upper cervical discs, muscles and ligaments — can be perceived in trigeminal territory: the forehead, temple, around the eye and the back of the head. This is the same convergence principle by which a heart attack can be felt in the arm.",
        "The upper cervical spine's role in head movement and its dense sensory supply explain why upper cervical dysfunction in particular is implicated, and why examination of upper cervical motion features in assessment.",
      ],
      sources: ["ichd3", "anartelazo2021"],
    },
    {
      id: "epidemiology",
      title: "Epidemiology and risk factors",
      paragraphs: [
        "Estimates of how common cervicogenic headache is vary widely between studies, largely because different studies apply different diagnostic criteria. It is consistently reported as far less common than migraine and tension-type headache, and it can occur at any adult age.",
        "Reported associations include a history of neck trauma (including whiplash), sustained neck postures and occupations involving prolonged neck loading. However, post-whiplash headache is not automatically cervicogenic headache: ICHD-3 separately classifies acute headache attributed to whiplash, and headache after trauma requires its own assessment.",
        "Because diagnostic criteria differ between studies, prevalence figures and risk associations should be read with caution — this is an area where the literature is genuinely uncertain.",
      ],
      sources: ["ichd3", "anartelazo2021"],
    },
    {
      id: "pathophysiology",
      title: "Pathophysiology",
      paragraphs: [
        "The mechanism is referred pain through the trigeminocervical complex: a nociceptive source in an upper cervical structure produces perceived head pain. Candidate sources studied in the literature include the C2–C3 facet joint (the best studied, through diagnostic block studies), other upper cervical joints, discs and soft tissues.",
        "Diagnostic anaesthetic block studies — where numbing a specific structure abolishes the headache — provide the strongest evidence that individual structures can cause this headache, and blocks form part of the formal ICHD-3 causation criteria. However, blocks are specialist procedures, not routine physiotherapy assessment tools.",
        "Central pain processing may also contribute in persistent cases: ongoing peripheral input can sensitise the trigeminocervical complex, lowering the threshold for head pain. This helps explain why treatment often needs to address both the cervical source and the person's overall pain state, activity and sleep.",
      ],
      sources: ["ichd3", "bini2022"],
    },
    {
      id: "presentation",
      title: "Clinical presentation",
      paragraphs: [
        "The typical picture is a one-sided headache (though it can occasionally be both sides) that starts in the neck or back of the head and spreads towards the front — to the temple, forehead or around the eye. The pain is usually described as steady or aching rather than throbbing, of moderate intensity, and is often provoked by neck movement or sustained neck postures.",
        "Features that support a cervical source include: headache consistently accompanied by neck pain or stiffness, reduced neck movement, headache reproduced by pressure over upper cervical structures, and a pattern where the headache and neck symptoms rise and settle together.",
        "Features that point away from a cervical source include: prominent nausea, vomiting, light and sound sensitivity (migraine features), a pressing band-like quality bilaterally without neck involvement (tension-type features), or autonomic features such as a red, watering eye with restlessness (cluster-type features). These patterns redirect the diagnostic reasoning.",
      ],
      sources: ["ichd3", "anartelazo2021"],
    },
    {
      id: "subjective",
      title: "Subjective assessment",
      paragraphs: [
        "The headache history is the foundation: onset and any triggering event, location and spread, quality and intensity, frequency and duration of episodes, and the relationship to neck movement and posture. A headache diary — recording timing, intensity, triggers and medication use — is often more informative than recall.",
        "The history must actively screen for the features of migraine (throbbing quality, nausea, light and sound sensitivity, aggravation by routine activity) and tension-type headache, because these are far more common and are managed differently. It must also screen the headache red flags listed in the safety section of this guide.",
        "Medication use matters: frequent use of acute headache medication can itself maintain chronic headache (medication overuse headache), so a full medication history is part of every headache assessment. Impact on sleep, work and mood should be documented, and a baseline headache measure recorded for reassessment.",
      ],
      sources: ["ichd3", "do2019"],
    },
    {
      id: "objective",
      title: "Objective examination",
      paragraphs: [
        "Cervical examination assesses active and passive range of motion, segmental upper cervical mobility, muscle function of the deep neck flexors and scapular stabilisers, and palpation of upper cervical structures for tenderness and headache reproduction. Reproduction of the person's familiar headache on examination is more meaningful than tenderness alone.",
        "The cervical flexion-rotation test assesses rotation with the neck fully flexed, isolating upper cervical (C1–C2) motion. In a study of 60 participants, an experienced examiner using a study-derived 30-degree cutoff achieved approximately 85% accuracy in distinguishing cervicogenic headache from migraine and other headache forms. A larger systematic review found greater flexion-rotation restriction in cervicogenic headache than in migraine — but also found restriction in migraine compared with people without headache.",
      ],
      bullets: [
        "Restricted flexion-rotation supports, but does not establish, a cervical source — it is not unique to cervicogenic headache",
        "The 30-degree figure is a study-derived cutoff from one examiner context, not a universal diagnostic threshold",
        "Examination findings must be combined with the history and ICHD-3 causation criteria",
        "A neurological screen (cranial nerves, reflexes, coordination, fundoscopy where available) is part of any headache examination to screen for secondary causes",
      ],
      sources: ["hall2010", "anartelazo2021", "ichd3"],
    },
    {
      id: "differential",
      title: "Differential diagnosis and clinical reasoning",
      paragraphs: [
        "Headache differential diagnosis is a safety-critical skill because the common causes are benign but the dangerous ones are not rare enough to ignore. Reasoning proceeds in two steps: first exclude secondary (pathological) headache using the red flags; then distinguish between the primary headache disorders and cervicogenic headache.",
      ],
      table: {
        caption: "Features that help distinguish common headache types (patterns, not rules)",
        headings: ["Feature", "Cervicogenic", "Migraine", "Tension-type"],
        rows: [
          ["Typical location", "One side, neck to temple/eye", "Often one side, can switch", "Both sides, band-like"],
          ["Quality", "Steady, aching", "Throbbing, pulsating", "Pressing, tightening"],
          ["Neck movement/posture", "Provokes headache", "Not characteristic", "Not characteristic"],
          ["Nausea, light/sound sensitivity", "Absent or mild", "Prominent", "Absent or mild"],
          ["Aggravation by routine activity", "Variable", "Characteristic", "Not typical"],
        ],
      },
      note: "Clinical interpretation. These are patterns that guide reasoning, not checklists that diagnose. Migraine can involve neck pain; cervicogenic headache can occasionally be bilateral. When the picture is mixed or unclear, medical assessment and a headache diary clarify more than repeated physical testing.",
      sources: ["ichd3", "anartelazo2021"],
    },
    {
      id: "red-flags",
      title: "Red flags, precautions and referral",
      paragraphs: [
        "Before any headache is attributed to the neck, secondary causes must be considered. The SNNOOP10 list is a widely used framework for headache red and orange flags, developed from systematic review of the literature.",
      ],
      bullets: [
        "Systemic symptoms: fever, weight loss, or history of cancer or immunosuppression",
        "Neurological symptoms or signs: new weakness, numbness, confusion, impaired consciousness, seizure, or papilloedema",
        "Sudden onset: abrupt 'thunderclap' headache reaching maximum intensity within seconds to a minute",
        "Older age: new headache beginning after about age 50",
        "Pattern change: a new headache, or a clear change in a long-standing headache pattern",
        "Positional headache, or headache precipitated by coughing, sneezing or exertion",
        "Pregnancy or the weeks after delivery, with new headache",
        "Painful red eye with autonomic features",
        "Headache after significant head or neck trauma",
        "Medication overuse or a new medication coinciding with headache onset",
      ],
      note: "Clinical interpretation. These flags require appropriate medical assessment rather than automatic musculoskeletal attribution, and they do not all carry the same urgency. Equally, the SNNOOP10 list has limited prospective validation — a headache without any listed flag is not guaranteed benign, and clinical judgement remains necessary.",
      sources: ["do2019", "ichd3"],
    },
    {
      id: "investigations",
      title: "Investigations and imaging indications",
      paragraphs: [
        "For a headache with a classic primary headache pattern and no red flags, imaging is generally not indicated. Imaging is indicated when red flags are present or the pattern is atypical, and the choice of investigation is a medical decision.",
        "For suspected cervicogenic headache specifically, cervical imaging has limited diagnostic value: ICHD-3 notes that degenerative cervical findings are common in people without headache and are suggestive but not firm evidence of causation. A scan showing cervical degeneration does not diagnose cervicogenic headache, and a normal scan does not exclude it.",
        "The most definitive investigation for a specific cervical source is a diagnostic anaesthetic block, performed by specialists. This is part of the formal diagnostic framework rather than routine care, and its availability is limited in many settings — including much of Nigeria — which makes careful clinical criteria and, where appropriate, a monitored trial of treatment the pragmatic pathway.",
      ],
      sources: ["ichd3"],
    },
    {
      id: "management",
      title: "Physiotherapy management and evidence-informed rehabilitation",
      paragraphs: [
        "Where a cervical contribution to headache is supported by the assessment, physiotherapy management centres on exercise and, where appropriate, manual therapy. A foundational randomised controlled trial of 200 participants found that a six-week programme of specific exercise, manipulative therapy, or both, reduced cervicogenic headache frequency and intensity compared with control, with benefits maintained at 12 months. A 2022 systematic review and meta-analysis of 20 studies and over 1,400 participants found that manual and exercise therapies can reduce headache intensity and frequency in cervicogenic headache.",
        "These findings support offering treatment, but with honest framing: the interventions studied were heterogeneous, no single validated protocol or dosage exists, and the evidence does not justify promising cure. The six-week programme in the trial describes that trial — it is not a universal prescription.",
        "Management is multimodal in practice: cervical and scapular exercise, manual therapy to symptomatic upper cervical segments where appropriate, posture and ergonomics advice, and headache education including trigger management and medication-overuse awareness. Where the picture is mixed with migraine or tension-type features, or where response is poor, medical co-management is appropriate.",
      ],
      sources: ["jull2002", "bini2022", "blanpied2017"],
    },
    {
      id: "exercise",
      title: "Exercise prescription: position, technique, progression and regression",
      paragraphs: [
        "The best-studied exercise approach for cervicogenic headache trains the deep neck flexors with low-load endurance work — classically taught using a cranio-cervical flexion action (a gentle nodding movement) performed in lying, with attention to precise, fatigue-free technique rather than effort. Scapular and postural muscle endurance training typically accompanies it. Research has not established a universal dosage; load, holds and frequency are individualised and progressed by the treating clinician.",
        "Technique priorities are precision and symptom response: the correct muscles working without superficial muscle substitution, movements kept within a range that does not provoke the headache, and attention to after-response — a headache that flares for more than a short period after exercise indicates the dose was too high.",
        "Progression moves from supported positions (lying) to functional positions (sitting, standing), increases endurance demands, and reintroduces the postures and tasks that previously provoked symptoms. Regression reduces load or returns to a supported position during flares. Headache response — not just neck movement — is the progression criterion that distinguishes this from ordinary neck exercise.",
      ],
      sources: ["jull2002", "bini2022", "blanpied2017"],
    },
    {
      id: "outcome-measures",
      title: "Outcome measures and reassessment",
      paragraphs: [
        "Headache-specific measurement is essential because the goal is headache change, not only neck change. A headache diary recording frequency, intensity and duration is the most direct measure. Validated questionnaires used in headache practice and research include the Headache Impact Test (HIT-6) and the Migraine Disability Assessment (MIDAS), alongside the Neck Disability Index for the cervical component.",
        "Physical reassessment tracks cervical range of motion (including flexion-rotation), deep neck flexor performance and the response to previously provocative examination findings. Medication use should be reviewed at reassessment because of the risk of medication overuse headache.",
        "A reasonable trial of treatment is reviewed against the diary: if headache frequency and intensity are not improving over an expected treatment period, the diagnosis and plan should be reconsidered — including whether the headache is truly cervicogenic — rather than continuing unchanged.",
      ],
      sources: ["bini2022", "ichd3"],
    },
    {
      id: "prognosis",
      title: "Prognosis and return to function",
      paragraphs: [
        "Where the diagnosis is well supported, the evidence from trials suggests that a meaningful proportion of people improve with exercise and manual therapy, with benefits maintained at 12-month follow-up in the foundational trial. Complete resolution is possible but should not be promised, and some people have persistent symptoms requiring longer-term management.",
        "Prognosis is less favourable where the diagnosis is uncertain, where migraine or tension-type headache coexists, where medication overuse is present, or where headache has been chronic for many years. Addressing these factors is part of improving the outlook.",
        "Return to function is usually not the primary barrier — most people with cervicogenic headache remain at work — but headache-related disability, concentration and quality of life are real and worth measuring. Management goals should include the activities the headache limits, not only pain scores.",
      ],
      sources: ["jull2002", "bini2022"],
    },
    {
      id: "education",
      title: "Patient education and prevention",
      paragraphs: [
        "Education starts with the diagnosis itself: explaining that the neck can generate head pain through shared nerve pathways, and equally that the diagnosis has been reached by considering and excluding other causes. People with headache often fear serious disease; explaining what has been checked and why serious causes are unlikely — when that is genuinely the case — is therapeutic.",
        "Practical self-management includes identifying and modifying provoking postures and activities, pacing sustained neck positions, sleep and stress management, and following the exercise programme. Medication education is important: regular frequent use of acute pain medication can perpetuate headache, and this should be discussed where relevant.",
        "Prevention of recurrence centres on maintaining cervical and scapular muscle endurance, managing workstation and phone postures, and early attention to returning symptoms. People should leave knowing which headache changes — sudden severe onset, neurological symptoms, fever with stiff neck, a new pattern — need urgent medical review rather than a physiotherapy appointment.",
      ],
      sources: ["ichd3", "do2019", "bini2022"],
    },
  ],
  references: [
    {
      id: "ichd3",
      citation:
        "Headache Classification Committee of the International Headache Society. The International Classification of Headache Disorders, 3rd edition. Cephalalgia. 2018;38(1):1–211.",
      url: "https://ichd-3.org/11-headache-or-facial-pain-attributed-to-disorder-of-the-cranium-neck-eyes-ears-nose-sinuses-teeth-mouth-or-other-facial-or-cervical-structure/11-2-headache-attributed-to-disorder-of-the-neck/11-2-1-cervicogenic-headache/",
    },
    {
      id: "hall2010",
      citation:
        "Hall TM, Briffa K, Hopper D, Robinson KW. Comparative analysis and diagnostic accuracy of the cervical flexion-rotation test. Journal of Headache and Pain. 2010;11(5):391–397.",
      url: "https://pubmed.ncbi.nlm.nih.gov/20508964/",
    },
    {
      id: "anartelazo2021",
      citation:
        "Anarte-Lazo E, Carvalho GF, Schwarz A, et al. Differentiating migraine, cervicogenic headache and asymptomatic individuals based on physical examination findings: a systematic review and meta-analysis. BMC Musculoskeletal Disorders. 2021;22:755.",
      url: "https://pubmed.ncbi.nlm.nih.gov/34479514/",
    },
    {
      id: "do2019",
      citation:
        "Do TP, Remmers A, Schytz HW, et al. Red and orange flags for secondary headaches in clinical practice: SNNOOP10 list. Neurology. 2019;92(3):134–144.",
      url: "https://pubmed.ncbi.nlm.nih.gov/30587518/",
    },
    {
      id: "jull2002",
      citation:
        "Jull G, Trott P, Potter H, et al. A randomized controlled trial of exercise and manipulative therapy for cervicogenic headache. Spine. 2002;27(17):1835–1843.",
      url: "https://pubmed.ncbi.nlm.nih.gov/12221344/",
    },
    {
      id: "bini2022",
      citation:
        "Bini P, Hohenschurz-Schmidt D, Masullo V, et al. The effectiveness of manual and exercise therapy on headache intensity and frequency among patients with cervicogenic headache: a systematic review and meta-analysis. Chiropractic & Manual Therapies. 2022;30:49.",
      url: "https://pubmed.ncbi.nlm.nih.gov/36419164/",
    },
    {
      id: "blanpied2017",
      citation:
        "Blanpied PR, Gross AR, Elliott JM, et al. Neck Pain: Revision 2017 — Clinical Practice Guidelines. Journal of Orthopaedic & Sports Physical Therapy. 2017;47(7):A1–A83.",
      url: "https://pubmed.ncbi.nlm.nih.gov/28666405/",
    },
  ],
};
