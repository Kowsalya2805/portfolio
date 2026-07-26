import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle, Award } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative z-10 bg-white dark:bg-[#0D1117]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-badge mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] dark:text-white tracking-tight">
            Professional <span className="text-gradient-teal">Internships</span>
          </h2>
          <div className="w-12 h-0.5 bg-[#0F766E] mx-auto rounded-full mt-5" />
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Central Guide Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-[#E5E7EB] dark:bg-[#334155] transform sm:-translate-x-1/2" />

          <div className="space-y-12">
            {experienceData.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={item.company}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Badge Indicator */}
                  <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-[#0F766E] text-white border-4 border-white dark:border-[#0D1117] flex items-center justify-center shadow-sm z-20">
                    <Briefcase className="w-3.5 h-3.5" />
                  </div>

                  {/* Content Card Box */}
                  <div className="ml-12 sm:ml-0 sm:w-1/2 sm:px-8 w-full">
                    <div className="p-7 rounded-2xl bg-[#FAFAF8] dark:bg-[#1E293B] border border-[#E5E7EB] dark:border-[#334155] shadow-card hover:shadow-card-hover hover:border-[#0F766E]/30 transition-all duration-300 group">
                      
                      {/* Header info */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-900/20 text-[#0F766E] dark:text-[#14B8A6] text-xs font-semibold border border-teal-100 dark:border-teal-800/30">
                          {item.type}
                        </span>
                        <div className="flex items-center gap-1.5 text-[#6B7280] dark:text-[#9CA3AF] text-xs font-semibold">
                          <Calendar className="w-3.5 h-3.5 text-[#0F766E] dark:text-[#14B8A6]" />
                          <span>{item.period}</span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-[#111827] dark:text-white mb-1 group-hover:text-[#0F766E] dark:group-hover:text-[#14B8A6] transition-colors">
                        {item.role}
                      </h3>
                      <div className="text-sm font-semibold text-[#374151] dark:text-[#D1D5DB] mb-4 flex items-center gap-2">
                        <span className="text-[#0F766E] dark:text-[#14B8A6] font-bold">{item.company}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1 text-[#9CA3AF] text-xs font-medium">
                          <MapPin className="w-3 h-3" />
                          {item.location}
                        </span>
                      </div>

                      {/* Responsibilities List */}
                      <div className="space-y-2 mb-5">
                        <div className="text-xs font-semibold uppercase tracking-wider text-[#9CA3AF] mb-2">Key Responsibilities</div>
                        {item.responsibilities.map((resp, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-[#4B5563] dark:text-[#D1D5DB] leading-relaxed">
                            <CheckCircle className="w-3.5 h-3.5 text-[#0F766E] dark:text-[#14B8A6] flex-shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </div>
                        ))}
                      </div>

                      {/* Key Achievements */}
                      <div className="p-3.5 rounded-xl bg-white dark:bg-[#111827] border border-[#E5E7EB] dark:border-[#374151] mb-5">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-[#0F766E] dark:text-[#14B8A6] mb-1 flex items-center gap-1">
                          <Award className="w-3.5 h-3.5" />
                          <span>Key Impact & Achievements</span>
                        </div>
                        {item.achievements.map((ach, i) => (
                          <p key={i} className="text-xs font-medium text-[#374151] dark:text-[#D1D5DB]">
                            • {ach}
                          </p>
                        ))}
                      </div>

                      {/* Skill Badges */}
                      <div className="flex flex-wrap gap-1.5">
                        {item.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-0.5 rounded-md bg-[#F3F4F6] dark:bg-[#111827] text-[#4B5563] dark:text-[#9CA3AF] text-[11px] font-medium border border-[#E5E7EB] dark:border-[#374151]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
