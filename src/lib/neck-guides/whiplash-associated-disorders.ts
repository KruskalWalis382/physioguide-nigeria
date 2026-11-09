import type { ClinicalGuide } from "@/lib/clinical-guide";

export const whiplashGuide: ClinicalGuide = {
  title: "Whiplash-associated disorders",
  description:
    "A clinical learning guide to whiplash-associated disorders (WAD): the acceleration-deceleration mechanism, the Quebec Task Force grades, trauma screening, active rehabilitation, and the factors that shape recovery.",
  safety:
    "After any road traffic collision or significant neck trauma, fracture and instability must be considered before anything else. Seek emergency assessment for severe or worsening pain, any limb weakness or numbness, difficulty walking, loss of bladder or bowel control, confusion, drowsiness, vomiting or severe headache. Neck pain after trauma is not automatically a simple strain.",
  sections: [
    {
      id: "overview",
      title: "Overview and definition",
      paragraphs: [
        "Whiplash is an acceleration-deceleration mechanism of energy transfer to the neck, most commonly from a rear-end or side-impact road traffic collision, but also from falls, sporting impacts and other sudden events. Whiplash-associated disorders (WAD) is the term for the clinical consequences that can follow: neck pain, stiffness, headache and a range of associated symptoms.",
        "The distinction matters: whiplash is a mechanism of injury, not a diagnosis, and WAD describes the resulting clinical picture. The Quebec Task Force classification, published in 1995, remains the most widely used framework for grading WAD and is used throughout this guide.",
        "Most people with uncomplicated WAD recover well, particularly with early active management. A minority develop persistent symptoms, and much of the modern literature focuses on identifying those at risk early so that care can be matched to need.",
      ],
      sources: ["spitzer1995", "sira2014"],
    },
    {
      id: "anatomy",
      title: "Anatomy and biomechanics",
      paragraphs: [
        "In a rear-impact collision, the torso is pushed forward by the seat while the head lags behind, producing rapid extension followed by flexion of the cervical spine — often within a fraction of a second, faster than protective muscle responses can act. The lower cervical segments experience shear and compression forces, while the upper cervical spine and its supporting structures are also loaded.",
        "Post-mortem and experimental studies have identified potential injury in multiple tissues: facet joint capsules and cartilage, intervertebral discs, ligaments, muscles, and occasionally nerve roots or the dorsal root ganglia. In most WAD cases, however, no single lesion is identified on available imaging, and symptoms are understood as arising from a combination of tissue strain, inflammation and the nervous system's protective response to injury.",
        "Associated structures matter clinically: the same event can cause concussion, jaw (temporomandibular) injury, vestibular disturbance affecting balance, and psychological trauma. These are not separate from WAD management — they shape presentation and recovery.",
      ],
      sources: ["spitzer1995", "sira2014"],
    },
    {
      id: "epidemiology",
      title: "Epidemiology and risk factors",
      paragraphs: [
        "WAD is one of the most common consequences of road traffic collisions worldwide, though reported incidence varies widely between countries, insurance systems and study methods, so precise figures should be treated cautiously. In Nigeria, where road traffic collisions are frequent and formal injury registration is limited, the true burden is likely substantial but poorly quantified.",
        "Factors associated with a higher risk of persistent symptoms in the literature include higher initial pain intensity, higher initial neck-related disability, and negative recovery expectations. Post-traumatic stress symptoms are also consistently associated with poorer outcome. Collision factors such as seat position or head restraint use show weaker and less consistent associations.",
        "These are group-level associations, not individual predictions: many people with high initial pain recover fully, and risk screening is used to guide care intensity, not to label anyone as a non-responder.",
      ],
      sources: ["sira2014", "spitzer1995"],
    },
    {
      id: "pathophysiology",
      title: "Pathophysiology",
      paragraphs: [
        "The tissue injury in most WAD is a strain of capsular, muscular and ligamentous structures, with inflammation that settles over weeks in the typical case. More severe injuries can involve disc disruption, facet joint injury or nerve root irritation — which is why neurological examination matters.",
        "In people who develop persistent symptoms, research has identified changes beyond the original tissue injury: heightened pain sensitivity (both locally and more widespread), altered muscle activation patterns, reduced movement confidence, and psychological distress including post-traumatic stress. These findings explain why persistent WAD is not simply a tissue that failed to heal, and why management must address movement, confidence and psychological factors, not only the neck structures.",
        "This understanding also explains a key clinical principle: for uncomplicated WAD, pain is not a reliable signal of ongoing tissue damage, and treating it as such — with rest, collars and avoidance — can delay recovery.",
      ],
      sources: ["sira2014", "spitzer1995"],
    },
    {
      id: "presentation",
      title: "Clinical presentation",
      paragraphs: [
        "Neck pain and stiffness typically develop within hours to a day or two of the collision — delayed onset is common and does not indicate severity. Headache, shoulder or interscapular pain, dizziness and difficulty concentrating are frequent accompanying symptoms. The Quebec Task Force classification grades the presentation by clinical signs.",
      ],
      table: {
        caption: "Quebec Task Force classification of whiplash-associated disorders",
        headings: ["Grade", "Definition"],
        rows: [
          ["0", "No neck complaint and no physical signs"],
          ["I", "Neck pain, stiffness or tenderness only; no physical signs"],
          ["II", "Neck complaint and musculoskeletal signs, including reduced range of movement or point tenderness"],
          ["III", "Neck complaint and neurological signs, including reduced or absent reflexes, weakness or sensory deficits"],
          ["IV", "Neck complaint and fracture or dislocation"],
        ],
      },
      note: "Clinical interpretation. Headache, dizziness and similar symptoms can occur across grades and do not by themselves indicate grade III. The grade describes examination findings, and grade alone does not determine prognosis.",
      sources: ["spitzer1995", "sira2014"],
    },
    {
      id: "subjective",
      title: "Subjective assessment",
      paragraphs: [
        "The history documents the mechanism (collision type, direction of impact, whether the head was turned), symptom onset and progression, and the full symptom picture including headache, dizziness, visual or concentration disturbance, and jaw symptoms. Prior neck problems and general health are recorded.",
        "Two screening threads run in parallel from the first contact. The first is trauma screening: loss of consciousness, severe immediate pain, midline tenderness reported, neurological symptoms, intoxication at the time, or distracting injuries — features that feed into the trauma decision rules described in the examination section. The second is recovery-risk screening: current pain intensity, neck-related disability, and the person's own expectation of recovery, which guidelines identify as the most useful early indicators of who may need more support.",
        "Psychological screening is part of good WAD care, not an optional extra: symptoms of post-traumatic stress (intrusive memories of the event, avoidance, hypervigilance, poor sleep) are common after collisions and influence recovery.",
      ],
      sources: ["sira2014"],
    },
    {
      id: "objective",
      title: "Objective examination",
      paragraphs: [
        "Before any movement testing, trauma criteria are applied. Two validated rules guide the decision about imaging after blunt neck trauma: the Canadian C-spine Rule (for alert, stable patients, screening high-risk factors, then low-risk factors, then the ability to actively rotate the neck 45 degrees each way) and the NEXUS criteria (no midline cervical tenderness, no focal neurological deficit, normal alertness, no intoxication, no painful distracting injury — all five must be met for low-risk classification).",
        "These rules are imaging decision tools, not diagnoses, and they must be applied completely and within their intended populations — partial application (for example, only checking neck rotation) is not the validated rule. Where any criterion raises concern, medical assessment and imaging come before physiotherapy examination proceeds.",
        "Once fracture and instability are reasonably excluded, examination covers active cervical range of motion, palpation, a neurological screen (sensation, strength, reflexes) to distinguish grade III presentations, and assessment of balance and eye movement where dizziness is reported. Baseline pain and disability scores are recorded for reassessment.",
      ],
      sources: ["stiell2001", "hoffman2000", "sira2014"],
    },
    {
      id: "differential",
      title: "Differential diagnosis and clinical reasoning",
      paragraphs: [
        "Post-traumatic neck pain is not automatically WAD. Reasoning should consider the injuries that must not be missed and the conditions that commonly coexist.",
      ],
      bullets: [
        "Cervical fracture or dislocation (WAD IV) — excluded by trauma screening and imaging where indicated",
        "Cervical radiculopathy from disc injury — neurological signs in a root pattern",
        "Concussion or mild traumatic brain injury — headache, concentration and balance symptoms overlapping with WAD",
        "Vestibular injury — dizziness and unsteadiness that may need specific vestibular assessment",
        "Cervical artery injury — rare but serious; neck pain or headache with neurological symptoms after trauma warrants urgent medical review",
        "Temporomandibular (jaw) injury — jaw pain, clicking or difficulty chewing",
      ],
      note: "Clinical interpretation. Coexisting conditions are common after collisions. Finding WAD does not exclude concussion or vestibular injury, and persistent dizziness or cognitive symptoms should prompt specific assessment rather than being attributed to the neck alone.",
      sources: ["sira2014", "stiell2001"],
    },
    {
      id: "red-flags",
      title: "Red flags, precautions and referral",
      paragraphs: [
        "The first precaution is structural: until fracture and instability are excluded by appropriate screening, the neck is not subjected to loading, end-range testing or manual therapy. Beyond the acute trauma screen, several features warrant medical referral.",
      ],
      bullets: [
        "Neurological deficit — weakness, sensory loss, reflex change (WAD III) — requires medical assessment and monitored management",
        "Suspected fracture or dislocation (WAD IV) — emergency pathway, not physiotherapy",
        "Severe or worsening headache, vomiting, drowsiness or confusion — possible intracranial injury",
        "Neck pain with neurological symptoms such as facial or limb symptoms, visual disturbance or difficulty speaking or swallowing after trauma — possible arterial injury; urgent review",
        "Significant post-traumatic stress symptoms that are not settling — psychological referral is part of good WAD care",
        "Symptoms that are not improving as expected over the first weeks — review the diagnosis and the management plan rather than continuing unchanged",
      ],
      sources: ["sira2014", "stiell2001", "hoffman2000"],
    },
    {
      id: "investigations",
      title: "Investigations and imaging indications",
      paragraphs: [
        "For uncomplicated WAD (grades I–II with negative trauma screening), imaging is not routinely indicated: it does not change management, and degenerative findings common in the general population risk being misattributed to the injury.",
        "Imaging is indicated when trauma decision rules are positive or clinical concern exists. The Canadian C-spine Rule and NEXUS criteria guide this decision in alert, stable patients. The appropriate modality is a medical decision; contemporary trauma practice commonly uses CT for suspected bony injury, with MRI reserved for cord, disc or ligamentous concerns — older guidance referring to plain radiography should not be read as establishing the preferred modern modality for every presentation.",
        "A clinically important point for practice where imaging access is limited: the decision rules were designed to identify who needs imaging, so a positive rule in a setting without available imaging means referral to a centre that has it, not simply proceeding without it.",
      ],
      sources: ["stiell2001", "hoffman2000", "sira2014"],
    },
    {
      id: "management",
      title: "Physiotherapy management and evidence-informed rehabilitation",
      paragraphs: [
        "Guidelines for acute WAD consistently recommend an active, recovery-focused approach: reassurance that most people recover, encouragement to maintain normal activity as tolerated, advice to avoid prolonged rest, and an individualised exercise programme. This active approach has the strongest and most consistent support in the WAD literature.",
        "Prolonged immobilisation in a soft collar is specifically discouraged for uncomplicated WAD. The evidence and guideline position is that rest and collars beyond a very short initial period are associated with worse outcomes — they promote stiffness, weakness and fear of movement without protecting any structure that needs protecting in grade I–II injuries.",
        "Manual therapy, where used, is an adjunct to active management rather than a stand-alone treatment. Care should be reviewed serially rather than delivered as a fixed course: guidelines recommend reassessing pain and disability, and where scores remain high or unchanged at around three weeks, screening specifically for post-traumatic stress and adjusting the plan — which may include psychological referral alongside physical management.",
        "For people with higher initial pain, disability or poor recovery expectations, guidelines support more structured and closely monitored care from the outset, because this group accounts for most persistent cases.",
      ],
      note: "Clinical interpretation. The evidence base is strongest for the overall approach — activity, reassurance, exercise, serial review — rather than for any single technique. Be honest that specific technique choices within that approach have weaker evidence.",
      sources: ["sira2014", "blanpied2017"],
    },
    {
      id: "exercise",
      title: "Exercise prescription: position, technique, progression and regression",
      paragraphs: [
        "Exercise in WAD begins early and stays active. Research has not established one universal dosage; the principles below are drawn from guideline-supported practice, with sets, repetitions and frequency individualised by the treating clinician.",
        "Early exercise emphasises restoring comfortable active movement: gentle cervical range-of-motion exercises in all directions within tolerance, performed regularly through the day rather than in one intensive session. Technique priority is smooth, unguarded movement — the aim is to rebuild normal movement confidence, not to push through sharp pain.",
        "Progression adds endurance and strength: deep neck flexor training, scapular setting and postural muscle endurance, and graded return to the specific activities the person needs — driving, work tasks, sport. Functional progressions matter because fear of specific movements (for example, checking a blind spot while driving) is common after collisions and resolves with graded exposure, not avoidance.",
        "Regression means temporarily reducing range, load or frequency during a flare while keeping activity going — not stopping exercise entirely. A flare that does not settle, or new neurological symptoms, prompts clinical review.",
      ],
      sources: ["sira2014", "blanpied2017"],
    },
    {
      id: "outcome-measures",
      title: "Outcome measures and reassessment",
      paragraphs: [
        "The Neck Disability Index and a numeric pain rating scale are the most commonly used measures in WAD guidelines and research. Guideline risk thresholds described in the literature include NDI scores above 15 out of 50 and pain above 5 out of 10 as indicators of higher risk of delayed recovery — these are screening prompts for closer management, not diagnoses or fixed predictions.",
        "Recovery expectation — simply asking the person whether they expect to recover — is a validated and practical screening item. Where symptoms are not settling, the Impact of Events Scale is used in guideline pathways to screen for post-traumatic stress at around three weeks.",
        "Reassessment is serial and planned: guidelines recommend reviewing pain, disability and function at regular intervals in the first 12 weeks, escalating or adjusting care when scores are not improving, rather than discharging early or continuing an unchanging plan.",
      ],
      sources: ["sira2014"],
    },
    {
      id: "prognosis",
      title: "Prognosis and return to function",
      paragraphs: [
        "Most people with grade I–II WAD recover substantially within weeks to a few months, and early active management supports this. Recovery is not always linear — fluctuations are normal and do not indicate re-injury.",
        "A minority develop persistent pain and disability. The strongest early indicators of this risk are high initial pain intensity, high initial disability and poor recovery expectations, with post-traumatic stress symptoms also consistently implicated. Identifying these factors early is worthwhile because care can be intensified and psychological support added where needed.",
        "Return to work and normal activity is encouraged early, with modification where needed rather than complete absence. Prolonged time away from usual activity is itself associated with poorer recovery, which is why guidelines frame return to activity as part of treatment, not as something that happens after it.",
      ],
      sources: ["sira2014", "spitzer1995"],
    },
    {
      id: "education",
      title: "Patient education and prevention",
      paragraphs: [
        "The core education messages for WAD are well supported: most people recover; hurt does not mean ongoing harm in uncomplicated WAD; staying active and returning to normal activity helps recovery; and rest, collars and avoiding movement are unhelpful beyond the first day or two.",
        "Practical advice includes pacing return to driving and work, simple strategies for sleep and comfortable positions, and what to expect — some fluctuation is normal. People should know the specific changes that need urgent review: limb weakness or numbness, walking or bladder problems, severe worsening headache, or drowsiness and confusion.",
        "Prevention at the population level is about road safety: vehicle head restraints, seatbelts, speed and road conditions. At the individual level after a collision, the most effective 'prevention' of chronic problems is the active, reassured, monitored approach described throughout this guide.",
      ],
      sources: ["sira2014", "spitzer1995"],
    },
  ],
  references: [
    {
      id: "spitzer1995",
      citation:
        "Spitzer WO, Skovron ML, Salmi LR, et al. Scientific monograph of the Quebec Task Force on Whiplash-Associated Disorders: redefining 'whiplash' and its management. Spine. 1995;20(8 Suppl):1S–73S.",
      url: "https://pubmed.ncbi.nlm.nih.gov/7604354/",
    },
    {
      id: "sira2014",
      citation:
        "State Insurance Regulatory Authority (NSW). Guidelines for the management of acute whiplash-associated disorders — for health professionals. 3rd edition. 2014.",
      url: "https://www.sira.nsw.gov.au/resources-library/motor-accident-resources/publications/for-professionals/whiplash-resources/SIRA08104-Whiplash-Guidelines-1117-396479.pdf",
    },
    {
      id: "stiell2001",
      citation:
        "Stiell IG, Wells GA, Vandemheen KL, et al. The Canadian C-spine rule for radiography in alert and stable trauma patients. JAMA. 2001;286(15):1841–1848.",
      url: "https://pubmed.ncbi.nlm.nih.gov/11597285/",
    },
    {
      id: "hoffman2000",
      citation:
        "Hoffman JR, Mower WR, Wolfson AB, Todd KH, Zucker MI. Validity of a set of clinical criteria to rule out injury to the cervical spine in patients with blunt trauma. New England Journal of Medicine. 2000;343(2):94–99.",
      url: "https://pubmed.ncbi.nlm.nih.gov/10891516/",
    },
    {
      id: "blanpied2017",
      citation:
        "Blanpied PR, Gross AR, Elliott JM, et al. Neck Pain: Revision 2017 — Clinical Practice Guidelines. Journal of Orthopaedic & Sports Physical Therapy. 2017;47(7):A1–A83.",
      url: "https://pubmed.ncbi.nlm.nih.gov/28666405/",
    },
  ],
};
