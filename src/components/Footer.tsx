import React from "react";
import { Mountain, Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { APARTMENT_INFO } from "@/data/apartmentData";

export function Footer() {
  return (
    <footer className="bg-forest-950 text-white/80 border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-pine-600 flex items-center justify-center text-white shadow-glow">
                <Mountain className="w-5 h-5" />
              </div>
              <span className="font-serif text-xl font-bold text-white tracking-wide">
                Aura Pine Suite
              </span>
            </div>
            <p className="text-sm text-white/60 max-w-sm leading-relaxed">
              A private {APARTMENT_INFO.areaSqMeters} m&sup2; luxury alpine residence in Zlatibor, Serbia. Featuring a wood-burning fireplace, heated terrace, and 1000Mbps fiber internet.
            </p>
            <div className="flex items-center gap-4 text-xs text-white/50">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-amber-accent" />
                {APARTMENT_INFO.location.split(",")[0]}
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-serif font-semibold text-white text-sm mb-4">Explore</p>
            <ul className="space-y-2.5 text-xs text-white/60">
              <li>
                <Link href="#apartment" className="hover:text-white hover:translate-x-1 inline-block transition-transform">
                  The Apartment
                </Link>
              </li>
              <li>
                <Link href="#amenities" className="hover:text-white hover:translate-x-1 inline-block transition-transform">
                  Amenities
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="hover:text-white hover:translate-x-1 inline-block transition-transform">
                  Photo Gallery
                </Link>
              </li>
              <li>
                <Link href="#experiences" className="hover:text-white hover:translate-x-1 inline-block transition-transform">
                  Seasons &amp; Activities
                </Link>
              </li>
              <li>
                <Link href="#location" className="hover:text-white hover:translate-x-1 inline-block transition-transform">
                  Location &amp; Map
                </Link>
              </li>
              <li>
                <Link href="#reviews" className="hover:text-white hover:translate-x-1 inline-block transition-transform">
                  Guest Reviews
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div>
            <p className="font-serif font-semibold text-white text-sm mb-4">Direct Contact</p>
            <ul className="space-y-3 text-xs text-white/60">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-accent flex-shrink-0" />
                <a href={`tel:${APARTMENT_INFO.contact.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                  {APARTMENT_INFO.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-accent flex-shrink-0" />
                <a href={`mailto:${APARTMENT_INFO.contact.email}`} className="hover:text-white transition-colors">
                  {APARTMENT_INFO.contact.email}
                </a>
              </li>
              <li className="pt-2">
                <span className="inline-block px-3 py-1 rounded-full bg-amber-accent/10 border border-amber-accent/20 text-amber-accent text-[11px] font-bold tracking-wide uppercase">
                  &starf; Superhost
                </span>
                <p className="text-white/50 text-[10px] mt-1.5 ml-1">Hosted by {APARTMENT_INFO.contact.hostNames}</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} Aura Pine Suite Zlatibor. All rights reserved.</p>
          <p>Crafted for comfortable mountain living in Serbia</p>
        </div>
      </div>
    </footer>
  );
}
