"use client";

import TopNoticeBar from "@/components/TopNoticeBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BenefitsGrid from "@/components/BenefitsGrid";
import ServicesCarousel from "@/components/ServicesCarousel";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import DeliverablesTabs from "@/components/DeliverablesTabs";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ScrollReveal from "@/components/ScrollReveal";
import SmoothScroll from "@/components/SmoothScroll";

export default function HomePage() {
  return (
    <>
      <SmoothScroll />
      <ScrollReveal />
      <TopNoticeBar />
      <Navbar />
      <HeroSection />
      <BenefitsGrid />
      <ServicesCarousel />
      <TestimonialsCarousel />
      <DeliverablesTabs />
      <FaqSection />
      <ContactSection />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
