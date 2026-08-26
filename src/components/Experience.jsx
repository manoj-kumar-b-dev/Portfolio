import React from 'react';
import { motion } from 'framer-motion';

const Experience = ({ data }) => {
  return (
    <section id="experience" className="py-16 bg-[var(--bg-primary)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--accent)] mb-4">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-[var(--accent)] mx-auto rounded-full" />
        </div>

        {/* Vertical Timeline Wrapper */}
        <div className="relative space-y-8 md:space-y-12 before:absolute before:top-3 before:bottom-3 before:left-5 md:before:left-1/2 before:-translate-x-1/2 before:w-0.5 before:bg-gradient-to-b before:from-[var(--accent)]/30 before:via-[var(--accent)] before:to-[var(--accent)]/30">
          {data.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative flex flex-col md:flex-row items-center"
              >
                {/* Timeline Marker Circle */}
                <div className="absolute left-5 md:left-1/2 -translate-x-1/2 top-4 w-8 h-8 rounded-full border-4 border-[var(--bg-primary)] bg-[var(--accent)] shadow-md z-10 flex items-center justify-center shrink-0">
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>

                {/* Card Container */}
                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.3 }}
                  className={`w-[calc(100%-3rem)] ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                    isEven ? 'md:mr-auto' : 'md:ml-auto'
                  } bg-[var(--bg-secondary)] p-5 sm:p-6 rounded-2xl shadow-md border border-[var(--bg-secondary)] hover:border-[var(--accent)]/40 hover:shadow-lg transition-all text-left`}
                >
                  {/* Date Badge */}
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20 mb-2.5">
                    {item.duration}
                  </span>

                  {/* Degree / Role */}
                  <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] leading-snug mb-1">
                    {item.role}
                  </h3>

                  {/* Institution / Company */}
                  <p className="text-xs sm:text-sm font-semibold text-[var(--text-secondary)] mb-4">
                    {item.company}
                  </p>

                  {/* Bullet Points */}
                  {item.bullets && item.bullets.length > 0 ? (
                    <ul className="space-y-2">
                      {item.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2 flex-shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
