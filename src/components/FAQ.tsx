"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQS_DATA } from "@/data/apartmentData";
import { motion, AnimatePresence } from "framer-motion";

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>("f1");

  return (
    <section className="py-24 bg-white dark:bg-forest-950">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-pine-600 dark:text-pine-400 mb-4">
            <span className="w-5 h-px bg-pine-400 dark:bg-pine-600" />
            Common Questions
            <span className="w-5 h-px bg-pine-400 dark:bg-pine-600" />
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-pine-900 dark:text-sand-50">
            Good to know
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS_DATA.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${
                  isOpen
                    ? "bg-pine-50 dark:bg-pine-900/30 border-pine-200 dark:border-pine-700"
                    : "bg-white dark:bg-forest-850 border-pine-100 dark:border-pine-800/40 hover:border-pine-200 dark:hover:border-pine-700"
                }`}
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-semibold text-pine-900 dark:text-sand-50 text-sm sm:text-base">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                      isOpen ? "bg-pine-200 text-pine-800 dark:bg-pine-800/80 dark:text-pine-200" : "bg-pine-50 text-pine-400 dark:bg-pine-900/50"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-sm text-pine-600 dark:text-pine-300 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


