"use client";

import React from "react";

// Visual illustrations crafted for Aura Pine Suite Zlatibor
export const RoomIllustration = ({
  type,
  mode = "day",
  className = "",
}: {
  type: string;
  mode?: "day" | "night";
  className?: string;
}) => {
  const isNight = mode === "night";

  if (type === "living" || type === "living-hearth" || type === "living-fireplace") {
    return (
      <div className={`relative w-full h-full min-h-[300px] overflow-hidden rounded-2xl ${className}`}>
        <svg
          viewBox="0 0 800 500"
          className="w-full h-full object-cover select-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id={`sky-${type}-${mode}`} x1="0" y1="0" x2="0" y2="1">
              {isNight ? (
                <>
                  <stop offset="0%" stopColor="#0B132B" />
                  <stop offset="70%" stopColor="#1C2541" />
                  <stop offset="100%" stopColor="#3A506B" />
                </>
              ) : (
                <>
                  <stop offset="0%" stopColor="#90C2E7" />
                  <stop offset="60%" stopColor="#E0EDF8" />
                  <stop offset="100%" stopColor="#F9E2AF" />
                </>
              )}
            </linearGradient>

            <linearGradient id={`wall-${type}-${mode}`} x1="0" y1="0" x2="1" y2="1">
              {isNight ? (
                <>
                  <stop offset="0%" stopColor="#1E2824" />
                  <stop offset="100%" stopColor="#121A16" />
                </>
              ) : (
                <>
                  <stop offset="0%" stopColor="#F4ECE0" />
                  <stop offset="100%" stopColor="#E8DCB8" />
                </>
              )}
            </linearGradient>

            <linearGradient id="woodFloor" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#7E4A28" />
              <stop offset="100%" stopColor="#4A2812" />
            </linearGradient>

            <linearGradient id="fireGlow" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0%" stopColor="#FF4500" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#FFA500" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#FFD700" stopOpacity="0" />
            </linearGradient>

            <radialGradient id="hearthLight" cx="0.5" cy="0.5" r="0.5">
              <stop offset="0%" stopColor="#FF8C00" stopOpacity={isNight ? "0.6" : "0.3"} />
              <stop offset="100%" stopColor="#FF8C00" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Background Wall */}
          <rect width="800" height="500" fill={`url(#wall-${type}-${mode})`} />

          {/* Forest Window Frame (Panoramic View) */}
          <rect x="360" y="40" width="390" height="300" rx="8" fill={`url(#sky-${type}-${mode})`} />
          {/* Mountain Silhouettes */}
          <path
            d="M360 260 L440 180 L520 240 L620 150 L750 280 L750 340 L360 340 Z"
            fill={isNight ? "#0A1F18" : "#244435"}
            opacity="0.85"
          />
          <path
            d="M420 280 L510 200 L590 270 L700 170 L750 230 L750 340 L420 340 Z"
            fill={isNight ? "#06120E" : "#1B362A"}
          />
          {/* Pine Trees outside */}
          <path
            d="M380 340 L395 250 L410 340 M420 340 L435 270 L450 340 M460 340 L475 240 L490 340 M680 340 L695 230 L710 340 M715 340 L730 260 L745 340"
            stroke={isNight ? "#05110B" : "#12261E"}
            strokeWidth="12"
            strokeLinecap="round"
          />

          {/* Window Glass Grid */}
          <rect
            x="360"
            y="40"
            width="390"
            height="300"
            rx="8"
            fill="none"
            stroke="#1F392D"
            strokeWidth="8"
          />
          <line x1="555" y1="40" x2="555" y2="340" stroke="#1F392D" strokeWidth="4" />
          <line x1="360" y1="190" x2="750" y2="190" stroke="#1F392D" strokeWidth="4" />

          {/* Oak Wood Acoustic Slats on Left Wall */}
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <rect
              key={i}
              x={40 + i * 28}
              y="40"
              width="14"
              height="300"
              rx="2"
              fill={isNight ? "#5A3822" : "#B88358"}
              opacity="0.9"
            />
          ))}

          {/* Wood Floor */}
          <polygon points="0,340 800,340 800,500 0,500" fill="url(#woodFloor)" />
          {/* Floor Planks lines */}
          <line x1="0" y1="380" x2="800" y2="380" stroke="#3D1F0B" strokeWidth="2" opacity="0.4" />
          <line x1="0" y1="430" x2="800" y2="430" stroke="#3D1F0B" strokeWidth="2" opacity="0.4" />

          {/* Cozy Woven Rug */}
          <ellipse cx="400" cy="420" rx="260" ry="60" fill={isNight ? "#2E3A33" : "#E2D7C3"} />
          <ellipse
            cx="400"
            cy="420"
            rx="245"
            ry="50"
            fill="none"
            stroke={isNight ? "#485B51" : "#C4B296"}
            strokeWidth="4"
            strokeDasharray="8 6"
          />

          {/* Fireplace Centerpiece */}
          <g transform="translate(100, 180)">
            {/* Hearth base */}
            <rect x="-20" y="140" width="160" height="25" rx="4" fill="#2B2B2B" />
            <rect x="0" y="0" width="120" height="145" rx="6" fill="#1C1C1C" />
            <rect x="15" y="30" width="90" height="95" rx="4" fill="#0A0A0A" />

            {/* Fireplace Glass Glow */}
            <circle cx="60" cy="80" r="140" fill="url(#hearthLight)" />

            {/* Fireplace Flames */}
            <path
              d="M35 115 Q45 80 52 95 Q60 65 68 95 Q75 75 85 115 Z"
              fill="url(#fireGlow)"
            >
              <animate
                attributeName="d"
                values="M35 115 Q45 80 52 95 Q60 65 68 95 Q75 75 85 115 Z;
                        M35 115 Q48 72 55 90 Q62 60 70 90 Q78 80 85 115 Z;
                        M35 115 Q42 85 50 100 Q58 70 66 100 Q72 70 85 115 Z;
                        M35 115 Q45 80 52 95 Q60 65 68 95 Q75 75 85 115 Z"
                dur="1.8s"
                repeatCount="indefinite"
              />
            </path>
            {/* Beech Logs */}
            <ellipse cx="60" cy="116" rx="35" ry="8" fill="#5C381E" />
            <ellipse cx="48" cy="113" rx="20" ry="6" fill="#8B5A2B" />
          </g>

          {/* BouclÃ© Lounge Sofa */}
          <g transform="translate(360, 310)">
            <path
              d="M0 40 Q20 20 60 20 L280 20 Q320 20 340 40 L330 90 Q310 100 270 100 L70 100 Q30 100 10 90 Z"
              fill={isNight ? "#2A3831" : "#EFECE6"}
            />
            {/* Cushion Cushions */}
            <rect x="40" y="35" width="115" height="55" rx="10" fill={isNight ? "#35483F" : "#FAF8F5"} />
            <rect x="165" y="35" width="115" height="55" rx="10" fill={isNight ? "#35483F" : "#FAF8F5"} />
            {/* Terracotta Throw Pillow */}
            <rect
              x="50"
              y="40"
              width="45"
              height="40"
              rx="8"
              fill="#D97736"
              transform="rotate(-10 50 40)"
            />
            <rect
              x="235"
              y="42"
              width="45"
              height="38"
              rx="8"
              fill={isNight ? "#498466" : "#6DA386"}
              transform="rotate(8 235 42)"
            />
          </g>

          {/* Coffee Table with Ceramic Cup */}
          <g transform="translate(450, 420)">
            <ellipse cx="60" cy="20" rx="70" ry="22" fill={isNight ? "#1F1712" : "#3D2415"} />
            {/* Cup & Coffee */}
            <ellipse cx="50" cy="15" rx="8" ry="4" fill="#E8DCB8" />
            <ellipse cx="50" cy="14" rx="6" ry="2.5" fill="#4A2812" />
          </g>
        </svg>
      </div>
    );
  }

  if (type === "bedroom" || type === "bedroom-master" || type === "bedroom-king") {
    return (
      <div className={`relative w-full h-full min-h-[300px] overflow-hidden rounded-2xl ${className}`}>
        <svg
          viewBox="0 0 800 500"
          className="w-full h-full object-cover select-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id={`bedSky-${mode}`} x1="0" y1="0" x2="0" y2="1">
              {isNight ? (
                <>
                  <stop offset="0%" stopColor="#0B132B" />
                  <stop offset="100%" stopColor="#1C2541" />
                </>
              ) : (
                <>
                  <stop offset="0%" stopColor="#FFDFBA" />
                  <stop offset="40%" stopColor="#FFFFD1" />
                  <stop offset="100%" stopColor="#BFFCC6" />
                </>
              )}
            </linearGradient>

            <linearGradient id={`bedWall-${mode}`} x1="0" y1="0" x2="1" y2="0">
              {isNight ? (
                <>
                  <stop offset="0%" stopColor="#121D18" />
                  <stop offset="100%" stopColor="#1B2B23" />
                </>
              ) : (
                <>
                  <stop offset="0%" stopColor="#FAF7F2" />
                  <stop offset="100%" stopColor="#EFE5D5" />
                </>
              )}
            </linearGradient>
          </defs>

          {/* Wall */}
          <rect width="800" height="500" fill={`url(#bedWall-${mode})`} />

          {/* Sunrise Mountain Window */}
          <rect x="500" y="50" width="240" height="280" rx="8" fill={`url(#bedSky-${mode})`} />
          <path
            d="M500 240 L560 180 L630 230 L700 160 L740 210 L740 330 L500 330 Z"
            fill={isNight ? "#081611" : "#2F5844"}
          />
          <rect x="500" y="50" width="240" height="280" rx="8" fill="none" stroke="#244435" strokeWidth="6" />

          {/* Natural Wood Headboard Slats */}
          <rect x="120" y="110" width="380" height="180" rx="8" fill={isNight ? "#3D2415" : "#8B5A2B"} />
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <line
              key={i}
              x1={140 + i * 45}
              y1="110"
              x2={140 + i * 45}
              y2="290"
              stroke={isNight ? "#29180E" : "#5C381E"}
              strokeWidth="4"
            />
          ))}

          {/* Oak Bed Base & Mattress */}
          <g transform="translate(140, 240)">
            {/* Mattress */}
            <rect x="0" y="0" width="340" height="190" rx="14" fill={isNight ? "#D6DEE3" : "#FFFFFF"} />
            {/* Duvet / Coverlet in Warm Slate Pine */}
            <path
              d="M0 60 Q170 50 340 60 L340 190 L0 190 Z"
              fill={isNight ? "#1F392D" : "#366B51"}
            />
            {/* Egyptian Cotton Fold Back */}
            <path d="M0 60 Q170 50 340 60 L340 85 Q170 75 0 85 Z" fill="#FFFFFF" />

            {/* Pillows */}
            <rect x="25" y="-20" width="125" height="60" rx="10" fill="#FFFFFF" stroke="#E2D7C3" strokeWidth="2" />
            <rect x="190" y="-20" width="125" height="60" rx="10" fill="#FFFFFF" stroke="#E2D7C3" strokeWidth="2" />

            {/* Accent Ochre Throw Pillows */}
            <rect x="50" y="0" width="75" height="40" rx="6" fill="#D97736" />
            <rect x="215" y="0" width="75" height="40" rx="6" fill="#D97736" />
          </g>

          {/* Nightstands with Reading Lamps */}
          <g transform="translate(60, 290)">
            <rect x="0" y="0" width="65" height="90" rx="6" fill={isNight ? "#2B1B12" : "#603B2F"} />
            <circle cx="32" cy="-20" r="14" fill={isNight ? "#FFD59E" : "#FFF8EB"} />
            <line x1="32" y1="-6" x2="32" y2="0" stroke="#B88358" strokeWidth="4" />
          </g>

          <g transform="translate(495, 290)">
            <rect x="0" y="0" width="65" height="90" rx="6" fill={isNight ? "#2B1B12" : "#603B2F"} />
            <circle cx="32" cy="-20" r="14" fill={isNight ? "#FFD59E" : "#FFF8EB"} />
            <line x1="32" y1="-6" x2="32" y2="0" stroke="#B88358" strokeWidth="4" />
          </g>
        </svg>
      </div>
    );
  }

  if (type === "kitchen" || type === "kitchen-bar") {
    return (
      <div className={`relative w-full h-full min-h-[300px] overflow-hidden rounded-2xl ${className}`}>
        <svg
          viewBox="0 0 800 500"
          className="w-full h-full object-cover select-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="800" height="500" fill={isNight ? "#121A15" : "#F4ECE0"} />

          {/* Upper Matte-Black Cabinets */}
          <rect x="80" y="40" width="640" height="130" rx="4" fill="#1C2420" />
          <line x1="240" y1="40" x2="240" y2="170" stroke="#2D3833" strokeWidth="2" />
          <line x1="400" y1="40" x2="400" y2="170" stroke="#2D3833" strokeWidth="2" />
          <line x1="560" y1="40" x2="560" y2="170" stroke="#2D3833" strokeWidth="2" />

          {/* Under-cabinet Warm LED strip */}
          <line x1="80" y1="170" x2="720" y2="170" stroke="#FFE4B5" strokeWidth="5" opacity="0.9" />

          {/* Travertine Backsplash */}
          <rect x="80" y="172" width="640" height="138" fill={isNight ? "#2F3B35" : "#E8DEC8"} />

          {/* Countertop Island & Base Units */}
          <rect x="80" y="310" width="640" height="150" fill="#18201C" />
          <rect x="70" y="300" width="660" height="18" rx="3" fill="#D9CDBC" />

          {/* Nespresso Coffee Station */}
          <g transform="translate(130, 230)">
            <rect x="0" y="10" width="45" height="60" rx="4" fill="#8E573E" />
            <rect x="12" y="25" width="20" height="30" rx="2" fill="#2B2B2B" />
            <ellipse cx="22" cy="62" rx="7" ry="3" fill="#FFFFFF" />
          </g>

          {/* Wine Rack & Glasses */}
          <g transform="translate(560, 210)">
            <rect x="0" y="0" width="100" height="85" rx="4" fill="#3A281E" />
            <circle cx="25" cy="25" r="12" fill="#722F37" />
            <circle cx="75" cy="25" r="12" fill="#D4AF37" />
            <circle cx="50" cy="60" r="12" fill="#722F37" />
          </g>

          {/* Bar Stools */}
          <g transform="translate(250, 380)">
            <ellipse cx="40" cy="0" rx="25" ry="8" fill="#8B5A2B" />
            <line x1="25" y1="0" x2="20" y2="100" stroke="#1A1A1A" strokeWidth="5" />
            <line x1="55" y1="0" x2="60" y2="100" stroke="#1A1A1A" strokeWidth="5" />
          </g>
          <g transform="translate(420, 380)">
            <ellipse cx="40" cy="0" rx="25" ry="8" fill="#8B5A2B" />
            <line x1="25" y1="0" x2="20" y2="100" stroke="#1A1A1A" strokeWidth="5" />
            <line x1="55" y1="0" x2="60" y2="100" stroke="#1A1A1A" strokeWidth="5" />
          </g>
        </svg>
      </div>
    );
  }

  if (type === "spa" || type === "spa-bathroom" || type === "spa-shower") {
    return (
      <div className={`relative w-full h-full min-h-[300px] overflow-hidden rounded-2xl ${className}`}>
        <svg
          viewBox="0 0 800 500"
          className="w-full h-full object-cover select-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Brazilian Travertine Tiling */}
          <rect width="800" height="500" fill={isNight ? "#1C2420" : "#EBE3D3"} />

          {/* Glass Rain Shower Enclosure on Right */}
          <rect x="420" y="30" width="340" height="440" rx="4" fill="rgba(255,255,255,0.15)" stroke="#6DA386" strokeWidth="3" />

          {/* Overhead Rain Shower Head */}
          <rect x="570" y="30" width="40" height="15" rx="3" fill="#B88358" />
          <ellipse cx="590" cy="45" rx="35" ry="8" fill="#B88358" />

          {/* Water Droplets Flow Animation */}
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <line
              key={i}
              x1={565 + i * 7}
              y1="55"
              x2={565 + i * 7}
              y2="400"
              stroke="#A8DADC"
              strokeWidth="2"
              strokeDasharray="12 18"
              opacity="0.7"
            />
          ))}

          {/* Floating Wood Vanity Mirror */}
          <g transform="translate(100, 70)">
            {/* Backlit Glow */}
            <ellipse cx="120" cy="110" rx="105" ry="95" fill="#FFE8C2" opacity={isNight ? "0.6" : "0.3"} />
            <circle cx="120" cy="110" r="85" fill={isNight ? "#24332C" : "#FAF8F5"} stroke="#B88358" strokeWidth="5" />

            {/* Modern Floating Oak Vanity */}
            <rect x="0" y="240" width="240" height="70" rx="6" fill={isNight ? "#3D2415" : "#8B5A2B"} />
            <rect x="40" y="225" width="160" height="20" rx="10" fill="#FFFFFF" stroke="#D5C5AC" strokeWidth="2" />
            <rect x="110" y="195" width="20" height="30" rx="3" fill="#B88358" />
          </g>

          {/* Fluffy Bathrobes Hanging */}
          <g transform="translate(350, 90)">
            <path d="M20 0 L40 30 L30 160 L10 160 L0 30 Z" fill="#FAF8F5" />
            <path d="M25 5 L5 160" stroke="#D9CDBC" strokeWidth="2" />
          </g>
        </svg>
      </div>
    );
  }

  // Default / Terrace & Scenic View
  return (
    <div className={`relative w-full h-full min-h-[300px] overflow-hidden rounded-2xl ${className}`}>
      <svg
        viewBox="0 0 800 500"
        className="w-full h-full object-cover select-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={`terraceSky-${mode}`} x1="0" y1="0" x2="0" y2="1">
            {isNight ? (
              <>
                <stop offset="0%" stopColor="#0B132B" />
                <stop offset="60%" stopColor="#1C2541" />
                <stop offset="100%" stopColor="#4A3B32" />
              </>
            ) : (
              <>
                <stop offset="0%" stopColor="#E29578" />
                <stop offset="40%" stopColor="#FFDDD2" />
                <stop offset="80%" stopColor="#83C5BE" />
                <stop offset="100%" stopColor="#006D77" />
              </>
            )}
          </linearGradient>
        </defs>

        {/* Sunset Mountain Sky */}
        <rect width="800" height="500" fill={`url(#terraceSky-${mode})`} />

        {/* Golden Sun / Moon */}
        {isNight ? (
          <circle cx="650" cy="110" r="30" fill="#FFF275" opacity="0.9" />
        ) : (
          <circle cx="600" cy="180" r="55" fill="#FFE49E" />
        )}

        {/* Distant Mountain Layers */}
        <path
          d="M0 260 L160 170 L340 240 L520 150 L680 230 L800 160 L800 500 L0 500 Z"
          fill={isNight ? "#0C1F18" : "#244435"}
          opacity="0.8"
        />
        <path
          d="M0 310 L220 220 L400 300 L610 200 L800 290 L800 500 L0 500 Z"
          fill={isNight ? "#071410" : "#173125"}
        />

        {/* Pine Forest Canopy */}
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((i) => (
          <polygon
            key={i}
            points={`${i * 55},360 ${i * 55 + 25},270 ${i * 55 + 50},360`}
            fill={isNight ? "#040D0A" : "#0E241B"}
          />
        ))}

        {/* Cedar Deck Floor & Railing */}
        <polygon points="0,380 800,380 800,500 0,500" fill="#6B3F23" />
        <rect x="0" y="375" width="800" height="10" fill="#9E6138" />

        {/* Deck Teak Loungers */}
        <g transform="translate(180, 390)">
          <polygon points="0,30 40,0 120,0 140,40 20,40" fill="#C9965A" />
          <rect x="40" y="-10" width="25" height="15" rx="3" fill="#FAF8F5" />
        </g>
        <g transform="translate(420, 390)">
          <polygon points="0,30 40,0 120,0 140,40 20,40" fill="#C9965A" />
          <rect x="40" y="-10" width="25" height="15" rx="3" fill="#FAF8F5" />
        </g>

        {/* Hanging Infrared Deck Heater */}
        <g transform="translate(370, 0)">
          <line x1="30" y1="0" x2="30" y2="40" stroke="#1A1A1A" strokeWidth="4" />
          <rect x="0" y="40" width="60" height="14" rx="4" fill="#2B2B2B" />
          <rect x="10" y="46" width="40" height="4" rx="2" fill="#FF4500" />
        </g>
      </svg>
    </div>
  );
};


