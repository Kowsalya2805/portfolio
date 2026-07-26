import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { certificationData } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 relative z-10 bg-[#FAFAF8] dark:bg-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-badge mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>Credentials & Upskilling</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] dark:text-white tracking-tight">
            Professional <span className="text-gradient-teal">Certifications</span>
          </h2>
          <div className="w-12 h-0.5 bg-[#0F766E] mx-auto rounded-full mt-5" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationData.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-6 rounded-2xl bg-white dark:bg-[#1E293B] border border-[#E5E7EB] dark:border-[#334155] shadow-card hover:shadow-card-hover hover:border-[#0F766E]/30 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="p-2.5 rounded-xl bg-teal-50 dark:bg-teal-900/20 text-[#0F766E] dark:text-[#14B8A6] group-hover:scale-105 transition-transform">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#F3F4F6] dark:bg-[#111827] text-[#374151] dark:text-[#D1D5DB] text-[11px] font-semibold border border-[#E5E7EB] dark:border-[#374151]">
                    {cert.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#111827] dark:text-white mb-1.5 group-hover:text-[#0F766E] dark:group-hover:text-[#14B8A6] transition-colors">
                  {cert.title}
                </h3>
                <p className="text-xs font-semibold text-[#0F766E] dark:text-[#14B8A6] mb-4">
                  {cert.issuer}
                </p>
              </div>

              <div className="pt-4 border-t border-[#F3F4F6] dark:border-[#334155] flex items-center justify-between text-xs text-[#9CA3AF] font-medium">
                <span>Issued: {cert.date}</span>
                <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Verified
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
