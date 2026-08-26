import React, { Suspense, lazy } from 'react';
import { portfolioData } from './data/portfolioData';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

// Lazy load below-the-fold sections to reduce initial bundle size and speed up rendering
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Experience = lazy(() => import('./components/Experience'));
const Contact = lazy(() => import('./components/Contact'));

const SectionLoader = () => (
  <div className="py-20 flex justify-center items-center">
    <div className="w-8 h-8 border-4 border-[var(--accent)] border-t-transparent rounded-full animate-spin" />
  </div>
);

const PortfolioApp = () => {
  return (
    <div className="min-h-screen font-sans selection:bg-[var(--accent)] selection:text-white overflow-x-hidden">
      <Navbar heroName={portfolioData.hero.name} />
      
      <main>
        <Hero data={portfolioData.hero} />
        
        <Suspense fallback={<SectionLoader />}>
          <About data={portfolioData.about} />
          <Skills data={portfolioData.skills} />
          <Projects data={portfolioData.projects} />
          <Experience data={portfolioData.experience} />
          <Contact data={portfolioData.contact} />
        </Suspense>
      </main>
      
      <Footer />
    </div>
  );
};

export default PortfolioApp;
