"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { Eye } from "lucide-react";
import { Lightbox, LightboxImage } from "@/components/shared/Lightbox";

const allGalleryImages: LightboxImage[] = [
  {
    src: "/gallary/gallary11.jpeg",
    alt: "Morning langar distribution and volunteer recognition",
    title: "Daily Langar & Volunteer Recognition",
    category: "Langar & Food",
    caption: "Honoring committed sevadars preparing fresh organic meals and distributing food to hospital families.",
  },
  {
    src: "/gallary/gallary12.jpeg",
    alt: "Rural girls in school uniform smiling",
    title: "Digital Classrooms in Punjab",
    category: "Education",
    caption: "First-generation girl scholars exploring interactive science and digital learning modules on tablets.",
  },
  {
    src: "/gallary/gallary121.jpeg",
    alt: "Outdoor seva meeting and grassroots healthcare consultation",
    title: "Doorstep Medical Diagnosis",
    category: "Healthcare",
    caption: "Senior volunteer doctors providing pediatric checks and free medicines in remote rural hamlets.",
  },
  {
    src: "/gallary/gallary14.jpeg",
    alt: "Frontline health and awareness desk setup",
    title: "Frontline Medical & Awareness Desk",
    category: "Healthcare",
    caption: "Mobile community health post providing diagnostic checkups and public health consultation.",
  },
  {
    src: "/gallary/gallary15.jpeg",
    alt: "Youth sevadars attending humanitarian workshop",
    title: "Humanitarian Youth Skill Workshop",
    category: "Disaster Relief",
    caption: "Volunteer capacity training for emergency relief logistics, crisis response, and field deployment.",
  },
  {
    src: "/gallary/gallary16.jpeg",
    alt: "Volunteer sharing smiles with village school children",
    title: "Nutrition & Education Smiles",
    category: "Education",
    caption: "Nourished minds ready to study and grow in rural community schools with volunteer support.",
  },
  {
    src: "/gallary/gallary17.jpeg",
    alt: "Outdoor field interaction and household outreach with villagers",
    title: "Grassroots Village Outreach",
    category: "Livelihoods",
    caption: "Door-to-door community interaction across rural habitations to identify vulnerable families.",
  },
  {
    src: "/gallary/gallary18.jpeg",
    alt: "Waheguru Foundation volunteer group holding banner",
    title: "United Seva Volunteer Force",
    category: "Healthcare",
    caption: "United volunteer teams standing shoulder-to-shoulder in organizing village-level health camps.",
  },
  {
    src: "/gallary/gallary19.jpeg",
    alt: "Village elders and youth gathered for community welfare",
    title: "Community Elders & Youth Assembly",
    category: "Livelihoods",
    caption: "Village elders and sevadars uniting to plan local welfare drives and youth skill development.",
  },
  {
    src: "/gallary/gallary111.jpeg",
    alt: "Village gathering listening to volunteer health briefing",
    title: "Grassroots Health & Awareness Gathering",
    category: "Healthcare",
    caption: "Rural community members participating in preventive health briefings and diagnostic awareness.",
  },
  {
    src: "/gallary/gallary112.jpeg",
    alt: "Inclusive classroom of college students attending youth seminar",
    title: "Inclusive Higher Education Seminar",
    category: "Education",
    caption: "Empowering college students with accessible educational workshops, career guidance, and civic leadership.",
  },
  {
    src: "/gallary/gallary113.jpeg",
    alt: "Lecture hall filled with students attending orientation seminar",
    title: "Youth Volunteer Orientation",
    category: "Education",
    caption: "Orientation sessions cultivating youth volunteerism, humanitarian values, and community service in colleges.",
  },
  {
    src: "/gallary/gallary114.jpeg",
    alt: "Volunteer speaking on microphone to villagers gathered under tree",
    title: "Rural Community Health Briefing",
    category: "Healthcare",
    caption: "Grassroots outreach and health education organized directly in rural settlements under village tree shade.",
  },
  {
    src: "/gallary/gallary115.jpeg",
    alt: "Awareness team conducting open-air briefing for village community",
    title: "Doorstep Health Drive in Patiala Cluster",
    category: "Healthcare",
    caption: "Mobile community health awareness and testing campaign deployed across rural habitations.",
  },
  {
    src: "/gallary/gallary116.jpeg",
    alt: "Village community gathered listening to mobile health outreach team",
    title: "Village Elders & Health Dialogue",
    category: "Healthcare",
    caption: "Engaging village elders and families on public health hygiene, nutrition, and preventive checkups.",
  },
  {
    src: "/gallary/gallary117.jpeg",
    alt: "Healthcare worker and volunteer addressing village community at mobile camp",
    title: "Mobile Medical Unit & Diagnostics",
    category: "Healthcare",
    caption: "Qualified healthcare practitioners and volunteers delivering on-ground clinical consultation and diagnostics.",
  },
  {
    src: "/gallary/gallary118.jpeg",
    alt: "Volunteers performing nukkad natak street play for HIV and health awareness",
    title: "Street Play for Public Health Awareness",
    category: "Healthcare",
    caption: "Educating migrant workers and local citizens about health checkups and preventive care through street theater.",
  },
  {
    src: "/gallary/gallary119.jpeg",
    alt: "Outdoor diagnostic health camp providing free tests and consultations",
    title: "Doorstep Health Testing & Screening",
    category: "Healthcare",
    caption: "Specialized mobile clinic camp conducting doorstep blood screening, vitals check, and health consultations.",
  },
  {
    src: "/gallary/gallary120.jpeg",
    alt: "School students gathered in courtyard holding health awareness placards",
    title: "School Health & Hygiene Awareness Rally",
    category: "Education",
    caption: "Empowering school scholars with life-saving health education, sanitation awareness, and disease prevention.",
  },
  {
    src: "/gallary/gallary122.jpeg",
    alt: "Students of Govt High School SAS Nagar listening attentively at an outdoor session",
    title: "Government High School Youth Seminar",
    category: "Education",
    caption: "Organizing motivational learning sessions and career guidance for government school scholars in SAS Nagar.",
  },
  {
    src: "/gallary/gallary123.jpeg",
    alt: "Speaker addressing hundreds of students on stage during youth motivation program",
    title: "Interactive School Stage Workshop",
    category: "Education",
    caption: "Interactive theater and leadership training engaging young students on essential life skills and self-confidence.",
  },
  {
    src: "/gallary/gallary124.jpeg",
    alt: "Volunteer standing with young children holding distributed fresh fruits and juices",
    title: "Child Nutrition & Fruit Distribution",
    category: "Langar & Food",
    caption: "Supplying healthy fresh fruit, nutrition packs, and juices to young children in underserved neighborhoods.",
  },
  {
    src: "/gallary/gallary125.jpeg",
    alt: "Community women and families receiving donated clothing and trousers",
    title: "Clothing & Garment Distribution Drive",
    category: "Disaster Relief",
    caption: "Distributing dignified clean clothing, warm sweaters, and trousers to vulnerable families.",
  },
  {
    src: "/gallary/gallary126.jpeg",
    alt: "Volunteer handing nutritional fruit pack to patient in wheelchair at hospital",
    title: "Hospital Patient Care & Nutrition Seva",
    category: "Healthcare",
    caption: "Providing nutritious nourishment, fresh fruits, and compassionate care to patients recovering in hospital wards.",
  },
  {
    src: "/gallary/gallary127.jpeg",
    alt: "Volunteers holding young medical patient and handing nutrition kit to family",
    title: "Pediatric Patient Home Visit & Support",
    category: "Healthcare",
    caption: "Direct family assistance, moral encouragement, and nutritional support for pediatric patients battling severe illness.",
  },
  {
    src: "/gallary/gallary128.jpeg",
    alt: "Volunteer serving steaming hot milk and tea to people lined up on cold winter night",
    title: "Nighttime Winter Warmth & Hot Chai",
    category: "Langar & Food",
    caption: "Distributing steaming hot tea and fresh milk to pavement dwellers and night workers during harsh winter nights.",
  },
  {
    src: "/gallary/gallary129.jpeg",
    alt: "Volunteer sitting on village stairs reviewing aid case documents with local resident",
    title: "Doorstep Aid Assessment & Verification",
    category: "Livelihoods",
    caption: "One-on-one household verification and needs assessment to ensure transparent and impactful aid delivery.",
  },
  {
    src: "/gallary/gallary130.jpeg",
    alt: "Volunteer speaker at podium conducting classroom orientation for university students",
    title: "College Youth Volunteer Orientation",
    category: "Education",
    caption: "Inspiring college youth to participate in humanitarian volunteer work, blood donation, and civic responsibility.",
  },
  {
    src: "/gallary/gallary131.jpeg",
    alt: "Classroom presentation on de-addiction and healthy habits at Khunimajra Polytechnic College",
    title: "Youth Substance Awareness Seminar",
    category: "Education",
    caption: "Empowering university students with anti-substance abuse awareness, mental wellness, and healthy habits.",
  },
  {
    src: "/gallary/gallary132.jpeg",
    alt: "Volunteers serving sweets and food to migrant daily-wage workers seated in public park",
    title: "Community Park Food Distribution",
    category: "Langar & Food",
    caption: "Sharing freshly prepared food and festive sweets directly with migrant day laborers in city open spaces.",
  },
  {
    src: "/gallary/gallary133.jpeg",
    alt: "Volunteers engaging with local workers circle in park during community event",
    title: "Grassroots Worker Community Gathering",
    category: "Livelihoods",
    caption: "Hosting community outreach circles, legal awareness, and food distribution in open green spaces.",
  },
  {
    src: "/gallary/gallary134.jpeg",
    alt: "Workers enjoying refreshments under tree shade in public park",
    title: "Shaded Rest & Meal Seva",
    category: "Langar & Food",
    caption: "Providing nutritious meal respite and companionship to daily wage construction workers under park trees.",
  },
  {
    src: "/gallary/gallary135.jpeg",
    alt: "Volunteers sharing food boxes with laborers standing together",
    title: "Sharing Food & Smiles with Workers",
    category: "Langar & Food",
    caption: "Distributing freshly packed meals and sharing warmth with workers during regular afternoon field rounds.",
  },
  {
    src: "/gallary/gallary136.jpeg",
    alt: "Volunteers sharing treats and chatting with workers in open field",
    title: "Conversations & Compassion on Ground",
    category: "Langar & Food",
    caption: "Building personal trust and community connection during daily ground visits and meal distributions.",
  },
  {
    src: "/gallary/gallary137.jpeg",
    alt: "Sevadars handing food slices to workers seated in rows on the grass",
    title: "Pangat Seva: Serving with Dignity",
    category: "Langar & Food",
    caption: "Revitalizing the Sikh ethos of Pangat — serving wholesome food equally to all without social distinction.",
  },
  {
    src: "/gallary/gallary138.jpeg",
    alt: "Migrant laborers eating together under trees in park",
    title: "Daily Langar for Migrant Workers",
    category: "Langar & Food",
    caption: "Daily fresh meal seva reaching day laborers and migrant workers across community parks and labor chowks.",
  },
  {
    src: "/gallary/gallary139.jpeg",
    alt: "Volunteer feeding stray dog food and biscuits beside roadside rescue vehicle",
    title: "Animal Welfare & Compassionate Aid",
    category: "Environment",
    caption: "Caring for street animals through daily feeding rounds and roadside compassionate aid across local sectors.",
  },
];

const CATEGORIES = [
  "All",
  "Langar & Food",
  "Education",
  "Healthcare",
  "Environment",
  "Disaster Relief",
  "Livelihoods",
];

export function GalleryClient() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredImages = useMemo(() => {
    if (selectedCategory === "All") return allGalleryImages;
    return allGalleryImages.filter((img) => img.category === selectedCategory);
  }, [selectedCategory]);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="space-y-8">
      {/* Category Filter Pills */}
      <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {CATEGORIES.map((cat) => {
          const count =
            cat === "All"
              ? allGalleryImages.length
              : allGalleryImages.filter((img) => img.category === cat).length;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all shrink-0 inline-flex items-center gap-1.5 ${
                selectedCategory === cat
                  ? "bg-[var(--navy-700)] text-white shadow-xs"
                  : "bg-white text-[var(--text-muted)] hover:text-[var(--navy-900)] border border-[var(--border)]"
              }`}
            >
              <span>{cat}</span>
              <span
                className={`text-[11px] px-1.5 py-0.2 rounded-full ${
                  selectedCategory === cat
                    ? "bg-white/20 text-white"
                    : "bg-gray-100 text-gray-500"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Grid of Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredImages.map((img, idx) => (
          <div
            key={`${img.src}-${idx}`}
            onClick={() => openLightbox(idx)}
            className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 cursor-pointer shadow-xs hover:shadow-xl transition-all duration-300"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy-900)]/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--gold-300)]">
                {img.category}
              </span>
              <h3 className="font-serif text-lg font-bold leading-snug mt-0.5">
                {img.title}
              </h3>
              <p className="text-xs text-gray-300 line-clamp-1 mt-1">
                {img.caption}
              </p>
              <span className="inline-flex items-center gap-1.5 text-xs text-gray-200 mt-2 font-medium">
                <Eye className="w-3.5 h-3.5 text-[var(--gold-500)]" />
                <span>Enlarge Photo</span>
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        images={filteredImages}
        currentIndex={currentIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(newIdx) => setCurrentIndex(newIdx)}
      />
    </div>
  );
}
