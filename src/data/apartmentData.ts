import {
  ApartmentSpace,
  AmenityCategory,
  GalleryPhoto,
  SeasonalGuideItem,
  Landmark,
  Review,
  FAQItem,
  AddOnService,
} from "@/types";

export const APARTMENT_INFO = {
  name: "Aura Pine Villa & Suite",
  subname: "Chalet Residence No. 4",
  location: "Donji Kablar / Čigota Foothills, Zlatibor, Serbia",
  gps: { lat: 43.7289, lng: 19.6974 },
  areaSqMeters: 72,
  capacity: {
    idealGuests: "2–4 Guests",
    maxGuests: 4,
    bedrooms: 1,
    beds: "1 King Plush Bed + 1 Premium Italian Sofa Bed",
    bathrooms: 1.5,
  },
  ratings: {
    overall: 4.98,
    totalReviews: 146,
    cleanliness: 5.0,
    accuracy: 5.0,
    communication: 5.0,
    location: 4.9,
    checkIn: 5.0,
    value: 4.9,
  },
  baseRates: {
    standardNightly: 75,
    winterPeakNightly: 110,
    summerPeakNightly: 95,
    currencySymbol: "€",
    weeklyDiscountPercent: 10,
    monthlyDiscountPercent: 25,
  },
  contact: {
    phone: "+381 63 123 4567",
    whatsapp: "+381 63 123 4567",
    email: "reservations@aurapine-zlatibor.rs",
    hostNames: "Milena & Stefan",
    address: "Donji Kablar bb, 31315 Zlatibor, Zlatibor District, Serbia",
  },
};

export const SPACES_DATA: ApartmentSpace[] = [
  {
    id: "living",
    name: "Panoramic Living Hearth",
    tagline: "Fireplace lounge with floor-to-ceiling forest vistas",
    description:
      "A warm Scandinavian-Alpine living room centered around a natural beechwood-burning glass fireplace. Featuring custom textured bouclé seating, natural pine acoustic slatted walling, 65\" 4K OLED Smart TV with Netflix, and an ultra-quiet acoustic atmosphere.",
    size: "34 m²",
    highlights: [
      "Custom wood-burning enclosed glass fireplace",
      "Floor-to-ceiling glass doors opening onto the terrace",
      "Ergonomic workspace desk with 1000Mbps fiber Wi-Fi",
      "Sonos stereo sound system & 65\" 4K OLED TV",
    ],
    features: [
      { icon: "Flame", label: "Beechwood Fireplace" },
      { icon: "Tv", label: "65\" 4K OLED & Sonos" },
      { icon: "Wifi", label: "1000 Mbps Fiber" },
      { icon: "Layers", label: "Italian Convertible Bed" },
    ],
    image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&q=80",
    dayImage: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&q=80",
    nightImage: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&q=80",
  },
  {
    id: "bedroom",
    name: "Master Pine Bedroom",
    tagline: "Orthopedic king sanctuary with morning mountain light",
    description:
      "Designed for restorative alpine sleep. Anchored by a solid Serbian oak bed frame, 7-zone ergonomic natural latex mattress, 400-thread-count Egyptian cotton linens, sound-isolated oak doors, and blackout thermal wool curtains.",
    size: "18 m²",
    highlights: [
      "180x200cm King Bed with ergonomic dual-firmness mattress",
      "Hypoallergenic goose down & memory foam pillow menu",
      "Direct sunrise balcony access",
      "Integrated ambient warm dimming reading lights",
    ],
    features: [
      { icon: "Moon", label: "Blackout Wool Drapes" },
      { icon: "Feather", label: "Pillow Selection Menu" },
      { icon: "Sun", label: "East-facing Sunrise View" },
      { icon: "Sliders", label: "Individual Climate Control" },
    ],
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
    dayImage: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
    nightImage: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80",
  },
  {
    id: "kitchen",
    name: "Chef's Kitchen & Alpine Bar",
    tagline: "Complete gourmet cooking with local wine and espresso cellar",
    description:
      "A fully equipped custom matte-black & travertine kitchen tailored for mountain feasts. Features an induction cooktop, convection oven, quiet Bosch dishwasher, Nespresso espresso bar, and a curated rack of local Serbian red and white wines.",
    size: "12 m²",
    highlights: [
      "Nespresso Virtuo bar + pour-over & French press",
      "Bosch silent dishwasher, oven, & induction cooktop",
      "Traditional raclette grill & cast-iron cookware",
      "Handmade ceramic dinnerware from Zlakusa pottery village",
    ],
    features: [
      { icon: "Coffee", label: "Espresso & Coffee Bar" },
      { icon: "Wine", label: "Serbian Wine Selection" },
      { icon: "Sparkles", label: "Zlakusa Handcrafted Ceramics" },
      { icon: "Utensils", label: "Full Chef Knife & Pan Kit" },
    ],
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    dayImage: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    nightImage: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&q=80",
  },
  {
    id: "spa",
    name: "Nordic Spa Bathroom",
    tagline: "Travertine rain shower with heated stone floors and Tara organics",
    description:
      "An alpine wellness cocoon with heated Brazilian travertine floors, a frameless glass Italian rainfall shower, backlit defogging LED mirrors, fluffy 700 GSM Turkish cotton towels, and organic lavender & pine bath amenities sourced from Tara Mountain.",
    size: "8 m²",
    highlights: [
      "Thermostatic Hansgrohe overhead rainfall shower",
      "Floor heating with dedicated smart digital thermostat",
      "Plush waffle bathrobes & memory foam slippers",
      "High-power Dyson Supersonic styling hair dryer",
    ],
    features: [
      { icon: "Droplets", label: "Rainfall Shower & Steam" },
      { icon: "Thermometer", label: "Heated Travertine Floor" },
      { icon: "HeartHandshake", label: "Tara Botanical Amenities" },
      { icon: "Wind", label: "Dyson Hair Care Station" },
    ],
    image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&q=80",
    dayImage: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&q=80",
    nightImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
  },
  {
    id: "terrace",
    name: "Heated Sunset Terrace",
    tagline: "14m² private cedar deck over pine canopy and valley sunsets",
    description:
      "An open-air living space facing west toward Tornik and Čigota. Equipped with infrared overhead patio warming lamps, comfortable teak lounge chairs, wool blankets, and an uninterrupted panorama of pure Zlatibor pine woodland.",
    size: "14 m²",
    highlights: [
      "Unobstructed golden-hour sunset orientation",
      "Infrared patio heaters for brisk autumn & winter evenings",
      "Teak dining table for outdoor morning espresso & breakfast",
      "Private stargazing telescope for crisp alpine skies",
    ],
    features: [
      { icon: "Sunset", label: "West-Facing Golden Hour" },
      { icon: "Zap", label: "Infrared Deck Heaters" },
      { icon: "Telescope", label: "Stargazing Telescope" },
      { icon: "Shield", label: "Total Forest Privacy" },
    ],
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80",
    dayImage: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80",
    nightImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
  },
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: "p1",
    category: "living",
    title: "The Fireplace Hearth",
    subtitle: "Beechwood flames meeting floor-to-ceiling forest views",
    aspect: "landscape",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1200&q=80",
  },
  {
    id: "p2",
    category: "terrace",
    title: "Panoramic Sunset Deck",
    subtitle: "14m² west-facing cedar terrace overlooking Čigota",
    aspect: "wide",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&q=80",
  },
  {
    id: "p3",
    category: "bedroom",
    title: "Master Oak King Bed",
    subtitle: "Custom natural wood joinery and 400TC Egyptian cotton",
    aspect: "landscape",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=80",
  },
  {
    id: "p4",
    category: "spa",
    title: "Italian Rain Shower",
    subtitle: "Brazilian travertine with ambient soft glow lighting",
    aspect: "portrait",
    image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=1200&q=80",
  },
  {
    id: "p5",
    category: "kitchen",
    title: "Gourmet Espresso Bar & Kitchen",
    subtitle: "Matte black finishes, Nespresso, and local wine cellar",
    aspect: "landscape",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80",
  },
  {
    id: "p6",
    category: "surroundings",
    title: "Old Pine Forest Trail",
    subtitle: "Step out directly into pristine scent of pine trees",
    aspect: "landscape",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80",
  },
];

export const SEASONAL_EXPERIENCES: SeasonalGuideItem[] = [
  {
    season: "winter",
    title: "Winter Wonderland & Ski Season",
    months: "December – March",
    tagline: "Crisp snowy pine forests, Tornik ski pistes, and evening fires",
    temperatureAvg: "-2°C to 4°C",
    topTip: "Ride the Gold Gondola at 9:00 AM on fresh powder days to skip lift lines at Tornik Peak.",
    highlights: [
      {
        title: "Tornik Ski Resort",
        description: "3 major chairlifts, 5 ski trails with full artificial snowmaking & night skiing.",
        distanceOrTime: "12 min drive / Free Ski Shuttle",
        icon: "Snowflake",
      },
      {
        title: "Gold Gondola Zlatibor",
        description: "The world's longest panoramic cable car (9km) crossing Ribnica Lake.",
        distanceOrTime: "3 min drive / 12 min walk",
        icon: "CableCar",
      },
      {
        title: "Winter Spas & Pools",
        description: "Heated indoor mineral thermal pools and saunas just down the road.",
        distanceOrTime: "5 min walk",
        icon: "Waves",
      },
    ],
  },
  {
    season: "spring-summer",
    title: "Alpine Summer & Lake Escapes",
    months: "April – September",
    tagline: "Refreshing 24°C mountain air, wild berry foraging, and lake waters",
    temperatureAvg: "18°C to 26°C",
    topTip: "Enjoy breakfast on your private terrace while the morning pine mist clears over the valley.",
    highlights: [
      {
        title: "Zlatibor Lake & Pine Promenade",
        description: "Paddle boating, fountain shows, and artisanal cafés around the central lake.",
        distanceOrTime: "5 min walk (450m)",
        icon: "Ship",
      },
      {
        title: "Stopića Cave & Gostilje Waterfall",
        description: "Breathtaking limestone travertine pools and a roaring 20m mountain cascade.",
        distanceOrTime: "20 min scenic drive",
        icon: "Compass",
      },
      {
        title: "Čigota Mountain Hiking Trail",
        description: "Marked panoramic trail starting directly behind the apartment building.",
        distanceOrTime: "Direct trailhead at doorstep",
        icon: "Footprints",
      },
    ],
  },
  {
    season: "autumn",
    title: "Golden Autumn & Culinary Traditions",
    months: "October – November",
    tagline: "Vibrant golden foliage, smoked delicacies, and crisp stargazing",
    temperatureAvg: "8°C to 16°C",
    topTip: "Visit Mačkat village for Serbia's most renowned beechwood smoked prosciutto and lamb roast.",
    highlights: [
      {
        title: "Mačkat Prosciutto & Smokehouse Trail",
        description: "Century-old family smokehouses drying pršuta in the unique mountain wind.",
        distanceOrTime: "14 min drive",
        icon: "Beef",
      },
      {
        title: "Šargan Eight Scenic Heritage Railway",
        description: "Historic steam train winding through the fiery golden forests of Mokra Gora.",
        distanceOrTime: "30 min drive",
        icon: "Train",
      },
      {
        title: "Autumn Stargazing",
        description: "Zero light pollution from the terrace with crystal clear mountain night skies.",
        distanceOrTime: "Private Terrace",
        icon: "Sparkles",
      },
    ],
  },
];

export const GUEST_REVIEWS: Review[] = [
  {
    id: "r1",
    author: "Nemanja & Jelena R.",
    location: "Belgrade, Serbia",
    avatarText: "NJ",
    stayDate: "February 2026",
    tripType: "Couple Retreat",
    rating: 5,
    headline: "The most serene and luxurious stay we've had in Zlatibor",
    comment:
      "We visit Zlatibor every winter, and Aura Pine Suite was in a different league. The wood-burning fireplace was already lit when we arrived. Total silence at night, yet only a quick stroll down to the lake. The heated floors and Nespresso bar made mornings pure bliss.",
    verifiedDirectOrOTA: "Verified Direct Guest",
  },
  {
    id: "r2",
    author: "Dr. Alexander Müller",
    location: "Munich, Germany",
    avatarText: "AM",
    stayDate: "January 2026",
    tripType: "Ski Trip",
    rating: 5,
    headline: "Flawless ski base with high-end European standards",
    comment:
      "The ski boot warmers in the private garage locker were a game changer. The fiber Wi-Fi is legitimately 1000Mbps—I took three video meetings with zero latency. The bed mattress is extremely comfortable. Milena was the most helpful host!",
    verifiedDirectOrOTA: "Verified Airbnb Superstay",
  },
  {
    id: "r3",
    author: "Milica & Dejan P.",
    location: "Novi Sad, Serbia",
    avatarText: "MD",
    stayDate: "August 2025",
    tripType: "Family Vacation",
    rating: 5,
    headline: "Unbeatable sunset views from the private terrace",
    comment:
      "Having morning coffee on the cedar terrace watching the fog roll off the pine ridges is something we'll never forget. The sofa bed was surprisingly luxurious and firm for our two kids. We will be booking directly again for autumn.",
    verifiedDirectOrOTA: "Verified Direct Guest",
  },
];

export const AMENITIES_DATA: AmenityCategory[] = [
  {
    id: "comfort",
    name: "Alpine Comfort & Warmth",
    iconName: "Flame",
    items: [
      { name: "Wood-burning glass hearth fireplace", description: "Complimentary beech firewood stacked and ready", featured: true },
      { name: "Underfloor hydronic radiant heating", description: "Even, dry, silent warmth in all rooms", featured: true },
      { name: "Individual room smart thermostats", description: "Set your exact desired temperature" },
      { name: "Dual-zone inverter air conditioning", description: "Whisper-quiet cooling for summer days" },
      { name: "Triple-pane acoustic & thermal windows", description: "Total silence from the mountain breeze" },
      { name: "Motorized blackout wool drapery", description: "Perfect darkness whenever you wish to sleep" },
    ],
  },
  {
    id: "tech",
    name: "Work & Connectivity",
    iconName: "Wifi",
    items: [
      { name: "1000 Mbps Symmetrical Fiber Wi-Fi", description: "Dedicated line with battery backup UPS", featured: true },
      { name: "Ergonomic oak workstation desk", description: "With Herman Miller style supportive chair", featured: true },
      { name: "65\" 4K LG OLED TV", description: "With Netflix, HBO Max, and Apple TV pre-installed" },
      { name: "Sonos Spatial Audio Soundbar", description: "Seamless Bluetooth and AirPlay 2 connection" },
      { name: "USB-C Power Delivery at nightstands", description: "Fast-charge all laptops and phones" },
    ],
  },
  {
    id: "spa-wellness",
    name: "Bathroom & Wellness",
    iconName: "Droplets",
    items: [
      { name: "Walk-in Italian rain shower", description: "High-pressure thermostatic mixer", featured: true },
      { name: "Heated travertine stone flooring", description: "Warm underfoot year-round" },
      { name: "Dyson Supersonic hair dryer", description: "Professional salon styling at your disposal" },
      { name: "700 GSM plush Turkish cotton towels", description: "Bath sheets, face towels, and hand towels" },
      { name: "Tara Mountain organic botanical toiletries", description: "Pine shampoo, lavender body wash, and lotion" },
      { name: "Comfortable waffle bathrobes & slippers", description: "For both adults" },
    ],
  },
  {
    id: "kitchen-dining",
    name: "Gourmet Kitchen & Dining",
    iconName: "UtensilsCrossed",
    items: [
      { name: "Nespresso espresso & coffee bar", description: "Assorted Arabica pods & French press", featured: true },
      { name: "Bosch induction cooktop & convection oven", description: "Rapid heating and precision baking" },
      { name: "Quiet full-size dishwasher", description: "Eco detergent tablets provided" },
      { name: "Full refrigerator & freezer", description: "Large enough for extended holiday grocery storage" },
      { name: "Authentic Zlakusa clay roasting pot", description: "Cook traditional slow-roasted Serbian stew" },
      { name: "Electric raclette & fondue set", description: "Ideal for cozy snowy evening dinners" },
    ],
  },
  {
    id: "ski-outdoor",
    name: "Ski, Hiking & Outdoor Gear",
    iconName: "Mountain",
    items: [
      { name: "Heated ski & snowboard boot dry locker", description: "Private locker right next to parking spot", featured: true },
      { name: "Secure mountain bike indoor storage", description: "Wash station and basic bike tools" },
      { name: "Outdoor infrared patio heating lamps", description: "Enjoy the terrace in sub-zero winters" },
      { name: "Aluminum trekking poles & trail maps", description: "Complimentary for guest hikes" },
      { name: "Kids snow sleds (sanke)", description: "For tobogganing on nearby gentle slopes" },
    ],
  },
  {
    id: "access-parking",
    name: "Access, Parking & Safety",
    iconName: "ShieldCheck",
    items: [
      { name: "Keyless smart digital keypad lock", description: "Self check-in anytime after 3:00 PM", featured: true },
      { name: "Covered heated underground garage space", description: "Direct elevator access up to apartment door", featured: true },
      { name: "11kW Type 2 EV car charger", description: "Charge your electric or hybrid vehicle overnight" },
      { name: "24/7 exterior security cameras in parking", description: "Peace of mind for your vehicle" },
      { name: "Smart smoke & carbon monoxide sensors", description: "Integrated First Alert safety system" },
      { name: "First aid emergency mountain kit", description: "Fully stocked with essentials" },
    ],
  },
];

export const NEARBY_LANDMARKS: Landmark[] = [
  {
    name: "Gold Gondola Cable Car Terminal",
    distance: "900 meters (3 min drive / 11 min walk)",
    walkOrDrive: "walk",
    category: "Ski & Gondola",
    description: "Connects Zlatibor center directly to Ribnica Lake and Tornik ski peak.",
    coordinates: { lat: 43.7295, lng: 19.6998 },
  },
  {
    name: "Zlatibor Pine Lake & Central Square",
    distance: "450 meters (5 min scenic walk)",
    walkOrDrive: "walk",
    category: "Nature",
    description: "Pedestrian promenade lined with pine trees, cafes, bakeries, and farmers market.",
    coordinates: { lat: 43.7272, lng: 19.6985 },
  },
  {
    name: "Tornik Alpine Ski Peak (1,496m)",
    distance: "9.2 km (12 min drive)",
    walkOrDrive: "drive",
    category: "Ski & Gondola",
    description: "Modern ski slopes, downhill mountain bike tracks, and panoramic summit restaurant.",
    coordinates: { lat: 43.6895, lng: 19.6455 },
  },
  {
    name: "Gostilje Waterfall & Stopića Cave",
    distance: "18 km (22 min drive)",
    walkOrDrive: "drive",
    category: "Culture & Excursion",
    description: "Famous tiered travertine limestone pools with illuminated underground water chambers.",
    coordinates: { lat: 43.7025, lng: 19.8522 },
  },
  {
    name: "Traditional Kafana 'Zlatiborski Mir'",
    distance: "350 meters (4 min walk)",
    walkOrDrive: "walk",
    category: "Dining",
    description: "Authentic local wood-fired komplet lepinja, kajmak, and veal pečenje.",
    coordinates: { lat: 43.728, lng: 19.695 },
  },
];

export const FAQS_DATA: FAQItem[] = [
  {
    id: "f1",
    category: "Booking & Check-in",
    question: "How does check-in and check-out work?",
    answer:
      "We offer 24/7 keyless smart PIN self check-in from 3:00 PM onwards. You will receive your personalized 6-digit access code via WhatsApp and email 24 hours prior to arrival. Check-out is by 11:00 AM (or 2:00 PM if late check-out is selected). Stefan and Milena also live 5 minutes away and are happy to greet you in person if you prefer!",
  },
  {
    id: "f2",
    category: "Booking & Check-in",
    question: "Why should I book direct instead of Airbnb or Booking.com?",
    answer:
      "Booking directly on our official website saves you 15–18% in third-party platform service fees. You also get guaranteed free private underground parking with EV charging, complimentary welcome wine & honey, flexible cancellation, and direct 24/7 host WhatsApp access.",
  },
  {
    id: "f3",
    category: "Ski & Transportation",
    question: "Is there private parking and an EV charger for my car?",
    answer:
      "Yes! You have a dedicated, heated underground garage parking spot with an automatic remote door and direct elevator access straight to the apartment level. It includes an 11kW Type 2 EV charger completely free of charge.",
  },
  {
    id: "f4",
    category: "Amenities & Comfort",
    question: "Is the apartment warm during winter sub-zero temperatures?",
    answer:
      "Exceptionally warm and cozy. The apartment features hydronic underfloor heating throughout, triple-glazed thermal windows, and a sealed glass wood-burning fireplace. You can set individual room digital thermostats to whatever temperature you feel comfortable.",
  },
];

export const ADD_ON_SERVICES: AddOnService[] = [
  {
    id: "breakfast",
    name: "Artisanal Zlatibor Breakfast Hamper",
    description: "Freshly baked pogača bread, local dairy kajmak, smoked pršuta, mountain honey, eggs & alpine herbal tea delivered to your door.",
    pricePerUnit: 16,
    unitType: "per_day",
  },
  {
    id: "wood",
    name: "Unlimited Beech Firewood Restock",
    description: "Dry seasoned beech logs, natural pine cones for kindling, and matches replenished daily.",
    pricePerUnit: 0,
    unitType: "free",
    includedFree: true,
  },
  {
    id: "ev_charge",
    name: "Overnight EV Garage Charging (11kW)",
    description: "Unlimited Type 2 EV charging right in your designated garage parking bay.",
    pricePerUnit: 0,
    unitType: "free",
    includedFree: true,
  },
  {
    id: "late_checkout",
    name: "Guaranteed Late Check-Out (2:00 PM)",
    description: "Sleep in, enjoy one last mountain lunch and relaxed packing before departure.",
    pricePerUnit: 25,
    unitType: "one_time",
  },
];