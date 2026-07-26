import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart, Code2 } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 bg-white dark:bg-[#0D1117] border-t border-[#E5E7EB] dark:border-[#374151] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-[#E5E7EB] dark:border-[#374151]">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <a href="#" className="flex items-center gap-2 text-xl font-bold tracking-tight">
              <div className="w-8 h-8 rounded-xl bg-[#0F766E] flex items-center justify-center text-white shadow-sm">
                <Code2 className="w-4 h-4" />
              </div>
              <span className="text-[#111827] dark:text-white font-bold">
                Kowsalya<span className="text-[#0F766E]">.S</span>
              </span>
            </a>
            <p className="text-[#6B7280] dark:text-[#9CA3AF] text-xs max-w-sm leading-relaxed">
              Artificial Intelligence & Data Science Engineer specialized in Python, Machine Learning models, FastAPI, React, and IoT embedded systems.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#9CA3AF] mb-3">Navigation</h4>
              <ul className="space-y-2 text-xs font-medium">
                <li><a href="#about" className="text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#0F766E] dark:hover:text-[#14B8A6] transition-colors">About Me</a></li>
                <li><a href="#skills" className="text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#0F766E] dark:hover:text-[#14B8A6] transition-colors">Skills</a></li>
                <li><a href="#projects" className="text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#0F766E] dark:hover:text-[#14B8A6] transition-colors">Projects</a></li>
                <li><a href="#experience" className="text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#0F766E] dark:hover:text-[#14B8A6] transition-colors">Internships</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#9CA3AF] mb-3">Credentials</h4>
              <ul className="space-y-2 text-xs font-medium">
                <li><a href="#education" className="text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#0F766E] dark:hover:text-[#14B8A6] transition-colors">Education</a></li>
                <li><a href="#certifications" className="text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#0F766E] dark:hover:text-[#14B8A6] transition-colors">Certifications</a></li>
                <li><a href="#achievements" className="text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#0F766E] dark:hover:text-[#14B8A6] transition-colors">Achievements</a></li>
                <li><a href="#contact" className="text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#0F766E] dark:hover:text-[#14B8A6] transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

          {/* Socials & Scroll to Top */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end justify-between gap-6">
            <div className="flex items-center gap-2.5">
              <a
                href={personalDetails.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-xl bg-[#FAFAF8] dark:bg-[#1E293B] text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#0F766E] border border-[#E5E7EB] dark:border-[#374151] transition-all duration-200 hover:scale-105"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalDetails.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-xl bg-[#FAFAF8] dark:bg-[#1E293B] text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#0F766E] border border-[#E5E7EB] dark:border-[#374151] transition-all duration-200 hover:scale-105"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalDetails.email}`}
                aria-label="Email"
                className="p-2.5 rounded-xl bg-[#FAFAF8] dark:bg-[#1E293B] text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#0F766E] border border-[#E5E7EB] dark:border-[#374151] transition-all duration-200 hover:scale-105"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="px-4 py-2 rounded-xl bg-[#0F766E] hover:bg-[#0D6B64] text-white shadow-sm hover:shadow transition-all duration-200 flex items-center gap-2 text-xs font-semibold"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-[#9CA3AF]">
          <div>
            © {new Date().getFullYear()} Kowsalya S. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>using React, Tailwind CSS & Express</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
