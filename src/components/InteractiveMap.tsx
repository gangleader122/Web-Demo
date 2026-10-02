"use client";

import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import {
  MapPin,
  Home,
  Compass,
  Star,
  Eye,
  Users,
  Maximize,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export interface Property {
  id: string;
  name: string;
  category: "apartment" | "attraction";
  type: string;
  coordinates: [number, number];
  price?: string;
  rating?: number;
  reviews?: number;
  guests?: number;
  size?: string;
  image: string;
  description: string;
  tags: string[];
}

export const ZLATIBOR_LOCATIONS: Property[] = [
  {
    id: "aura-villa",
    name: "Aura Pine Villa & Suite",
    category: "apartment",
    type: "Luxury Chalet",
    coordinates: [43.7345, 19.6942],
    price: "€160 / night",
    rating: 4.98,
    reviews: 42,
    guests: 6,
    size: "120 m²",
    image: "https://images.unsplash.com/photo-1542314831-c6a4d2720d20?auto=format&fit=crop&w=800&q=80",
    description: "Our flagship private chalet secluded in old pine trees. Panoramic forest views, authentic fireplace, and private spa terrace.",
    tags: ["Hot Tub", "Fireplace", "Private Forest"],
  },
  {
    id: "mountain-view",
    name: "Panorama Sky Penthouse",
    category: "apartment",
    type: "Penthouse Suite",
    coordinates: [43.728, 19.702],
    price: "€135 / night",
    rating: 4.95,
    reviews: 38,
    guests: 4,
    size: "85 m²",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    description: "Floor-to-ceiling glass corner suite with endless sunsets over the rolling peaks of Tornik and Cigota.",
    tags: ["Balcony", "Floor Heating", "High Speed Wifi"],
  },
  {
    id: "pine-haven",
    name: "Pine Haven Forest Cabin",
    category: "apartment",
    type: "Chalet Apartment",
    coordinates: [43.7215, 19.691],
    price: "€115 / night",
    rating: 4.92,
    reviews: 29,
    guests: 4,
    size: "65 m²",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=80",
    description: "Rustic elegance built with native pine logs and white stone. Direct access to quiet mountain walking paths.",
    tags: ["Pet Friendly", "Wood Stove", "BBQ Patio"],
  },
  {
    id: "gondola",
    name: "Gold Gondola Zlatibor",
    category: "attraction",
    type: "Landmark & Transport",
    coordinates: [43.7275, 19.6965],
    image: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=800&q=80",
    description: "The world's longest single-line panoramic gondola (9km), connecting Zlatibor center directly to Tornik peak.",
    tags: ["Must Visit", "Scenic View", "Open Daily"],
  },
  {
    id: "zlatibor-lake",
    name: "Lake Zlatibor & King's Square",
    category: "attraction",
    type: "Town Center & Promenades",
    coordinates: [43.7285, 19.6988],
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=80",
    description: "Vibrant lakeside promenades, artisan bakeries, traditional Serbian mountain restaurants, and evening light fountains.",
    tags: ["Dining", "Walks", "Shopping"],
  },
  {
    id: "tornik-resort",
    name: "Tornik Mountain & Ski Center",
    category: "attraction",
    type: "Ski & Adventure Area",
    coordinates: [43.6888, 19.645],
    image: "https://images.unsplash.com/photo-1551524559-8af4e6624178?auto=format&fit=crop&w=800&q=80",
    description: "Highest peak of Zlatibor (1,496m). Top-tier winter skiing with chairlifts, downhill mountain biking and hiking in summer.",
    tags: ["Ski Slopes", "1,496m Peak", "Biking Trails"],
  },
];

// Helper to center the map when a property is clicked
function MapController({ selectedLoc }: { selectedLoc: Property | null }) {
  const map = useMap();
  useEffect(() => {
    if (selectedLoc) {
      map.flyTo(selectedLoc.coordinates, 15, { duration: 1.5 });
    }
  }, [selectedLoc, map]);
  return null;
}

// Generate luxury SVG div icons
const createCustomIcon = (isApartment: boolean, isSelected: boolean) => {
  const bgFill = isApartment ? (isSelected ? "#c49a3c" : "#3d5a40") : "#2b3228";
  const borderCol = isSelected ? "#ffffff" : isApartment ? "#c49a3c" : "#7a9e68";
  const iconSvg = isApartment
    ? `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`
    : `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7a9e68" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>`;

  return L.divIcon({
    className: "custom-map-pin",
    html: `
      <div style="
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 38px;
        height: 38px;
        background: ${bgFill};
        border: 2px solid ${borderCol};
        border-radius: 50%;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.6);
        transition: transform 0.2s ease;
        cursor: pointer;
      ">
        ${iconSvg}
      </div>
    `,
    iconSize: [38, 38],
    iconAnchor: [19, 19],
  });
};

export default function InteractiveMap() {
  const [filter, setFilter] = useState<"all" | "apartment" | "attraction">("all");
  const [selectedLocation, setSelectedLocation] = useState<Property | null>(ZLATIBOR_LOCATIONS[0]);

  const filteredLocations = ZLATIBOR_LOCATIONS.filter(
    (loc) => filter === "all" || loc.category === filter
  );

  return (
    <div className="w-full rounded-2xl overflow-hidden border border-white/10 bg-[#131510] shadow-2xl">
      {/* Top Header & Filter Controls */}
      <div className="p-4 md:p-6 border-b border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-[#1a1e17]/80 backdrop-blur-md">
        <div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#c49a3c] font-semibold mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            Interactive Zlatibor Explorer
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-[#e8e2d8]">
            Apartments & Surrounding Peaks
          </h3>
          <p className="text-sm text-[#9e9a91]">
            Explore our secluded chalets and key mountain landmarks across Zlatibor, Serbia.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center p-1 rounded-lg bg-[#0d0f0c] border border-white/10 self-stretch md:self-auto">
          <button
            onClick={() => setFilter("all")}
            className={`flex-1 md:flex-none px-4 py-1.5 text-xs font-medium rounded-md transition-all ${
              filter === "all"
                ? "bg-[#3d5a40] text-white shadow-md"
                : "text-[#9e9a91] hover:text-[#e8e2d8]"
            }`}
          >
            All Points ({ZLATIBOR_LOCATIONS.length})
          </button>
          <button
            onClick={() => setFilter("apartment")}
            className={`flex-1 md:flex-none px-4 py-1.5 text-xs font-medium rounded-md transition-all flex items-center justify-center gap-1.5 ${
              filter === "apartment"
                ? "bg-[#3d5a40] text-white shadow-md"
                : "text-[#9e9a91] hover:text-[#e8e2d8]"
            }`}
          >
            <Home className="w-3 h-3" />
            Apartments
          </button>
          <button
            onClick={() => setFilter("attraction")}
            className={`flex-1 md:flex-none px-4 py-1.5 text-xs font-medium rounded-md transition-all flex items-center justify-center gap-1.5 ${
              filter === "attraction"
                ? "bg-[#3d5a40] text-white shadow-md"
                : "text-[#9e9a91] hover:text-[#e8e2d8]"
            }`}
          >
            <Compass className="w-3 h-3" />
            Attractions
          </button>
        </div>
      </div>

      {/* Main Grid: Interactive Map + Active Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[560px]">
        {/* Map Container */}
        <div className="lg:col-span-8 relative min-h-[400px] lg:min-h-full">
          {/* @ts-ignore */}
          <MapContainer
            center={[43.7297, 19.6997]}
            zoom={13}
            scrollWheelZoom={false}
            className="w-full h-full min-h-[450px]"
            style={{ background: "#131510" }}
          >
            {/* OpenStreetMap tiles — free, no API key required */}
            {/* @ts-ignore */}
            <TileLayer
              attribution='&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <MapController selectedLoc={selectedLocation} />

            {filteredLocations.map((loc) => {
              const isSelected = selectedLocation?.id === loc.id;
              return (
                /* @ts-ignore */
                <Marker
                  key={loc.id}
                  position={loc.coordinates}
                  icon={createCustomIcon(loc.category === "apartment", isSelected)}
                  eventHandlers={{
                    click: () => {
                      setSelectedLocation(loc);
                    },
                  }}
                >
                  {/* @ts-ignore */}
                  <Popup className="custom-leaflet-popup">
                    <div className="p-1 max-w-[220px]">
                      <div className="font-semibold text-sm text-[#0d0f0c]">{loc.name}</div>
                      <div className="text-xs text-[#5e5c56] mb-1">{loc.type}</div>
                      {loc.price && (
                        <div className="text-xs font-bold text-[#3d5a40] mb-2">{loc.price}</div>
                      )}
                      <p className="text-[11px] leading-tight text-[#212619] line-clamp-2">
                        {loc.description}
                      </p>
                    </div>
                  </Popup>
                </Marker>
              );
            })}
          </MapContainer>

          {/* Map Overlay Badge */}
          <div className="absolute bottom-4 left-4 z-[400] bg-[#0d0f0c]/90 backdrop-blur-md px-3 py-1.5 rounded-md border border-white/10 flex items-center gap-2 text-xs text-[#e8e2d8]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#3d5a40] inline-block animate-pulse" />
            Live Zlatibor Coordinates: 43.73° N, 19.70° E
          </div>
        </div>

        {/* Selected Location / Sidebar Details */}
        <div className="lg:col-span-4 p-5 md:p-6 bg-[#161a13] border-t lg:border-t-0 lg:border-l border-white/10 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold tracking-wider uppercase text-[#c49a3c]">
                {selectedLocation ? selectedLocation.type : "Explore Location"}
              </span>
              {selectedLocation?.rating && (
                <div className="flex items-center gap-1 text-xs font-bold text-[#e8e2d8] bg-[#0d0f0c] px-2 py-1 rounded border border-white/10">
                  <Star className="w-3.5 h-3.5 text-[#c49a3c] fill-[#c49a3c]" />
                  <span>{selectedLocation.rating}</span>
                  <span className="text-[#5e5c56]">({selectedLocation.reviews})</span>
                </div>
              )}
            </div>

            {/* Location Image */}
            {selectedLocation && (
              <div className="relative rounded-xl overflow-hidden mb-4 aspect-[16/9] border border-white/10 shadow-lg">
                <img
                  src={selectedLocation.image}
                  alt={selectedLocation.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                {selectedLocation.price && (
                  <div className="absolute bottom-3 left-3 bg-[#0d0f0c]/90 backdrop-blur-sm border border-white/15 px-3 py-1 rounded text-xs font-bold text-[#c49a3c]">
                    {selectedLocation.price}
                  </div>
                )}
              </div>
            )}

            {/* Title & Info */}
            <h4 className="text-xl font-bold text-[#e8e2d8] mb-2">
              {selectedLocation?.name || "Select a pin on the map"}
            </h4>

            <p className="text-sm text-[#9e9a91] leading-relaxed mb-4">
              {selectedLocation?.description}
            </p>

            {/* Room specs if apartment */}
            {selectedLocation?.category === "apartment" && (
              <div className="grid grid-cols-2 gap-2 mb-4 p-3 rounded-lg bg-[#0d0f0c]/60 border border-white/5">
                <div className="flex items-center gap-2 text-xs text-[#e8e2d8]">
                  <Users className="w-4 h-4 text-[#7a9e68]" />
                  <span>Up to {selectedLocation.guests} Guests</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#e8e2d8]">
                  <Maximize className="w-4 h-4 text-[#7a9e68]" />
                  <span>{selectedLocation.size} Space</span>
                </div>
              </div>
            )}

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {selectedLocation?.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-[#212619] text-[#7a9e68] border border-[#7a9e68]/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Quick List Switcher */}
          <div>
            <div className="text-xs uppercase tracking-wider text-[#5e5c56] font-semibold mb-2">
              Featured Properties
            </div>
            <div className="flex flex-col gap-1.5 max-h-[160px] overflow-y-auto pr-1">
              {ZLATIBOR_LOCATIONS.map((loc) => {
                const isActive = selectedLocation?.id === loc.id;
                return (
                  <button
                    key={loc.id}
                    onClick={() => setSelectedLocation(loc)}
                    className={`flex items-center justify-between p-2 rounded-lg text-left text-xs transition-all border ${
                      isActive
                        ? "bg-[#3d5a40]/30 border-[#c49a3c]/60 text-[#e8e2d8]"
                        : "bg-[#0d0f0c]/40 border-white/5 text-[#9e9a91] hover:text-[#e8e2d8] hover:bg-[#0d0f0c]"
                    }`}
                  >
                    <div className="flex items-center gap-2 truncate">
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          loc.category === "apartment" ? "bg-[#c49a3c]" : "bg-[#7a9e68]"
                        }`}
                      />
                      <span className="truncate font-medium">{loc.name}</span>
                    </div>
                    {loc.price && (
                      <span className="text-[11px] font-bold text-[#c49a3c] shrink-0">
                        {loc.price.split(" ")[0]}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Action button */}
            <a
              href="#book"
              className="mt-4 w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-[#c49a3c] to-[#d4ac52] text-[#0d0f0c] font-bold text-sm tracking-wide shadow-lg hover:opacity-95 transition-all"
            >
              Book Direct & Save 18%
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
