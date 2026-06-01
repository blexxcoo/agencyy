/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { BackgroundEffects } from './components/BackgroundEffects';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Stats } from './components/Stats';
import { Founder } from './components/Founder';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/ContactFooter';
import { ScrollToTop } from './components/ScrollToTop';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    // Smoother reveal animations can be handled here if needed, 
    // though Framer Motion's whileInView covers most of it.
  }, []);

  return (
    <div className="relative min-h-screen bg-black selection:bg-brand-purple/30 selection:text-white">
      <BackgroundEffects />
      <Navbar />
      
      <main>
        <Hero />
        <Services />
        <Stats />
        <Founder />
        <Process />
        <Testimonials />
        <Contact />
        <ScrollToTop />
      </main>
    </div>
  );
}

