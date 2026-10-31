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
  CheckCircle2,
} from "lucide-react";
import {
  impactHotspots,
  leftCollagePhotos,
  rightCollagePhotos,
  totalVolunteersCount,
  ImpactHotspot,
} from "@/content/impact-map";
import { Button } from "@/components/ui/button";

function renderIcon(iconType: ImpactHotspot["iconType"], className: string = "w-4 h-4 text-white") {
  switch (iconType) {
    case "megaphone":
      return <Megaphone className={className} strokeWidth={2.2} />;
    case "mappin":
      return <MapPin className={className} strokeWidth={2.2} />;
    case "hands":
      return <Users className={className} strokeWidth={2.2} />;
    case "heart":
      return <HandHeart className={className} strokeWidth={2.2} />;
    case "radiance":
      return <Sparkles className={className} strokeWidth={2.2} />;
    default:
      return <MapPin className={className} strokeWidth={2.2} />;
  }
}

export function OurImpactMap() {
  const [activeHotspotId, setActiveHotspotId] = useState<string | null>("punjab");
  const [activePhoto, setActivePhoto] = useState<string | null>(null);

  const activeHotspot = impactHotspots.find((spot) => spot.id === activeHotspotId);

  return (
    <section className="bg-grain-texture py-16 sm:py-20 lg:py-24 relative overflow-hidden border-y border-[var(--border)]">
      <div className="absolute inset-0 bg-radial from-transparent via-transparent to-[var(--navy-900)]/[0.02] pointer-events-none" />

      {/* SECTION HEADER: 'Our' cursive + 'Volunteers' bold navy + Total Volunteers Count */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6734]/10 border border-[#FF6734]/20 text-[#FF6734] text-xs font-semibold uppercase tracking-wider mb-4 shadow-2xs">
          <Users className="w-3.5 h-3.5" />
          <span>{totalVolunteersCount.toLocaleString()}+ Ground Sevadars Network</span>
        </div>

        <div className="flex items-baseline justify-center gap-2 sm:gap-3 mb-3">
          <span className="font-[family-name:var(--font-caveat)] text-5xl sm:text-6xl md:text-7xl font-bold text-[#FF6734] italic -rotate-3 inline-block drop-shadow-2xs select-none">
            Our
          </span>
          <span className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-[var(--navy-900)] tracking-tight inline-block align-baseline">
            Volunteers
          </span>
        </div>

        <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
          A dedicated force of <strong className="text-[var(--navy-900)] font-semibold">{totalVolunteersCount.toLocaleString()}+ active volunteer sevadars</strong> mobilized across {impactHotspots.length} states and union territories, delivering daily langar, mobile diagnostics, and emergency relief.
        </p>
      </div>

      <div className="relative z-10 max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* LEFT COLLAGE (Desktop Wings) */}
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
                alt="Interactive Map of India showing Waheguru Foundation Volunteer Hubs"
                fill
                priority
                className="object-contain drop-shadow-sm select-none pointer-events-none"
              />

              {/* HOTSPOT PINS FOR PUNJAB, HARYANA, DELHI, RAJASTHAN, HIMACHAL */}
              {impactHotspots.map((spot) => {
                const isActive = activeHotspotId === spot.id;
                
                // Tooltip positioning logic
                const tooltipPosClasses =
                  spot.tooltipPosition === "left"
                    ? "right-full mr-3 top-1/2 -translate-y-1/2"
                    : "left-full ml-3 top-1/2 -translate-y-1/2";

                return (
                  <div
                    key={spot.id}
                    style={{
                      left: `${spot.coordinates.x}%`,
                      top: `${spot.coordinates.y}%`,
                    }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 ${
                      isActive ? "z-40" : "z-20 hover:z-30"
                    }`}
                  >
                    {/* Glowing radar ping ring */}
                    {isActive && (
                      <span className="absolute -inset-2.5 rounded-full bg-[#FF6734]/35 animate-ping pointer-events-none" />
                    )}

                    {/* Interactive Pin Button */}
                    <button
                      type="button"
                      onClick={() => setActiveHotspotId(isActive ? null : spot.id)}
                      className="relative flex flex-col items-center group transition-all duration-300 focus:outline-none cursor-pointer"
                      aria-label={`View volunteers in ${spot.region}`}
                    >
                      {/* Floating tooltip on hover when not active */}
                      {!isActive && (
                        <span className="absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 text-[11px] font-bold px-2.5 py-1 rounded-md bg-[var(--navy-900)] text-white shadow-xl whitespace-nowrap z-50 border border-white/10">
                          {spot.stateName} • {spot.statValue}
                        </span>
                      )}

                      {/* Circular Pin matching Hemkunt Foundation reference */}
                      <div
                        className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-md ${
                          isActive
                            ? "bg-[#FF6734] border-2 border-white text-white scale-110 shadow-lg ring-4 ring-[#FF6734]/30"
                            : "bg-[#1E2B4D] border-2 border-[#FF6734] text-white hover:bg-[#FF6734] hover:border-white hover:scale-105"
                        }`}
                      >
                        {renderIcon(spot.iconType, "w-4 h-4 sm:w-5 sm:h-5 text-white")}
                      </div>

                      {/* Active State Pill Tag */}
                      {isActive && (
                        <span className="mt-1 text-[10px] sm:text-[11px] font-bold px-2 py-0.5 rounded-full bg-[var(--navy-900)] text-white shadow-xs border border-white/20 whitespace-nowrap">
                          {spot.stateName}
                        </span>
                      )}
                    </button>

                    {/* Floating Popover on Desktop */}
                    {isActive && (
                      <div
                        className={`hidden sm:block absolute ${tooltipPosClasses} w-72 sm:w-80 bg-white rounded-2xl shadow-2xl border border-gray-200/80 p-4 z-50 animate-in fade-in zoom-in-95 duration-200 text-left`}
                      >
                        <div className="flex items-start justify-between gap-2 pb-2.5 border-b border-gray-100">
                          <div>
                            <div className="flex items-center gap-1.5">
                              <span className="w-2 h-2 rounded-full bg-[#FF6734]" />
                              <h4 className="font-serif font-bold text-base text-[var(--navy-900)]">
                                {spot.region} Chapter
                              </h4>
                            </div>
                            <span className="inline-block mt-1 text-xs font-bold text-[#FF6734] bg-[#FF6734]/10 px-2 py-0.5 rounded-full">
                              {spot.statValue} {spot.statLabel}
                            </span>
                          </div>

                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveHotspotId(null);
                            }}
                            className="text-gray-400 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100 transition-colors"
                            aria-label="Close details"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>

                        <p className="text-xs text-gray-600 mt-2.5 leading-relaxed">
                          {spot.description}
                        </p>

                        <div className="mt-3 pt-2.5 border-t border-gray-100">
                          <span className="text-[11px] font-bold text-gray-800 uppercase tracking-wider block mb-1">
                            Operational Hubs
                          </span>
                          <p className="text-xs text-gray-500 font-medium">
                            {spot.hubs}
                          </p>
                        </div>

                        <div className="mt-2.5 pt-2 border-t border-gray-100">
                          <span className="text-[11px] font-bold text-gray-800 uppercase tracking-wider block mb-1.5">
                            Key Initiatives
                          </span>
                          <div className="space-y-1">
                            {spot.initiatives.slice(0, 3).map((item, idx) => (
                              <div key={idx} className="flex items-center gap-1.5 text-xs text-gray-600">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                                <span className="line-clamp-1">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="mt-3 pt-2.5 border-t border-gray-100 flex items-center justify-between">
                          <Link
                            href="/volunteer"
                            className="text-xs font-bold text-[#FF6734] hover:text-[#e05423] inline-flex items-center gap-1 group/link"
                          >
                            <span>Join {spot.stateName} Sevadars</span>
                            <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5" />
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* QUICK STATE SELECTOR PILLS */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2 max-w-xl mx-auto px-2">
              {impactHotspots.map((spot) => {
                const isActive = activeHotspotId === spot.id;
                return (
                  <button
                    key={spot.id}
                    onClick={() => setActiveHotspotId(isActive ? null : spot.id)}
                    className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 border flex items-center gap-2 cursor-pointer ${
                      isActive
                        ? "bg-[var(--navy-900)] text-white border-[var(--navy-900)] shadow-sm scale-105"
                        : "bg-white/90 text-[var(--navy-900)] border-gray-200 hover:border-[#FF6734] hover:bg-white"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full ${
                        isActive ? "bg-[#FF6734]" : "bg-gray-300"
                      }`}
                    />
                    <span>{spot.stateName}</span>
                    <span className="text-[11px] opacity-80 font-normal">
                      ({spot.statValue})
                    </span>
                  </button>
                );
              })}
            </div>

            {/* MOBILE ACTIVE STATE CARD (shown below map on mobile screens) */}
            {activeHotspot && (
              <div className="sm:hidden mt-6 w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-200 p-4 text-left animate-in fade-in duration-200">
                <div className="flex items-start justify-between gap-2 pb-2 border-b border-gray-100">
                  <div>
                    <h4 className="font-serif font-bold text-base text-[var(--navy-900)]">
                      {activeHotspot.region} Chapter
                    </h4>
                    <span className="text-xs font-bold text-[#FF6734]">
                      {activeHotspot.statValue} {activeHotspot.statLabel}
                    </span>
                  </div>
                  <button
                    onClick={() => setActiveHotspotId(null)}
                    className="text-gray-400 p-1"
                    aria-label="Close"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                  {activeHotspot.description}
                </p>
                <p className="text-[11px] text-gray-500 mt-2 font-medium">
                  <strong>Hubs:</strong> {activeHotspot.hubs}
                </p>
                <div className="mt-3 pt-2 border-t border-gray-100">
                  <Link
                    href="/volunteer"
                    className="text-xs font-bold text-[#FF6734] inline-flex items-center gap-1"
                  >
                    <span>Register as volunteer in {activeHotspot.stateName}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            )}
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
