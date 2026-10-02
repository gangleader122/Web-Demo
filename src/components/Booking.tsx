"use client";

import React, { useState } from "react";
import {
  Calendar, Users, Check,
  Send, Sparkles, MessageCircle, Phone, Mail, ShieldCheck, ArrowRight, DollarSign
} from "lucide-react";
import { APARTMENT_INFO, ADD_ON_SERVICES } from "@/data/apartmentData";
import { motion, AnimatePresence } from "framer-motion";

export function Booking() {
  const [checkIn, setCheckIn] = useState("2026-10-15");
  const [checkOut, setCheckOut] = useState("2026-10-20");
  const [guests, setGuests] = useState(2);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([
    "wood",
    "ev_charge",
  ]);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
  });

  const dIn = new Date(checkIn);
  const dOut = new Date(checkOut);
  const diffTime = dOut.getTime() - dIn.getTime();
  const calculatedNights = Math.round(diffTime / (1000 * 60 * 60 * 24));
  const nights = isNaN(calculatedNights) || calculatedNights < 1 ? 1 : calculatedNights;

  const baseRate = APARTMENT_INFO.baseRates.standardNightly;
  const accommodationTotal = baseRate * nights;
  const discountPercent = nights >= 14 ? 25 : nights >= 7 ? 10 : 0;
  const discountAmount = Math.round((accommodationTotal * discountPercent) / 100);

  const addonsTotal = selectedAddons.reduce((acc, id) => {
    const addon = ADD_ON_SERVICES.find((a) => a.id === id);
    if (!addon || addon.unitType === "free") return acc;
    if (addon.unitType === "per_day") return acc + addon.pricePerUnit * nights;
    return acc + addon.pricePerUnit;
  }, 0);

  const grandTotal = accommodationTotal - discountAmount + addonsTotal;
  // Estimated OTA commission (15% platform booking fee)
  const otaFeeEstimate = Math.round(accommodationTotal * 0.16);

  const toggleAddon = (id: string) => {
    const addon = ADD_ON_SERVICES.find((a) => a.id === id);
    if (addon?.includedFree) return;
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="booking" className="py-24 bg-sand-100 dark:bg-forest-900 border-t border-pine-100/50 dark:border-pine-800/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-pine-600 dark:text-pine-400 mb-4">
            <span className="w-5 h-px bg-pine-400 dark:bg-pine-600" />
            Direct Residence Reservation
            <span className="w-5 h-px bg-pine-400 dark:bg-pine-600" />
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-pine-900 dark:text-sand-50 mb-4">
            Reserve your Zlatibor escape
          </h2>
          <p className="text-pine-600 dark:text-pine-300">
            Transparent pricing, 0% platform commissions, complimentary Serbian wine, and free cancellation up to 7 days before check-in.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Interactive Booking Form */}
          <div className="lg:col-span-7 bg-white dark:bg-forest-850 p-6 sm:p-8 rounded-3xl shadow-card border border-pine-200/60 dark:border-pine-800/40">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 bg-pine-100 dark:bg-pine-800/50 rounded-full flex items-center justify-center mx-auto mb-4 text-pine-600 dark:text-pine-300">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-pine-900 dark:text-sand-50 mb-2">
                    Reservation Request Received!
                  </h3>
                  <p className="text-pine-600 dark:text-pine-300 text-sm max-w-md mx-auto mb-6 leading-relaxed">
                    Hvala vam! Stefan &amp; Milena will verify calendar dates and message you back within 2 hours with direct payment details.
                  </p>
                  <div className="flex justify-center gap-3">
                    <a
                      href={`https://wa.me/381631234567?text=Hi%20Milena%2C%20I%20just%20sent%20a%20booking%20inquiry%20for%20${checkIn}%20to%20${checkOut}%20(${nights}%20nights)`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-pine-700 hover:bg-pine-800 text-white text-sm font-semibold rounded-full shadow-card transition-all"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Chat on WhatsApp Directly</span>
                    </a>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-xl font-bold text-pine-900 dark:text-sand-50">
                      1. Select Dates &amp; Guests
                    </h3>
                    <span className="text-xs font-semibold text-pine-600 dark:text-pine-400 bg-sand-100 dark:bg-forest-800 px-3 py-1 rounded-full">
                      {nights} {nights === 1 ? "Night" : "Nights"} Selected
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-pine-600 dark:text-pine-400 mb-2">
                        Check-in
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          value={checkIn}
                          onChange={(e) => setCheckIn(e.target.value)}
                          className="w-full pl-10 pr-3 py-2.5 bg-sand-50 dark:bg-forest-900 border border-pine-200 dark:border-pine-700 rounded-xl text-sm font-medium text-pine-900 dark:text-sand-50 focus:outline-none focus:ring-2 focus:ring-amber-accent transition-all"
                          required
                        />
                        <Calendar className="w-4 h-4 text-pine-400 absolute left-3.5 top-3 pointer-events-none" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-pine-600 dark:text-pine-400 mb-2">
                        Check-out
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          value={checkOut}
                          onChange={(e) => setCheckOut(e.target.value)}
                          className="w-full pl-10 pr-3 py-2.5 bg-sand-50 dark:bg-forest-900 border border-pine-200 dark:border-pine-700 rounded-xl text-sm font-medium text-pine-900 dark:text-sand-50 focus:outline-none focus:ring-2 focus:ring-amber-accent transition-all"
                          required
                        />
                        <Calendar className="w-4 h-4 text-pine-400 absolute left-3.5 top-3 pointer-events-none" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-pine-600 dark:text-pine-400 mb-2">
                        Guests
                      </label>
                      <div className="relative">
                        <select
                          value={guests}
                          onChange={(e) => setGuests(Number(e.target.value))}
                          className="w-full pl-10 pr-3 py-2.5 bg-sand-50 dark:bg-forest-900 border border-pine-200 dark:border-pine-700 rounded-xl text-sm font-medium text-pine-900 dark:text-sand-50 focus:outline-none focus:ring-2 focus:ring-amber-accent transition-all appearance-none"
                        >
                          <option value={1}>1 Guest</option>
                          <option value={2}>2 Guests (Ideal)</option>
                          <option value={3}>3 Guests</option>
                          <option value={4}>4 Guests (Max)</option>
                        </select>
                        <Users className="w-4 h-4 text-pine-400 absolute left-3.5 top-3 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  <hr className="border-pine-100 dark:border-pine-800/40" />

                  <h3 className="font-serif text-xl font-bold text-pine-900 dark:text-sand-50">
                    2. Add-ons &amp; Experiences
                  </h3>

                  <div className="space-y-3">
                    {ADD_ON_SERVICES.map((addon) => {
                      const isSelected = selectedAddons.includes(addon.id);
                      return (
                        <div
                          key={addon.id}
                          onClick={() => toggleAddon(addon.id)}
                          className={`flex items-start justify-between gap-3 p-3.5 rounded-2xl border cursor-pointer transition-all duration-200 ${
                            isSelected
                              ? "bg-pine-50 dark:bg-pine-900/40 border-pine-400 dark:border-pine-700 shadow-subtle"
                              : "bg-white dark:bg-forest-850 border-pine-100 dark:border-pine-800/40 hover:border-pine-200 dark:hover:border-pine-700"
                          } ${addon.includedFree ? "cursor-default" : ""}`}
                        >
                          <div className="flex gap-3">
                            <div
                              className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                                isSelected ? "bg-amber-accent text-white" : "border border-pine-300 dark:border-pine-600"
                              }`}
                            >
                              {isSelected && <Check className="w-2.5 h-2.5" strokeWidth={3} />}
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-pine-900 dark:text-sand-50">
                                {addon.name}
                              </p>
                              <p className="text-xs text-pine-500 dark:text-pine-400">
                                {addon.description}
                              </p>
                            </div>
                          </div>
                          <span className="text-xs font-bold text-pine-900 dark:text-sand-50 whitespace-nowrap">
                            {addon.includedFree ? (
                              <span className="text-pine-500 dark:text-pine-400 font-semibold bg-sand-100 dark:bg-forest-800 px-2 py-0.5 rounded-full">FREE</span>
                            ) : addon.unitType === "per_day" ? (
                              <span>€{addon.pricePerUnit}/day</span>
                            ) : (
                              <span>€{addon.pricePerUnit}</span>
                            )}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  <hr className="border-pine-100 dark:border-pine-800/40" />

                  <h3 className="font-serif text-xl font-bold text-pine-900 dark:text-sand-50">
                    3. Contact Details
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-pine-700 dark:text-pine-300 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="Milica Jovanović"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-sand-50 dark:bg-forest-900 border border-pine-200 dark:border-pine-700 rounded-xl text-sm text-pine-900 dark:text-sand-50 focus:outline-none focus:ring-2 focus:ring-amber-accent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-pine-700 dark:text-pine-300 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="milica@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-sand-50 dark:bg-forest-900 border border-pine-200 dark:border-pine-700 rounded-xl text-sm text-pine-900 dark:text-sand-50 focus:outline-none focus:ring-2 focus:ring-amber-accent"
                        required
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-semibold text-pine-700 dark:text-pine-300 mb-1">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        placeholder="+381 60 123 4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-sand-50 dark:bg-forest-900 border border-pine-200 dark:border-pine-700 rounded-xl text-sm text-pine-900 dark:text-sand-50 focus:outline-none focus:ring-2 focus:ring-amber-accent"
                        required
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-4 bg-amber-accent hover:bg-amber-accentHover text-white font-bold rounded-full shadow-card hover:shadow-elevated hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 text-base"
                  >
                    <Send className="w-4 h-4" />
                    <span>Request Direct Booking</span>
                  </button>
                </form>
              )}
            </AnimatePresence>
          </div>

          {/* Pricing Summary & Direct Benefit Column */}
          <div className="lg:col-span-5 space-y-6">
            {/* Price Card */}
            <div className="bg-gradient-to-br from-pine-950 via-forest-950 to-forest-900 text-white p-6 sm:p-8 rounded-3xl shadow-elevated border border-pine-800/80 relative overflow-hidden">
              {/* Subtle gold accent light */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-gold/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between border-b border-pine-800/80 pb-5 mb-5">
                <div>
                  <span className="font-serif text-3xl font-bold text-white">
                    €{baseRate}
                  </span>
                  <span className="text-pine-400 text-xs ml-1.5 font-medium">/ night</span>
                </div>
                <span className="text-xs bg-amber-accent/20 text-amber-gold px-3 py-1 rounded-full font-bold border border-amber-accent/30">
                  Best Price Guarantee
                </span>
              </div>

              {/* Direct Booking Savings Badge */}
              <div className="mb-5 p-3 rounded-2xl bg-amber-accent/15 border border-amber-accent/30 flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-amber-gold flex-shrink-0" />
                <p className="text-xs text-amber-gold font-semibold leading-tight">
                  You save ~€{otaFeeEstimate} in Airbnb / Booking.com platform fees by booking direct!
                </p>
              </div>

              {/* Breakdown */}
              <div className="space-y-3 text-sm mb-6">
                <div className="flex justify-between text-pine-300">
                  <span>
                    €{baseRate} × {nights} {nights === 1 ? "night" : "nights"}
                  </span>
                  <span className="font-medium text-white">€{accommodationTotal}</span>
                </div>

                {discountAmount > 0 && (
                  <div className="flex justify-between text-amber-gold font-semibold">
                    <span>Long stay discount ({discountPercent}%)</span>
                    <span>-€{discountAmount}</span>
                  </div>
                )}

                {addonsTotal > 0 && (
                  <div className="flex justify-between text-pine-300">
                    <span>Selected Add-ons</span>
                    <span className="font-medium text-white">+€{addonsTotal}</span>
                  </div>
                )}

                <div className="flex justify-between text-pine-300">
                  <span>Cleaning &amp; Fresh Linens</span>
                  <span className="text-pine-400 font-bold">FREE</span>
                </div>

                <div className="flex justify-between text-pine-300">
                  <span>Underground EV Garage</span>
                  <span className="text-pine-400 font-bold">FREE</span>
                </div>
              </div>

              {/* Total */}
              <div className="border-t border-pine-800/80 pt-5 flex items-center justify-between">
                <div>
                  <p className="font-bold text-base text-white">Estimated Total</p>
                  <p className="text-pine-400 text-xs">Includes all taxes &amp; resort fees</p>
                </div>
                <span className="font-serif text-3xl sm:text-4xl font-bold text-amber-gold">
                  €{grandTotal}
                </span>
              </div>
            </div>

            {/* Direct Booking Benefits */}
            <div className="bg-white dark:bg-forest-850 p-6 rounded-3xl border border-pine-200/60 dark:border-pine-800/40 space-y-3 shadow-card">
              <p className="font-serif font-bold text-pine-900 dark:text-sand-50 text-base">
                Why Guests Book Directly With Us:
              </p>
              {[
                "Save 15–18% vs Airbnb / Booking.com surcharge fees",
                "Complimentary bottle of local Serbian wine on arrival",
                "Direct WhatsApp host connection with Stefan & Milena",
                "Free date changes up to 7 days before check-in",
              ].map((benefit) => (
                <div key={benefit} className="flex gap-2.5 text-xs text-pine-700 dark:text-pine-300">
                  <Sparkles className="w-3.5 h-3.5 text-amber-accent shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Host Direct Contacts */}
            <div className="flex items-center justify-around p-4 rounded-2xl bg-white dark:bg-forest-850 border border-pine-200/60 dark:border-pine-800/40 text-xs shadow-subtle">
              <a
                href="tel:+381631234567"
                className="flex items-center gap-1.5 text-pine-700 dark:text-pine-300 hover:text-amber-accent transition-colors font-semibold"
              >
                <Phone className="w-3.5 h-3.5 text-amber-accent" />
                <span>+381 63 123 4567</span>
              </a>
              <span className="text-pine-300 dark:text-pine-700">|</span>
              <a
                href="mailto:reservations@aurapine-zlatibor.rs"
                className="flex items-center gap-1.5 text-pine-700 dark:text-pine-300 hover:text-amber-accent transition-colors font-semibold"
              >
                <Mail className="w-3.5 h-3.5 text-amber-accent" />
                <span>Email Hosts</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
