import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCheck } from 'react-icons/fi';

// ---------------------------------------------------------------------------
// ProjectCard — reusable component for a single project
// ---------------------------------------------------------------------------
const ProjectCard = ({ project, index }) => {
  const {
    title,
    category,
    description,
    image,
    techStack = [],
    features = [],
    liveUrl = '#',
    githubUrl = '#',
  } = project;

  return (
    <motion.article
      key={title}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.15 }}
      className="bg-[var(--bg-primary)] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col group"
      aria-label={`${title} — ${category}`}
    >
      {/* ── Project image ── */}
      <div className="relative h-52 overflow-hidden flex-shrink-0">
        <img
          src={image}
          alt={`Screenshot of ${title} — ${category}`}
          loading="lazy"
          decoding="async"
          width={600}
          height={400}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />

        {/* Hover overlay — quick-access icon buttons */}
        <div
          className="absolute inset-0 bg-black/55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4"
          aria-hidden="true"
        >
          <a
            href={liveUrl}
            target="_blank"
            rel="noreferrer"
            tabIndex={-1}
            className="p-3 bg-white text-black rounded-full hover:bg-[var(--accent)] hover:text-white transition-colors"
          >
            <FiExternalLink size={22} />
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            tabIndex={-1}
            className="p-3 bg-white text-black rounded-full hover:bg-[var(--accent)] hover:text-white transition-colors"
          >
            <FiGithub size={22} />
          </a>
        </div>
      </div>

      {/* ── Card body ── */}
      <div className="p-5 sm:p-6 flex flex-col flex-grow gap-3.5 sm:gap-4">

        {/* Category badge */}
        <span className="inline-block self-start px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20">
          {category}
        </span>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors leading-snug">
          {title}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
          {description}
        </p>

        {/* Key features */}
        {features.length > 0 && (
          <ul className="grid grid-cols-1 gap-y-1" aria-label="Key features">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                <FiCheck
                  size={13}
                  className="mt-0.5 flex-shrink-0 text-[var(--accent)]"
                  aria-hidden="true"
                />
                {feature}
              </li>
            ))}
          </ul>
        )}

        {/* Tech stack badges */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto pt-1">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 bg-[var(--bg-secondary)] text-[var(--accent)] text-xs font-semibold rounded-full border border-[var(--accent)]/20 hover:bg-[var(--accent)]/10 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col min-[380px]:flex-row gap-2.5 sm:gap-3 pt-2">
          <a
            href={liveUrl}
            target="_blank"
            rel="noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--accent)] text-white text-xs sm:text-sm font-semibold hover:bg-[var(--accent-hover)] transition-all shadow-sm shadow-[var(--accent)]/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
          >
            <FiExternalLink size={15} aria-hidden="true" />
            Live Demo
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border-2 border-[var(--accent)]/30 text-[var(--text-primary)] text-xs sm:text-sm font-semibold hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
          >
            <FiGithub size={15} aria-hidden="true" />
            GitHub
          </a>
        </div>
      </div>
    </motion.article>
  );
};

// ---------------------------------------------------------------------------
// Projects section
// ---------------------------------------------------------------------------
const Projects = ({ data }) => {
  return (
    <section id="projects" className="py-16 bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section heading */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--accent)] mb-4">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-[var(--accent)] mx-auto rounded-full" />
          <p className="mt-4 sm:mt-6 text-[var(--text-secondary)] max-w-2xl mx-auto text-sm sm:text-base">
            A selection of real-world products I've designed and built — from AI dashboards to e-commerce platforms.
          </p>
        </div>

        {/* Cards grid — 1 col mobile · 2 col tablet · 3 col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {data.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
