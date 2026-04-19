import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CTABanner = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="glass-card rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden border-primary/30"
        >
          {/* Intense center glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[100px] rounded-full pointer-events-none"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-extrabold font-heading text-white mb-6">
              Ready to Transform <br/> Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-medium">
              Partner with us and seize the power of digital marketing today. Let's build something extraordinary together.
            </p>
            
            <button className="bg-primary text-white px-10 py-4 rounded-full font-bold text-xl inline-flex items-center gap-3 hover:bg-opacity-90 transition-all shadow-[0_0_30px_rgba(79,142,247,0.4)] hover:shadow-[0_0_50px_rgba(79,142,247,0.6)] hover:scale-105 transform duration-300">
              Let's Talk
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
