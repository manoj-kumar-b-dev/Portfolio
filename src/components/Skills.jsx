import React from 'react';
import { motion } from 'framer-motion';

const SkillCard = ({ title, skills, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -4 }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
    className="bg-[var(--bg-primary)] p-5 sm:p-6 rounded-2xl shadow-lg border border-[var(--bg-secondary)] hover:shadow-xl transition-all duration-300"
  >
    <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-[var(--text-primary)] border-b pb-2">{title}</h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
      {skills.map((skill) => (
        <motion.div
          key={skill.name}
          whileHover={{ scale: 1.08, y: -2 }}
          transition={{ duration: 0.2 }}
          className="flex flex-col items-center justify-center p-3 hover:bg-[var(--bg-secondary)] rounded-xl transition-colors cursor-default group"
        >
          <skill.icon className={`text-4xl sm:text-5xl mb-2 sm:mb-3 ${skill.color} drop-shadow-sm group-hover:scale-110 transition-transform duration-200`} />
          <span className="text-xs sm:text-sm font-medium text-[var(--text-secondary)] text-center group-hover:text-[var(--text-primary)] transition-colors">{skill.name}</span>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const Skills = ({ data }) => {
  const categories = [
    { title: "Frontend", data: data.frontend },
    { title: "Backend", data: data.backend },
    { title: "Database", data: data.database },
    { title: "Tools & Deployment", data: data.tools }
  ];

  return (
    <section id="skills" className="py-16 bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--accent)] mb-4">My Skills</h2>
          <div className="w-24 h-1 bg-[var(--accent)] mx-auto rounded-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {categories.map((cat, index) => (
            <SkillCard key={cat.title} title={cat.title} skills={cat.data} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
