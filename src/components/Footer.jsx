import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import logoImg from '../assets/logo.png';

const Footer = ({ data }) => {
  const email = data?.email || 'manojkumarb.2305@gmail.com';
  const github = data?.github || 'https://github.com/manoj-kumar-b-dev/';
  const linkedin = data?.linkedin || 'https://www.linkedin.com/in/manoj-kumar-4981873b2/';

  return (
    <footer className="py-8 bg-[var(--bg-primary)] border-t border-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center gap-4 text-center">
        
        {/* Logo & Name */}
        <div className="flex items-center gap-2.5">
          <img src={logoImg} alt="Portfolio Logo" className="w-7 h-7 rounded-full object-cover border border-[var(--accent)]/40 shadow-sm" />
          <span className="font-bold text-base text-[var(--text-primary)] tracking-tight">Manoj Kumar</span>
        </div>

        {/* Social & Email Icon Links */}
        <div className="flex items-center gap-4">
          <motion.a
            whileHover={{ y: -3, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            href={github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="p-2.5 rounded-full bg-[var(--bg-secondary)] text-[var(--text-primary)] hover:text-white hover:bg-[var(--accent)] transition-colors shadow-sm"
          >
            <FiGithub size={18} />
          </motion.a>
          <motion.a
            whileHover={{ y: -3, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            href={linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2.5 rounded-full bg-[var(--bg-secondary)] text-[var(--text-primary)] hover:text-white hover:bg-[#0a66c2] transition-colors shadow-sm"
          >
            <FiLinkedin size={18} />
          </motion.a>
          <motion.a
            whileHover={{ y: -3, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            href={`mailto:${email}`}
            aria-label="Send Email"
            className="p-2.5 rounded-full bg-[var(--bg-secondary)] text-[var(--text-primary)] hover:text-white hover:bg-[var(--accent)] transition-colors shadow-sm"
          >
            <FiMail size={18} />
          </motion.a>
        </div>

        {/* Copyright */}
        <p className="text-[var(--text-secondary)]/80 text-xs font-medium">
          © {new Date().getFullYear()} Manoj Kumar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
