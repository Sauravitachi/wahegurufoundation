export interface NavItem {
  title: string;
  href: string;
  description?: string;
  children?: {
    title: string;
    href: string;
    description: string;
    badge?: string;
  }[];
}

export const headerNavigation: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Campaigns",
    href: "/campaigns",
    children: [
      {
        title: "All Campaigns",
        href: "/campaigns",
        description: "Browse all ongoing and past community initiatives",
      },
      {
        title: "Langar for Daily Wagers",
        href: "/campaigns/langar-daily-wagers",
        description: "Providing warm nutritious meals across industrial clusters",
        badge: "Urgent",
      },
      {
        title: "Rural Girls Scholarship Fund",
        href: "/campaigns/rural-girls-education",
        description: "Annual school tuition, digital tablets and uniforms",
      },
      {
        title: "Mobile Health Clinics",
        href: "/campaigns/mobile-health-vans",
        description: "Doorstep diagnostic and medicine camps in flood-prone districts",
      },
    ],
  },
  {
    title: "Focus Areas",
    href: "/focus-areas/education",
    children: [
      {
        title: "Education & Literacy",
        href: "/focus-areas/education",
        description: "Schools, digital learning labs, and scholarships",
      },
      {
        title: "Healthcare & Mobile Clinics",
        href: "/focus-areas/healthcare",
        description: "Preventative care, free medicines, and eye surgery camps",
      },
      {
        title: "Hunger Relief & Langar",
        href: "/focus-areas/hunger-relief",
        description: "Community kitchens and dignified zero-hunger initiatives",
      },
      {
        title: "Environment & Clean Water",
        href: "/focus-areas/environment",
        description: "Afforestation, water filtration plants, and solar village lighting",
      },
      {
        title: "Disaster Emergency Relief",
        href: "/focus-areas/disaster-relief",
        description: "Rapid deployment of dry rations, medical kits, and rescue gear",
      },
    ],
  },
  {
    title: "Adopt a Child",
    href: "/adopt-a-child",
  },
  {
    title: "Impact",
    href: "/impact",
  },
  {
    title: "Blog",
    href: "/blog",
  },
];

export const footerNavigation = {
  about: [
    { title: "Our Story & Vision", href: "/about#vision" },
    { title: "Founding Values & Seva", href: "/about#values" },
    { title: "Advisory Council", href: "/about#advisors" },
    { title: "Annual Reports & Audits", href: "/about#transparency" },
    { title: "Impact Milestones", href: "/impact" },
  ],
  campaigns: [
    { title: "Langar for Daily Wagers", href: "/campaigns/langar-daily-wagers" },
    { title: "Rural Girls Scholarship", href: "/campaigns/rural-girls-education" },
    { title: "Mobile Health Clinics", href: "/campaigns/mobile-health-vans" },
    { title: "All Active Campaigns", href: "/campaigns" },
    { title: "Adopt a Child Program", href: "/adopt-a-child" },
  ],
  getInvolved: [
    { title: "Make a Donation (80G)", href: "/donate" },
    { title: "Volunteer with Us", href: "/volunteer" },
    { title: "Corporate CSR Partnerships", href: "/csr" },
    { title: "Stories & Field Updates", href: "/blog" },
    { title: "Photo & Video Gallery", href: "/gallery" },
  ],
  legal: [
    { title: "Privacy Policy", href: "/privacy-policy" },
    { title: "Terms of Service", href: "/terms" },
    { title: "80G Tax Exemption Policy", href: "/about#transparency" },
    { title: "Donor Refund Policy", href: "/terms#refunds" },
  ],
};
