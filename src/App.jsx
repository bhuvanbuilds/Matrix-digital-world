import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeTicker from './components/MarqueeTicker';
import StatsBar from './components/StatsBar';
import ServicesGrid from './components/ServicesGrid';
import WhyUs from './components/WhyUs';
import Locations from './components/Locations';
import CTABanner from './components/CTABanner';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    
    return () => lenis.destroy();
  }, []);

  return (
    <div className="bg-dark-bg min-h-screen text-white relative font-body overflow-hidden">
      <Navbar />
      <Hero />
      <MarqueeTicker />
      <StatsBar />
      <ServicesGrid />
      <WhyUs />
      <Locations />
      <CTABanner />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
