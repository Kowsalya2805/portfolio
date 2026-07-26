import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, FolderGit2, Mail, Github, Linkedin, ArrowDown, Sparkles, Phone, Award } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';
import { recordResumeDownload } from '../api';

export const Hero: React.FC = () => {
  const [titleIndex, setTitleIndex]       = useState(0);
  const [displayText, setDisplayText]     = useState('');
  const [isDeleting, setIsDeleting]       = useState(false);
  const [downloadCount, setDownloadCount] = useState<number | null>(null);
  const [imgError, setImgError]           = useState(false);

  // Typing effect
  useEffect(() => {
    const current = personalDetails.titles[titleIndex];
    const speed   = isDeleting ? 35 : 75;
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(current.substring(0, displayText.length + 1));
        if (displayText.length === current.length) setTimeout(() => setIsDeleting(true), 2200);
      } else {
        setDisplayText(current.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setTitleIndex((p) => (p + 1) % personalDetails.titles.length);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex]);

  const handleDownloadResume = async () => {
    try {
      const res = await recordResumeDownload();
      if (res?.resumeDownloads) setDownloadCount(res.resumeDownloads);
    } catch {}
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-20 overflow-hidden bg-[#FAFAF8] dark:bg-[#111827]">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 dark:opacity-20 pointer-events-none" />

      {/* Soft teal glow (very subtle) */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-teal-500/5 dark:bg-teal-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">

          {/* ── Left: Text Content ──────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1"
          >
            {/* Status badge */}
            <div className="section-badge mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Available for Placements & SDE / ML Roles
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-6xl font-extrabold tracking-tight text-[#111827] dark:text-white mb-4 leading-tight">
              Hi, I'm{' '}
              <span className="text-gradient-teal">{personalDetails.name}</span>
            </h1>

            {/* Typing title */}
            <div className="h-10 flex items-center mb-5 w-full justify-center lg:justify-start">
              <span className="text-lg sm:text-xl font-medium text-[#6B7280] dark:text-[#9CA3AF]">
                <span className="text-[#0F766E] font-mono mr-2">&gt;</span>
                {displayText}
                <span className="animate-pulse text-[#0F766E] font-bold ml-px">|</span>
              </span>
            </div>

            {/* Bio */}
            <p className="text-base sm:text-lg text-[#6B7280] dark:text-[#9CA3AF] max-w-xl leading-relaxed mb-8">
              Driven Artificial Intelligence & Data Science scholar with hands-on expertise in
              Python, Machine Learning, Exploratory Data Analysis, FastAPI, and IoT devices.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-8">
              <a
                href={personalDetails.resumePdf}
                download="Kowsalya_S_Resume.pdf"
                onClick={handleDownloadResume}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0F766E] hover:bg-[#0D6B64] text-white font-semibold text-sm shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
                {downloadCount !== null && (
                  <span className="ml-1 px-1.5 py-0.5 rounded-full bg-white/20 text-xs">{downloadCount}</span>
                )}
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white dark:bg-[#1E293B] hover:bg-[#F9FAFB] dark:hover:bg-[#334155] text-[#374151] dark:text-white font-semibold text-sm border border-[#E5E7EB] dark:border-[#334155] shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
              >
                <FolderGit2 className="w-4 h-4 text-[#0F766E]" />
                <span>View Projects</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[#0F766E]/30 hover:border-[#0F766E]/60 hover:bg-teal-50 dark:hover:bg-teal-900/10 text-[#0F766E] dark:text-[#14B8A6] font-semibold text-sm transition-all duration-200"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-2.5">
              <span className="text-xs font-medium uppercase tracking-widest text-[#9CA3AF] hidden sm:inline pr-1">
                Connect
              </span>
              {[
                { href: personalDetails.github,          icon: <Github className="w-4 h-4" />,  label: 'GitHub' },
                { href: personalDetails.linkedin,        icon: <Linkedin className="w-4 h-4" />, label: 'LinkedIn' },
                { href: `mailto:${personalDetails.email}`, icon: <Mail className="w-4 h-4" />,  label: 'Email' },
                { href: `tel:${personalDetails.phone}`,  icon: <Phone className="w-4 h-4" />,   label: 'Phone' },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={item.label}
                  className="p-2.5 rounded-xl bg-white dark:bg-[#1E293B] text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#0F766E] dark:hover:text-[#14B8A6] border border-[#E5E7EB] dark:border-[#334155] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* ── Right: Profile Image ────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2"
          >
            <div className="relative">
              {/* Subtle halo */}
              <div className="absolute inset-[-12px] rounded-full bg-teal-500/8 dark:bg-teal-500/6 blur-2xl" />

              {/* Image ring */}
              <div className="relative w-52 h-52 sm:w-64 sm:h-64 lg:w-76 lg:h-76 xl:w-[22rem] xl:h-[22rem]"
                   style={{ width: 'clamp(12rem, 20vw + 4rem, 22rem)', height: 'clamp(12rem, 20vw + 4rem, 22rem)' }}>

                {/* Outer decorative ring */}
                <div className="absolute inset-[-3px] rounded-full border border-[#E5E7EB] dark:border-[#374151]" />

                {/* Image container */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white dark:border-[#1E293B] shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
                  {!imgError ? (
                    <img
                      src={personalDetails.photo}
                      alt={`${personalDetails.name} - AI & Data Science Student`}
                      className="w-full h-full object-cover object-top"
                      onError={() => setImgError(true)}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-[#F3F4F6] dark:bg-[#1E293B]">
                      <span className="text-5xl font-black text-[#0F766E]">K</span>
                    </div>
                  )}
                </div>

                {/* Floating badge: CGPA */}
                <motion.div
                  initial={{ y: 16, opacity: 0 }}
                  animate={{ y: 0,  opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="absolute -bottom-2 -left-6 sm:-left-10 flex items-center gap-2 px-3 py-2 rounded-2xl bg-white dark:bg-[#1E293B] border border-[#E5E7EB] dark:border-[#334155] shadow-lg"
                >
                  <div className="w-8 h-8 rounded-xl bg-teal-50 dark:bg-teal-900/20 text-[#0F766E] dark:text-[#14B8A6] flex items-center justify-center">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-[#9CA3AF] leading-none mb-0.5">CGPA</div>
                    <div className="text-sm font-extrabold text-[#111827] dark:text-white leading-none">8.01 / 10.0</div>
                  </div>
                </motion.div>

                {/* Floating badge: Award */}
                <motion.div
                  initial={{ y: -16, opacity: 0 }}
                  animate={{ y: 0,   opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="absolute -top-2 -right-6 sm:-right-10 flex items-center gap-2 px-3 py-2 rounded-2xl bg-white dark:bg-[#1E293B] border border-[#E5E7EB] dark:border-[#334155] shadow-lg"
                >
                  <div className="w-8 h-8 rounded-xl bg-teal-50 dark:bg-teal-900/20 text-[#0F766E] dark:text-[#14B8A6] flex items-center justify-center">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-[#9CA3AF] leading-none mb-0.5">Award</div>
                    <div className="text-sm font-extrabold text-[#111827] dark:text-white leading-none">Innovation</div>
                  </div>
                </motion.div>

              </div>
            </div>
          </motion.div>

        </div>

        {/* Scroll down indicator */}
        <div className="mt-16 text-center flex flex-col items-center">
          <a href="#about"
            className="group flex flex-col items-center gap-2 text-[#9CA3AF] hover:text-[#0F766E] transition-colors duration-200">
            <span className="text-[10px] font-semibold tracking-widest uppercase">Scroll Down</span>
            <div className="p-2 rounded-full border border-[#E5E7EB] dark:border-[#374151] group-hover:border-[#0F766E] animate-bounce transition-all duration-200">
              <ArrowDown className="w-4 h-4" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
