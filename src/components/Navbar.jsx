import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-scroll';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../assets/logo.png';

const navLinks = [
  { name: 'Home',       to: 'home' },
  { name: 'About',      to: 'about' },
  { name: 'Skills',     to: 'skills' },
  { name: 'Projects',   to: 'projects' },
  { name: 'Experience', to: 'experience' },
  { name: 'Contact',    to: 'contact' },
];

const Navbar = ({ heroName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [activeSection, setActiveSection] = useState('home');

  /* ── Theme toggle ── */
  useEffect(() => {
    if (theme === 'dark') document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [theme]);

  const toggleTheme = () => setTheme(t => t === 'light' ? 'dark' : 'light');

  /* ── Navbar background on scroll ── */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  /* ── Initial hash on page load ── */
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && navLinks.some(l => l.to === hash)) {
      setActiveSection(hash);
    }
  }, []);

  const handleMobileLinkClick = useCallback((to) => {
    setIsOpen(false);
    setActiveSection(to);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0 cursor-pointer"
          >
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              onSetActive={() => setActiveSection('home')}
              onClick={() => setActiveSection('home')}
              className="flex items-center gap-3 text-2xl font-bold tracking-tighter text-[var(--accent)] group"
            >
              <img
                src={logoImg}
                alt="Portfolio Logo"
                className="w-9 h-9 rounded-full object-cover border-2 border-[var(--accent)]/30 group-hover:border-[var(--accent)] group-hover:scale-105 transition-all shadow-md"
              />
              <span>
                {heroName ? heroName.split(' ')[0] : 'Dev'}
                <span className="text-[var(--text-primary)]">.</span>
              </span>
            </Link>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-8 items-center">
              {navLinks.map((link, i) => {
                const isActive = activeSection === link.to;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                  >
                    <Link
                      to={link.to}
                      spy={true}
                      smooth={true}
                      duration={500}
                      offset={-80}
                      onSetActive={() => setActiveSection(link.to)}
                      onClick={() => setActiveSection(link.to)}
                      className={`relative group flex flex-col items-center cursor-pointer text-sm font-medium tracking-wide transition-colors duration-200 pb-0.5 ${
                        isActive
                          ? 'text-[var(--accent)] font-semibold'
                          : 'text-[var(--text-secondary)] hover:text-[var(--accent)]'
                      }`}
                    >
                      {link.name}
                      {/* Underline indicator */}
                      <span
                        className="block mt-0.5 rounded-full transition-all duration-300"
                        style={{
                          height: '2px',
                          width: isActive ? '24px' : '0px',
                          background: 'var(--accent)',
                          opacity: isActive ? 1 : 0,
                        }}
                      />
                      {/* Hover underline (only for inactive) */}
                      {!isActive && (
                        <span className="block mt-0.5 h-0.5 w-0 rounded-full bg-[var(--accent)] transition-all duration-200 group-hover:w-6" />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* Theme toggle */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-full bg-[var(--bg-secondary)] text-[var(--text-primary)] hover:text-[var(--accent)] transition-all"
            >
              {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
            </motion.button>
          </div>

          {/* Mobile: theme + hamburger */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-full bg-[var(--bg-secondary)] text-[var(--text-primary)]"
            >
              {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(o => !o)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              className="text-[var(--text-primary)] focus:outline-none"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[var(--bg-primary)] border-t border-[var(--bg-secondary)] overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 shadow-lg">
              {navLinks.map((link) => {
                const isActive = activeSection === link.to;
                return (
                  <Link
                    key={link.name}
                    to={link.to}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    onSetActive={() => setActiveSection(link.to)}
                    onClick={() => handleMobileLinkClick(link.to)}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-md text-base font-medium cursor-pointer transition-colors duration-200 ${
                      isActive
                        ? 'text-[var(--accent)] bg-[var(--accent)]/8 font-semibold'
                        : 'text-[var(--text-secondary)] hover:text-[var(--accent)] hover:bg-[var(--bg-secondary)]'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span
                        className="shrink-0 rounded-full"
                        style={{ width: '6px', height: '6px', background: 'var(--accent)' }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

