"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SPACES_DATA } from "@/data/apartmentData";
import Image from "next/image";
import { Check, Sun, Moon, Sparkles, Maximize2 } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" as any } },
};

export function Apartment() {
  return (
    <section id="apartment" className="py-24 bg-white dark:bg-forest-950 relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-amber-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-pine-600 dark:text-pine-400 mb-4">
            <span className="w-5 h-px bg-pine-400 dark:bg-pine-600" />
            72 m² Architectural Residence
            <span className="w-5 h-px bg-pine-400 dark:bg-pine-600" />
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-pine-900 dark:text-sand-50 mb-4">
            Five carefully curated spaces
          </h2>
          <p className="text-pine-600 dark:text-pine-300 text-base sm:text-lg">
            Switch between daytime sun and evening fireplace lighting to experience how the chalet transforms throughout the day.
          </p>
        </div>

        {/* Spaces */}
        <div className="space-y-28">
          {SPACES_DATA.map((space, idx) => (
            <SpaceRow key={space.id} space={space} reversed={idx % 2 !== 0} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SpaceRow({ space, reversed, index }: { space: typeof SPACES_DATA[0]; reversed: boolean; index: number }) {
  const [lightingMood, setLightingMood] = useState<"day" | "night">("day");

  const currentImage = lightingMood === "night" && space.nightImage ? space.nightImage : space.image;

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${reversed ? "lg:grid-flow-dense" : ""}`}
    >
      {/* Interactive Photo Showcase Card */}
      <div className={`lg:col-span-7 relative ${reversed ? "lg:col-start-6" : ""}`}>
        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-elevated group border border-pine-200/50 dark:border-pine-800/40">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImage}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" as any }}
              className="absolute inset-0"
            >
              <Image
                src={currentImage}
                alt={`${space.name} - ${lightingMood === "day" ? "Daylight view" : "Evening lighting"}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </motion.div>
          </AnimatePresence>

          {/* Gradient protection */}
          <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-transparent to-transparent pointer-events-none" />

          {/* Size & Spec Badge */}
          <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
            <span className="bg-forest-900/85 backdrop-blur-md text-white text-xs font-semibold px-3.5 py-1.5 rounded-full border border-white/15 shadow-card">
              {space.size}
            </span>
          </div>

          {/* Day / Night Mood Switcher Interactive Button */}
          {space.nightImage && (
            <div className="absolute bottom-4 right-4 z-20">
              <div className="flex items-center gap-1 bg-forest-900/90 backdrop-blur-md p-1.5 rounded-full border border-white/20 shadow-elevated">
                <button
                  type="button"
                  onClick={() => setLightingMood("day")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                    lightingMood === "day"
                      ? "bg-amber-accent text-white shadow-card"
                      : "text-white/70 hover:text-white"
                  }`}
                  aria-label="View room in daytime light"
                >
                  <Sun className="w-3.5 h-3.5" />
                  <span>Day</span>
                </button>
                <button
                  type="button"
                  onClick={() => setLightingMood("night")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                    lightingMood === "night"
                      ? "bg-amber-accent text-white shadow-card"
                      : "text-white/70 hover:text-white"
                  }`}
                  aria-label="View room with evening cozy lighting"
                >
                  <Moon className="w-3.5 h-3.5" />
                  <span>Evening Fire</span>
                </button>
              </div>
            </div>
          )}

          {/* Subtle bottom space caption */}
          <div className="absolute bottom-4 left-4 z-20 text-white/90 text-xs font-medium hidden sm:flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-gold" />
            <span>{lightingMood === "day" ? "Natural alpine daylight" : "Warm firelight ambiance"}</span>
          </div>
        </div>
      </div>

      {/* Description & Feature Column */}
      <div className={`lg:col-span-5 ${reversed ? "lg:col-start-1 lg:row-start-1" : ""}`}>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-bold uppercase tracking-widest text-pine-600 dark:text-pine-400">
            Space 0{index + 1}
          </span>
          <span className="w-8 h-px bg-pine-300 dark:bg-pine-700" />
        </div>

        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-pine-900 dark:text-sand-50 mb-2">
          {space.name}
        </h3>
        <p className="text-amber-accent font-semibold text-sm mb-4">{space.tagline}</p>
        <p className="text-pine-600 dark:text-pine-300 text-base leading-relaxed mb-6">
          {space.description}
        </p>

        {/* Highlights with checkmarks */}
        <ul className="space-y-3 mb-8">
          {space.highlights.map((h) => (
            <li key={h} className="flex items-start gap-3">
              <div className="mt-0.5 w-5 h-5 rounded-full bg-pine-100 dark:bg-pine-800/60 flex items-center justify-center flex-shrink-0">
                <Check className="w-3 h-3 text-pine-700 dark:text-pine-300" strokeWidth={3} />
              </div>
              <span className="text-sm text-pine-800 dark:text-pine-200 font-medium">{h}</span>
            </li>
          ))}
        </ul>

        {/* Feature pills */}
        <div className="flex flex-wrap gap-2">
          {space.features.map((f) => (
            <span
              key={f.label}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-pine-800 dark:text-pine-200 bg-sand-100 dark:bg-forest-850 px-3.5 py-1.5 rounded-full border border-pine-200/60 dark:border-pine-800/60 shadow-subtle"
            >
              {f.label}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
