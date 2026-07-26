import React from 'react';
import { motion } from 'framer-motion';
import { User, Target, Sparkles, CheckCircle2 } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative z-10 bg-[#FAFAF8] dark:bg-[#111827]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="section-badge mb-4">
            <User className="w-3.5 h-3.5" />
            <span>Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] dark:text-white tracking-tight">
            About <span className="text-gradient-teal">Me</span>
          </h2>
          <div className="w-12 h-0.5 bg-[#0F766E] mx-auto rounded-full mt-4" />
        </div>

        {/* Content Container */}
        <div className="space-y-6">

          {/* About Me Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="p-8 sm:p-10 rounded-2xl bg-white dark:bg-[#1E293B] border border-[#E5E7EB] dark:border-[#334155] shadow-card"
          >
            <h3 className="text-lg font-bold text-[#111827] dark:text-white mb-4 flex items-center gap-2.5">
              <User className="w-5 h-5 text-[#0F766E] dark:text-[#14B8A6]" />
              <span>About Me</span>
            </h3>
            <p className="text-[#4B5563] dark:text-[#D1D5DB] leading-relaxed text-base">
              {personalDetails.aboutDetailed.summary}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Career Goal Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="p-8 rounded-2xl bg-white dark:bg-[#1E293B] border border-[#E5E7EB] dark:border-[#334155] shadow-card flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-bold text-[#111827] dark:text-white mb-4 flex items-center gap-2.5">
                  <Target className="w-5 h-5 text-[#0F766E] dark:text-[#14B8A6]" />
                  <span>Career Goal</span>
                </h3>
                <p className="text-[#4B5563] dark:text-[#D1D5DB] leading-relaxed text-sm">
                  {personalDetails.aboutDetailed.objective}
                </p>
              </div>
            </motion.div>

            {/* Strengths Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="p-8 rounded-2xl bg-white dark:bg-[#1E293B] border border-[#E5E7EB] dark:border-[#334155] shadow-card"
            >
              <h3 className="text-lg font-bold text-[#111827] dark:text-white mb-4 flex items-center gap-2.5">
                <Sparkles className="w-5 h-5 text-[#0F766E] dark:text-[#14B8A6]" />
                <span>Strengths</span>
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {personalDetails.aboutDetailed.strengths.map((strength) => (
                  <div key={strength} className="flex items-center gap-2 text-sm font-medium text-[#374151] dark:text-[#D1D5DB]">
                    <CheckCircle2 className="w-4 h-4 text-[#0F766E] dark:text-[#14B8A6] flex-shrink-0" />
                    <span>{strength}</span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};
