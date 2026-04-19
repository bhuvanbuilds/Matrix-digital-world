import React from 'react';
import { motion } from 'framer-motion';

const services = [
  "SEO", "SEM", "SMM", "Lead Generation", "Email Marketing", 
  "Video Editing", "Graphic Design", "Motion Graphics", 
  "Web Development", "Ad Trafficking", "Logo Design"
];

// Duplicate to create seamless loop
const marqueeItems = [...services, ...services, ...services];

const MarqueeTicker = () => {
  return (
    <div className="w-full bg-dark-section border-y border-white/5 py-4 overflow-hidden relative flex items-center">
      {/* Gradient masks for smooth fade on edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-dark-section to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-dark-section to-transparent z-10"></div>
      
      <motion.div 
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-33.3333%"] }}
        transition={{ 
          ease: "linear", 
          duration: 20, 
          repeat: Infinity 
        }}
      >
        {marqueeItems.map((item, index) => (
          <div key={index} className="flex items-center">
            <span className="text-gray-400 font-heading font-bold text-lg uppercase tracking-wider mx-6">
              {item}
            </span>
            <span className="text-primary/50 text-xl">•</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default MarqueeTicker;
