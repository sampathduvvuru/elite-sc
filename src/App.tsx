import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import BadmintonSection from './components/BadmintonSection';
import CricketSection from './components/CricketSection';
import PricingSection from './components/PricingSection';
import TestimonialsSection from './components/TestimonialsSection';
import BookingSection from './components/BookingSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = 'Elite Sports Club - Badminton & Cricket Venue';
  }, []);

  return (
    // <div className="min-h-screen bg-white">
    <div className="min-h-screen bg-white pt-[100px]">  
      <Navbar />
      <Hero />
      <About />
      <BadmintonSection />
      <CricketSection />
      <PricingSection />
      <TestimonialsSection />
      <BookingSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App