import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Code2, Send } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const navItems = [
  { name: 'About',          href: '#about' },
  { name: 'Skills',         href: '#skills' },
  { name: 'Projects',       href: '#projects' },
  { name: 'Experience',     href: '#experience' },
  { name: 'Education',      href: '#education' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact',        href: '#contact' },
];

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled]       = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection]  = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const sections = ['about','skills','projects','experience','education','certifications','contact'];
      const pos = window.scrollY + 120;
      let current = 'home';
      for (const s of sections) {
        const el = document.getElementById(s);
        if (el && pos >= el.offsetTop) current = s;
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMobileMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-white/92 dark:bg-[#111827]/92 backdrop-blur-xl border-b border-[#E5E7EB] dark:border-[#374151] shadow-sm'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-[#0F766E] flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform duration-200">
              <Code2 className="w-[18px] h-[18px]" />
            </div>
            <span className="text-base font-bold tracking-tight text-[#111827] dark:text-white">
              Kowsalya<span className="text-[#0F766E]">.S</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5 bg-[#F3F4F6] dark:bg-[#1E293B] p-1.5 rounded-full border border-[#E5E7EB] dark:border-[#334155]">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a key={item.name} href={item.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-[#0F766E] text-white shadow-sm'
                      : 'text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#111827] dark:hover:text-white hover:bg-white dark:hover:bg-[#334155]'
                  }`}>
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="hidden sm:flex items-center gap-2">
            <button onClick={toggleTheme} aria-label="Toggle Theme"
              className="p-2.5 rounded-xl bg-[#F3F4F6] dark:bg-[#1E293B] text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#0F766E] border border-[#E5E7EB] dark:border-[#334155] transition-all duration-200 hover:scale-105">
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <a href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0F766E] hover:bg-[#0D6B64] text-white font-semibold text-xs shadow-sm hover:shadow-md transition-all duration-200">
              <Send className="w-3.5 h-3.5" />
              <span>Contact Me</span>
            </a>
          </div>

          {/* Mobile Controls */}
          <div className="flex sm:hidden items-center gap-2">
            <button onClick={toggleTheme}
              className="p-2 rounded-lg bg-[#F3F4F6] dark:bg-[#1E293B] text-[#6B7280] border border-[#E5E7EB] dark:border-[#334155]">
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#F3F4F6] dark:bg-[#1E293B] text-[#374151] dark:text-white border border-[#E5E7EB] dark:border-[#334155]">
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full inset-x-0 bg-white/96 dark:bg-[#111827]/96 backdrop-blur-xl border-b border-[#E5E7EB] dark:border-[#374151] shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a key={item.name} href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-150 ${
                    isActive
                      ? 'bg-teal-50 dark:bg-teal-900/20 text-[#0F766E] dark:text-[#14B8A6] border border-teal-100 dark:border-teal-800/30'
                      : 'text-[#374151] dark:text-[#D1D5DB] hover:bg-[#F3F4F6] dark:hover:bg-[#1E293B]'
                  }`}>
                  {item.name}
                </a>
              );
            })}
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}
              className="mt-2 text-center py-3 rounded-xl bg-[#0F766E] hover:bg-[#0D6B64] text-white font-bold text-sm shadow-sm transition-all duration-200">
              Contact Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
