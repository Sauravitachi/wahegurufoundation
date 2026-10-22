"use client";

import React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

export interface LightboxImage {
  src: string;
  alt: string;
  title?: string;
  category?: string;
  caption?: string;
}

export interface LightboxProps {
  images: LightboxImage[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function Lightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}: LightboxProps) {
  if (!images || images.length === 0 || currentIndex < 0) return null;

  const currentImage = images[currentIndex];

  const handlePrev = () => {
    onNavigate((currentIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    onNavigate((currentIndex + 1) % images.length);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-5xl bg-[var(--navy-900)] border-[var(--navy-700)] p-0 overflow-hidden text-white">
        <DialogTitle className="sr-only">
          {currentImage?.title || "Image Preview"}
        </DialogTitle>
        <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-black/90 flex items-center justify-center">
          <Image
            src={currentImage.src}
            alt={currentImage.alt}
            fill
            className="object-contain"
            sizes="(max-width: 1200px) 100vw, 1200px"
            priority
          />

          {/* Navigation Controls */}
          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--gold-500)]"
                aria-label="Previous Image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--gold-500)]"
                aria-label="Next Image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 sm:p-6 text-left">
            {currentImage.category && (
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--gold-300)]">
                {currentImage.category}
              </span>
            )}
            <h3 className="font-serif text-lg sm:text-xl font-bold text-white mt-1">
              {currentImage.title}
            </h3>
            {currentImage.caption && (
              <p className="text-sm text-gray-300 mt-1 line-clamp-2">
                {currentImage.caption}
              </p>
            )}
            <p className="text-xs text-gray-400 mt-2">
              Photo {currentIndex + 1} of {images.length}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
