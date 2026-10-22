export type CampaignCategory =
  | "Education"
  | "Healthcare"
  | "Hunger Relief"
  | "Environment"
  | "Disaster Relief"
  | "Livelihoods";

export type CampaignStatus = "active" | "urgent" | "completed";

export interface CampaignUpdate {
  date: string;
  title: string;
  description: string;
}

export interface Campaign {
  id: string;
  slug: string;
  title: string;
  category: CampaignCategory;
  summary: string;
  story: string;
  goal: number;
  raised: number;
  donorsCount: number;
  image: string;
  status: CampaignStatus;
  urgencyBadge?: string;
  isFeatured?: boolean;
  taxBenefits: boolean;
  updates?: CampaignUpdate[];
  gallery?: string[];
  suggestedAmounts?: number[];
}

export interface FocusAreaStat {
  label: string;
  value: string;
}

export interface FocusArea {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  image: string;
  stats: FocusAreaStat[];
  keyInitiatives: string[];
}

export interface StatItem {
  id: string;
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  formatCompact?: boolean;
  description?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  location: string;
  avatar: string;
}

export interface Advisor {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  organization: string;
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
  category: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: "Donations & 80G" | "Sponsorship" | "Volunteering" | "Governance";
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  coverImage: string;
  tags: string[];
}

export type HomeSectionKey =
  | "hero"
  | "campaigns"
  | "missionVision"
  | "featuredAppeal"
  | "focusAreas"
  | "advisoryBoard"
  | "howYouCanHelp"
  | "howWeWork"
  | "testimonials"
  | "galleryPreview"
  | "latestStories"
  | "faq"
