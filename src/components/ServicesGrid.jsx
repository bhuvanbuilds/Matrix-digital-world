import React from 'react';
import { motion } from 'framer-motion';
import { Search, Share2, Target, Mail, Globe, Video, PenTool, Magnet, Palette } from 'lucide-react';

const services = [
  { name: "SEO/SEM", desc: "Climb search rankings and drive targeted traffic.", icon: Search },
  { name: "Social Media Management", desc: "Engaging content that builds your community.", icon: Share2 },
  { name: "Performance Ads", desc: "Data-backed campaigns for maximum ROI.", icon: Target },
  { name: "Email & SMS Marketing", desc: "Direct communication that converts.", icon: Mail },
  { name: "Website Creation & Analytics", desc: "Beautiful, fast websites built for growth.", icon: Globe },
  { name: "Video & Motion Graphics", desc: "Captivating visuals that tell your story.", icon: Video },
  { name: "Graphic Design", desc: "Stunning graphics for all your digital needs.", icon: PenTool },
  { name: "Lead Generation", desc: "High-quality leads to fuel your sales funnel.", icon: Magnet },
  { name: "Logo & Brand Identity", desc: "Memorable branding that stands out.", icon: Palette }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } }
};

const ServicesGrid = () => {
  return (
    <section id="services" className="py-24 bg-dark-section relative">
      {/* Decorative Orbs */}
      <div className="orb-secondary w-[300px] h-[300px] top-[10%] left-[-5%] opacity-10"></div>
      <div className="orb-primary w-[300px] h-[300px] bottom-[10%] right-[-5%] opacity-10"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-secondary/30 bg-secondary/10 mb-6">
            <span className="text-secondary text-xs font-semibold uppercase tracking-wider">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold font-heading text-white mb-4">
            What We Do
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A full-spectrum approach to supercharge your digital presence and drive sustainable growth.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="glass-card p-8 rounded-2xl group transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(79,142,247,0.15)] flex flex-col"
              >
                <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:border-primary/50 transition-colors duration-300">
                  <Icon className="text-white group-hover:text-primary transition-colors duration-300 w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-heading text-white mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.name}
                </h3>
                <p className="text-gray-400 leading-relaxed font-medium">
                  {service.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;
