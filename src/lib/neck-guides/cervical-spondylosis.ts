import type { ClinicalGuide } from "@/lib/clinical-guide";

export const cervicalSpondylosisGuide: ClinicalGuide = {
  title: "Cervical spondylosis",
  description:
    "A clinical learning guide to cervical spondylosis: age-related degeneration of the cervical discs and joints, the difference between radiographic change and symptomatic disease, and how axial pain, radiculopathy and myelopathy are recognised and managed.",
  safety:
    "Seek urgent medical assessment for new unsteadiness when walking, increasing clumsiness or weakness in the hands, loss of bladder or bowel control, or rapidly progressive limb weakness. These can indicate spinal cord compression (myelopathy), which may require surgical opinion and should not be managed as ordinary neck pain.",
  sections: [
    {
      id: "overview",
      title: "Overview and definition",
      paragraphs: [
        "Cervical spondylosis is the umbrella term for age-related degenerative change in the cervical spine: the intervertebral discs, vertebral bodies, uncovertebral joints and facet joints. It is extremely common on imaging with increasing age and, importantly, is frequently present in people with no symptoms at all.",
        "The term therefore describes a structural finding, not a diagnosis of the cause of any particular person's pain. Symptomatic presentations are usually described more specifically as axial neck pain, cervical radiculopathy (nerve root involvement) or degenerative cervical myelopathy (spinal cord involvement) — three related but distinct clinical pictures with different management and urgency.",
        "This guide focuses on the clinical reasoning that separates incidental degenerative change from symptomatic disease, and on recognising when degeneration has begun to affect the spinal cord.",
      ],
      sources: ["nouri2015", "blanpied2017"],
    },
    {
      id: "anatomy",
      title: "Anatomy and biomechanics",
      paragraphs: [
        "The cervical spine bears the load of the head while permitting more motion than any other spinal region. The lower cervical segments (C4–C7) experience the greatest combination of load and movement and are where degenerative change is most often seen.",
        "Degeneration typically involves several structures together. Discs lose water content and height; vertebral body endplates develop osteophytes (bony spurs); the uncovertebral joints hypertrophy and can narrow the intervertebral foramina where nerve roots exit; and the facet joints develop osteoarthritis. The ligamentum flavum may thicken and buckle inwards.",
        "The clinical significance of these changes depends on what they encroach upon: nothing (asymptomatic), a nerve root (radiculopathy), or the spinal cord itself (myelopathy). The spinal canal has some reserve space, and symptoms tend to arise when that reserve is exhausted or when dynamic factors — repeated movement, posture — further narrow the space available for the cord.",
      ],
      sources: ["nouri2015"],
    },
    {
      id: "epidemiology",
      title: "Epidemiology and risk factors",
      paragraphs: [
        "Radiographic cervical spondylosis increases steadily with age and is reported in the majority of older adults in imaging studies, yet only a minority of those with imaging change have symptoms attributable to it. This dissociation between structure and symptoms is one of the most consistent findings in spine research.",
        "Degenerative cervical myelopathy is the most common cause of spinal cord dysfunction in adults in many populations, yet it remains under-recognised, and diagnosis is often delayed because early symptoms are subtle and attributed to age or arthritis.",
      ],
      bullets: [
        "Increasing age — the dominant association",
        "Sustained occupational loading and repetitive neck postures",
        "Smoking, associated with disc degeneration",
        "Genetic susceptibility, supported by familial and genetic studies",
        "A congenitally narrow spinal canal, which reduces the reserve space for the cord",
      ],
      sources: ["nouri2015", "fehlings2017"],
    },
    {
      id: "pathophysiology",
      title: "Pathophysiology",
      paragraphs: [
        "Disc degeneration is usually the initiating event: loss of disc height shifts load onto the facet and uncovertebral joints, stimulating osteophyte formation. These changes progress slowly over years and, in most people, remain asymptomatic or produce only intermittent stiffness and aching.",
        "Radiculopathy arises when foraminal narrowing — from osteophytes, disc material or both — irritates or compresses a nerve root. Myelopathy arises when the spinal cord itself is compressed. The mechanism of cord injury is thought to combine static compression, dynamic repetitive injury during movement, and impaired blood supply, leading to a cascade of neurological damage that can become irreversible if unrelieved.",
        "This pathophysiology explains two clinically important features of myelopathy: it can progress stepwise or gradually, and delayed treatment is associated with worse recovery — which is why recognition and timely referral matter more than any single treatment a physiotherapist can offer for the cord compression itself.",
      ],
      sources: ["nouri2015", "fehlings2017"],
    },
    {
      id: "presentation",
      title: "Clinical presentation",
      paragraphs: [
        "Symptomatic cervical spondylosis presents along a spectrum. Axial neck pain presents as neck ache and stiffness, often worse with sustained postures, without neurological signs. Radiculopathic presentations add arm pain, sensory change, weakness or reflex loss in a root pattern. Myelopathic presentations are characterised by symptoms of cord dysfunction rather than pain.",
      ],
      table: {
        caption: "The three symptomatic presentations of cervical spondylosis",
        headings: ["Presentation", "Typical symptoms", "Key examination findings", "Urgency"],
        rows: [
          ["Axial neck pain", "Neck ache, stiffness, posture-related discomfort", "Reduced or uncomfortable range of motion; no neurological signs", "Routine conservative care"],
          ["Radiculopathy", "Radiating arm pain, tingling, numbness, sometimes weakness", "Dermatomal sensory change, myotomal weakness, reduced reflex; positive provocation cluster", "Conservative first; refer if progressive deficit"],
          ["Myelopathy", "Hand clumsiness, gait unsteadiness, weakness; neck pain may be mild or absent", "Hyperreflexia, Hoffmann's sign, upgoing plantar response, gait disturbance, hand dexterity loss", "Prompt medical/surgical referral"],
        ],
      },
      note: "Clinical interpretation. Myelopathy can be relatively painless. Absence of severe pain must never be taken as reassurance when coordination, gait or bladder function is changing.",
      sources: ["nouri2015", "fehlings2017", "blanpied2017"],
    },
    {
      id: "subjective",
      title: "Subjective assessment",
      paragraphs: [
        "The history should establish which presentation pattern is present. For axial pain: onset, aggravating postures, and impact on sleep and activity. For radicular features: the distribution and behaviour of arm symptoms. For possible myelopathy, ask directly and specifically, because patients rarely volunteer these symptoms as neck-related.",
        "Questions that screen for cord involvement include: Have your hands become clumsy — dropping things, difficulty with buttons or writing? Has your walking changed — unsteadiness, heaviness in the legs, tripping? Any change in bladder control? Any electric-shock sensation down the spine or into the limbs on neck flexion (Lhermitte's phenomenon)?",
        "General health questions matter because the differential for these symptoms is wide: diabetes and B12 deficiency can cause similar limb symptoms, and neurological conditions can mimic myelopathy. Previous imaging, treatments and their effects should be documented.",
      ],
      sources: ["fehlings2017", "nouri2015"],
    },
    {
      id: "objective",
      title: "Objective examination",
      paragraphs: [
        "Examination begins with observation of gait and hand function — not just the neck. Active cervical range of motion is assessed, followed by a structured upper limb neurological examination: sensation, myotomal strength and reflexes. Where radiculopathy is suspected, the provocation test cluster described in the radiculopathy guide applies.",
        "When myelopathy is a possibility, the examination extends to lower motor and upper motor neurone signs. Features sought include hyperreflexia (including in the legs), Hoffmann's sign (flicking the middle finger nail produces thumb/index flexion), an upgoing plantar response (Babinski), clonus, impaired rapid hand movements, and gait assessment including tandem walking.",
      ],
      bullets: [
        "No single myelopathic sign is perfectly sensitive or specific; a combination of concordant signs with a compatible history is what raises suspicion",
        "A normal Hoffmann's sign does not exclude myelopathy",
        "Grip strength, finger dexterity and gait should be documented numerically or descriptively at baseline so deterioration is detectable",
        "Provocation tests for radiculopathy should be applied cautiously, if at all, when myelopathy is suspected",
      ],
      sources: ["fehlings2017", "nouri2015"],
    },
    {
      id: "differential",
      title: "Differential diagnosis and clinical reasoning",
      paragraphs: [
        "For axial neck pain, the differential includes non-specific mechanical neck pain, facet-mediated pain, cervicogenic headache and referred shoulder pain. For radicular symptoms, peripheral nerve entrapment and brachial plexus pathology must be considered. For myelopathic features, the differential is medical and wide.",
      ],
      bullets: [
        "Non-compressive causes of cord dysfunction: multiple sclerosis, motor neurone disease, subacute combined degeneration (B12 deficiency), syrinx",
        "Peripheral causes of hand numbness and clumsiness: carpal tunnel syndrome, ulnar neuropathy, diabetic neuropathy",
        "Other causes of gait disturbance: lumbar spinal stenosis, hip or knee osteoarthritis, cerebrovascular disease, normal pressure hydrocephalus",
      ],
      note: "Clinical interpretation. Physiotherapy assessment can raise suspicion of myelopathy but cannot exclude the medical mimics. Suspected myelopathy is a referral, not a physiotherapy diagnosis to be managed alone.",
      sources: ["fehlings2017", "nouri2015"],
    },
    {
      id: "red-flags",
      title: "Red flags, precautions and referral",
      paragraphs: [
        "The central safety issue in cervical spondylosis is recognising myelopathy early. Guidelines on degenerative cervical myelopathy recommend surgical evaluation for moderate or severe or progressive myelopathy, and emphasise that mild myelopathy also warrants specialist assessment with careful monitoring, because deterioration can be stepwise and incompletely reversible.",
      ],
      bullets: [
        "Gait disturbance, frequent tripping or new need for walking support — refer promptly",
        "Progressive hand clumsiness, weakness or wasting — refer promptly",
        "Bladder or bowel dysfunction — urgent referral",
        "Hyperreflexia, Hoffmann's sign, Babinski response or clonus found on examination — refer for medical assessment",
        "Neck pain with fever, weight loss, night pain or history of malignancy — consider serious pathology unrelated to spondylosis",
        "New symptoms after trauma in a person with known spondylosis — lower threshold for imaging, as a narrowed canal tolerates injury poorly",
      ],
      sources: ["fehlings2017", "nouri2015"],
    },
    {
      id: "investigations",
      title: "Investigations and imaging indications",
      paragraphs: [
        "Plain radiographs show degenerative change but correlate poorly with symptoms and are not routinely required for uncomplicated axial neck pain. Their main value is limited to specific situations such as trauma screening or where other imaging is unavailable.",
        "MRI is the investigation of choice when cord or root compression is suspected, because it demonstrates the cord, nerve roots, discs and ligaments directly. CT is useful for bony detail and where MRI is contraindicated or unavailable; CT myelography is an alternative in some settings.",
        "Two cautions recur in the literature. First, degenerative findings on imaging are age-typical and must be matched to the clinical picture before being called the cause. Second, where imaging access is limited — a reality in much of Nigeria — clinical signs of myelopathy should drive referral on their own merits rather than waiting indefinitely for imaging confirmation.",
      ],
      sources: ["fehlings2017", "nouri2015", "blanpied2017"],
    },
    {
      id: "management",
      title: "Physiotherapy management and evidence-informed rehabilitation",
      paragraphs: [
        "Management depends entirely on which presentation is present. For axial neck pain associated with spondylosis, guidelines support education, exercise and manual therapy within a multimodal approach, similar to non-specific neck pain. For radiculopathy, the conservative approach described in the radiculopathy guide applies.",
        "For myelopathy, physiotherapy has a different role. The evidence-based guideline recommendation for moderate, severe or progressive disease is surgical evaluation; physiotherapy does not decompress the cord and must not delay referral. Where surgery is not indicated or not yet performed, structured rehabilitation, falls-prevention advice, and monitoring for deterioration are appropriate, ideally within a supervised pathway.",
        "Realistic expectation-setting is part of management: degenerative change itself does not reverse, but pain, function and quality of life can improve substantially, and many people with radiographic spondylosis live without significant symptoms.",
      ],
      sources: ["fehlings2017", "blanpied2017"],
    },
    {
      id: "exercise",
      title: "Exercise prescription: position, technique, progression and regression",
      paragraphs: [
        "For axial neck pain, exercise programmes typically combine deep neck flexor endurance training, scapular and postural muscle strengthening, and graded restoration of cervical range of motion. Research has not established one universal dosage; frequency and load are individualised to irritability and response, and progressed as tolerance improves.",
        "Technique priorities include controlled mid-range movement before end-range loading, avoiding sustained end-range extension in symptomatic degenerative spines, and building endurance before maximal strength. Progression follows symptom response: increased range, resistance and functional tasks as tolerated; regression to a previously comfortable level when symptoms flare.",
        "When myelopathy is present or suspected, exercise prescription changes fundamentally: high-velocity manual therapy to the cervical spine is inappropriate, end-range loading is avoided, and the programme emphasises safe function, balance and strength within a monitored plan while specialist assessment proceeds.",
      ],
      sources: ["blanpied2017", "fehlings2017"],
    },
    {
      id: "outcome-measures",
      title: "Outcome measures and reassessment",
      paragraphs: [
        "For axial pain and radiculopathy, the Neck Disability Index and pain rating scales are commonly used, alongside cervical range of motion and neurological screening at review. For myelopathy, condition-specific measures exist — the modified Japanese Orthopaedic Association (mJOA) scale is the most widely used severity measure in the literature — though its use is primarily in medical and research settings.",
        "Reassessment in spondylosis carries a specific duty: because myelopathy can emerge or progress gradually, people with significant degenerative change should be re-screened periodically for gait, hand function, reflex and bladder changes even when the presenting complaint is only neck pain.",
        "Any new myelopathic feature at reassessment changes the pathway from conservative management to referral, regardless of how well the neck pain itself is responding.",
      ],
      sources: ["fehlings2017", "blanpied2017"],
    },
    {
      id: "prognosis",
      title: "Prognosis and return to function",
      paragraphs: [
        "Axial neck pain associated with spondylosis typically follows a fluctuating course: episodes of pain and stiffness that settle with management, against a background of slowly progressive structural change that is usually well tolerated. Most people remain fully functional.",
        "Radiculopathy from spondylotic foraminal narrowing shares the generally favourable prognosis of disc-related radiculopathy, though degenerative narrowing may resolve more slowly than an acute disc herniation.",
        "Myelopathy has a different prognosis: untreated, a substantial proportion of people deteriorate over time, and neurological recovery after treatment is better when treatment occurs earlier. This is the evidence-based reason why recognition and referral urgency run through every section of this guide.",
      ],
      sources: ["fehlings2017", "nouri2015"],
    },
    {
      id: "education",
      title: "Patient education and prevention",
      paragraphs: [
        "The most important education message is the distinction between structure and symptoms: degenerative change on a scan is a normal part of ageing for most people and is not, by itself, a reason for fear or for avoiding movement. Unhelpful beliefs — that the neck is crumbling or that activity is dangerous — are associated with worse outcomes and should be addressed directly.",
        "Practical measures include staying active, varying sustained postures, maintaining neck and shoulder girdle strength, and general health measures such as not smoking. For people with identified canal narrowing or early myelopathic signs, education covers the specific changes that must prompt urgent review: walking, hand function and bladder control.",
        "Prevention in the strict sense is limited — age-related change cannot be prevented — but symptom burden, function and complication risk are all modifiable, which is where education and exercise do their work.",
      ],
      sources: ["blanpied2017", "fehlings2017"],
    },
  ],
  references: [
    {
      id: "nouri2015",
      citation:
        "Nouri A, Tetreault L, Singh A, Karadimas SK, Fehlings MG. Degenerative cervical myelopathy: epidemiology, genetics, and pathogenesis. Spine. 2015;40(12):E675–E693.",
      url: "https://pubmed.ncbi.nlm.nih.gov/26378358/",
    },
    {
      id: "fehlings2017",
      citation:
        "Fehlings MG, Tetreault LA, Riew KD, et al. A clinical practice guideline for the management of patients with degenerative cervical myelopathy: recommendations for patients with mild, moderate, and severe disease and nonmyelopathic patients with evidence of cord compression. Global Spine Journal. 2017;7(3 Suppl):70S–83S.",
      url: "https://pubmed.ncbi.nlm.nih.gov/29164035/",
    },
    {
      id: "blanpied2017",
      citation:
        "Blanpied PR, Gross AR, Elliott JM, et al. Neck Pain: Revision 2017 — Clinical Practice Guidelines. Journal of Orthopaedic & Sports Physical Therapy. 2017;47(7):A1–A83.",
      url: "https://pubmed.ncbi.nlm.nih.gov/28666405/",
    },
  ],
};
