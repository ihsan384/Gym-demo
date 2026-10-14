import type { Program, Trainer, MembershipPlan, GalleryItem, Testimonial } from '../types';

export const BRAND = {
  name: "FORGE FITNESS CLUB",
  shortName: "FORGE FITNESS",
  tagline: "DISCIPLINE BUILDS STRENGTH.",
  locationCity: "Punalur, Kerala",
  locationDistrict: "Kollam, Kerala",
  locationFull: "(Placeholder Address)",
  phoneDisplay: "+91 00000 00000 (Placeholder)",
  phoneRaw: "+910000000000",
  email: "contact@forgefitnessclub.com (Placeholder)",
  hoursWeekday: "Monday – Saturday: 5:30 AM – 10:00 PM",
  hoursSunday: "Sunday: 6:00 AM – 12:00 PM",
  currency: "₹",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Punalur+Kollam+Kerala",
};

export const FACILITY_HIGHLIGHTS = [
  { value: "6 DAYS", label: "OPEN WEEKLY", sub: "Monday through Saturday" },
  { value: "5:30 AM", label: "EARLY OPENING", sub: "Until 10:00 PM evening" },
  { value: "OLYMPIC IRON", label: "FREE WEIGHTS", sub: "Benches, bars & dumbbells" },
  { value: "PERSONAL COACHING", label: "TRAINER SUPPORT", sub: "Guidance on technique" },
];

export const CORE_PRINCIPLES = [
  {
    number: "01",
    title: "TRAIN WITH PURPOSE",
    description: "Every workout has intent. We focus on proper lifting technique, deliberate execution, and joint longevity over shortcuts."
  },
  {
    number: "02",
    title: "CONSISTENCY OVER NOISE",
    description: "Real physical fitness is built week after week. We foster a focused environment where showing up consistently is the only metric that matters."
  },
  {
    number: "03",
    title: "STRENGTH FOR EVERYDAY LIFE",
    description: "Training in the gym prepares you for life outside it—building durability, functional posture, energy, and overall wellbeing."
  }
];

export const PROGRAMS: Program[] = [
  {
    id: "strength-conditioning",
    number: "PROGRAM 01",
    name: "STRENGTH & CONDITIONING",
    description: "Progressive resistance training designed to build strength, improve performance, and develop proper lifting technique.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80",
    focus: ["Powerlifting Fundamentals", "Hypertrophy Cycles", "Barbell Mechanics"]
  },
  {
    id: "personal-training",
    number: "PROGRAM 02",
    name: "PERSONAL TRAINING",
    description: "Individual coaching with structured workouts tailored to your fitness level and personal goals.",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=900&q=80",
    focus: ["1-on-1 Guidance", "Custom Periodization", "Bio-mechanics Assessment"]
  },
  {
    id: "functional-fitness",
    number: "PROGRAM 03",
    name: "FUNCTIONAL FITNESS",
    description: "Improve mobility, coordination, balance, endurance, and everyday movement through dynamic multi-planar training.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80",
    focus: ["Kettlebell Flows", "Cardio Conditioning", "Mobility & Core"]
  },
  {
    id: "weight-management",
    number: "PROGRAM 04",
    name: "WEIGHT MANAGEMENT",
    description: "Build consistent exercise habits through structured workouts and sustainable fitness routines.",
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=900&q=80",
    focus: ["Metabolic Circuits", "Habit Coaching", "Sustainable Calorie Burn"]
  }
];

export const TRAINERS: Trainer[] = [
  {
    id: "arjun-menon",
    name: "ARJUN MENON",
    specialty: "Strength & Conditioning",
    experience: "8 Years",
    bio: "Focuses on barbell mechanics, posterior chain power, and athlete conditioning. Believes that discipline in the squat rack builds mental fortitude for everyday life.",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=800&q=80",
    highlight: "Barbell Coach & Prep Strategist"
  },
  {
    id: "nithin-raj",
    name: "NITHIN RAJ",
    specialty: "Personal Training",
    experience: "6 Years",
    bio: "Specializes in tailored individual periodization, posture alignment, and breaking strength plateaus with targeted biomechanics.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    highlight: "Biomechanics & Body Recomposition"
  },
  {
    id: "amal-krishna",
    name: "AMAL KRISHNA",
    specialty: "Functional Fitness",
    experience: "5 Years",
    bio: "Passionate about athletic mobility, high-intensity functional circuits, and restoring pain-free natural human movement patterns.",
    image: "https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?auto=format&fit=crop&w=800&q=80",
    highlight: "Functional Movement & Agility"
  }
];

export const STATS = FACILITY_HIGHLIGHTS;

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: "monthly",
    name: "MONTHLY PLAN",
    duration: "Flexible commitment",
    price: "₹1,499",
    rawPrice: 1499,
    period: "/ month",
    features: [
      "Full gym floor access",
      "Strength & free-weights equipment",
      "General workout guidance & induction",
      "Spacious locker & changing room access",
      "Water station & recovery zone access"
    ]
  },
  {
    id: "quarterly",
    name: "QUARTERLY PLAN",
    duration: "90 days of disciplined training",
    price: "₹3,999",
    rawPrice: 3999,
    period: "/ 3 months",
    popular: true,
    badge: "RECOMMENDED",
    features: [
      "All monthly plan features included",
      "Periodic progress check-in",
      "Functional training zone access",
      "Trainer equipment orientation",
      "Peak hours access"
    ]
  },
  {
    id: "annual",
    name: "ANNUAL PLAN",
    duration: "12 months of consistent training",
    price: "₹11,999",
    rawPrice: 11999,
    period: "/ year",
    badge: "BEST VALUE",
    features: [
      "All standard & premium gym facilities",
      "Periodic progress & technique review",
      "Comprehensive member fitness orientation",
      "Guest pass allowance (2 per quarter)",
      "Forge Club welcome kit & locker access"
    ]
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gallery-1",
    title: "HEAVY STRENGTH TRAINING RIG",
    category: "Strength Zone",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
    span: "col-span-1 md:col-span-2 row-span-2"
  },
  {
    id: "gallery-2",
    title: "CALIBRATED DUMBBELL & FREE WEIGHTS",
    category: "Free Weights",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1000&q=80",
    span: "col-span-1 md:col-span-1 row-span-1"
  },
  {
    id: "gallery-3",
    title: "ENDURANCE & CARDIO TRAINING STATIONS",
    category: "Cardio Fleet",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1000&q=80",
    span: "col-span-1 md:col-span-1 row-span-1"
  },
  {
    id: "gallery-4",
    title: "FUNCTIONAL MOBILITY & TURF AREA",
    category: "Functional Zone",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=80",
    span: "col-span-1 md:col-span-1 row-span-1"
  },
  {
    id: "gallery-5",
    title: "PREMIUM GYM INTERIOR & AMBIENCE",
    category: "Atmosphere",
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1000&q=80",
    span: "col-span-1 md:col-span-1 row-span-1"
  },
  {
    id: "gallery-6",
    title: "1-ON-1 COACHING & TECHNIQUE CUES",
    category: "Personal Training",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80",
    span: "col-span-1 md:col-span-2 row-span-1"
  }
];

export const TESTIMONIALS: Testimonial[] = [];
