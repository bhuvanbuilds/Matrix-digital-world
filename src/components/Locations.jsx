import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const cities = [
  { name: "Hyderabad", tagline: "The Tech Hub where innovation meets scale." },
  { name: "Bangalore", tagline: "Silicon Valley of India driving startup growth." },
  { name: "Salem", tagline: "Emerging market with untapped potential." }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } }
};

const Locations = () => {
  return (
    <section className="py-24 bg-dark-section border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold font-heading text-white mb-4">
            We're Where <span className="text-secondary">You Are</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Operating across multiple cities to provide localized strategies with a global perspective.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {cities.map((city, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="glass-card p-10 rounded-3xl text-center group transition-all duration-300 hover:border-secondary/50 hover:shadow-[0_0_30px_rgba(0,229,255,0.15)] relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-secondary/0 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="mx-auto w-16 h-16 rounded-full glass-card border border-white/10 flex items-center justify-center mb-6 group-hover:border-secondary/50 group-hover:bg-secondary/10 transition-colors duration-300 relative z-10">
                <MapPin className="text-white group-hover:text-secondary w-8 h-8 transition-colors duration-300" />
              </div>
              
              <h3 className="text-3xl font-bold font-heading text-white mb-3 relative z-10">{city.name}</h3>
              <p className="text-gray-400 relative z-10">{city.tagline}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Locations;
