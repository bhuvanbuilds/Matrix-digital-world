import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import CountUpModule from 'react-countup';

const CountUp = CountUpModule.default || CountUpModule;

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-overlay z-0 opacity-40 mix-blend-overlay"></div>
      <div className="orb-primary w-[500px] h-[500px] top-[-100px] left-[-100px] opacity-30"></div>
      <div className="orb-secondary w-[400px] h-[400px] bottom-[-50px] right-[-50px] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
        {/* Left side text */}
        <motion.div 
          className="flex flex-col gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 w-fit">
            <span className="text-primary text-xs font-semibold uppercase tracking-wider">India's Growth-Driven Agency</span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-[80px] leading-[1.1] font-extrabold font-heading text-white">
            Transforming <br /> Visions into <br />
            <span className="heading-gradient">Digital Realities.</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-400 max-w-lg leading-relaxed">
            We fuel startups and brands with performance marketing, creative content & data-driven strategies.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mt-4">
            <button className="bg-primary text-white px-8 py-3.5 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all shadow-[0_0_20px_rgba(79,142,247,0.3)] hover:shadow-[0_0_30px_rgba(79,142,247,0.5)]">
              Start Your Growth
            </button>
            <button className="glass-card hover:bg-white/10 text-white px-8 py-3.5 rounded-full font-semibold text-lg transition-all border border-white/20">
              See Our Work
            </button>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center gap-3 mt-8">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
            </div>
            <span className="text-sm text-gray-400 font-medium tracking-wide">Top rated by 100+ clients</span>
          </motion.div>
        </motion.div>

        {/* Right side floating mockup */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative hidden lg:block"
        >
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="glass-card p-6 rounded-2xl border-primary/30 shadow-[0_0_50px_rgba(79,142,247,0.15)] bg-gradient-to-br from-white/5 to-white/0"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <span className="text-xs font-semibold text-gray-400 tracking-wider uppercase">Campaign Dashboard</span>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <div>
                  <div className="text-xs text-gray-400 mb-1">Total Revenue</div>
                  <div className="text-3xl font-bold font-heading text-white">
                    ₹<CountUp start={0} end={1024592.50} duration={2.5} delay={1} decimals={2} separator="," formattingFn={(val) => val.toLocaleString('en-IN', { minimumFractionDigits: 2 })} />
                  </div>
                </div>
                <div className="text-green-400 text-sm font-semibold flex items-center">
                  +14.5% <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                </div>
              </div>
              
              {/* Mock Chart Area */}
              <div className="h-40 w-full relative mt-6 flex items-end justify-between gap-2">
                {[40, 60, 45, 80, 55, 90, 75].map((height, i) => (
                  <div key={i} className="w-full relative group flex items-end justify-center h-full">
                    <motion.div 
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ duration: 1, delay: 0.8 + i * 0.1 }}
                      className={`w-full rounded-t-sm ${i === 5 ? 'bg-primary' : 'bg-white/10'} group-hover:bg-primary/80 transition-colors`}
                    ></motion.div>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-between text-[10px] text-gray-500 font-medium px-2">
                <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
              </div>
            </div>
          </motion.div>
          
          {/* Floating elements */}
          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-8 -left-8 glass-card p-4 rounded-xl border-secondary/30 shadow-lg flex items-center gap-4"
          >
            <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
              <Star className="text-secondary w-5 h-5" />
            </div>
            <div>
               <div className="text-sm font-bold text-white">Conversion Rate</div>
               <div className="text-xs text-gray-400 mt-0.5">Increased by 3x</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
