"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mountain, Phone } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { href: "#apartment", label: "The Apartment" },
  { href: "#amenities", label: "Amenities" },
  { href: "#gallery", label: "Gallery" },
  { href: "#experiences", label: "Seasons" },
  { href: "#location", label: "Location" },
  { href: "#reviews", label: "Reviews" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" as any }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-sand-50/95 dark:bg-forest-900/95 backdrop-blur-md shadow-subtle border-b border-pine-100/50 dark:border-pine-800/30"
          : "bg-transparent text-white"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div
              className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105 ${
                isScrolled
                  ? "bg-pine-600 text-white"
                  : "bg-pine-600/90 text-white shadow-card"
              }`}
            >
              <Mountain className="w-5 h-5" strokeWidth={2.2} />
            </div>
            <div className="flex flex-col">
              <span className={`font-serif text-lg font-semibold leading-tight ${isScrolled ? "text-pine-900 dark:text-sand-50" : "text-white"}`}>
                Aura Pine
              </span>
              <span className={`text-xs tracking-wide -mt-0.5 ${isScrolled ? "text-pine-600 dark:text-pine-300" : "text-white/80"}`}>
                Zlatibor
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  isScrolled
                    ? "text-pine-700 dark:text-pine-200 hover:text-pine-900 dark:hover:text-white hover:bg-pine-50 dark:hover:bg-pine-800/40"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <a
              href="tel:+381631234567"
              className={`p-2.5 rounded-full transition-all duration-200 hover:scale-105 ${
                isScrolled
                  ? "text-pine-600 hover:bg-pine-50 dark:text-pine-300 dark:hover:bg-pine-800/40"
                  : "text-white bg-white/20 hover:bg-white/30 backdrop-blur-sm"
              }`}
              aria-label="Call us"
            >
              <Phone className="w-4 h-4" />
            </a>
            <Link
              href="#booking"
              className="px-5 py-2.5 bg-amber-accent hover:bg-amber-accentHover text-white font-semibold text-sm rounded-full shadow-card hover:shadow-elevated hover:-translate-y-0.5 transition-all duration-200"
            >
              Book Direct
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2.5 rounded-xl backdrop-blur-sm transition-colors ${
                isScrolled
                  ? "bg-white/80 dark:bg-forest-850/80 text-pine-700 dark:text-sand-50"
                  : "bg-white/20 text-white"
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-sand-50/98 dark:bg-forest-900/98 backdrop-blur-lg border-t border-pine-100 dark:border-pine-800/30"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-base font-medium text-pine-700 dark:text-pine-200 hover:text-pine-900 dark:hover:text-white hover:bg-pine-50 dark:hover:bg-pine-800/40 rounded-xl transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 pb-2">
                <Link
                  href="#booking"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center px-5 py-3 bg-amber-accent hover:bg-amber-accentHover text-white font-semibold rounded-full shadow-card"
                >
                  Book Direct
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
