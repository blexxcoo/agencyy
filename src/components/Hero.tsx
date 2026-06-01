import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { GlowingButton } from './GlowingButton';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };

  // Parallax transforms
  const y1 = useSpring(useTransform(scrollYProgress, [0, 1], [0, -200]), springConfig);
  const y2 = useSpring(useTransform(scrollYProgress, [0, 1], [0, -400]), springConfig);
  const y3 = useSpring(useTransform(scrollYProgress, [0, 1], [0, -150]), springConfig);
  const scale1 = useSpring(useTransform(scrollYProgress, [0, 1], [1, 1.2]), springConfig);
  const rotate1 = useSpring(useTransform(scrollYProgress, [0, 1], [0, 45]), springConfig);

  return (
    <section ref={containerRef} className="relative min-h-screen pt-28 pb-20 overflow-hidden flex items-center">
      {/* Background Ambience & Parallax Elements */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <motion.div 
          style={{ y: y1, scale: scale1, opacity: useTransform(scrollYProgress, [0, 0.5], [1, 0]) }}
          className="absolute top-[20%] left-[10%] w-64 h-64 bg-brand-purple/10 blur-[100px] rounded-full" 
        />
        <motion.div 
          style={{ y: y2, opacity: useTransform(scrollYProgress, [0, 0.6], [0.8, 0]) }}
          className="absolute top-[60%] right-[15%] w-96 h-96 bg-brand-cyan/10 blur-[120px] rounded-full" 
        />
        <motion.div 
          style={{ y: y3, rotate: rotate1, opacity: useTransform(scrollYProgress, [0, 0.4], [0.6, 0]) }}
          className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-purple/5 blur-[130px] rounded-[100%]" 
        />
        
        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        {/* Main Glass Panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass-dark p-8 md:p-16 rounded-[2.5rem] md:rounded-[4rem] border border-white/10 relative overflow-hidden backdrop-blur-2xl"
        >
          {/* Internal Glows */}
          <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-brand-purple/10 blur-[100px] -z-10" />
          <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-brand-cyan/10 blur-[100px] -z-10" />

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-10 backdrop-blur-md shadow-2xl"
          >
            <span className="w-2 h-2 rounded-full bg-brand-emerald animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/80">
              WE BUILD. EDIT. GROW.
            </span>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="max-w-4xl"
          >
            <h1 className="text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] font-display font-bold leading-[1] sm:leading-[0.9] tracking-tighter text-white mb-8 overflow-hidden">
              <motion.span 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                Helping Clinics
              </motion.span>
              <motion.span 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                Get More Patients <span className="bg-gradient-to-r from-brand-purple to-purple-400 bg-clip-text text-transparent italic">Through</span>
              </motion.span>
              <motion.span 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                <span className="bg-gradient-to-r from-brand-emerald to-brand-cyan bg-clip-text text-transparent italic">Content</span> & <span className="bg-gradient-to-r from-brand-cyan to-brand-emerald bg-clip-text text-transparent italic">Ads</span>
              </motion.span>
            </h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-base sm:text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed font-light"
            >
              Blexx Co. partners with healthcare professionals and clinics to create strategic short-form content and targeted advertising campaigns that attract more patients. We build scalable systems that drive patient acquisition and growth for your practice.
            </motion.p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <GlowingButton
                data-cal-link="blexx-co/strategycall"
                data-cal-namespace="strategycall"
                data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
                className="!p-0"
                aria-label="Book a strategy call"
              >
                Book a Strategy Call
              </GlowingButton>

              <motion.a
                href="#services"
                whileHover={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 rounded-xl border border-white/10 text-white font-bold text-sm min-h-[56px] flex items-center justify-center space-x-2 backdrop-blur-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple"
              >
                <span>Our Services</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/20 to-transparent" />
      </motion.div>
    </section>
  );
};
