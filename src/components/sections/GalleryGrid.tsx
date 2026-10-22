"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Eye } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Lightbox, LightboxImage } from "@/components/shared/Lightbox";

const previewImages: LightboxImage[] = [
  {
    src: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1000&q=80",
    alt: "Morning langar distribution to hospital attendees",
    title: "Daily Langar Seva",
    category: "Hunger Relief",
    caption: "Preparing and handing out fresh lentils, rotis, and vegetables to hospital caregivers.",
  },
  {
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80",
    alt: "Rural girls classroom in Punjab",
    title: "Smart Village Classrooms",
    category: "Education",
    caption: "Equipping young minds with digital learning tablets and interactive learning modules.",
  },
  {
    src: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1000&q=80",
    alt: "Mobile health clinic providing health checkups",
    title: "Doorstep Medical Consultation",
    category: "Healthcare",
    caption: "Volunteer physicians providing blood pressure checkups, pediatric care, and medicines.",
  },
  {
    src: "https://images.unsplash.com/photo-1541888946425-d0fbb1861593?auto=format&fit=crop&w=1000&q=80",
    alt: "Community clean water solar filtration plant",
    title: "Solar Water Station",
    category: "Environment",
    caption: "Decentralized RO plant providing 10,000 litres of clean potable water to village families.",
  },
  {
    src: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1000&q=80",
    alt: "Emergency winter warmth distribution",
    title: "Winter Thermal Relief",
    category: "Disaster Relief",
    caption: "Handing out woollen blankets and thermal innerwear to pavement workers on single-digit nights.",
  },
  {
    src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1000&q=80",
    alt: "Children smiling at rural school assembly",
    title: "Community Growth & Joy",
    category: "Empowerment",
    caption: "Building confidence, health, and dignity in next-generation village leaders.",
  },
];

export function GalleryGrid() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

  const openLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
    setLightboxOpen(true);
  };

  return (
    <Section variant="surface" spacing="lg" id="gallery">
      <Container>
        <SectionHeading
          eyebrow="Seva in Action"
          title="Moments of Hope, Service &amp; Community"
          description="Photographic glimpses into our daily kitchens, mobile diagnostic routes, and rural schools across the country."
        />

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewImages.map((img, index) => (
            <div
              key={img.title}
              onClick={() => openLightbox(index)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 cursor-pointer shadow-xs hover:shadow-lg transition-all duration-300"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy-900)]/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--gold-300)]">
                  {img.category}
                </span>
                <h3 className="font-serif text-lg font-bold leading-snug mt-0.5">
                  {img.title}
                </h3>
                <span className="inline-flex items-center gap-1.5 text-xs text-gray-200 mt-2 font-medium">
                  <Eye className="w-3.5 h-3.5 text-[var(--gold-500)]" />
                  <span>Enlarge Photo</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* View More Link */}
        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/gallery">
              <span>View Full Photo &amp; Video Archive</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>

        {/* Lightbox Modal */}
        <Lightbox
          images={previewImages}
          currentIndex={selectedPhotoIndex}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          onNavigate={(idx) => setSelectedPhotoIndex(idx)}
        />
      </Container>
    </Section>
  );
}
