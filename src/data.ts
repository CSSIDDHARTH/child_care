import { Service, Feature, Benefit, ContactInfo } from "./types";

export const SERVICES: Service[] = [
  {
    id: "behaviour-therapy",
    title: "Behavior Therapy / ABA Therapy",
    description: "Positive behaviour support, emotion regulation and social skills for a better tomorrow.",
    imageUrl: "/behaviour%20therapy.png"
  },
  {
    id: "occupational-therapy",
    title: "Occupational Therapy & Sensory Integration",
    description: "Enhancing motor skills, sensory processing, daily living activities and independence.",
    imageUrl: "/occupational%20therapy.png"
  },
  {
    id: "special-education",
    title: "Special Education",
    description: "Personalized learning support to build academic skills, confidence and overall development.",
    imageUrl: "/special%20education.png"
  },
  {
    id: "developmental-assessment",
    title: "Developmental Assessment & Psychological Testing",
    description: "Our standardized, child-friendly evaluations identify cognitive, emotional, and social development milestones. We provide clear, diagnostic clarity and actionable clinical insights to guide your child's therapeutic path. Our supportive environment ensures children feel comfortable and safe throughout the assessment process.",
    imageUrl: "/development%20assesment.png"
  },
  {
    id: "speech-therapy",
    title: "Speech Therapy",
    description: "Improving communication, speech clarity, language and social skills.",
    imageUrl: "/speech%20therapy.png"
  },
  {
    id: "parent-counseling",
    title: "Parent Counseling & Family Support",
    description: "We provide compassionate counseling and evidence-based guidance to help parents navigate developmental challenges and strengthen family dynamics. Our therapeutic support empowers caregivers with practical strategies, emotional resilience, and a collaborative path forward. Together, we create a nurturing, cohesive environment for your child's growth.",
    imageUrl: "/parent%20counselling.png"
  }
];

export const FEATURES: Feature[] = [
  {
    id: "expert-team",
    title: "Expert Team",
    description: "Our multidisciplinary practitioners possess specialized credentials and extensive clinical experience in pediatric therapy and behavioral support."
  },
  {
    id: "advanced-infra",
    title: "Advanced Infrastructure",
    description: "State-of-the-art sensory gyms, play therapy rooms, and modern clinical tools designed for children's safety and stimulation."
  },
  {
    id: "psychological-assessments",
    title: "Timely Psychological Assessments",
    description: "Standardized evaluations (cognitive, behavioral, and developmental scales) with minimal wait times to initiate support early."
  },
  {
    id: "science-results",
    title: "Scientifically Proven & Result-Oriented",
    description: "We deploy evidence-based interventions with structured progress tracking and measurable developmental goals."
  },
  {
    id: "parent-training",
    title: "Parent Training & Guidance",
    description: "Active caregiver coaching and training programs to extend therapeutic strategies into daily home routines for lasting outcomes."
  },
  {
    id: "cost-effective",
    title: "Cost-Effective",
    description: "High-quality clinical therapies and diagnostic assessments delivered at affordable rates, ensuring accessible healthcare for every family."
  }
];

export const BENEFITS: Benefit[] = [
  { id: "benefit-1", title: "Early Support" },
  { id: "benefit-2", title: "Lasting Impact" },
  { id: "benefit-3", title: "A Better Tomorrow" }
];

export const CONTACT_INFO: ContactInfo = {
  phone: "9118978333",
  parentOrg: "Changing Minds Mental Health Care",
  address: {
    complex: "HG Complex",
    road: "Chitaipur–Chunar Road",
    landmark: "Near Kanchanpur Petrol Pump",
    area1: "Gokul Nagar",
    area2: "DLW Colony",
    city: "Chitaipur",
    stateZip: "Varanasi, Uttar Pradesh – 221004"
  }
};
