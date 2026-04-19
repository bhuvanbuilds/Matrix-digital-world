import React from "react";
import { motion } from "framer-motion";
import { Globe, MessageCircle, Camera, Briefcase } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dark-bg pt-20 pb-10 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          <div>
            <a
              href="#"
              className="text-2xl font-bold font-heading text-white tracking-wide block mb-6"
            >
              Matrix
              <span className="text-primary font-bold"> Digital </span>
              World
            </a>
            <p className="text-gray-400 leading-relaxed mb-6">
              Transforming visions into digital realities. We are a full-service
              agency dedicated to your growth.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all"
              >
                <Globe size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#1DA1F2] hover:text-white transition-all"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#E1306C] hover:text-white transition-all"
              >
                <Camera size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#0077B5] hover:text-white transition-all"
              >
                <Briefcase size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-heading font-bold text-lg mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                "SEO & SEM",
                "Social Media",
                "Performance Marketing",
                "Web Development",
                "Video & Motion",
                "Brand Identity",
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-heading font-bold text-lg mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {[
                "About Us",
                "Careers",
                "Our Blueprint",
                "Case Studies",
                "Pricing",
                "Contact",
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2024 Matrix Digital World. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
