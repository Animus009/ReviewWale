import React from 'react';
import Navbar from './components/Navbar';
import reviewImage from './assets/images/regenerated_image_1783966999173.png'
import Hero from './components/Hero';
import { AboutUs, StatsSection, ProcessSection, TeamSection } from './components/CompanyProfile';
import Services from './components/Services';
import { TestimonialsSection } from './components/Showcase';
import PricingCalculator from './components/PricingCalculator';
import SocialImpactSection from './components/SocialImpact';
import { FAQsSection, BlogSection, ContactSection, FooterSection } from './components/SupportAndInfo';

export default function App() {
  // Smooth scroll handler
  const handleScrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans antialiased text-slate-800">
      
      {/* Dynamic Header */}
      <Navbar />

      {/* Main Container */}
      <main className="min-h-screen">
        <div className="animate-fade-in">
          {/* 1. Hero Section */}
          <Hero 
            onGetStarted={() => handleScrollToId('pricing-calculator')}
          />

          {/* 2. About Us Section */}
          <AboutUs />

          {/* 3. Services Section */}
          <Services onSelectService={() => handleScrollToId('pricing-calculator')} />

          {/* 4. Our Process Section */}
          <ProcessSection />

          {/* 6. Stats Section */}
          <StatsSection />

          {/* 7. Testimonials Section */}
          <TestimonialsSection />

          {/* 8. Team Section */}
          <TeamSection />

          {/* 9. Interactive Pricing Estimator & Social Impact Calculator */}
          <PricingCalculator />

          {/* 9.5. Zero Hunger Food Donation Campaign Video & Gifs */}
          <SocialImpactSection />

          {/* 10. FAQs Section */}
          <FAQsSection />

          {/* 11. Blog / Insights Section */}
          <BlogSection />

          {/* 12. Contact Us Section */}
          <ContactSection />

          {/* 13. Footer */}
          <FooterSection />
        </div>
      </main>

    </div>
  );
}
