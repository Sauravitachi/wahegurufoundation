import { FocusArea } from "@/types";

// TODO: replace with live focus areas from CMS
export const focusAreas: FocusArea[] = [
  {
    id: "education",
    slug: "education",
    title: "Education & Literacy",
    shortDescription:
      "Bridging the opportunity gap with rural learning centers, STEM kits, scholarships, and digital literacy.",
    fullDescription:
      "Education is the most sustainable vehicle for breaking generational cycles of inequality. Waheguru Foundation supports underserved community schools through infrastructure rehabilitation, teacher honorariums, digital smart classrooms, and merit-cum-need scholarships for female students.",
    iconName: "GraduationCap",
    image: "/images/seva/students.png",
    stats: [
      { label: "Students Supported", value: "14,500+" },
      { label: "Community Schools", value: "48" },
      { label: "Girls Transition to College", value: "94%" },
    ],
    keyInitiatives: [
      "Rural Girls Scholarship & Mentorship Program",
      "Digital Literacy Hubs with Interactive Tablets",
      "School WASH Facilities (Clean Toilets & Clean Water)",
      "Remedial After-School Tutoring for Board Exams",
    ],
  },
  {
    id: "healthcare",
    slug: "healthcare",
    title: "Healthcare & Mobile Clinics",
    shortDescription:
      "Taking comprehensive diagnostic medical services, eye surgeries, and maternal care directly to remote villages.",
    fullDescription:
      "Affordable quality healthcare is a fundamental human right. Our mobile healthcare initiative brings qualified medical teams, diagnostic equipment, and free essential medicines straight to rural doorsteps where tertiary healthcare facilities are days of travel away.",
    iconName: "Stethoscope",
    image: "/images/seva/blood-camp.png",
    stats: [
      { label: "Patients Treated", value: "280,000+" },
      { label: "Mobile Clinics Active", value: "14" },
      { label: "Free Eye Surgeries", value: "6,200+" },
    ],
    keyInitiatives: [
      "Regular Weekly Mobile Dispensary Routes",
      "Cataract Screening and Intraocular Lens Surgery Camps",
      "Maternal & Child Nutritional Health Checkups",
      "Subsidized Diagnostic Pathology Camps",
    ],
  },
  {
    id: "hunger-relief",
    slug: "hunger-relief",
    title: "Hunger Relief & Langar",
    shortDescription:
      "Revitalizing the sacred Sikh tradition of Guru Ka Langar—free, hot, and dignified meals for all.",
    fullDescription:
      "Rooted in the eternal concept of Pangat (eating together as equals without distinction of status or creed), our community kitchens prepare and serve over 10,000 freshly cooked, nutritionally balanced vegetarian meals every single day to construction workers, hospital attendees, and street dwellers.",
    iconName: "Utensils",
    image: "/images/seva/langar-seva.png",
    stats: [
      { label: "Total Meals Served", value: "3.8 Million+" },
      { label: "Daily Thalis Prepared", value: "12,000+" },
      { label: "Permanent Kitchen Hubs", value: "7" },
    ],
    keyInitiatives: [
      "Daily Kitchens near Government Public Hospitals",
      "Emergency Mobile Langar Vans for Pavement Communities",
      "Dry Ration Nutrition Kits for Malnourished Infants",
      "Zero Food Waste Urban Food Rescue Program",
    ],
  },
  {
    id: "environment",
    slug: "environment",
    title: "Environment & Clean Water",
    shortDescription:
      "Solar water purification plants, groundwater recharge ponds, and community micro-forest afforestation.",
    fullDescription:
      "Pawan Guru, Pani Pita, Mata Dharat Mahat (Air is the Teacher, Water the Father, Earth the Great Mother). Inspired by these reverence-filled teachings, we restore degraded village ecosystems with clean solar water purification kiosks, rainwater percolation tanks, and Miyawaki indigenous urban mini-forests.",
    iconName: "Trees",
    image: "/images/seva/slum-langar-sanitation.png",
    stats: [
      { label: "Liters Filtered Daily", value: "120,000" },
      { label: "Native Trees Planted", value: "85,000+" },
      { label: "Water Hubs Built", value: "24" },
    ],
    keyInitiatives: [
      "Solar Reverse Osmosis Community Water Kiosks",
      "Village Rainwater Harvesting and Pond Desiltation",
      "Miyawaki Native Plantation Drives with School Children",
      "Bio-enzyme Composting & Organic Vegetable Kitchen Gardens",
    ],
  },
  {
    id: "disaster-relief",
    slug: "disaster-relief",
    title: "Disaster Emergency Relief",
    shortDescription:
      "Rapid humanitarian deployment during floods, landslides, cyclones, and harsh winter emergencies.",
    fullDescription:
      "When unforeseen disasters strike, time is of the essence. Waheguru Foundation maintains pre-staged emergency relief stocks of dry rations, water purification sachets, waterproof family tents, and medical emergency kits, with trained volunteer response units ready for 24-hour rapid mobilization.",
    iconName: "ShieldAlert",
    image: "/images/seva/roadside-rescue.png",
    stats: [
      { label: "Disaster Responses", value: "32 Deployments" },
      { label: "Ration Kits Dispatched", value: "160,000+" },
      { label: "Emergency Shelters", value: "1,400" },
    ],
    keyInitiatives: [
      "Monsoon Flood Relief Flotilla & Food Air-drops",
      "Winter Warmth Wool Blanket & Jacket Distributions",
      "Post-Disaster Hygiene & Water Sanitation Camps",
      "Home Reconstruction Grants for Vulnerable Widows",
    ],
  },
];
