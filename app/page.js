import CaseStudies from "@/components/CaseStudies";
import DesignApproachSection from "@/components/DesignApproachSection";
import FeaturedResources from "@/components/FeaturedResources";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navabar";
import PartnerSection from "@/components/PartnerSection";
import PromoBanner from "@/components/PromoBanner";
import ReviewSlider from "@/components/ReviewSlider";
import SoftwareBuildingSection from "@/components/SoftwareBuildingS";
import SoftwareSection from "@/components/SoftwareSection";
import TechStackSection from "@/components/TechStackSection";
import TestimonialSlider from "@/components/TestimonialSlider";
import Timeline from "@/components/Timeline";

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
