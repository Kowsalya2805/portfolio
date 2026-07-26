import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Medal, Calendar } from 'lucide-react';
import { achievementData } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  const getAwardIcon = (badge: string) => {
    if (badge.includes('3rd')) return <Trophy className="w-6 h-6 text-[#0F766E] dark:text-[#14B8A6]" />;
    if (badge.includes('Innovation')) return <Star className="w-6 h-6 text-[#0F766E] dark:text-[#14B8A6]" />;
    return <Medal className="w-6 h-6 text-[#0F766E] dark:text-[#14B8A6]" />;
  };

  return (
    <section id="achievements" className="py-24 relative z-10 bg-white dark:bg-[#0D1117]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-badge mb-4">
            <Trophy className="w-3.5 h-3.5" />
            <span>Honors & Recognitions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] dark:text-white tracking-tight">
            Key <span className="text-gradient-teal">Achievements</span>
          </h2>
          <div className="w-12 h-0.5 bg-[#0F766E] mx-auto rounded-full mt-5" />
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievementData.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.12 }}
              className="p-7 rounded-2xl bg-[#FAFAF8] dark:bg-[#1E293B] border border-[#E5E7EB] dark:border-[#334155] shadow-card hover:shadow-card-hover hover:border-[#0F766E]/30 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-5">
                  <div className="p-3 rounded-xl bg-teal-50 dark:bg-teal-900/20 group-hover:scale-105 transition-transform">
                    {getAwardIcon(item.badge)}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#0F766E] text-white text-xs font-semibold shadow-sm">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#111827] dark:text-white mb-1.5 group-hover:text-[#0F766E] dark:group-hover:text-[#14B8A6] transition-colors">
                  {item.title}
                </h3>
                <div className="text-xs font-semibold text-[#0F766E] dark:text-[#14B8A6] mb-3">
                  {item.event}
                </div>
                <p className="text-[#6B7280] dark:text-[#9CA3AF] text-xs leading-relaxed mb-5">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E5E7EB] dark:border-[#334155] flex items-center gap-2 text-[#9CA3AF] text-xs font-medium">
                <Calendar className="w-3.5 h-3.5 text-[#0F766E] dark:text-[#14B8A6]" />
                <span>{item.date}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
