"use client";

import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Flame, Wifi, Droplets, Coffee, Mountain, ShieldCheck,
  ChevronDown, Check
} from "lucide-react";
import { AMENITIES_DATA } from "@/data/apartmentData";

const iconMap: Record<string, React.ElementType> = {
  Flame, Wifi, Droplets, Coffee, Mountain, ShieldCheck,
  UtensilsCrossed: Coffee,
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as any } },
};

export function Amenities() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const toggle = (id: string) => setActiveId((prev) => (prev === id ? null : id));

  return (
    <section id="amenities" ref={ref} className="py-24 bg-sand-50 dark:bg-forest-900 border-t border-pine-100/50 dark:border-pine-800/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.span variants={fadeUp} className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-pine-600 dark:text-pine-400 mb-4">
            <span className="w-5 h-px bg-pine-400 dark:bg-pine-600" />
            Included in Every Stay
            <span className="w-5 h-px bg-pine-400 dark:bg-pine-600" />
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-serif text-3xl sm:text-4xl font-bold text-pine-900 dark:text-sand-50 mb-4">
            Everything thoughtfully provided
          </motion.h2>
          <motion.p variants={fadeUp} className="text-pine-600 dark:text-pine-300 text-base sm:text-lg">
            From the heated boot locker to the artisan espresso bar &mdash; every detail exists so you can focus entirely on the mountain.
          </motion.p>
        </motion.div>

        {/* Amenity Accordion Grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {AMENITIES_DATA.map((cat) => {
            const Icon = iconMap[cat.iconName] ?? Flame;
            const isOpen = activeId === cat.id;
            return (
              <motion.div
                key={cat.id}
                variants={fadeUp}
                className="rounded-2xl border border-pine-100 dark:border-pine-800/50 overflow-hidden bg-white dark:bg-forest-850 shadow-subtle hover:shadow-card transition-shadow duration-300"
              >
                <button
                  onClick={() => toggle(cat.id)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-pine-50 dark:bg-pine-900/50 flex items-center justify-center flex-shrink-0 group-hover:bg-pine-100 dark:group-hover:bg-pine-800/50 transition-colors">
                      <Icon className="w-5 h-5 text-pine-600 dark:text-pine-400" strokeWidth={2} />
                    </div>
                    <span className="font-semibold text-pine-900 dark:text-sand-50 text-sm sm:text-base">{cat.name}</span>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="text-pine-400 group-hover:text-amber-accent flex-shrink-0 transition-colors"
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" as any }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-1 space-y-3 border-t border-pine-50 dark:border-pine-800/40">
                        {cat.items.map((item) => (
                          <div key={item.name} className="flex gap-3">
                            <div className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${item.featured ? "bg-amber-accent/15" : "bg-pine-50 dark:bg-pine-900/40"}`}>
                              <Check className={`w-2.5 h-2.5 ${item.featured ? "text-amber-accent" : "text-pine-500 dark:text-pine-400"}`} strokeWidth={3} />
                            </div>
                            <div>
                              <p className={`text-sm font-medium leading-snug ${item.featured ? "text-pine-900 dark:text-sand-50" : "text-pine-700 dark:text-pine-300"}`}>
                                {item.name}
                                {item.featured && (
                                  <span className="ml-2 inline-flex items-center px-1.5 py-0.5 rounded text-[10px] uppercase tracking-wider bg-amber-accent/10 text-amber-accent font-bold">
                                    Highlight
                                  </span>
                                )}
                              </p>
                              {item.description && (
                                <p className="text-xs text-pine-400 dark:text-pine-500 mt-0.5">{item.description}</p>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
