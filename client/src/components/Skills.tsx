import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Code, Database, Globe, Brain, HardDrive, Layers } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

const categoryConfig: Record<string, { icon: React.ReactNode; iconBg: string; iconColor: string; barColor: string }> = {
  'Programming': {
    icon: <Code className="w-4.5 h-4.5 w-[18px] h-[18px]" />,
    iconBg: 'bg-teal-50 dark:bg-teal-900/20',
    iconColor: 'text-[#0F766E] dark:text-[#14B8A6]',
    barColor: 'bg-[#0F766E]',
  },
  'Frontend': {
    icon: <Globe className="w-[18px] h-[18px]" />,
    iconBg: 'bg-violet-50 dark:bg-violet-900/20',
    iconColor: 'text-violet-600 dark:text-violet-400',
    barColor: 'bg-violet-500',
  },
  'Backend & Web': {
    icon: <Layers className="w-[18px] h-[18px]" />,
    iconBg: 'bg-teal-50 dark:bg-teal-900/20',
    iconColor: 'text-[#0F766E] dark:text-[#14B8A6]',
    barColor: 'bg-[#0F766E]',
  },
  'Data Science & ML': {
    icon: <Brain className="w-[18px] h-[18px]" />,
    iconBg: 'bg-slate-100 dark:bg-slate-800/40',
    iconColor: 'text-slate-600 dark:text-slate-400',
    barColor: 'bg-[#0F766E]',
  },
  'Databases': {
    icon: <Database className="w-[18px] h-[18px]" />,
    iconBg: 'bg-slate-100 dark:bg-slate-800/40',
    iconColor: 'text-slate-600 dark:text-slate-400',
    barColor: 'bg-slate-500',
  },
  'Hardware & Cloud': {
    icon: <HardDrive className="w-[18px] h-[18px]" />,
    iconBg: 'bg-emerald-50 dark:bg-emerald-900/20',
    iconColor: 'text-emerald-600 dark:text-emerald-400',
    barColor: 'bg-emerald-500',
  },
};

const defaultConfig = {
  icon: <Cpu className="w-[18px] h-[18px]" />,
  iconBg: 'bg-teal-50 dark:bg-teal-900/20',
  iconColor: 'text-[#0F766E] dark:text-[#14B8A6]',
  barColor: 'bg-[#0F766E]',
};

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('All');

  const categories    = ['All', ...skillCategories.map((c) => c.name)];
  const filtered      = activeTab === 'All' ? skillCategories : skillCategories.filter((c) => c.name === activeTab);
  const getConf       = (name: string) => categoryConfig[name] ?? defaultConfig;

  return (
    <section id="skills" className="py-24 relative z-10 bg-white dark:bg-[#0D1117]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="section-badge mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] dark:text-white tracking-tight">
            Skills & <span className="text-gradient-teal">Proficiency</span>
          </h2>
          <p className="text-[#6B7280] dark:text-[#9CA3AF] text-sm mt-3 max-w-md mx-auto">
            A curated stack of technologies I build with regularly
          </p>
          <div className="w-12 h-0.5 bg-[#0F766E] mx-auto rounded-full mt-5" />
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                activeTab === cat
                  ? 'bg-[#0F766E] text-white shadow-sm scale-105'
                  : 'bg-white dark:bg-[#1E293B] text-[#6B7280] dark:text-[#9CA3AF] border border-[#E5E7EB] dark:border-[#334155] hover:border-[#0F766E]/40 hover:text-[#0F766E]'
              }`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filtered.map((category, idx) => {
              const conf = getConf(category.name);
              return (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: idx * 0.06 }}
                  className="p-6 rounded-2xl bg-[#FAFAF8] dark:bg-[#1E293B] border border-[#E5E7EB] dark:border-[#334155] hover:border-[#0F766E]/30 hover:shadow-card-lg hover:-translate-y-1 transition-all duration-300 group"
                >
                  {/* Card header */}
                  <div className="flex items-center gap-3 mb-5 pb-4 border-b border-[#F3F4F6] dark:border-[#334155]">
                    <div className={`p-2.5 rounded-xl ${conf.iconBg} ${conf.iconColor} group-hover:scale-110 transition-transform duration-200`}>
                      {conf.icon}
                    </div>
                    <h3 className="text-sm font-bold text-[#111827] dark:text-white flex-1">{category.name}</h3>
                    <span className="text-xs text-[#9CA3AF] bg-white dark:bg-[#111827] px-2 py-0.5 rounded-full border border-[#E5E7EB] dark:border-[#374151]">
                      {category.skills.length}
                    </span>
                  </div>

                  {/* Skill bars */}
                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between items-center mb-1.5">
                          <span className="text-xs font-semibold text-[#374151] dark:text-[#D1D5DB]">{skill.name}</span>
                          <span className={`text-xs font-bold font-mono ${conf.iconColor}`}>{skill.level}%</span>
                        </div>
                        <div className="w-full h-1.5 rounded-full bg-[#F3F4F6] dark:bg-[#374151] overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
                            className={`h-full rounded-full ${conf.barColor}`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Metrics */}
        <div className="mt-12 p-8 rounded-2xl bg-[#FAFAF8] dark:bg-[#1E293B] border border-[#E5E7EB] dark:border-[#334155]">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-[#9CA3AF] mb-8">Core Proficiency Highlights</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '95', label: 'Python',       dash: 95 },
              { value: '94', label: 'EDA',           dash: 94 },
              { value: '88', label: 'ML Models',     dash: 88 },
              { value: '88', label: 'IoT Hardware',  dash: 88 },
            ].map((m) => (
              <div key={m.label} className="flex flex-col items-center">
                <div className="relative w-18 h-18 mb-3 flex items-center justify-center"
                     style={{ width: '72px', height: '72px' }}>
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                    <path className="text-[#F3F4F6] dark:text-[#374151]" strokeWidth="3" stroke="currentColor" fill="none"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    <path className="text-[#0F766E]" strokeDasharray={`${m.dash}, 100`} strokeWidth="3" strokeLinecap="round"
                          stroke="currentColor" fill="none"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  </svg>
                  <span className="absolute text-sm font-black font-mono text-[#111827] dark:text-white">{m.value}%</span>
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#6B7280]">{m.label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
