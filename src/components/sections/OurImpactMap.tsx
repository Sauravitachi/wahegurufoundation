"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Megaphone,
  MapPin,
  Users,
  HandHeart,
  Sparkles,
  X,
  ArrowRight,
  Heart,
  ChevronRight,
} from "lucide-react";
import {
  leftCollagePhotos,
  rightCollagePhotos,
  ImpactHotspot,
} from "@/content/impact-map";
import { Button } from "@/components/ui/button";

export function OurImpactMap() {
  const [activeHotspotId, setActiveHotspotId] = useState<string | null>("programs-central");
  const [activePhoto, setActivePhoto] = useState<string | null>(null);

  

  return (
    <section className="bg-grain-texture py-16 sm:py-20 lg:py-24 relative overflow-hidden border-y border-[var(--border)]">
      <div className="absolute inset-0 bg-radial from-transparent via-transparent to-[var(--navy-900)]/[0.02] pointer-events-none" />
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 mb-10 sm:mb-14">
        <div className="inline-flex items-baseline justify-center gap-1.5 sm:gap-2 mb-3">
          <span className="font-[family-name:var(--font-caveat)] text-5xl sm:text-6xl md:text-7xl font-bold text-[#FF6734] italic -rotate-3 inline-block drop-shadow-2xs select-none">
            Our
          </span>
          <span className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-[var(--navy-900)] tracking-tight inline-block align-baseline">
            Impact
          </span>
        </div>      
      </div>

      <div className="relative z-10 max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          <div className="hidden lg:block lg:col-span-3 xl:col-span-3">
            <div className="grid grid-cols-2 gap-3 xl:gap-4 items-start">
              <div className="flex flex-col gap-3 xl:gap-4 pt-4">
                {leftCollagePhotos.slice(0, 4).map((photo) => (
                  <div
                    key={photo.id}
                    onClick={() => setActivePhoto(photo.src)}
                    className="group relative rounded-xl overflow-hidden bg-white/70 p-1 border border-white/80 shadow-xs hover:shadow-xl transition-all duration-300 hover:scale-[1.03] cursor-pointer"
                  >
                    <div className={`relative w-full ${photo.aspectClass} rounded-lg overflow-hidden`}>
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="(max-width: 1200px) 20vw, 15vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-108"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2.5">
                        <span className="text-[11px] text-white leading-tight font-medium line-clamp-2">
                          {photo.caption}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3 xl:gap-4">
                {leftCollagePhotos.slice(4, 8).map((photo) => (
                  <div
                    key={photo.id}
                    onClick={() => setActivePhoto(photo.src)}
                    className="group relative rounded-xl overflow-hidden bg-white/70 p-1 border border-white/80 shadow-xs hover:shadow-xl transition-all duration-300 hover:scale-[1.03] cursor-pointer"
                  >
                    <div className={`relative w-full ${photo.aspectClass} rounded-lg overflow-hidden`}>
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="(max-width: 1200px) 20vw, 15vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-108"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2.5">
                        <span className="text-[11px] text-white leading-tight font-medium line-clamp-2">
                          {photo.caption}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CENTER: INDIA MAP WITH INTERACTIVE HOTSPOT MARKERS */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-center">
            <div className="relative w-full max-w-[560px] mx-auto aspect-[2352/2452]">
              {/* Base Map Graphic */}
              <Image
                src="/images/impact/india-map.webp"
                alt="Interactive Map of India showing Waheguru Foundation Seva Impact Footprint"
                fill
                priority
                className="object-contain drop-shadow-sm select-none pointer-events-none"
              />

            </div>

            {/* Mobile / Quick Region Selectors Strip */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2 max-w-xl mx-auto">
             
            </div>
          </div>

          {/* RIGHT COLLAGE (Desktop Wings) */}
          <div className="hidden lg:block lg:col-span-3 xl:col-span-3">
            <div className="grid grid-cols-2 gap-3 xl:gap-4 items-start">
              {/* Inner Right Column (closer to map) */}
              <div className="flex flex-col gap-3 xl:gap-4">
                {rightCollagePhotos.slice(0, 4).map((photo) => (
                  <div
                    key={photo.id}
                    onClick={() => setActivePhoto(photo.src)}
                    className="group relative rounded-xl overflow-hidden bg-white/70 p-1 border border-white/80 shadow-xs hover:shadow-xl transition-all duration-300 hover:scale-[1.03] cursor-pointer"
                  >
                    <div className={`relative w-full ${photo.aspectClass} rounded-lg overflow-hidden`}>
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="(max-width: 1200px) 20vw, 15vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-108"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2.5">
                        <span className="text-[11px] text-white leading-tight font-medium line-clamp-2">
                          {photo.caption}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Outer Right Column */}
              <div className="flex flex-col gap-3 xl:gap-4 pt-4">
                {rightCollagePhotos.slice(4, 8).map((photo) => (
                  <div
                    key={photo.id}
                    onClick={() => setActivePhoto(photo.src)}
                    className="group relative rounded-xl overflow-hidden bg-white/70 p-1 border border-white/80 shadow-xs hover:shadow-xl transition-all duration-300 hover:scale-[1.03] cursor-pointer"
                  >
                    <div className={`relative w-full ${photo.aspectClass} rounded-lg overflow-hidden`}>
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="(max-width: 1200px) 20vw, 15vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-108"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2.5">
                        <span className="text-[11px] text-white leading-tight font-medium line-clamp-2">
                          {photo.caption}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE & TABLET HORIZONTAL SCROLLING PHOTO REEL */}
        <div className="lg:hidden mt-10">
          <div className="text-center mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--gold-600)]">
              Field Dispatch Gallery
            </span>
            <h3 className="font-serif text-lg font-bold text-[var(--navy-900)]">
              Seva On Ground Across India
            </h3>
          </div>

          <div className="flex gap-3 overflow-x-auto pb-4 pt-1 snap-x no-scrollbar -mx-4 px-4">
            {[...leftCollagePhotos, ...rightCollagePhotos].map((photo) => (
              <div
                key={photo.id}
                onClick={() => setActivePhoto(photo.src)}
                className="shrink-0 w-64 sm:w-72 snap-center rounded-xl overflow-hidden bg-white p-1 border border-gray-100 shadow-sm"
              >
                <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 640px) 280px, 320px"
                    className="object-cover"
                  />
                </div>
                <p className="text-xs text-gray-700 mt-2 px-1 line-clamp-2 leading-snug">
                  {photo.caption}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 5 KEY MILESTONES STATS CARDS */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
        
        </div>

        {/* BOTTOM ACTION BUTTONS */}
        <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild variant="donate" size="lg" className="w-full sm:w-auto shadow-md">
            <Link href="/donate">
              <Heart className="w-4 h-4 mr-2 fill-current" />
              <span>Donate to Support Nationwide Seva (80G)</span>
            </Link>
          </Button>

          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
            <Link href="/volunteer">
              <span>Join As Field Volunteer</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Lightbox Modal for Photo inspection */}
      {activePhoto && (
        <div
          onClick={() => setActivePhoto(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-3xl w-full max-h-[85vh] bg-white rounded-2xl overflow-hidden shadow-2xl p-2"
          >
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-xl overflow-hidden">
              <Image
                src={activePhoto}
                alt="Enlarged field impact photo"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
