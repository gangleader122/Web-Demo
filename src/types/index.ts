export interface ApartmentSpace {
  id: string;
  name: string;
  tagline: string;
  description: string;
  size: string;
  highlights: string[];
  features: { icon: string; label: string }[];
  image: string;
  dayImage: string;
  nightImage: string;
  hotspots?: {
    x: number;
    y: number;
    title: string;
    description: string;
  }[];
}

export interface AmenityCategory {
  id: string;
  name: string;
  iconName: string;
  items: {
    name: string;
    description?: string;
    featured?: boolean;
  }[];
}

export interface GalleryPhoto {
  id: string;
  category: "all" | "living" | "bedroom" | "kitchen" | "spa" | "terrace" | "surroundings";
  title: string;
  subtitle: string;
  aspect: "landscape" | "portrait" | "wide";
  image: string;
}

export interface SeasonalGuideItem {
  season: "winter" | "spring-summer" | "autumn";
  title: string;
  months: string;
  tagline: string;
  highlights: {
    title: string;
    description: string;
    distanceOrTime: string;
    icon: string;
  }[];
  temperatureAvg: string;
  topTip: string;
}

export interface Landmark {
  name: string;
  distance: string;
  walkOrDrive: "walk" | "drive";
  category: "Nature" | "Ski & Gondola" | "Dining" | "Culture & Excursion";
  description: string;
  coordinates: { lat: number; lng: number };
}

export interface Review {
  id: string;
  author: string;
  location: string;
  avatarText: string;
  stayDate: string;
  tripType: "Couple Retreat" | "Family Vacation" | "Remote Work Stay" | "Ski Trip";
  rating: number;
  headline: string;
  comment: string;
  verifiedDirectOrOTA: "Verified Direct Guest" | "Verified Airbnb Superstay" | "Verified Booking.com Guest";
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "Booking & Check-in" | "Amenities & Comfort" | "Ski & Transportation" | "Policies";
}

export interface AddOnService {
  id: string;
  name: string;
  description: string;
  pricePerUnit: number;
  unitType: "per_day" | "one_time" | "free";
  includedFree?: boolean;
}
