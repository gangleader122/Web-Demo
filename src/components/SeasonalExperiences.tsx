"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Snowflake, Sun, Leaf, Thermometer,
  Waves, Ship, Compass, Footprints,
  Beef, Train, Sparkles, MapPin, CableCar,
} from "lucide-react";
import Image from "next/image";
import { SEASONAL_EXPERIENCES } from "@/data/apartmentData";

const seasonIcons = {
  winter: Snowflake,
  "spring-summer": Sun,
  autumn: Leaf,
};

const seasonColors = {
  winter: "from-blue-900/80 to-pine-900/80",
  "spring-summer": "from-pine-800/80 to-pine-600/80",
  autumn: "from-wood-800/80 to-wood-600/80",
};

const seasonAccents = {
  winter: "text-blue-300",
  "spring-summer": "text-pine-300",
  autumn: "text-amber-gold",
};

const seasonImages = {
  winter: "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=800&q=80",
  "spring-summer": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
  autumn: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
};

const highlightIconMap: Record<string, React.ElementType> = {
  Snowflake,
  CableCar,
  Waves,
  Ship,
  Compass,
  Footprints,
  Beef,
  Train,
  Sparkles,
  MapPin,
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" as any },
  }),
};

export function SeasonalExperiences() {
  const [activeSeason, setActiveSeason] = useState(0);

  const season = SEASONAL_EXPERIENCES[activeSeason];
  const SeasonIcon = seasonIcons[season.season];

  return (
    <section id="experiences" className="py-24 bg-white dark:bg-forest-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-pine-600 dark:text-pine-400 mb-4">
            <span className="w-5 h-px bg-pine-400 dark:bg-pine-600" />
            Year-Round Destinations
            <span className="w-5 h-px bg-pine-400 dark:bg-pine-600" />
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-pine-900 dark:text-sand-50 mb-4">
            Zlatibor transforms with every season
          </h2>
          <p className="text-pine-600 dark:text-pine-300">
            Whether you arrive during winter snowfall or summer pine breezes, the mountain offers endless adventures.
          </p>
        </div>

        {/* Animated Season Selector with layoutId pill */}
        <div className="flex gap-2 justify-center mb-12 p-1.5 bg-sand-100 dark:bg-forest-850 rounded-full max-w-fit mx-auto border border-pine-200/60 dark:border-pine-800/40">
          {SEASONAL_EXPERIENCES.map((s, idx) => {
            const SIcon = seasonIcons[s.season];
            const isActive = activeSeason === idx;
            return (
              <button
                key={s.season}
                onClick={() => setActiveSeason(idx)}
                className={`relative flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold transition-colors duration-200 ${
                  isActive ? "text-white" : "text-pine-700 dark:text-pine-300 hover:text-pine-900 dark:hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeSeasonPill"
                    className="absolute inset-0 bg-pine-700 dark:bg-pine-600 rounded-full shadow-card"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <SIcon className="w-4 h-4" />
                  <span className="hidden sm:inline">{s.title.split(" ")[0]}</span>
                  <span className="sm:hidden">{s.months.split("–")[0].trim()}</span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Season Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Photo + meta */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={season.season}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4 }}
                className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-elevated border border-pine-200/50 dark:border-pine-800/40"
              >
                <Image
                  src={seasonImages[season.season]}
                  alt={season.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${seasonColors[season.season]}`} />
                <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                  <div className="flex items-center gap-2 bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-full max-w-fit">
                    <SeasonIcon className={`w-4 h-4 ${seasonAccents[season.season]}`} />
                    <span className={`text-xs font-semibold ${seasonAccents[season.season]}`}>
                      {season.months}
                    </span>
                  </div>
                  <div>
                    <p className="text-white font-serif text-2xl font-bold mb-1">{season.title}</p>
                    <p className="text-white/80 text-sm leading-relaxed">{season.tagline}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Insider Tip */}
            <div className="bg-amber-accent/10 dark:bg-amber-accent/5 border border-amber-accent/20 rounded-2xl p-5 shadow-subtle">
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-accent mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Host Insider Tip</span>
              </div>
              <p className="text-sm text-pine-800 dark:text-pine-200 leading-relaxed">
                {season.topTip}
              </p>
            </div>

            {/* Temperature Badge */}
            <div className="bg-sand-50 dark:bg-forest-850 rounded-2xl p-4 flex items-center gap-3 border border-pine-100 dark:border-pine-800/40 shadow-subtle">
              <div className="w-10 h-10 rounded-xl bg-pine-100 dark:bg-pine-800/50 flex items-center justify-center flex-shrink-0">
                <Thermometer className="w-5 h-5 text-pine-600 dark:text-pine-400" />
              </div>
              <div>
                <p className="text-xs text-pine-500 dark:text-pine-400 font-medium">Average Mountain Climate</p>
                <p className="text-pine-900 dark:text-sand-50 font-bold text-sm">{season.temperatureAvg}</p>
              </div>
            </div>
          </div>

          {/* Highlights List */}
          <div className="lg:col-span-3 space-y-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={season.season}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {season.highlights.map((h, i) => {
                  const HIcon = highlightIconMap[h.icon] ?? MapPin;
                  return (
                    <motion.div
                      key={h.title}
                      custom={i}
                      variants={fadeUp}
                      initial="hidden"
                      animate="visible"
                      className="flex gap-4 p-5 rounded-2xl bg-sand-50 dark:bg-forest-850/70 border border-pine-100 dark:border-pine-800/40 hover:shadow-card hover:border-pine-200 dark:hover:border-pine-700 transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-xl bg-white dark:bg-forest-800 flex items-center justify-center shadow-subtle flex-shrink-0 border border-pine-100 dark:border-pine-700">
                        <HIcon className="w-5 h-5 text-pine-600 dark:text-pine-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-3 mb-1">
                          <p className="font-semibold text-pine-900 dark:text-sand-50 text-sm sm:text-base">{h.title}</p>
                          <span className="text-xs font-semibold text-pine-600 dark:text-pine-400 bg-white dark:bg-forest-800 px-2.5 py-1 rounded-full border border-pine-100 dark:border-pine-700 whitespace-nowrap flex-shrink-0">
                            {h.distanceOrTime}
                          </span>
                        </div>
                        <p className="text-sm text-pine-600 dark:text-pine-300 leading-relaxed">{h.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
