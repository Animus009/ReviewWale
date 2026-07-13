export interface Service {
  id: string;
  title: string;
  description: string;
  price: number;
  icon: string;
  features: string[];
  benefits: string[];
  ctaText: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  id: string;
  clientName: string;
  logo: string;
  industry: string;
  description: string;
  serviceUsed: string;
  beforeScore: number;
  afterScore: number;
  reviewsCount: number;
  incomeGenerated: number;
  results: string[];
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  comment: string;
  videoUrl?: string; // Mock thumbnail or state
  duration?: string;
  reviewerLocation?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  impactQuote?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: {
    name: string;
    avatar: string;
  };
}

export interface ReviewCampaign {
  id: string;
  brandName: string;
  serviceType: 'google' | 'video' | 'product';
  targetCount: number;
  completedCount: number;
  totalCost: number;
  status: 'active' | 'completed' | 'paused';
  dateStarted: string;
  familiesSupported: number;
}

export interface BrandReview {
  id: string;
  reviewerName: string;
  rating: number;
  date: string;
  reviewType: 'google' | 'video' | 'product';
  content: string;
  status: 'delivered' | 'processing';
  videoThumbnail?: string;
  videoDuration?: string;
  transcript?: string;
  impactScore?: number; // scale of family support impact
}
