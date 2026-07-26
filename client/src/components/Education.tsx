import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, BookOpen, CheckCircle2 } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative z-10 bg-[#FAFAF8] dark:bg-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-badge mb-4">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] dark:text-white tracking-tight">
            Education & <span className="text-gradient-teal">Distinction</span>
          </h2>
          <div className="w-12 h-0.5 bg-[#0F766E] mx-auto rounded-full mt-5" />
        </div>

        {/* Education Card Container */}
        <div className="max-w-3xl mx-auto">
          {educationData.map((edu) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 sm:p-10 rounded-2xl bg-white dark:bg-[#1E293B] border border-[#E5E7EB] dark:border-[#334155] shadow-card relative overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <span className="px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-900/20 text-[#0F766E] dark:text-[#14B8A6] text-xs font-semibold border border-teal-100 dark:border-teal-800/30">
                    Undergraduate Degree
                  </span>
                  <h3 className="text-2xl font-bold text-[#111827] dark:text-white mt-3">
                    {edu.degree}
                  </h3>
                  <h4 className="text-base font-semibold text-[#0F766E] dark:text-[#14B8A6] mt-1">
                    {edu.institution}
                  </h4>
                </div>

                {/* CGPA Badge */}
                <div className="p-4 rounded-xl bg-[#0F766E] text-white text-center shadow-sm sm:w-36 flex-shrink-0">
                  <div className="text-[10px] uppercase font-bold tracking-wider opacity-85">Current CGPA</div>
                  <div className="text-2xl font-extrabold">{edu.gpa.split(' ')[0]}</div>
                  <div className="text-[10px] opacity-75">out of 10.0</div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-[#6B7280] dark:text-[#9CA3AF] text-xs font-semibold mb-6">
                <Calendar className="w-4 h-4 text-[#0F766E] dark:text-[#14B8A6]" />
                <span>Academic Period: {edu.period}</span>
              </div>

              {/* Course Highlights */}
              <div className="space-y-3 pt-5 border-t border-[#F3F4F6] dark:border-[#334155]">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#9CA3AF] flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-[#0F766E] dark:text-[#14B8A6]" />
                  <span>Academic Specialization & Highlights</span>
                </div>
                {edu.highlights.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-sm text-[#374151] dark:text-[#D1D5DB]">
                    <CheckCircle2 className="w-4 h-4 text-[#0F766E] dark:text-[#14B8A6] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
