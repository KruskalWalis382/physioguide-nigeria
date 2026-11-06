export const regions = [
  {
    name: "Neck and Cervical Spine",
    icon: "◉",
    description: "Conditions affecting the neck, cervical vertebrae, nerves and surrounding tissues.",
    conditions: [
      "Neck pain and cervical strain",
      "Cervical radiculopathy",
      "Cervical spondylosis",
      "Whiplash-associated disorders",
      "Cervicogenic headache",
    ],
  },
  {
    name: "Back and Spine",
    icon: "↕",
    description: "Explore spinal conditions, back pain and disorders affecting spinal nerves.",
    conditions: [
      "Non-specific low back pain",
      "Lumbar radiculopathy (sciatica)",
      "Lumbar spinal stenosis",
      "Lumbar disc herniation",
      "Spondylolisthesis",
    ],
  },
  {
    name: "Shoulder",
    icon: "◎",
    description: "Conditions affecting shoulder movement, stability, tendons and joints.",
    conditions: [
      "Rotator cuff-related shoulder pain",
      "Adhesive capsulitis (frozen shoulder)",
      "Shoulder osteoarthritis",
      "Shoulder dislocation",
      "Acromioclavicular joint injuries",
    ],
  },
  {
    name: "Elbow, Wrist and Hand",
    icon: "◇",
    description: "Learn about upper-limb pain, tendon problems, nerve compression and injuries.",
    conditions: [
      "Lateral elbow tendinopathy",
      "Medial elbow tendinopathy",
      "Carpal tunnel syndrome",
      "De Quervain's tenosynovitis",
      "Wrist and hand fractures",
    ],
  },
  {
    name: "Hip and Pelvis",
    icon: "◎",
    description: "Conditions affecting hip joints, pelvic regions and everyday mobility.",
    conditions: [
      "Hip osteoarthritis",
      "Greater trochanteric pain syndrome",
      "Hip fractures",
      "Femoroacetabular impingement",
      "Sacroiliac-region pain",
    ],
  },
  {
    name: "Knee",
    icon: "◉",
    description: "Explore knee pain, joint conditions, ligament injuries and rehabilitation.",
    conditions: [
      "Knee osteoarthritis",
      "Patellofemoral pain",
      "Anterior cruciate ligament injury",
      "Meniscal injury",
      "Patellar tendinopathy",
    ],
  },
  {
    name: "Ankle and Foot",
    icon: "◇",
    description: "Understand conditions affecting walking, balance, the ankle and foot.",
    conditions: [
      "Lateral ankle sprain",
      "Achilles tendinopathy",
      "Plantar heel pain",
      "Plantar fasciopathy",
      "Ankle fractures",
    ],
  },
  {
    name: "Neurological Conditions",
    icon: "⌁",
    description: "Learn how neurological conditions can affect movement, balance and function.",
    conditions: [
      "Stroke and post-stroke disability",
      "Cerebral palsy",
      "Parkinson's disease",
      "Multiple sclerosis",
      "Peripheral nerve injuries",
    ],
  },
  {
    name: "Chest and Respiratory",
    icon: "♡",
    description: "Conditions where respiratory physiotherapy and rehabilitation may help.",
    conditions: [
      "Chronic obstructive pulmonary disease",
      "Asthma and exercise limitations",
      "Pneumonia recovery",
      "Bronchiectasis",
      "Postoperative respiratory complications",
    ],
  },
  {
    name: "Paediatric and Other Conditions",
    icon: "✳",
    description: "Explore childhood movement conditions and other important rehabilitation needs.",
    conditions: [
      "Developmental dysplasia of the hip",
      "Clubfoot",
      "Developmental motor delay",
      "Idiopathic scoliosis",
      "Osteoporosis and fragility fractures",
    ],
  },
];

export function slugifyRegionName(name: string) {
  return name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
