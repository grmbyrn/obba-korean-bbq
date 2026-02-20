import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import Experience from "@/components/Experience";
import BookingSection from "@/components/BookingSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import Testimonials from "../components/Testimonials";
import { LocaleProvider } from "../lib/i18n";

export default function Home() {
  return (
    <LocaleProvider>
      <main className="min-h-screen bg-background">
        <Navbar />
        <Hero />
        <MenuSection />
        <Experience />
        <Testimonials />
        <BookingSection />
        <LocationSection />
        <Footer />
      </main>
    </LocaleProvider>
  );
}
