export interface AboutFeature {
  icon: string;
  title: string;
  description: string;
}

export interface AboutData {
  title: string;
  description: string;
  features: AboutFeature[];
  imageUrl: string;
}

export interface ImpactStat {
  id: number;
  value: string;
  label: string;
}

export interface Program {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  partner: string;
  period: string;
  participants: number;
  story: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
}

export interface Partner {
  name: string;
  logo: string;
}

export interface Faq {
  id: number;
  question: string;
  answer: string;
}