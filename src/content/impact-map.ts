export interface ImpactHotspot {
  id: string;
  region: string;
  statValue: string;
  statLabel: string;
  description: string;
  iconType: "megaphone" | "mappin" | "hands" | "heart" | "radiance";
  coordinates: {
    x: number; // percentage from left
    y: number; // percentage from top
  };
  tooltipPosition?: "top" | "bottom" | "left" | "right";
  initiatives: string[];
}

export interface ImpactGalleryPhoto {
  id: string;
  src: string;
  alt: string;
  caption: string;
  aspectClass: string;
}

export const impactHotspots: ImpactHotspot[] = [
  {
    id: "campaigns-north",
    region: "North Zone • Punjab, J&K & NCR",
    statValue: "20+",
    statLabel: "Campaigns Operationalized",
    description: "Rapid disaster relief, 24/7 langar kitchens, flood ration flotillas, and winter blanket drives.",
    iconType: "megaphone",
    coordinates: { x: 31, y: 14 },
    tooltipPosition: "right",
    initiatives: [
      "Punjab Flood Emergency Relief & Flotillas",
      "Daily Hospital Compound Langar Hubs",
      "Digital Village Smart Classrooms",
      "Mobile Medical Dispensary Vans",
    ],
  },
  {
    id: "states-east",
    region: "East & North-East • Assam & Bengal",
    statValue: "21",
    statLabel: "States & UTs Reached",
    description: "Nationwide operational footprint mobilizing field logistics in under 24 hours of any crisis.",
    iconType: "mappin",
    coordinates: { x: 74, y: 34 },
    tooltipPosition: "left",
    initiatives: [
      "Brahmaputra Flood Survival Kits",
      "High-Capacity Clean RO Water Plants",
      "Disaster Evacuation & Medical Camps",
      "Community Reconstruction Grants",
    ],
  },
  {
    id: "volunteers-west",
    region: "West Zone • Rajasthan & Gujarat",
    statValue: "500+",
    statLabel: "Active Volunteers Mobilized",
    description: "Dedicated on-ground sevadars and youth coordinators responding with selfless compassion.",
    iconType: "hands",
    coordinates: { x: 17, y: 48 },
    tooltipPosition: "right",
    initiatives: [
      "Desert Rainwater Harvesting Ponds",
      "Rapid Blood & Emergency Medicine Supply",
      "Women's Vocational Sewing Centers",
      "Frontline Disaster Relief Brigades",
    ],
  },
  {
    id: "programs-central",
    region: "Central & Deccan • MP & Maharashtra",
    statValue: "5",
    statLabel: "Core Humanitarian Programs",
    description: "Sustainable long-term upliftment across Langar nutrition, healthcare, education, clean water, and livelihoods.",
    iconType: "heart",
    coordinates: { x: 44, y: 62 },
    tooltipPosition: "top",
    initiatives: [
      "HF Gurukul 25-Acre Skill Training Campus",
      "Rural Mobile Medical 100 Units",
      "Child Schooling & Midday Meal Sponsorship",
      "Solar Borewell Water Desalination",
    ],
  },
  {
    id: "lives-south",
    region: "South Zone • Karnataka, TN & Kerala",
    statValue: "49 Lakh+",
    statLabel: "Lives Positively Impacted",
    description: "Audited human relief delivered transparently in accordance with Sikh principles of Sarbat Da Bhala.",
    iconType: "radiance",
    coordinates: { x: 36, y: 88 },
    tooltipPosition: "top",
    initiatives: [
      "Coastal Cyclone & Flood Relief Food Packs",
      "Free Doorstep Geriatric Health Consultations",
      "Oxygen Bank & Emergency Concentrators",
      "Nutritious Langar Rations to Slum Families",
    ],
  },
];

export const leftCollagePhotos: ImpactGalleryPhoto[] = [
  {
    id: "left-1",
    src: "/gallary/gallary110.jpeg",
    alt: "Waheguru Foundation volunteers in turbans and safety jackets standing with emergency van",
    caption: "Field sevadars mobilizing rapid relief vehicles during rural distress",
    aspectClass: "aspect-[4/3]",
  },
  {
    id: "left-2",
    src: "/gallary/gallary111.jpeg",
    alt: "Food distribution drive on highway",
    caption: "Nutritious langar packages distributed directly to migrant families",
    aspectClass: "aspect-[3/2]",
  },
  {
    id: "left-3",
    src: "/gallary/gallary112.jpeg",
    alt: "Sikh volunteers in protective face shields preparing hot meals",
    caption: "Hygienic langar preparation adhering to gold-standard food safety",
    aspectClass: "aspect-[16/9]",
  },
  {
    id: "left-4",
    src: "/gallary/gallary113.jpeg",
    alt: "Volunteer conducting field survey",
    caption: "Doorstep vulnerability assessments in remote villages",
    aspectClass: "aspect-[4/3]",
  },
  {
    id: "left-5",
    src: "/gallary/gallary114.jpeg",
    alt: "Search and debris clearance team in flood zone",
    caption: "Disaster taskforce clearing flood rubble to reopen village lifelines",
    aspectClass: "aspect-[16/9]",
  },
  {
    id: "left-6",
    src: "/gallary/gallary115.jpeg",
    alt: "Relief goods distribution queue",
    caption: "Dignified, orderly ration distribution drives",
    aspectClass: "aspect-[3/2]",
  },
  {
    id: "left-7",
    src: "/gallary/gallary116.jpeg",
    alt: "Unloading wheat and grain sacks from supply transport",
    caption: "Heavy truckload deliveries of essential staples into relief hubs",
    aspectClass: "aspect-[3/4]",
  },
  {
    id: "left-8",
    src: "/gallary/gallary117.jpeg",
    alt: "Volunteers grouped around relief convoy",
    caption: "Emergency supply convoys dispatched within hours of notification",
    aspectClass: "aspect-[4/3]",
  },
];

export const rightCollagePhotos: ImpactGalleryPhoto[] = [
  {
    id: "right-1",
    src: "/gallary/gallary11.jpeg",
    alt: "Volunteer handing ration package to youth",
    caption: "Providing dry rations and nutrition kits to needy families",
    aspectClass: "aspect-[3/2]",
  },
  {
    id: "right-2",
    src: "/gallary/gallary13.jpeg",
    alt: "Flood washed out village landscape",
    caption: "Immediate ground response reaching waterlogged riverside habitations",
    aspectClass: "aspect-[4/3]",
  },
  {
    id: "right-3",
    src: "/gallary/gallary14.jpeg",
    alt: "Community assembled at medical and aid camp",
    caption: "Community assembly point for mobile healthcare and dry rations",
    aspectClass: "aspect-[16/9]",
  },
  {
    id: "right-4",
    src: "/gallary/gallary15.jpeg",
    alt: "Group photo of relief sevadars",
    caption: "United volunteer teams standing shoulder-to-shoulder in seva",
    aspectClass: "aspect-[16/9]",
  },
  {
    id: "right-5",
    src: "/gallary/gallary16.jpeg",
    alt: "Volunteers in high-vis vests assisting elderly",
    caption: "Compassionate doorstep assistance for vulnerable elders",
    aspectClass: "aspect-[3/2]",
  },
  {
    id: "right-6",
    src: "/gallary/gallary17.jpeg",
    alt: "Distribution of blankets and warm relief packages",
    caption: "Winter survival kit distribution along remote border stretches",
    aspectClass: "aspect-[16/9]",
  },
  {
    id: "right-7",
    src: "/gallary/gallary18.jpeg",
    alt: "Supply truck delivery in progress",
    caption: "Direct logistical corridor from warehouses to ground zero",
    aspectClass: "aspect-[4/3]",
  },
  {
    id: "right-8",
    src: "/gallary/gallary19.jpeg",
    alt: "Child carrying relief ration bag with smile",
    caption: "Restoring food security and dignity to the next generation",
    aspectClass: "aspect-[3/4]",
  },
];
