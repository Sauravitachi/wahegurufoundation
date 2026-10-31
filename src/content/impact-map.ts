export interface ImpactHotspot {
  id: string;
  stateName: string;
  region: string;
  statValue: string;
  statLabel: string;
  description: string;
  iconType: "megaphone" | "mappin" | "hands" | "heart" | "radiance";
  coordinates: {
    x: number;
    y: number;
  };
  tooltipPosition?: "top" | "bottom" | "left" | "right";
  initiatives: string[];
  hubs: string;
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
    id: "jammu-kashmir",
    stateName: "Jammu & Kashmir",
    region: "Jammu & Kashmir",
    statValue: "400+",
    statLabel: "Active Sevadars",
    description: "High-altitude relief drives, mountain emergency medical response, and winter thermal survival kits for remote habitations.",
    iconType: "radiance",
    coordinates: { x: 34, y: 10.5 },
    tooltipPosition: "right",
    hubs: "Jammu, Srinagar, Pulwama, Baramulla",
    initiatives: [
      "Mountain High-Altitude Medical Outreach",
      "Winter Blanket & Thermal Kit Drives",
      "Emergency Valley Food Supply",
      "Disaster Rapid Response Units",
    ],
  },
  {
    id: "himachal",
    stateName: "Himachal",
    region: "Himachal Pradesh",
    statValue: "1012+",
    statLabel: "Active Sevadars",
    description: "High-altitude relief drives, mountain flash flood response, and winter thermal survival kits for remote habitations.",
    iconType: "radiance",
    coordinates: { x: 39, y: 17.5 },
    tooltipPosition: "right",
    hubs: "Kangra, Shimla, Mandi, Solan, Kullu",
    initiatives: [
      "Mountain Flash Flood Relief",
      "High-Altitude Medical Outreach",
      "Winter Blanket & Thermal Kit Drives",
      "Emergency Village Food Supply",
    ],
  },
  {
    id: "punjab",
    stateName: "Punjab",
    region: "Punjab",
    statValue: "14920+",
    statLabel: "Active Sevadars",
    description: "Central seva operations, daily hot langar kitchens, flood evacuation flotillas, and digital smart classrooms.",
    iconType: "heart",
    coordinates: { x: 32, y: 21 },
    tooltipPosition: "left",
    hubs: "Amritsar, Mohali, Ludhiana, Jalandhar, Patiala",
    initiatives: [
      "Daily Guru Ka Langar Kitchens",
      "Flood Evacuation Flotilla & Boats",
      "Digital Village Smart Classrooms",
      "Doorstep Mobile Medical Dispensaries",
    ],
  },
  {
    id: "haryana",
    stateName: "Haryana",
    region: "Haryana",
    statValue: "2588+",
    statLabel: "Active Sevadars",
    description: "Rural mobile dispensaries, doorstep elderly health checkups, and women's stitching and vocational skill centers.",
    iconType: "hands",
    coordinates: { x: 35, y: 25.5 },
    tooltipPosition: "left",
    hubs: "Ambala, Karnal, Gurugram, Kurukshetra, Panipat",
    initiatives: [
      "Rural Mobile Healthcare Units",
      "Women Stitching & Livelihood Centers",
      "Elderly Doorstep Health Consultations",
      "Village Clean RO Water Plants",
    ],
  },
  {
    id: "delhi",
    stateName: "Delhi",
    region: "Delhi NCR",
    statValue: "7040+",
    statLabel: "Active Sevadars",
    description: "Daily hospital compound langars for patient attendants, winter pavement night drives, and emergency medicines.",
    iconType: "megaphone",
    coordinates: { x: 38.5, y: 26.5 },
    tooltipPosition: "right",
    hubs: "West Delhi, AIIMS/Hospital Hubs, Okhla, Rohini",
    initiatives: [
      "Daily Hospital Compound Langars",
      "Winter Night Blanket Distribution",
      "Emergency Life-Saving Medicine Supply",
      "Youth Blood Donation Network",
    ],
  },
  {
    id: "rajasthan",
    stateName: "Rajasthan",
    region: "Rajasthan",
    statValue: "3407+",
    statLabel: "Active Sevadars",
    description: "Solar-powered borewell desalination, rainwater harvesting ponds, and drought nutrition distribution.",
    iconType: "mappin",
    coordinates: { x: 27, y: 34 },
    tooltipPosition: "right",
    hubs: "Jaipur, Bikaner, Jodhpur, Alwar, Sri Ganganagar",
    initiatives: [
      "Solar Borewell Water Desalination",
      "Rainwater Catchment Pond Construction",
      "Drought Emergency Dry Ration Packs",
      "Child Schooling Tablet Scholarships",
    ],
  },
  {
    id: "uttar-pradesh",
    stateName: "Uttar Pradesh",
    region: "Uttar Pradesh",
    statValue: "3001+",
    statLabel: "Active Sevadars",
    description: "Mobile diagnostic camps, winter night relief, emergency flood support, and youth community skill development.",
    iconType: "megaphone",
    coordinates: { x: 50, y: 31 },
    tooltipPosition: "right",
    hubs: "Noida, Ghaziabad, Lucknow, Varanasi, Kanpur, Agra",
    initiatives: [
      "Doorstep Diagnostic & Health Camps",
      "Winter Thermal Blanket Distribution",
      "Emergency Flood Relief & Food Rations",
      "Youth Skill & Livelihood Centers",
    ],
  },
];

/**
 * Total active volunteers calculated across all states
 */
export const totalVolunteersCount = impactHotspots.reduce((sum, spot) => {
  const num = parseInt(spot.statValue.replace(/[^0-9]/g, ""), 10) || 0;
  return sum + num;
}, 0);

export const leftCollagePhotos: ImpactGalleryPhoto[] = [
  {
    id: "left-1",
    src: "/gallary/gallary121.jpeg",
    alt: "Outdoor seva meeting with local villagers",
    caption: "Grassroots outreach and needs assessment under village canopy",
    aspectClass: "aspect-[3/2]",
  },
  {
    id: "left-2",
    src: "/gallary/gallary124.jpeg",
    alt: "Child nutrition and fresh fruit distribution",
    caption: "Supplying healthy fruits and nutrition to underserved children",
    aspectClass: "aspect-[4/3]",
  },
  {
    id: "left-3",
    src: "/gallary/gallary112.jpeg",
    alt: "Community awareness gathering",
    caption: "Doorstep community coordination and disaster readiness",
    aspectClass: "aspect-[4/3]",
  },
  {
    id: "left-4",
    src: "/gallary/gallary113.jpeg",
    alt: "Educational session for rural youth",
    caption: "Youth volunteer education and awareness orientation",
    aspectClass: "aspect-[3/2]",
  },
  {
    id: "left-5",
    src: "/gallary/gallary114.jpeg",
    alt: "Seminar hall gathering of volunteers",
    caption: "Volunteer training and orientation session in classroom",
    aspectClass: "aspect-[4/3]",
  },
  {
    id: "left-6",
    src: "/gallary/gallary115.jpeg",
    alt: "Youth sevadars meeting",
    caption: "Dedicated sevadars planning local community service drives",
    aspectClass: "aspect-[4/3]",
  },
  {
    id: "left-7",
    src: "/gallary/gallary116.jpeg",
    alt: "Large community hall volunteer conference",
    caption: "Large-scale seva coordination workshop with student volunteers",
    aspectClass: "aspect-[4/3]",
  },
  {
    id: "left-8",
    src: "/gallary/gallary117.jpeg",
    alt: "Field volunteers gathered for seva drive",
    caption: "Active on-ground field deployment of sevadars",
    aspectClass: "aspect-[4/3]",
  },
];

export const rightCollagePhotos: ImpactGalleryPhoto[] = [
  {
    id: "right-1",
    src: "/gallary/gallary11.jpeg",
    alt: "Volunteer team with certificates and banners",
    caption: "Youth volunteers recognized for field relief contributions",
    aspectClass: "aspect-[3/2]",
  },
  {
    id: "right-2",
    src: "/gallary/gallary126.jpeg",
    alt: "Hospital patient care and nutrition seva",
    caption: "Nutritional fruit seva and care for recovering hospital patients",
    aspectClass: "aspect-[4/3]",
  },
  {
    id: "right-3",
    src: "/gallary/gallary14.jpeg",
    alt: "Medical and awareness desk setup",
    caption: "Frontline health and awareness desk operational in field",
    aspectClass: "aspect-[4/3]",
  },
  {
    id: "right-4",
    src: "/gallary/gallary15.jpeg",
    alt: "Classroom workshop for volunteer development",
    caption: "Youth sevadars attending humanitarian skill workshop",
    aspectClass: "aspect-[4/3]",
  },
  {
    id: "right-5",
    src: "/gallary/gallary16.jpeg",
    alt: "Volunteer sharing smiles with village children",
    caption: "Bringing hope and dignity to children in rural areas",
    aspectClass: "aspect-[3/2]",
  },
  {
    id: "right-6",
    src: "/gallary/gallary17.jpeg",
    alt: "Outdoor field interaction with villagers",
    caption: "Door-to-door community interaction across rural habitations",
    aspectClass: "aspect-[4/3]",
  },
  {
    id: "right-7",
    src: "/gallary/gallary18.jpeg",
    alt: "Waheguru Foundation volunteer group with banner",
    caption: "United volunteer teams standing shoulder-to-shoulder in seva",
    aspectClass: "aspect-[16/9]",
  },
  {
    id: "right-8",
    src: "/gallary/gallary19.jpeg",
    alt: "Village elders and youth gathered for seva",
    caption: "Community members uniting with sevadars for local welfare",
    aspectClass: "aspect-[3/4]",
  },
];
