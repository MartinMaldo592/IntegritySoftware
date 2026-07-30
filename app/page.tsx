"use client";

import TopNoticeBar from "@/components/TopNoticeBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BenefitsGrid from "@/components/BenefitsGrid";
import ServicesCarousel from "@/components/ServicesCarousel";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import DeliverablesTabs from "@/components/DeliverablesTabs";
import TrustBanner from "@/components/TrustBanner";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ScrollReveal from "@/components/ScrollReveal";

export default function HomePage() {
  return (
    <>
      <ScrollReveal />
      <TopNoticeBar />
      <Navbar />
      <HeroSection />
      <BenefitsGrid />
      <ServicesCarousel />
      <TestimonialsCarousel />
      <DeliverablesTabs />
      <TrustBanner />
      <ContactSection />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
