import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'motion/react';

const StatCounter = ({ value, label, suffix = "" }: { value: number, label: string, suffix?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const spring = useSpring(0, { stiffness: 40, damping: 15 });
  const displayValue = useTransform(spring, (v) => `${Math.floor(v)}${suffix}`);

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, value, spring]);

  return (
    <div ref={ref} className="text-center">
      <motion.div className="text-5xl md:text-7xl font-display font-black text-white mb-2 tracking-tighter italic">
        {displayValue}
      </motion.div>
      <div className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/50 group-hover:text-white transition-colors">
        {label}
      </div>
    </div>
  );
};

export const Stats: React.FC = () => {
  return (
    <section className="pt-8 pb-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="glass-dark rounded-[3rem] p-12 md:p-20 border border-white/5 relative">
          <div className="absolute inset-0 bg-brand-purple/5 blur-[80px] rounded-full -z-10" />
          
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12">
          <StatCounter value={50} label="Healthcare Practices Served" suffix="+" />
          <StatCounter value={300} label="Patient Leads Generated" suffix="K+" />
          <StatCounter value={10} label="Clinics & Hospitals" suffix="+" />
          <StatCounter value={5} label="Healthcare Brands Scaled" suffix="+" />
        </div>
        </div>
      </div>
    </section>
  );
};
