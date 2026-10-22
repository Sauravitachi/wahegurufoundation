"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { Eye } from "lucide-react";
import { Lightbox, LightboxImage } from "@/components/shared/Lightbox";

const allGalleryImages: LightboxImage[] = [
  {
    src: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1200&q=80",
    alt: "Morning langar distribution",
    title: "Daily Langar Preparation",
    category: "Langar & Food",
    caption: "Preparing fresh organic dal and hot rotis before dawn for daily hospital distributions.",
  },
  {
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
    alt: "Rural girls in school uniform smiling",
    title: "Digital Classrooms in Punjab",
    category: "Education",
    caption: "First-generation girl scholars exploring interactive science modules on tablets.",
  },
  {
    src: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80",
    alt: "Mobile medical unit consultation",
    title: "Doorstep Medical Diagnosis",
    category: "Healthcare",
    caption: "Senior volunteer doctors providing pediatric checks and free medicines in remote hamlets.",
  },
  {
    src: "https://images.unsplash.com/photo-1541888946425-d0fbb1861593?auto=format&fit=crop&w=1200&q=80",
    alt: "Solar powered clean water station",
    title: "Solar Water Kiosk",
    category: "Environment",
    caption: "Supplying 10,000 litres of clean, fluoride-free water daily to drought-affected families.",
  },
  {
    src: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1200&q=80",
    alt: "Winter blanket distribution to homeless workers",
    title: "Winter Warmth Initiative",
    category: "Disaster Relief",
    caption: "Distributing heavy thermal blankets and tea to pavement workers on winter nights.",
  },
  {
    src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80",
    alt: "Children in village school smiling",
    title: "Nutrition & Education Smiles",
    category: "Education",
    caption: "Nourished minds ready to study and grow in rural community schools.",
  },
  {
    src: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80",
    alt: "Women in sewing workshop",
    title: "Women's Craft Center",
    category: "Livelihoods",
    caption: "Vocational tailoring skills training providing dignity and independent income for single mothers.",
  },
  {
    src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80",
    alt: "Community health awareness camp",
    title: "Community Health Awareness",
    category: "Healthcare",
    caption: "Maternal and child hygiene seminars conducted by certified nurse volunteers.",
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
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all shrink-0 ${
              selectedCategory === cat
                ? "bg-[var(--navy-700)] text-white shadow-xs"
                : "bg-white text-[var(--text-muted)] hover:text-[var(--navy-900)] border border-[var(--border)]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid of Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredImages.map((img, idx) => (
          <div
            key={img.title}
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
