"use client";

import FeatureCards from "../modules/Landing/FeatureCards";
import HeroSection from "../modules/Landing/HeroSection";
import Footer from "../modules/Landing/Footer";

const LandingPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white">
      <HeroSection />
      <FeatureCards />
      <Footer />
    </main>
  );
};

export default LandingPage;
