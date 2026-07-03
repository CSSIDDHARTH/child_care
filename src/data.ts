import { Service, Feature, Benefit, ContactInfo } from "./types";

export const SERVICES: Service[] = [
  {
    id: "speech-therapy",
    title: "Speech Therapy",
    description: "Improving communication, speech clarity, language and social skills.",
    imageUrl: "/speech%20therapy.jpg"
  },
  {
    id: "occupational-therapy",
    title: "Occupational Therapy & Sensory Integration",
    description: "Enhancing motor skills, sensory processing, daily living activities and independence.",
    imageUrl: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "special-education",
    title: "Special Education",
    description: "Personalized learning support to build academic skills, confidence and overall development.",
    imageUrl: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "behaviour-therapy",
    title: "Behavior Therapy / ABA Therapy",
    description: "Positive behaviour support, emotion regulation and social skills for a better tomorrow.",
    imageUrl: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "developmental-assessment",
    title: "Developmental Assessment & Psychological Testing",
    description: "Our standardized, child-friendly evaluations identify cognitive, emotional, and social development milestones. We provide clear, diagnostic clarity and actionable clinical insights to guide your child's therapeutic path. Our supportive environment ensures children feel comfortable and safe throughout the assessment process.",
    imageUrl: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "parent-counseling",
    title: "Parent Counseling & Family Support",
    description: "We provide compassionate counseling and evidence-based guidance to help parents navigate developmental challenges and strengthen family dynamics. Our therapeutic support empowers caregivers with practical strategies, emotional resilience, and a collaborative path forward. Together, we create a nurturing, cohesive environment for your child's growth.",
    imageUrl: "/parent.jpg"
  }
];

export const FEATURES: Feature[] = [
  {
    id: "safe-env",
    title: "Safe & Child-Friendly Environment",
    description: "Our physical space is meticulously designed to be warm, clinically clean, safe, and highly stimulating for sensory and physical needs."
  },
  {
    id: "indiv-plans",
    title: "Individualized Care Plans",
    description: "Every child receives a bespoke therapy plan based on structured clinical evaluations to match their unique development pace."
  },
  {
    id: "exp-team",
    title: "Experienced & Compassionate Team",
    description: "Our healthcare practitioners possess deep clinical expertise and a compassionate approach, ensuring high-quality evidence-based support."
  },
  {
    id: "real-results",
    title: "Focused on Real Results",
    description: "We set measurable developmental goals and partner with parents to ensure continuous improvement and meaningful progress."
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
