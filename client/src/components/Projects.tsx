import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2, Github, ExternalLink, Award, ArrowRight } from 'lucide-react';
import { projectsData, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

const catStyle: Record<string, { pill: string }> = {
  'Data Analytics & Python': { pill: 'bg-teal-50 text-[#0F766E] border-teal-100 dark:bg-teal-900/20 dark:text-[#14B8A6] dark:border-teal-800/30' },
  'Full Stack Web':          { pill: 'bg-violet-50 text-violet-700 border-violet-100 dark:bg-violet-900/20 dark:text-violet-400 dark:border-violet-800/30' },
  'IoT & Assistive Tech':    { pill: 'bg-emerald-50 text-emerald-700 border-emerald-100 dark:bg-emerald-900/20 dark:text-emerald-400 dark:border-emerald-800/30' },
};

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Data Analytics & Python', 'Full Stack Web', 'IoT & Assistive Tech'];
  const filtered   = filter === 'All' ? projectsData : projectsData.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 relative z-10 bg-[#FAFAF8] dark:bg-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="section-badge mb-4">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] dark:text-white tracking-tight">
            Innovative <span className="text-gradient-teal">Projects</span>
          </h2>
          <p className="text-[#6B7280] dark:text-[#9CA3AF] text-sm mt-3 max-w-md mx-auto">
            End-to-end projects spanning data science, full-stack web, and IoT hardware
          </p>
          <div className="w-12 h-0.5 bg-[#0F766E] mx-auto rounded-full mt-5" />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                filter === cat
                  ? 'bg-[#0F766E] text-white shadow-sm scale-105'
                  : 'bg-white dark:bg-[#1E293B] text-[#6B7280] dark:text-[#9CA3AF] border border-[#E5E7EB] dark:border-[#334155] hover:border-[#0F766E]/40 hover:text-[#0F766E]'
              }`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filtered.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.07 }}
                className="rounded-2xl bg-white dark:bg-[#1E293B] border border-[#E5E7EB] dark:border-[#334155] shadow-card overflow-hidden hover:shadow-card-hover hover:border-[#0F766E]/25 hover:-translate-y-1.5 transition-all duration-300 flex flex-col group"
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden bg-[#111827] flex-shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/75 via-transparent to-transparent" />

                  {/* Category pill */}
                  <div className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-semibold border backdrop-blur-sm ${catStyle[project.category]?.pill ?? 'bg-white/20 text-white border-white/20'}`}>
                    {project.category}
                  </div>

                  {/* Achievement ribbon */}
                  {project.achievement && (
                    <div className="absolute bottom-3 left-3 right-3 px-3 py-1.5 rounded-xl bg-[#0F766E]/90 text-white text-[11px] font-semibold flex items-center gap-1.5 backdrop-blur-sm">
                      <Award className="w-3.5 h-3.5 flex-shrink-0" />
                      <span className="truncate">{project.achievement}</span>
                    </div>
                  )}
                </div>

                {/* Body */}
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-sm font-bold text-[#111827] dark:text-white mb-2 group-hover:text-[#0F766E] dark:group-hover:text-[#14B8A6] transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-[#6B7280] dark:text-[#9CA3AF] text-xs leading-relaxed mb-4 line-clamp-3 flex-grow">
                    {project.shortDesc}
                  </p>

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span key={tech}
                        className="px-2 py-0.5 rounded-md bg-[#F3F4F6] dark:bg-[#111827] text-[#6B7280] dark:text-[#9CA3AF] text-[10px] font-medium border border-[#E5E7EB] dark:border-[#374151]">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-0.5 rounded-md bg-[#F3F4F6] dark:bg-[#111827] text-[#9CA3AF] text-[10px] font-medium border border-[#E5E7EB] dark:border-[#374151]">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Footer */}
                  <div className="pt-3.5 border-t border-[#F3F4F6] dark:border-[#334155] flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" title="GitHub"
                        className="p-1.5 rounded-lg bg-[#F3F4F6] dark:bg-[#111827] text-[#6B7280] hover:text-[#0F766E] border border-[#E5E7EB] dark:border-[#374151] transition-all duration-200 hover:scale-110">
                        <Github className="w-3.5 h-3.5" />
                      </a>
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" title="Live Demo"
                          className="p-1.5 rounded-lg bg-[#F3F4F6] dark:bg-[#111827] text-[#6B7280] hover:text-[#0F766E] border border-[#E5E7EB] dark:border-[#374151] transition-all duration-200 hover:scale-110">
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                    <button onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F766E] dark:text-[#14B8A6] hover:underline underline-offset-2 group/btn transition-all">
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      </div>
    </section>
  );
};
