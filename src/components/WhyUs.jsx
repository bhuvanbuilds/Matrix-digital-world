import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Users, Zap } from 'lucide-react';

const WhyUs = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-overlay z-0 opacity-20"></div>
      <div className="orb-primary w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Side: Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold font-heading text-white mb-6">
            Why Brands <span className="heading-gradient">Choose Us</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-lg">
            We don't just deliver services; we partner with you to engineer predictable, scalable growth. Here's what sets Matrix Digital World apart.
          </p>

          <div className="space-y-8">
            {[
              { title: "Data-Driven Results", desc: "Every campaign is backed by deep analytics, ensuring maximum ROI on every dollar spent.", icon: BarChart3, color: "text-primary" },
              { title: "Full-Service Studio", desc: "From SEO and paid ads to video production and identity, we do it all under one roof.", icon: Zap, color: "text-secondary" },
              { title: "Dedicated Account Management", desc: "You get direct access to strategists who deeply care about your business goals.", icon: Users, color: "text-yellow-400" },
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full glass-card flex items-center justify-center">
                    <Icon className={`w-5 h-5 ${feature.color}`} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold font-heading text-white mb-2">{feature.title}</h4>
                    <p className="text-gray-400">{feature.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Right Side: Mock Analytics Visual */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative lg:ml-10"
        >
          <div className="glass-card rounded-3xl p-8 border-primary/20 shadow-[0_0_60px_rgba(79,142,247,0.1)] relative overflow-hidden">
            <div className="absolute top-[-50px] right-[-50px] w-[200px] h-[200px] bg-primary/20 blur-[60px] rounded-full pointer-events-none"></div>
            
            <div className="flex justify-between items-center mb-8">
              <div>
                <div className="text-sm text-gray-400 mb-1">Audience Growth</div>
                <div className="text-3xl font-bold text-white font-heading">+1,248%</div>
              </div>
              <div className="glass-card px-3 py-1.5 rounded-lg border-white/10 text-xs text-gray-300">
                Last 30 Days
              </div>
            </div>

            {/* Abstract Chart */}
            <div className="w-full h-48 flex items-end justify-between gap-1 sm:gap-3 relative">
              {/* Grid Lines */}
              <div className="absolute inset-x-0 bottom-1/4 border-b border-white/5"></div>
              <div className="absolute inset-x-0 bottom-2/4 border-b border-white/5"></div>
              <div className="absolute inset-x-0 bottom-3/4 border-b border-white/5"></div>

              {[20, 35, 40, 60, 55, 80, 75, 95, 100].map((height, i) => (
                <div key={i} className="flex-1 flex flex-col items-center justify-end h-full gap-2 z-10 group">
                  <motion.div 
                    initial={{ height: 0 }}
                    whileInView={{ height: `${height}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                    className="w-full rounded-t-sm bg-gradient-to-t from-primary/20 to-primary/80 group-hover:to-secondary transition-colors"
                  ></motion.div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex gap-6">
              <div>
                <div className="w-3 h-3 rounded-full bg-primary mb-2"></div>
                <div className="text-xs text-gray-400">Organic</div>
                <div className="font-bold text-white mt-1">45K</div>
              </div>
              <div>
                <div className="w-3 h-3 rounded-full bg-secondary mb-2"></div>
                <div className="text-xs text-gray-400">Paid Social</div>
                <div className="font-bold text-white mt-1">112K</div>
              </div>
              <div>
                <div className="w-3 h-3 rounded-full bg-white/20 mb-2"></div>
                <div className="text-xs text-gray-400">Referral</div>
                <div className="font-bold text-white mt-1">12K</div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default WhyUs;
