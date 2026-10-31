import { Campaign } from "@/types";

// TODO: replace with live campaigns data from CMS
export const campaigns: Campaign[] = [
  {
    id: "langar-daily-wagers",
    slug: "langar-daily-wagers",
    title: "Daily Langar: Warm Nutritious Meals for Vulnerable Families",
    category: "Hunger Relief",
    summary:
      "Serving freshly prepared nutritious thalis every day to migrant workers, hospital caregivers, and homeless elders across Delhi NCR and Punjab.",
    story:
      "Guru Ka Langar is founded upon equality, compassion, and selfless hospitality. Across our community kitchens, over 10,000 freshly cooked warm meals are prepared each morning with high hygienic standards. No one is ever turned away regardless of faith, caste, or background. Your support funds raw lentils, fresh vegetables, flour, and eco-friendly distribution packaging.",
    goal: 5000000,
    raised: 3780000,
    donorsCount: 2450,
    image: "/brand/langar.jpeg",
    status: "urgent",
    urgencyBadge: "High Need",
    isFeatured: true,
    taxBenefits: true,
    suggestedAmounts: [500, 1500, 3000, 7500],
    updates: [
      {
        date: "2026-09-15",
        title: "Kitchen Expansion in Industrial Suburb",
        description: "Added a second automated roti maker, expanding meal capacity by 2,500 daily portions.",
      },
      {
        date: "2026-08-01",
        title: "Monsoon Food Relief Despatch",
        description: "Dispatched 45,000 dry ration food kits to flood-affected migrant settlements.",
      },
    ],
    gallery: [
      "/images/seva/langar-seva.png",
      "/images/seva/slum-langar-sanitation.png",
    ],
  },
  {
    id: "rural-girls-education",
    slug: "rural-girls-education",
    title: "Rural Girls Scholarship: Educating the Next Generation",
    category: "Education",
    summary:
      "Providing full annual school tuition, stem lab access, bicycles, and mentor guidance for first-generation female learners in rural districts.",
    story:
      "When a girl receives uninterrupted education, entire communities break free from generational hardship. Through our scholarship initiative, female students from low-income agricultural families receive uniforms, certified digital tablets, textbooks, and daily transport support so distance never forces them to drop out.",
    goal: 3500000,
    raised: 2890000,
    donorsCount: 1680,
    image: "/images/seva/students.png",
    status: "active",
    urgencyBadge: "Back to School",
    isFeatured: true,
    taxBenefits: true,
    suggestedAmounts: [1200, 3600, 7200, 15000],
    updates: [
      {
        date: "2026-09-20",
        title: "100 New Tablets Distributed",
        description: "Equipped students in 6 village schools with digital educational material and curriculum apps.",
      },
    ],
  },
  {
    id: "mobile-health-vans",
    slug: "mobile-health-vans",
    title: "Mobile Health Clinics: Healthcare at the Last Mile",
    category: "Healthcare",
    summary:
      "Deploying fully equipped diagnostic medical vans with doctors, pharmacists, and essential medicines to remote underserved hamlets.",
    story:
      "Many rural hamlets are located over 40 kilometers away from the nearest primary health center. Our specialized mobile medical units traverse unpaved terrain weekly to deliver maternal checkups, diabetes screenings, pediatric consultations, and free generic medicines right to doorsteps.",
    goal: 4200000,
    raised: 3100000,
    donorsCount: 1940,
    image: "/images/seva/blood-camp.png",
    status: "active",
    taxBenefits: true,
    suggestedAmounts: [1000, 2500, 5000, 10000],
    updates: [
      {
        date: "2026-09-02",
        title: "Eye Checkup Camp Treats 840 Elders",
        description: "Organized a 3-day cataract screening camp; 64 cataract surgeries scheduled at partner hospitals.",
      },
    ],
  },
  {
    id: "clean-drinking-water",
    slug: "clean-drinking-water",
    title: "Solar Water Purification Plants for Drought-Hit Villages",
    category: "Environment",
    summary:
      "Installing solar-powered reverse osmosis plants and rainwater harvesting reservoirs in fluoride-affected arid belts.",
    story:
      "Contaminated groundwater with excess fluoride and heavy metals leads to severe skeletal fluorosis among rural children. Waheguru Foundation partners with village panchayats to construct decentralized solar-powered water filtration hubs that provide 10,000 liters of pure drinkable water daily.",
    goal: 2800000,
    raised: 2150000,
    donorsCount: 1120,
    image: "/images/seva/slum-langar-sanitation.png",
    status: "active",
    taxBenefits: true,
    suggestedAmounts: [1000, 2500, 6000, 12000],
  },
  {
    id: "winter-warmth-relief",
    slug: "winter-warmth-relief",
    title: "Winter Warmth: Blankets & Thermal Gear for the Homeless",
    category: "Disaster Relief",
    summary:
      "Distributing high-grade wool blankets, tarpaulins, and warm jackets to families enduring harsh northern winter nights.",
    story:
      "Harsh winter temperatures drop to single digits across North India, turning bare ground and temporary shelters into life-threatening hazards. Every winter season, our night sevadars distribute heavy thermal blankets, woollen caps, and hot tea to rickshaw pullers, pavement dwellers, and elderly hospital attendants.",
    goal: 1800000,
    raised: 1540000,
    donorsCount: 980,
    image: "/images/seva/roadside-rescue.png",
    status: "urgent",
    urgencyBadge: "Winter Drive",
    taxBenefits: true,
    suggestedAmounts: [600, 1800, 3600, 6000],
  },
  {
    id: "skills-livelihoods",
    slug: "skills-livelihoods",
    title: "Women's Craft & Tailoring Centers: Dignified Livelihoods",
    category: "Livelihoods",
    summary:
      "Vocational sewing training, micro-entrepreneurship toolkits, and cooperative marketing for widowed and single mothers.",
    story:
      "Economic independence gives women agency, confidence, and security. We operate community tailoring hubs providing certified sewing courses, followed by an industrial sewing machine grant so participants can start small-scale tailoring enterprises in their localities.",
    goal: 2200000,
    raised: 1980000,
    donorsCount: 890,
    image: "/gallary/gallary112.jpeg",
    status: "active",
    taxBenefits: true,
    suggestedAmounts: [800, 2400, 4800, 12000],
  },
];
