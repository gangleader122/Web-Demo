"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const stored = localStorage.getItem("theme");
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const isDark = stored === "dark" || (!stored && prefersDark);
      setDark(isDark);
      document.documentElement.classList.toggle("dark", isDark);
    } catch {
      // Fallback if localStorage or matchMedia fails
    }
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  };

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm border border-white/20" />
    );
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="relative w-9 h-9 rounded-full flex items-center justify-center text-pine-600 dark:text-pine-300 bg-white/80 dark:bg-forest-850 hover:bg-pine-100 dark:hover:bg-pine-800/60 border border-pine-200 dark:border-pine-700 transition-all duration-200 hover:scale-105 shadow-subtle"
    >
      {dark ? <Sun className="w-4 h-4 text-amber-accent" /> : <Moon className="w-4 h-4" />}
    </button>
  );
}
