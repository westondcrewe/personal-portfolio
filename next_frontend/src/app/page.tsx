// Home page
'use client';

import { useState, useEffect } from 'react';
import Navigation from '../components/layout/Navigation';
import HeroSection from '../components/sections/HeroSection';
import FeaturedProjects from '../components/sections/FeaturedProjects';
import SkillsPreview from '../components/sections/SkillsPreview';
import CTASection from '../components/sections/CTASection';
//import BackgroundEffects from '../components/layout/BackgroundEffects';
import Footer from '../components/layout/Footer';

export default function HomePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-teal-700 via-emerald-200 to-green-400">
      {/* <BackgroundEffects /> */}
      <div className="relative">
        <Navigation />

        <main className="flex-grow p-20">
          <HeroSection />
          <FeaturedProjects />
          <SkillsPreview />
          <CTASection />
        </main >

        <Footer />
      </div>
    </div>
  );
}





