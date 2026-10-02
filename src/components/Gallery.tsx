"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GALLERY_PHOTOS } from "@/data/apartmentData";
import { X, ChevronLeft, ChevronRight, Maximize2, Sparkles } from "lucide-react";
import Image from "next/image";

type Category = "all" | "living" | "bedroom" | "kitchen" | "spa" | "terrace" | "surroundings";

const categories: { id: Category; label: string }[] = [
  { id: "all", label: "All Photos" },
  { id: "living", label: "Living Hearth" },
  { id: "bedroom", label: "Master Suite" },
  { id: "kitchen", label: "Culinary Kitchen" },
  { id: "spa", label: "Heated Spa" },
  { id: "terrace", label: "Pine Terrace" },
  { id: "surroundings", label: "Zlatibor Vistas" },
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};
const fadeScale = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.45, ease: "easeOut" as any } },
};

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const filtered = activeCategory === "all"
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter((p) => p.category === activeCategory);

  const openLightbox = (idx: number) => setLightboxIdx(idx);
  const closeLightbox = () => setLightboxIdx(null);
  const prev = useCallback(() => setLightboxIdx((i) => (i === null ? 0 : (i - 1 + filtered.length) % filtered.length)), [filtered.length]);
  const next = useCallback(() => setLightboxIdx((i) => (i === null ? 0 : (i + 1) % filtered.length)), [filtered.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIdx === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIdx, prev, next]);

  const currentPhoto = lightboxIdx !== null && filtered[lightboxIdx] ? filtered[lightboxIdx] : null;

  return (
    <section id="gallery" className="py-24 bg-sand-100 dark:bg-forest-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-pine-600 dark:text-pine-400 mb-4">
            <span className="w-5 h-px bg-pine-400 dark:bg-pine-600" />
            Curated Visual Tour
            <span className="w-5 h-px bg-pine-400 dark:bg-pine-600" />
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-pine-900 dark:text-sand-50 mb-4">
            Experience every detail
          </h2>
          <p className="text-pine-600 dark:text-pine-300">
            Browse the apartment spaces, alpine balcony, and surrounding pine ridges before your arrival.
          </p>
        </div>

        {/* Animated Category Pills */}
        <div className="flex flex-wrap gap-2 justify-center mb-10 p-1.5 bg-white dark:bg-forest-850 rounded-full max-w-fit mx-auto border border-pine-200/60 dark:border-pine-800/40 shadow-subtle">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setLightboxIdx(null);
                }}
                className={`relative px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-200 ${
                  isActive
                    ? "text-white"
                    : "text-pine-700 dark:text-pine-300 hover:text-pine-900 dark:hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeGalleryTab"
                    className="absolute inset-0 bg-pine-700 dark:bg-pine-600 rounded-full shadow-card"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Bento Grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((photo, idx) => (
              <motion.div
                key={photo.id}
                variants={fadeScale}
                layout
                exit={{ opacity: 0, scale: 0.9 }}
                onClick={() => openLightbox(idx)}
                className={`relative cursor-pointer rounded-2xl overflow-hidden group shadow-subtle hover:shadow-elevated transition-all duration-300 border border-pine-200/40 dark:border-pine-800/40 ${
                  photo.aspect === "wide" ? "col-span-2" : ""
                } ${photo.aspect === "portrait" ? "row-span-2" : ""}`}
                style={{ aspectRatio: photo.aspect === "portrait" ? "3/4" : photo.aspect === "wide" ? "16/7" : "4/3" }}
              >
                <Image
                  src={photo.image}
                  alt={photo.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />

                {/* Subtle Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-forest-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-between p-4">
                  <div className="flex justify-end">
                    <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </span>
                  </div>
                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white font-semibold text-sm leading-tight">{photo.title}</p>
                    <p className="text-white/70 text-xs mt-0.5">{photo.subtitle}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Full-Screen Lightbox Modal with Smooth Scale Animation */}
      <AnimatePresence>
        {currentPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-forest-950/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" as any }}
              className="relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden shadow-elevated border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={currentPhoto.image}
                alt={currentPhoto.title}
                fill
                className="object-contain"
                sizes="100vw"
              />

              {/* Photo Counter Pill */}
              <div className="absolute top-4 left-4 z-20 bg-black/50 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/10">
                {(lightboxIdx ?? 0) + 1} / {filtered.length}
              </div>

              {/* Caption Bar */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-forest-950 via-forest-950/80 to-transparent">
                <p className="text-white font-serif font-bold text-xl">{currentPhoto.title}</p>
                <p className="text-white/80 text-sm mt-1">{currentPhoto.subtitle}</p>
              </div>

              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white backdrop-blur-md transition-colors border border-white/10"
                aria-label="Close lightbox"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Nav Arrows */}
              <button
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white backdrop-blur-md transition-colors border border-white/10"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white backdrop-blur-md transition-colors border border-white/10"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
