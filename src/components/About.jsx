import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiCode } from 'react-icons/fi';
import { FaRocket } from 'react-icons/fa';

const quickFacts = [
  { icon: FiAward, label: 'BCA Graduate', emoji: '🎓' },
  { icon: FiCode, label: 'MERN Stack Developer', emoji: '💻' },
  { icon: FaRocket, label: '3+ Projects Deployed', emoji: '🚀' },
];

const About = ({ data }) => {
  return (
    <section id="about" className="py-16 md:py-20 bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--accent)] mb-4">About Me</h2>
          <div className="w-20 sm:w-24 h-1 bg-[var(--accent)] mx-auto mb-8 sm:mb-10 rounded-full" />

          {/* Polished Main Paragraph Card */}
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ duration: 0.3 }}
            className="p-6 sm:p-8 bg-[var(--bg-primary)] border border-[var(--bg-secondary)] rounded-2xl shadow-lg hover:shadow-xl transition-all"
          >
            <p className="text-base sm:text-lg text-[var(--text-primary)] leading-relaxed text-center font-normal">
              {data.description}
            </p>
          </motion.div>

          {/* Compact Quick Facts Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 mt-8 sm:mt-10">
            {quickFacts.map((fact, index) => (
              <motion.div
                key={fact.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -3, scale: 1.02 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-center justify-center gap-3 p-4 bg-[var(--bg-primary)] border border-[var(--bg-secondary)] rounded-xl shadow-md hover:border-[var(--accent)]/30 hover:shadow-lg transition-all"
              >
                <span className="text-xl" role="img" aria-label={fact.label}>{fact.emoji}</span>
                <span className="text-xs sm:text-sm font-bold text-[var(--text-primary)]">{fact.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
