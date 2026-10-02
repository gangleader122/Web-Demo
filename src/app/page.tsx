import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Apartment } from "@/components/Apartment";
import { Amenities } from "@/components/Amenities";
import { Gallery } from "@/components/Gallery";
import { SeasonalExperiences } from "@/components/SeasonalExperiences";
import { Location } from "@/components/Location";
import { Reviews } from "@/components/Reviews";
import { Booking } from "@/components/Booking";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Apartment />
        <Amenities />
        <Gallery />
        <SeasonalExperiences />
        <Location />
        <Reviews />
        <Booking />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}


