"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { GUEST_REVIEWS, APARTMENT_INFO } from "@/data/apartmentData";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as any } },
};

export function Reviews() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="reviews" ref={ref} className="py-24 bg-pine-950 dark:bg-forest-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.span variants={fadeUp} className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-pine-300 mb-4">
            <span className="w-5 h-px bg-pine-600" />
            Guest Reviews
            <span className="w-5 h-px bg-pine-600" />
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
            Loved by guests from around the world
          </motion.h2>

          {/* Rating summary */}
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-2 mb-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-accent text-amber-accent" />
            ))}
            <span className="font-bold text-xl text-white ml-1">{APARTMENT_INFO.ratings.overall}</span>
          </motion.div>
          <motion.p variants={fadeUp} className="text-pine-300">
            {APARTMENT_INFO.ratings.totalReviews} verified guest stays &middot; Superhost status maintained
          </motion.p>
        </motion.div>

        {/* Rating breakdown */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-14"
        >
          {[
            { label: "Cleanliness", value: APARTMENT_INFO.ratings.cleanliness },
            { label: "Accuracy", value: APARTMENT_INFO.ratings.accuracy },
            { label: "Communication", value: APARTMENT_INFO.ratings.communication },
            { label: "Location", value: APARTMENT_INFO.ratings.location },
            { label: "Check-in", value: APARTMENT_INFO.ratings.checkIn },
            { label: "Value", value: APARTMENT_INFO.ratings.value },
          ].map(({ label, value }) => (
            <motion.div
              key={label}
              variants={fadeUp}
              className="flex flex-col items-center bg-white/5 border border-white/10 rounded-2xl px-4 py-4"
            >
              <span className="font-bold text-2xl text-white">{value.toFixed(1)}</span>
              <span className="text-pine-400 text-xs mt-1 font-medium">{label}</span>
              {/* Mini bar */}
              <div className="w-full h-1 bg-white/10 rounded-full mt-2">
                <div
                  className="h-full bg-amber-accent rounded-full"
                  style={{ width: `${(value / 5) * 100}%` }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Review Cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {GUEST_REVIEWS.map((review) => (
            <motion.div
              key={review.id}
              variants={fadeUp}
              className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-3xl p-6 transition-colors duration-300"
            >
              {/* Quote icon */}
              <Quote className="w-6 h-6 text-amber-accent/60 mb-4" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-accent text-amber-accent" />
                ))}
              </div>

              {/* Headline */}
              <p className="font-serif text-white font-semibold text-lg mb-2 leading-snug">
                &ldquo;{review.headline}&rdquo;
              </p>

              {/* Comment */}
              <p className="text-pine-300 text-sm leading-relaxed mb-5">
                {review.comment}
              </p>

              {/* Reviewer info */}
              <div className="flex items-center justify-between gap-3 pt-4 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-pine-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {review.avatarText}
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">{review.author}</p>
                    <p className="text-pine-400 text-xs">{review.location}</p>
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-pine-400 text-xs">{review.stayDate}</p>
                  <span className="inline-block mt-0.5 text-xs text-pine-950 bg-amber-accent px-2 py-0.5 rounded-full font-medium">
                    {review.verifiedDirectOrOTA}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
