import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2, X, Linkedin, Github } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';
import { sendContactMessage, ContactFormData } from '../api';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '', email: '', phone: '', subject: '', message: '',
  });
  const [errors, setErrors]               = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting]   = useState(false);
  const [showSuccess, setShowSuccess]     = useState(false);
  const [serverError, setServerError]     = useState<string | null>(null);

  const validate = (): boolean => {
    const errs: Partial<ContactFormData> = {};
    if (!formData.name.trim())    errs.name    = 'Full name is required';
    if (!formData.email.trim()) { errs.email   = 'Email address is required'; }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errs.email = 'Enter a valid email address';
    if (!formData.subject.trim()) errs.subject = 'Subject is required';
    if (!formData.message.trim()) { errs.message = 'Message is required'; }
    else if (formData.message.trim().length < 10) errs.message = 'Message must be at least 10 characters';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);
    if (!validate()) return;
    setIsSubmitting(true);
    try {
      await sendContactMessage(formData);
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (err: any) {
      setIsSubmitting(false);
      setServerError(err.message || 'Something went wrong. Please try again.');
    }
  };

  const inputBase =
    'w-full px-4 py-3 rounded-xl bg-[#FAFAF8] dark:bg-[#111827] border text-sm text-[#111827] dark:text-white placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#0F766E]/30 focus:border-[#0F766E] transition-all duration-200';

  return (
    <section id="contact" className="py-24 relative z-10 bg-white dark:bg-[#0D1117]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="section-badge mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] dark:text-white tracking-tight">
            Contact <span className="text-gradient-teal">Kowsalya S</span>
          </h2>
          <p className="text-[#6B7280] dark:text-[#9CA3AF] text-sm mt-3 max-w-md mx-auto">
            Available for software engineering placements, machine learning roles, and data analytics inquiries.
          </p>
          <div className="w-12 h-0.5 bg-[#0F766E] mx-auto rounded-full mt-5" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-5"
          >
            <div className="p-7 rounded-2xl bg-[#FAFAF8] dark:bg-[#1E293B] border border-[#E5E7EB] dark:border-[#334155]">
              <h3 className="text-lg font-bold text-[#111827] dark:text-white mb-5">Direct Contact</h3>

              <div className="space-y-3">
                {[
                  {
                    href: `mailto:${personalDetails.email}`,
                    icon: <Mail className="w-4 h-4" />,
                    label: 'Email Address',
                    value: personalDetails.email,
                    iconBg: 'bg-teal-50 dark:bg-teal-900/20 text-[#0F766E] dark:text-[#14B8A6]',
                  },
                  {
                    href: `tel:${personalDetails.phone}`,
                    icon: <Phone className="w-4 h-4" />,
                    label: 'Phone / WhatsApp',
                    value: personalDetails.phone,
                    iconBg: 'bg-teal-50 dark:bg-teal-900/20 text-[#0F766E] dark:text-[#14B8A6]',
                  },
                ].map((item) => (
                  <a key={item.label} href={item.href}
                    className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white dark:bg-[#111827] border border-[#E5E7EB] dark:border-[#374151] hover:border-[#0F766E]/40 transition-all group">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${item.iconBg} group-hover:scale-110 transition-transform`}>
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#9CA3AF]">{item.label}</div>
                      <div className="text-sm font-semibold text-[#111827] dark:text-white group-hover:text-[#0F766E] transition-colors">{item.value}</div>
                    </div>
                  </a>
                ))}

                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white dark:bg-[#111827] border border-[#E5E7EB] dark:border-[#374151]">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-800/40 text-slate-500 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-[#9CA3AF]">Location</div>
                    <div className="text-sm font-semibold text-[#111827] dark:text-white">{personalDetails.location}</div>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="mt-6 pt-5 border-t border-[#F3F4F6] dark:border-[#334155]">
                <div className="text-[10px] font-bold uppercase tracking-widest text-[#9CA3AF] mb-3">Professional Networks</div>
                <div className="flex gap-2.5">
                  {[
                    { href: personalDetails.github,   icon: <Github className="w-4 h-4" />,   label: 'GitHub' },
                    { href: personalDetails.linkedin,  icon: <Linkedin className="w-4 h-4" />,  label: 'LinkedIn' },
                  ].map((s) => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                      className="flex-1 py-2.5 px-3 rounded-xl bg-white dark:bg-[#111827] border border-[#E5E7EB] dark:border-[#374151] hover:bg-[#0F766E] hover:border-[#0F766E] hover:text-white text-[#374151] dark:text-[#D1D5DB] font-semibold text-xs flex items-center justify-center gap-2 transition-all duration-200">
                      {s.icon}
                      <span>{s.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="p-8 sm:p-10 rounded-2xl bg-white dark:bg-[#1E293B] border border-[#E5E7EB] dark:border-[#334155] shadow-card-md">
              <h3 className="text-xl font-bold text-[#111827] dark:text-white mb-1">Send a Message</h3>
              <p className="text-[#6B7280] dark:text-[#9CA3AF] text-xs mb-7">
                Messages are delivered directly to Kowsalya's inbox via Node.js SMTP.
              </p>

              {/* Server error */}
              {serverError && (
                <div className="p-3.5 mb-5 rounded-xl bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800/40 text-rose-700 dark:text-rose-400 text-xs font-semibold flex items-center gap-2.5">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{serverError}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-[#374151] dark:text-[#D1D5DB] mb-1.5 uppercase tracking-wider">
                      Your Name *
                    </label>
                    <input type="text" placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`${inputBase} ${errors.name ? 'border-rose-400' : 'border-[#E5E7EB] dark:border-[#374151]'}`} />
                    {errors.name && <p className="text-rose-500 text-xs mt-1">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-[#374151] dark:text-[#D1D5DB] mb-1.5 uppercase tracking-wider">
                      Email Address *
                    </label>
                    <input type="email" placeholder="e.g. sarah@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`${inputBase} ${errors.email ? 'border-rose-400' : 'border-[#E5E7EB] dark:border-[#374151]'}`} />
                    {errors.email && <p className="text-rose-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-semibold text-[#374151] dark:text-[#D1D5DB] mb-1.5 uppercase tracking-wider">
                      Phone (Optional)
                    </label>
                    <input type="tel" placeholder="e.g. +91 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`${inputBase} border-[#E5E7EB] dark:border-[#374151]`} />
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-semibold text-[#374151] dark:text-[#D1D5DB] mb-1.5 uppercase tracking-wider">
                      Subject *
                    </label>
                    <input type="text" placeholder="e.g. Job Opportunity"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className={`${inputBase} ${errors.subject ? 'border-rose-400' : 'border-[#E5E7EB] dark:border-[#374151]'}`} />
                    {errors.subject && <p className="text-rose-500 text-xs mt-1">{errors.subject}</p>}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-[#374151] dark:text-[#D1D5DB] mb-1.5 uppercase tracking-wider">
                    Message *
                  </label>
                  <textarea rows={5} placeholder="Write your message here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`${inputBase} resize-none ${errors.message ? 'border-rose-400' : 'border-[#E5E7EB] dark:border-[#374151]'}`} />
                  {errors.message && <p className="text-rose-500 text-xs mt-1">{errors.message}</p>}
                </div>

                {/* Submit */}
                <button type="submit" disabled={isSubmitting}
                  className="w-full py-3.5 px-8 rounded-xl bg-[#0F766E] hover:bg-[#0D6B64] text-white font-semibold text-sm shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

        </div>

        {/* Success modal */}
        <AnimatePresence>
          {showSuccess && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowSuccess(false)}
                className="fixed inset-0 bg-[#111827]/60 backdrop-blur-sm"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 20 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="relative w-full max-w-sm p-8 rounded-2xl bg-white dark:bg-[#1E293B] border border-[#E5E7EB] dark:border-[#334155] shadow-2xl z-10 text-center"
              >
                <button onClick={() => setShowSuccess(false)}
                  className="absolute top-4 right-4 p-1.5 rounded-lg text-[#9CA3AF] hover:text-[#374151] dark:hover:text-white transition-colors">
                  <X className="w-4 h-4" />
                </button>

                <div className="w-14 h-14 rounded-full bg-teal-50 dark:bg-teal-900/20 text-[#0F766E] dark:text-[#14B8A6] flex items-center justify-center mx-auto mb-5">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <h3 className="text-xl font-bold text-[#111827] dark:text-white mb-2">
                  ✔ Message Sent Successfully
                </h3>
                <p className="text-[#6B7280] dark:text-[#9CA3AF] text-sm leading-relaxed mb-6">
                  Thank you for reaching out! Kowsalya will get back to you as soon as possible.
                </p>

                <button onClick={() => setShowSuccess(false)}
                  className="w-full py-3 rounded-xl bg-[#0F766E] hover:bg-[#0D6B64] text-white font-semibold text-sm transition-all duration-200">
                  Close
                </button>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
