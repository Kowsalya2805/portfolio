import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, Award, CheckCircle2, Cpu, Layers } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#111827]/70 backdrop-blur-sm"
        />

        {/* Dialog Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-3xl rounded-2xl bg-white dark:bg-[#1E293B] border border-[#E5E7EB] dark:border-[#334155] shadow-2xl overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col"
        >
          {/* Header Banner Image */}
          <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-[#111827]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#1E293B] via-transparent to-black/30" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-white hover:bg-black/70 transition-colors backdrop-blur-sm"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Category Tag */}
            <div className="absolute bottom-4 left-6 px-3 py-1 rounded-full bg-[#0F766E] text-white text-xs font-semibold shadow-sm">
              {project.category}
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-[#111827] dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-[#6B7280] dark:text-[#9CA3AF] leading-relaxed text-sm">
                {project.fullDesc}
              </p>
            </div>

            {/* Achievement Badge Banner if present */}
            {project.achievement && (
              <div className="p-4 rounded-xl bg-teal-50 dark:bg-teal-900/20 border border-teal-100 dark:border-teal-800/30 text-[#0F766E] dark:text-[#14B8A6] flex items-start gap-3">
                <Award className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm font-semibold">{project.achievement}</div>
              </div>
            )}

            {/* Features List */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#9CA3AF] mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#0F766E] dark:text-[#14B8A6]" />
                <span>Key Features & Architecture</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.features.map((feat, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-[#FAFAF8] dark:bg-[#111827] border border-[#E5E7EB] dark:border-[#374151] flex items-start gap-2.5 text-xs font-medium text-[#374151] dark:text-[#D1D5DB]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#0F766E] dark:text-[#14B8A6] flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#9CA3AF] mb-3 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#0F766E] dark:text-[#14B8A6]" />
                <span>Technologies Used</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg bg-[#F3F4F6] dark:bg-[#111827] text-[#374151] dark:text-[#D1D5DB] text-xs font-semibold border border-[#E5E7EB] dark:border-[#374151]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#F3F4F6] dark:border-[#334155]">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#111827] dark:bg-white text-white dark:text-[#111827] font-semibold text-xs hover:bg-[#1F2937] dark:hover:bg-[#F3F4F6] transition-colors shadow-sm"
              >
                <Github className="w-4 h-4" />
                <span>View Source Code</span>
              </a>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#0F766E] hover:bg-[#0D6B64] text-white font-semibold text-xs shadow-sm transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Project Demo</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
