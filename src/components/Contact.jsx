import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiSend, FiCheckCircle, FiAlertCircle, FiLoader, FiX } from 'react-icons/fi';

const Contact = ({ data }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(''); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState('');

  // Auto dismiss status message after 6 seconds
  useEffect(() => {
    if (status === 'success') {
      const timer = setTimeout(() => {
        setStatus('idle');
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    // Client-side input validation
    const { name, email, message } = formData;
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus('error');
      setErrorMsg('Please fill in all required fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setStatus('error');
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    setStatus('loading');

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || 'Failed to send message.');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-16 bg-[var(--bg-secondary)]">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--accent)] mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-[var(--accent)] mx-auto rounded-full" />
        </div>

        {/* Contact Card Box */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 bg-[var(--bg-primary)] rounded-2xl p-6 sm:p-8 md:p-8 shadow-lg border border-[var(--bg-secondary)] items-start">
          {/* Left Column: Compact Content Flow */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5 flex flex-col pb-6 md:pb-0 border-b md:border-b-0 border-[var(--bg-secondary)]"
          >
            {/* 1. Heading */}
            <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-2">
              Let's connect!
            </h3>

            {/* 2. Supporting text */}
            <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed mb-5">
              Have a project, opportunity, or question? I'd love to hear from you.
            </p>

            {/* 3. Email Card */}
            <a
              href={`mailto:${data.email}`}
              className="w-full flex items-center gap-3.5 p-3.5 mb-5 rounded-xl bg-[var(--bg-secondary)] hover:bg-[var(--accent)]/10 hover:border-[var(--accent)]/40 transition-all border border-[var(--bg-secondary)] group shadow-sm"
            >
              <div className="p-2.5 bg-[var(--bg-primary)] text-[var(--accent)] rounded-lg group-hover:scale-105 transition-transform shrink-0 shadow-xs">
                <FiMail size={20} />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)] mb-0.5">Email</h4>
                <span className="text-sm font-medium text-[var(--text-primary)] block truncate">{data.email}</span>
              </div>
            </a>

            {/* 4. Social Profiles Header */}
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)] block mb-2.5">
              Social Profiles
            </span>

            {/* 5. GitHub & LinkedIn Buttons */}
            <div className="w-full flex items-center gap-3">
              <a
                href={data.github}
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 p-3 bg-[var(--bg-secondary)] text-[var(--text-primary)] hover:text-white hover:bg-[var(--accent)] rounded-xl transition-all font-medium text-sm border border-[var(--bg-secondary)] shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
              >
                <FiGithub size={18} />
                <span>GitHub</span>
              </a>
              <a
                href={data.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 p-3 bg-[var(--bg-secondary)] text-[var(--text-primary)] hover:text-white hover:bg-[#0a66c2] rounded-xl transition-all font-medium text-sm border border-[var(--bg-secondary)] shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0a66c2]"
              >
                <FiLinkedin size={18} />
                <span>LinkedIn</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7 w-full"
          >
            <h4 className="text-lg font-bold text-[var(--text-primary)] mb-3 block">Send a Message</h4>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Alert Banner Prominently Placed Above Inputs */}
              <AnimatePresence mode="wait">
                {status === 'success' && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: -15, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.96 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center justify-between p-3.5 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-600 dark:text-emerald-400 shadow-md"
                  >
                    <div className="flex items-center space-x-3">
                      <FiCheckCircle size={20} className="shrink-0 text-emerald-500" />
                      <div>
                        <p className="font-bold text-sm">Message Sent Successfully! 🎉</p>
                        <p className="text-xs opacity-90">Thank you for reaching out. I'll get back to you soon!</p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setStatus('idle')}
                      aria-label="Close notification"
                      className="p-1 hover:bg-emerald-500/20 rounded-md transition-colors text-emerald-600 dark:text-emerald-400 shrink-0 ml-2"
                    >
                      <FiX size={16} />
                    </button>
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    key="error"
                    initial={{ opacity: 0, y: -15, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.96 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center justify-between p-3.5 rounded-xl bg-rose-500/15 border border-rose-500/40 text-rose-600 dark:text-rose-400 shadow-md"
                  >
                    <div className="flex items-center space-x-3">
                      <FiAlertCircle size={20} className="shrink-0 text-rose-500" />
                      <div>
                        <p className="font-bold text-sm">Sending Failed</p>
                        <p className="text-xs opacity-90">{errorMsg}</p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setStatus('idle')}
                      aria-label="Close notification"
                      className="p-1 hover:bg-rose-500/20 rounded-md transition-colors text-rose-600 dark:text-rose-400 shrink-0 ml-2"
                    >
                      <FiX size={16} />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)] mb-1.5">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-[var(--bg-secondary)] bg-[var(--bg-secondary)] text-[var(--text-primary)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-all placeholder:text-[var(--text-secondary)]/50"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)] mb-1.5">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-[var(--bg-secondary)] bg-[var(--bg-secondary)] text-[var(--text-primary)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-all placeholder:text-[var(--text-secondary)]/50"
                  placeholder="your@example.com"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)] mb-1.5">Message</label>
                <textarea
                  name="message"
                  required
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-[var(--bg-secondary)] bg-[var(--bg-secondary)] text-[var(--text-primary)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-all placeholder:text-[var(--text-secondary)]/50 resize-none"
                  placeholder="How can I help you?"
                />
              </div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full flex items-center justify-center space-x-2 bg-[var(--accent)] text-white px-6 py-3 rounded-xl font-bold hover:bg-[var(--accent-hover)] transition-all shadow-lg shadow-[var(--accent)]/30 disabled:opacity-70 disabled:cursor-not-allowed text-sm"
              >
                {status === 'loading' ? (
                  <>
                    <FiLoader className="animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <FiSend />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

