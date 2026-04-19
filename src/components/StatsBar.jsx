import React, { useState } from 'react';
import CountUpModule from 'react-countup';
import { motion } from 'framer-motion';

const CountUp = CountUpModule.default || CountUpModule;

const stats = [
  { value: 100, suffix: '+', label: 'Clients' },
  { value: 3, suffix: '', label: 'Cities' },
  { value: 5, suffix: '+', label: 'Years' },
  { value: 10, suffix: '+', label: 'Services' },
];

const StatsBar = () => {
  const [hasInView, setHasInView] = useState(false);

  return (
    <section className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          onViewportEnter={() => setHasInView(true)}
          className="glass-card rounded-3xl p-10 relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-full bg-primary/5 blur-[100px] rounded-full pointer-events-none"></div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 divide-y lg:divide-y-0 lg:divide-x divide-white/10 relative z-10">
            {stats.map((stat, index) => (
              <div key={index} className={`flex flex-col items-center justify-center ${index > 1 ? 'pt-10 lg:pt-0' : ''}`}>
                <div className="text-5xl md:text-6xl font-extrabold font-heading heading-gradient mb-2">
                  {hasInView ? (
                    <CountUp start={0} end={stat.value} duration={2.5} useEasing />
                  ) : "0"}
                  {stat.suffix}
                </div>
                <div className="text-gray-400 font-medium text-lg uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsBar;
