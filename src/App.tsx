import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { LuxuryBackground } from './components/LuxuryBackground';
import { Hero } from './components/Hero';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { FeatureHighlights } from './components/FeatureHighlights';
import { InteractiveAIGenerator } from './components/InteractiveAIGenerator';
import { AwsArchitecture } from './components/AwsArchitecture';
import { InteractiveDashboard } from './components/InteractiveDashboard';
import { RobloxDeployPipeline } from './components/RobloxDeployPipeline';
import { CollabFeatures } from './components/CollabFeatures';
import { Testimonials } from './components/Testimonials';
import { PricingCalculator } from './components/PricingCalculator';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { Language, TRANSLATIONS } from './translations';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [selectedPlanForContact, setSelectedPlanForContact] = useState<string>('');

  const t = TRANSLATIONS[lang];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPlan = (planName: string) => {
    setSelectedPlanForContact(planName);
    scrollToSection('waitlist');
  };

  return (
    <div className="relative min-h-screen bg-[#030305] text-[#ededed] flex flex-col font-sans selection:bg-white/20 selection:text-white">
      {/* Smooth 60fps Luxury Constellation & Fluid Particle Background */}
      <LuxuryBackground />

      {/* Luxury 3-zone Header with Language Switcher */}
      <Navbar
        t={t.nav}
        lang={lang}
        onToggleLang={setLang}
        onOpenWaitlist={() => scrollToSection('waitlist')}
        onExploreDemo={() => scrollToSection('monitoring')}
      />

      <main className="flex-grow relative z-10">
        {/* Luxury Hero Section */}
        <Hero
          t={t.hero}
          onOpenWaitlist={() => scrollToSection('waitlist')}
          onExploreDemo={() => scrollToSection('monitoring')}
        />

        {/* Featured Projects Showcase with Luxury Editorial Styling */}
        <ProjectsShowcase
          t={t.projects}
          onOpenWaitlist={() => scrollToSection('waitlist')}
        />

        {/* Core Capabilities Bento in Obsidian & Silver */}
        <FeatureHighlights
          t={t.features}
          onLearnMore={(anchor) => scrollToSection(anchor)}
        />

        {/* Interactive AI Generator for Roblox Places */}
        <InteractiveAIGenerator t={t.aiEngine} lang={lang} />

        {/* AWS Scalable Architecture Blueprint */}
        <AwsArchitecture t={t.awsCloud} lang={lang} />

        {/* Real-time Performance Monitoring Dashboard with Monochrome Graph */}
        <InteractiveDashboard t={t.monitoring} lang={lang} />

        {/* Roblox Open Cloud CI/CD Deployment Automation */}
        <RobloxDeployPipeline lang={lang} />

        {/* Real-time Multiplayer & Collaborative Studio Tools */}
        <CollabFeatures lang={lang} />

        {/* Developer Testimonials with Editorial Typography */}
        <Testimonials t={t.testimonials} />

        {/* Flexible Billing & Unit Economics Calculator */}
        <PricingCalculator
          t={t.pricing}
          lang={lang}
          onSelectPlan={handleSelectPlan}
        />

        {/* Minimalist Apple-like Monochrome Contact Form */}
        <ContactForm t={t.contact} initialPlan={selectedPlanForContact} />
      </main>

      {/* Quiet Luxury Footer */}
      <Footer t={t.footer} />
    </div>
  );
}
