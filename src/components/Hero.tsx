"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Wind, Mountain, Ruler, Users, ChevronDown, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { APARTMENT_INFO } from "@/data/apartmentData";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: "easeOut" as any },
  }),
};

const stats = [
  { icon: Star, value: "4.98", label: "Guest Rating", sublabel: `from ${APARTMENT_INFO.ratings.totalReviews} verified reviews` },
  { icon: Mountain, value: "Tornik", label: "12 min", sublabel: "to ski slopes" },
  { icon: Ruler, value: "72 m²", label: "Interior", sublabel: "private chalet suite" },
  { icon: Wind, value: "1 Gbps", label: "Fiber Wi-Fi", sublabel: "dedicated line" },
];

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-forest-900"
      aria-label="Hero section"
    >
      {/* Real photo background with subtle Ken-Burns zoom */}
      <motion.div
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=85"
          alt="Zlatibor mountain pine forest panorama at sunset"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Gradient overlays for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-900/70 to-forest-900/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950/80 via-forest-900/40 to-transparent" />
      </motion.div>

      {/* Floating Rating Badge with gentle float animation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: [0, -8, 0] }}
        transition={{
          opacity: { duration: 0.8, delay: 0.6 },
          y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.8 },
        }}
        className="absolute top-28 right-4 sm:right-8 lg:right-16 z-20 hidden sm:block"
      >
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-4 text-center shadow-elevated">
          <div className="flex items-center gap-1 justify-center mb-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-amber-gold text-amber-gold" />
            ))}
          </div>
          <p className="text-white font-serif font-bold text-2xl leading-none">4.98</p>
          <div className="flex items-center gap-1 justify-center mt-1 text-white/70 text-[11px] font-medium">
            <Sparkles className="w-3 h-3 text-amber-gold" />
            <span>{APARTMENT_INFO.ratings.totalReviews} Superhost Reviews</span>
          </div>
        </div>
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-32 sm:pb-20 lg:pb-24">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-2 mb-5"
          >
            <span className="inline-block w-8 h-px bg-amber-accent" />
            <span className="text-amber-gold text-xs sm:text-sm font-bold uppercase tracking-widest">
              Chalet Residence No. 4 &middot; Zlatibor, Serbia
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-serif text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-balance mb-6"
          >
            A Private Alpine{" "}
            <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-gold via-amber-accent to-orange-400">
              Sanctuary
            </span>{" "}
            above
            <br className="hidden sm:block" /> Zlatibor
          </motion.h1>

          {/* Sub-copy */}
          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-white/80 text-lg sm:text-xl max-w-xl leading-relaxed mb-8"
          >
            72 m² of mountain-modern living with a wood-burning glass fireplace,
            heated pine terrace, and 1 Gbps fiber &mdash; 11 minutes walk from the Gold Gondola.
          </motion.p>

          {/* CTA row */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-3 mb-12"
          >
            <Link
              href="#booking"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-accent hover:bg-amber-accentHover text-white font-bold rounded-full shadow-glow hover:shadow-elevated hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <span>Book Direct &amp; Save 15%</span>
              <span className="bg-white/20 px-2 py-0.5 rounded-full text-xs font-normal">0% Fees</span>
            </Link>
            <Link
              href="#apartment"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full backdrop-blur-md border border-white/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              Explore the 5 Spaces
            </Link>
          </motion.div>

          {/* Quick Specs Row */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <div className="flex flex-wrap gap-2.5">
              {[
                { icon: Users, text: "2–4 Guests" },
                { icon: Mountain, text: "1 King Bed + Sofa Bed" },
                { icon: Wind, text: "Free Private EV Parking" },
                { icon: Star, text: "Direct Booking Wine Gift" },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 bg-forest-900/60 backdrop-blur-md border border-white/15 px-3.5 py-2 rounded-full shadow-subtle"
                >
                  <Icon className="w-3.5 h-3.5 text-amber-gold flex-shrink-0" />
                  <span className="text-white/90 text-xs font-medium">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Stat Bar */}
      <div className="relative z-10 border-t border-white/10 bg-forest-950/40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-white/10">
            {stats.map(({ icon: Icon, value, label, sublabel }, idx) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + idx * 0.08, ease: "easeOut" as any }}
                className="flex items-center gap-3 px-4 sm:px-6 py-5"
              >
                <div className="hidden sm:flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 shrink-0">
                  <Icon className="w-5 h-5 text-amber-gold" />
                </div>
                <div>
                  <p className="text-white font-serif font-bold text-lg sm:text-2xl leading-none">{value}</p>
                  <p className="text-white/60 text-xs font-medium mt-1">{label}</p>
                  <p className="text-white/40 text-[11px] hidden sm:block">{sublabel}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-36 right-8 z-10 hidden lg:flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-xs tracking-widest uppercase rotate-90 mb-2">Scroll</span>
        <ChevronDown className="w-4 h-4 text-amber-gold animate-bounce" />
      </motion.div>
    </section>
  );
}
