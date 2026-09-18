/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { AnnouncementBar } from "./components/AnnouncementBar";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { TrustBar } from "./components/TrustBar";
import { AboutSection } from "./components/AboutSection";
import { TreatmentsSection } from "./components/TreatmentsSection";
import { FeaturedTreatment } from "./components/FeaturedTreatment";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { TechnologySection } from "./components/TechnologySection";
import { TeamSection } from "./components/TeamSection";
import { Testimonials } from "./components/Testimonials";
import { BeforeAfterGallery } from "./components/BeforeAfterGallery";
import { ClinicExperience } from "./components/ClinicExperience";
import { FAQ } from "./components/FAQ";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { BookingModal } from "./components/BookingModal";

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-accent/30">
      <AnnouncementBar />
      <Navbar onBook={openBooking} />
      
      <main className="flex-1">
        <Hero onBook={openBooking} />
        <TrustBar />
        <AboutSection />
        <TreatmentsSection />
        <FeaturedTreatment />
        <WhyChooseUs />
        <TechnologySection />
        <TeamSection />
        <Testimonials />
        <BeforeAfterGallery />
        <ClinicExperience />
        <FAQ />
        <FinalCTA onBook={openBooking} />
      </main>

      <Footer />
      
      <BookingModal isOpen={isBookingOpen} onClose={closeBooking} />
    </div>
  );
}
