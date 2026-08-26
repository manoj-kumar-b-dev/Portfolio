import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiDownload } from 'react-icons/fi';

/* Shared profile image component – used on both desktop and mobile */
const ProfileImage = ({ src, name, size }) => (
  <div
    className="relative rounded-full shrink-0 overflow-hidden"
    style={{
      width: size,
      height: size,
      border: '3px solid var(--accent)',
      opacity: 1,
      boxShadow: '0 8px 32px rgba(59, 130, 246, 0.18), 0 2px 12px rgba(0,0,0,0.10)',
    }}
  >
    <img
      src={src}
      alt={`Portrait of ${name}`}
      fetchpriority="high"
      decoding="async"
      className="w-full h-full object-cover object-top"
    />
  </div>
);

const Hero = ({ data }) => {
  return (
    <section id="home" className="min-h-screen py-10 md:py-16 flex items-center bg-[var(--bg-primary)] pt-20 sm:pt-24 md:pt-24 lg:pt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-12">

        {/* ── LEFT: Text & Buttons ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left w-full"
        >
          <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-xs sm:text-sm mb-3 sm:mb-4 block">
            WELCOME TO MY PORTFOLIO
          </span>
          <h1 className="text-[36px] min-[375px]:text-[44px] sm:text-[50px] md:text-6xl lg:text-7xl font-extrabold text-[var(--text-primary)] leading-[1.15] md:leading-tight mb-5 sm:mb-6">
            Hi, I'm <span className="text-[var(--accent)]">{data.name}</span>
            <br />
            a <span className="underline decoration-[var(--accent)] decoration-4 underline-offset-8">{data.title}</span>.
          </h1>
          <p className="text-[17px] sm:text-lg md:text-xl text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed">
            {data.tagline}
          </p>

          <div className="flex flex-col sm:flex-row gap-3.5 sm:gap-4 justify-center md:justify-start w-full sm:w-auto">
            <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
              <Link
                to="projects"
                smooth={true}
                duration={500}
                aria-label="View Projects section"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] transition-all font-semibold shadow-lg shadow-[var(--accent)]/30 cursor-pointer text-center flex items-center justify-center gap-2"
              >
                View Projects
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
              <a
                href={data.resumeUrl || '/resume.pdf'}
                download
                target="_blank"
                rel="noreferrer"
                aria-label="Download Resume PDF"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full border-2 border-[var(--accent)]/30 text-[var(--text-primary)] hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-[var(--accent)]/10 transition-all font-semibold cursor-pointer text-center flex items-center justify-center gap-2 bg-[var(--bg-secondary)]"
              >
                <FiDownload size={18} />
                Download Resume
              </a>
            </motion.div>
          </div>

          {/* ── Profile image on MOBILE: below buttons, centered ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex md:hidden justify-center mt-10"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ProfileImage src={data.image} name={data.name} size={255} />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* ── RIGHT: Profile image on DESKTOP/TABLET ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden md:flex flex-1 justify-center lg:justify-end items-center"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ProfileImage
              src={data.image}
              name={data.name}
              size={370}
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;

