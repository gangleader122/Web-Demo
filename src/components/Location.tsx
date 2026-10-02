"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin, Clock, Navigation, Car,
  Compass, Mountain, CableCar, Waves, UtensilsCrossed, ExternalLink, Route,
  Layers, Map as MapIcon
} from "lucide-react";
import { NEARBY_LANDMARKS, APARTMENT_INFO } from "@/data/apartmentData";

// Dynamically load real Leaflet map without SSR issues
const InteractiveLeafletMap = dynamic(
  () => import("./InteractiveMap"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full min-h-[460px] lg:min-h-[520px] rounded-3xl bg-forest-950 border border-pine-800/50 flex flex-col items-center justify-center gap-3 text-pine-300">
        <div className="w-8 h-8 rounded-full border-2 border-amber-accent border-t-transparent animate-spin" />
        <p className="text-xs tracking-wider uppercase font-semibold">Loading Zlatibor Satellite Map...</p>
      </div>
    ),
  }
);

type LandmarkCategory = "All" | "Walking" | "Ski & Gondola" | "Drives";
type MapViewMode = "satellite" | "topographic";

const landmarkIcons: Record<string, React.ElementType> = {
  "Gold Gondola Cable Car Terminal": CableCar,
  "Zlatibor Pine Lake & Central Square": Waves,
  "Tornik Alpine Ski Peak (1,496m)": Mountain,
  "Gostilje Waterfall & Stopića Cave": Compass,
  "Traditional Kafana 'Zlatiborski Mir'": UtensilsCrossed,
};

const mapPositions = [
  { x: 285, y: 205, id: 0 }, // Gold Gondola
  { x: 345, y: 285, id: 1 }, // Pine Lake
  { x: 110, y: 390, id: 2 }, // Tornik Peak
  { x: 510, y: 130, id: 3 }, // Cave & Waterfall
  { x: 380, y: 195, id: 4 }, // Kafana
];

export function Location() {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [filter, setFilter] = useState<LandmarkCategory>("All");
  const [mapMode, setMapMode] = useState<MapViewMode>("satellite");

  const filteredLandmarks = NEARBY_LANDMARKS.filter((lm) => {
    if (filter === "All") return true;
    if (filter === "Walking") return lm.walkOrDrive === "walk";
    if (filter === "Ski & Gondola") return lm.category === "Ski & Gondola";
    if (filter === "Drives") return lm.walkOrDrive === "drive";
    return true;
  });

  const activeLandmark = NEARBY_LANDMARKS[activeIdx] || NEARBY_LANDMARKS[0];
  const activePos = mapPositions[activeIdx] || { x: 300, y: 240 };
  const aptPos = { x: 300, y: 240 };

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${APARTMENT_INFO.gps.lat},${APARTMENT_INFO.gps.lng}`;

  return (
    <section id="location" className="py-24 bg-sand-50 dark:bg-forest-900/90 border-t border-pine-100/50 dark:border-pine-800/20 relative overflow-hidden">
      {/* Background subtle radial glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-pine-500/5 dark:bg-pine-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-pine-600 dark:text-pine-400 mb-4"
          >
            <span className="w-5 h-px bg-pine-400 dark:bg-pine-600" />
            Interactive Mountain Navigator
            <span className="w-5 h-px bg-pine-400 dark:bg-pine-600" />
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl font-bold text-pine-900 dark:text-sand-50 mb-4"
          >
            At the heart of Zlatibor
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18 }}
            className="text-pine-600 dark:text-pine-300"
          >
            Nestled on the quiet Čigota ridge — 5 minutes stroll to the central lake promenade and 11 minutes to the world-famous Gold Gondola.
          </motion.p>
        </div>

        {/* Filter Bar & Map Switcher */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
            {(["All", "Walking", "Ski & Gondola", "Drives"] as LandmarkCategory[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                  filter === tab
                    ? "bg-pine-700 dark:bg-pine-600 text-white shadow-card"
                    : "bg-white dark:bg-forest-850 text-pine-700 dark:text-pine-300 border border-pine-200/60 dark:border-pine-800/60 hover:bg-pine-50 dark:hover:bg-pine-800/40"
                }`}
              >
                {tab === "All" && "All Locations"}
                {tab === "Walking" && "Walking Distance (≤10 min)"}
                {tab === "Ski & Gondola" && "Ski & Cable Car"}
                {tab === "Drives" && "Scenic Mountain Excursions"}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {/* View Mode Toggle */}
            <div className="flex items-center p-1 rounded-full bg-white dark:bg-forest-850 border border-pine-200/60 dark:border-pine-800/60 text-xs font-semibold">
              <button
                onClick={() => setMapMode("satellite")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all ${
                  mapMode === "satellite"
                    ? "bg-pine-700 text-white shadow-sm"
                    : "text-pine-600 dark:text-pine-400 hover:text-pine-900"
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                Live Map
              </button>
              <button
                onClick={() => setMapMode("topographic")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all ${
                  mapMode === "topographic"
                    ? "bg-pine-700 text-white shadow-sm"
                    : "text-pine-600 dark:text-pine-400 hover:text-pine-900"
                }`}
              >
                <MapIcon className="w-3.5 h-3.5" />
                Topographic
              </button>
            </div>

            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-white dark:bg-forest-850 hover:bg-pine-50 dark:hover:bg-pine-800/40 text-pine-700 dark:text-pine-300 text-xs font-semibold rounded-full border border-pine-200/60 dark:border-pine-800/60 transition-colors shadow-subtle"
            >
              <Navigation className="w-3.5 h-3.5 text-amber-accent" />
              <span className="hidden sm:inline">Open in Google Maps</span>
              <ExternalLink className="w-3 h-3 opacity-60 ml-0.5" />
            </a>
          </div>
        </div>

        {/* Main Interactive Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Visual Map Canvas */}
          <div className="lg:col-span-7 relative min-h-[460px] lg:min-h-[520px] rounded-3xl overflow-hidden shadow-elevated">
            {mapMode === "satellite" ? (
              <InteractiveLeafletMap />
            ) : (
              <div className="w-full h-full min-h-[460px] lg:min-h-[520px] rounded-3xl overflow-hidden bg-gradient-to-br from-forest-950 via-forest-900 to-pine-950 border border-pine-800/50 relative">
                {/* Topographic Background Graphic */}
                <svg
                  viewBox="0 0 640 500"
                  className="w-full h-full object-cover select-none absolute inset-0"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <pattern id="topoGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1" />
                    </pattern>
                    <linearGradient id="trailGlow" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#d97736" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#498466" stopOpacity="0.6" />
                    </linearGradient>
                    <radialGradient id="radarGlow" cx="0.5" cy="0.5" r="0.5">
                      <stop offset="0%" stopColor="#d97736" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#d97736" stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  <rect width="640" height="500" fill="#0c1813" />
                  <rect width="640" height="500" fill="url(#topoGrid)" />

                  <path
                    d="M-20 180 Q140 120 280 170 T580 140 Q620 160 660 190"
                    fill="none"
                    stroke="rgba(73, 132, 102, 0.2)"
                    strokeWidth="2"
                    strokeDasharray="4 6"
                  />
                  <path
                    d="M-20 260 Q120 200 300 240 T660 210"
                    fill="none"
                    stroke="rgba(73, 132, 102, 0.25)"
                    strokeWidth="2"
                  />
                  <path
                    d="M-20 340 Q180 270 340 320 T660 290"
                    fill="none"
                    stroke="rgba(73, 132, 102, 0.2)"
                    strokeWidth="2"
                    strokeDasharray="6 8"
                  />

                  <ellipse cx="345" cy="285" rx="42" ry="24" fill="#006d77" fillOpacity="0.25" stroke="#48cae4" strokeWidth="1" strokeDasharray="3 3" />
                  <text x="345" y="289" fill="#90e0ef" fontSize="9" fontWeight="600" textAnchor="middle" opacity="0.8">
                    Lake Ribnica &amp; City Basin
                  </text>

                  <path d="M70 440 L110 380 L150 440 Z" fill="#1b362a" stroke="#498466" strokeWidth="1.5" opacity="0.6" />
                  <text x="110" y="420" fill="#a7c957" fontSize="9" fontWeight="bold" textAnchor="middle" opacity="0.8">
                    ▲ Tornik (1,496m)
                  </text>

                  <path d="M260 220 Q300 180 340 220 Q380 260 300 270 Z" fill="#142c21" opacity="0.7" />

                  {/* Active Route Line */}
                  <g>
                    <path
                      d={`M ${aptPos.x} ${aptPos.y} Q ${(aptPos.x + activePos.x) / 2 + 15} ${(aptPos.y + activePos.y) / 2 - 25} ${activePos.x} ${activePos.y}`}
                      fill="none"
                      stroke="url(#trailGlow)"
                      strokeWidth="3"
                      strokeDasharray="6 6"
                      strokeLinecap="round"
                    >
                      <animate
                        attributeName="stroke-dashoffset"
                        values="24;0"
                        dur="1.2s"
                        repeatCount="indefinite"
                      />
                    </path>
                  </g>

                  {/* Landmarks */}
                  {NEARBY_LANDMARKS.map((lm, i) => {
                    const pos = mapPositions[i] || { x: 300, y: 240 };
                    const isActive = activeIdx === i;
                    const isWalking = lm.walkOrDrive === "walk";

                    return (
                      <g
                        key={lm.name}
                        className="cursor-pointer transition-transform duration-300"
                        onClick={() => setActiveIdx(i)}
                      >
                        {isActive && (
                          <circle cx={pos.x} cy={pos.y} r="22" fill={isWalking ? "#498466" : "#d97736"} opacity="0.25">
                            <animate attributeName="r" values="14;28;14" dur="2s" repeatCount="indefinite" />
                            <animate attributeName="opacity" values="0.4;0.1;0.4" dur="2s" repeatCount="indefinite" />
                          </circle>
                        )}

                        <circle
                          cx={pos.x}
                          cy={pos.y}
                          r={isActive ? 11 : 8}
                          fill={isActive ? (isWalking ? "#52b788" : "#f48c06") : (isWalking ? "#2d6a4f" : "#b0571f")}
                          stroke="#ffffff"
                          strokeWidth={isActive ? 2.5 : 1.5}
                        />

                        <circle cx={pos.x} cy={pos.y} r={isActive ? 4 : 2.5} fill="#ffffff" />

                        <g transform={`translate(${pos.x + 12}, ${pos.y + (pos.y > 400 ? -8 : 4)})`}>
                          <rect
                            x="0"
                            y="-10"
                            width={lm.name.split(" ")[0].length * 7 + 28}
                            height="18"
                            rx="9"
                            fill={isActive ? "#d97736" : "rgba(18, 38, 30, 0.85)"}
                            stroke={isActive ? "#ffa26b" : "rgba(255,255,255,0.15)"}
                            strokeWidth="1"
                          />
                          <text
                            x="10"
                            y="2.5"
                            fill="#ffffff"
                            fontSize="9.5"
                            fontWeight={isActive ? "700" : "500"}
                          >
                            {lm.name.split(" ")[0]}
                          </text>
                        </g>
                      </g>
                    );
                  })}

                  {/* Residence Beacon */}
                  <g transform={`translate(${aptPos.x}, ${aptPos.y})`}>
                    <circle cx="0" cy="0" r="40" fill="url(#radarGlow)">
                      <animate attributeName="r" values="20;50;20" dur="3s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.8;0;0.8" dur="3s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="0" cy="0" r="18" fill="#d97736" fillOpacity="0.3" stroke="#d97736" strokeWidth="1" />
                    <circle cx="0" cy="0" r="10" fill="#d97736" stroke="#ffffff" strokeWidth="2.5" />
                    <circle cx="0" cy="0" r="3.5" fill="#ffffff" />
                    <g transform="translate(-54, -36)">
                      <rect x="0" y="0" width="108" height="24" rx="12" fill="#d97736" stroke="#ffffff" strokeWidth="1.5" />
                      <text x="54" y="15" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">
                        ★ Aura Pine Suite
                      </text>
                    </g>
                  </g>
                </svg>

                <div className="absolute bottom-4 right-4 z-20 hidden sm:flex items-center gap-2 px-4 py-2 bg-forest-900/90 backdrop-blur-md rounded-2xl border border-white/15 text-xs text-white shadow-elevated">
                  <Route className="w-4 h-4 text-amber-accent" />
                  <span>Route to <strong>{activeLandmark.name.split(" ")[0]}</strong>: {activeLandmark.distance}</span>
                </div>
              </div>
            )}
          </div>

          {/* Interactive Landmark Detail Panel */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeLandmark.name}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-forest-850 p-6 rounded-3xl border border-pine-200/80 dark:border-pine-800/60 shadow-elevated relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-accent via-amber-gold to-pine-500" />

                <div className="flex items-start justify-between gap-3 mb-3">
                  <span className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                    activeLandmark.walkOrDrive === "walk"
                      ? "bg-pine-100 text-pine-800 dark:bg-pine-800/60 dark:text-pine-200"
                      : "bg-amber-accent/15 text-amber-accent dark:bg-amber-accent/10 dark:text-amber-gold"
                  }`}>
                    {activeLandmark.walkOrDrive === "walk" ? "🚶 Walk From Doorstep" : "🚗 Scenic Drive"}
                  </span>
                  <span className="text-xs font-semibold text-pine-500 dark:text-pine-400 bg-sand-100 dark:bg-pine-900/50 px-2.5 py-1 rounded-full">
                    {activeLandmark.category}
                  </span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-pine-900 dark:text-sand-50 mb-2">
                  {activeLandmark.name}
                </h3>

                <div className="flex items-center gap-2 text-pine-600 dark:text-pine-300 text-sm font-medium mb-3">
                  <Clock className="w-4 h-4 text-amber-accent flex-shrink-0" />
                  <span>{activeLandmark.distance}</span>
                </div>

                <p className="text-sm text-pine-600 dark:text-pine-300 leading-relaxed mb-5">
                  {activeLandmark.description}
                </p>

                <div className="pt-4 border-t border-pine-100 dark:border-pine-800/40 flex items-center justify-between">
                  <span className="text-xs text-pine-400">GPS: {activeLandmark.coordinates.lat}, {activeLandmark.coordinates.lng}</span>
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&origin=${APARTMENT_INFO.gps.lat},${APARTMENT_INFO.gps.lng}&destination=${activeLandmark.coordinates.lat},${activeLandmark.coordinates.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-accent hover:text-amber-accentHover"
                  >
                    <span>Get Directions</span>
                    <Navigation className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="space-y-2.5 max-h-[280px] overflow-y-auto pr-1">
              {filteredLandmarks.map((lm) => {
                const origIdx = NEARBY_LANDMARKS.findIndex((item) => item.name === lm.name);
                const isSelected = activeIdx === origIdx;
                const IconComponent = landmarkIcons[lm.name] || MapPin;

                return (
                  <button
                    key={lm.name}
                    onClick={() => setActiveIdx(origIdx)}
                    className={`w-full text-left flex items-center justify-between p-3.5 rounded-2xl border transition-all duration-200 ${
                      isSelected
                        ? "bg-pine-100/70 dark:bg-pine-900/50 border-pine-400 dark:border-pine-700 shadow-card"
                        : "bg-white/80 dark:bg-forest-850/80 border-pine-100 dark:border-pine-800/40 hover:bg-white dark:hover:bg-forest-850"
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 ${
                        isSelected ? "bg-amber-accent text-white" : "bg-pine-50 dark:bg-pine-900/40 text-pine-600 dark:text-pine-400"
                      }`}>
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <p className={`text-xs font-semibold truncate ${isSelected ? "text-pine-900 dark:text-sand-50" : "text-pine-700 dark:text-pine-300"}`}>
                          {lm.name}
                        </p>
                        <p className="text-[11px] text-pine-500 dark:text-pine-400">{lm.distance.split("(")[0]}</p>
                      </div>
                    </div>

                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full flex-shrink-0 ${
                      lm.walkOrDrive === "walk" ? "bg-pine-100 dark:bg-pine-800/50 text-pine-700 dark:text-pine-300" : "bg-amber-accent/10 text-amber-accent"
                    }`}>
                      {lm.walkOrDrive === "walk" ? "Walk" : "Drive"}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
