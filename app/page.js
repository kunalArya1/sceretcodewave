import CaseStudies from "@/Components/CaseStudies";
import DesignApproachSection from "@/Components/DesignApproachSection";
import FeaturedResources from "@/Components/FeaturedResources";
import Footer from "@/Components/Footer";
import HeroSection from "@/Components/HeroSection";
import Navbar from "@/Components/Navabar";
import PartnerSection from "@/Components/PartnerSection";
import PromoBanner from "@/Components/PromoBanner";
import ReviewSlider from "@/Components/ReviewSlider";
import ServicesSlider from "@/Components/ServicesSlider";
import SoftwareBuildingSection from "@/Components/SoftwareBuildingS";
import SoftwareSection from "@/Components/SoftwareSection";
import TechStackSection from "@/Components/TechStackSection";
import TestimonialSlider from "@/Components/TestimonialSlider";
import Timeline from "@/Components/Timeline";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" overflow-hidden">
      <Navbar />
      <HeroSection />
      {/*  <ServicesSlider /> */}
      <SoftwareSection />
      <PartnerSection />
      <TestimonialSlider />
      <CaseStudies />
      <SoftwareBuildingSection />
      <DesignApproachSection />
      <TechStackSection />
      <Timeline />
      <FeaturedResources />
      <ReviewSlider />
      <PromoBanner />
      <Footer />
    </div>
  );
}
