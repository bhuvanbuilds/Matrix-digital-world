import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed top-0 w-full z-50 glass-card bg-black/40 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold font-heading text-white tracking-wide">
          Matrix
          <span className="text-primary font-bold"> Digital </span>
          World
        </a>
        
        <div className="hidden md:flex space-x-8 items-center text-sm font-medium text-gray-300">
          <a href="#home" className="hover:text-primary transition-colors">Home</a>
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#services" className="hover:text-primary transition-colors">Services</a>
          <a href="#clients" className="hover:text-primary transition-colors">Clients</a>
          <a href="#careers" className="hover:text-primary transition-colors">Careers</a>
          <a href="#blueprint" className="hover:text-primary transition-colors">Blueprint</a>
        </div>

        <button className="hidden md:block bg-primary text-white px-6 py-2.5 rounded-full font-semibold hover:bg-opacity-90 transition-all hover:shadow-[0_0_15px_rgba(79,142,247,0.5)]">
          Get a Free Audit
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
