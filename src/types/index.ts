export interface Program {
  id: string;
  number: string;
  name: string;
  description: string;
  image: string;
  focus: string[];
}

export interface Trainer {
  id: string;
  name: string;
  specialty: string;
  experience: string;
  bio: string;
  image: string;
  highlight: string;
}

export interface MembershipPlan {
  id: string;
  name: string;
  duration: string;
  price: string;
  rawPrice: number;
  period: string;
  popular?: boolean;
  features: string[];
  badge?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  span?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  duration: string;
  focus: string;
}

export interface EnquiryFormData {
  fullName: string;
  phone: string;
  email: string;
  plan: string;
  program: string;
  message: string;
}

export interface FormErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  plan?: string;
  program?: string;
}
