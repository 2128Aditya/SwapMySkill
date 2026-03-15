import React from "react";
import MainLayout from "../layouts/MainLayout";

import HeroSection from "../sections/HeroSection";
import SkillsSection from "../sections/SkillsSection";
import HowItWorks from "../sections/HowItWorks";
import MentorsSection from "../sections/MentorsSection";
import CTASection from "../sections/CTASection";

function Home() {
  return (
    <MainLayout>

      <HeroSection />
      <SkillsSection />
      <HowItWorks />
      <MentorsSection />
      <CTASection />

    </MainLayout>
  );
}

export default Home;