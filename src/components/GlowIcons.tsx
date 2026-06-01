import React from 'react';
import { motion } from 'motion/react';

const GlassIconBase: React.FC<{ children: React.ReactNode; color: string }> = ({ children, color }) => (
  <div className="relative w-12 h-12 flex items-center justify-center">
    {/* Background Glow */}
    <div className={`absolute inset-0 bg-brand-${color}/20 blur-xl rounded-full`} />
    {/* SVG Container */}
    <div className="relative z-10 w-full h-full flex items-center justify-center">
      {children}
    </div>
  </div>
);

export const CustomWebDevIcon = () => (
  <GlassIconBase color="purple">
    <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
      <motion.path
        d="M16 18l6-6-6-6M8 6l-6 6 6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="text-brand-purple"
      />
      <motion.path
        d="M14 4l-4 16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="text-white"
      />
    </svg>
  </GlassIconBase>
);

export const CustomVideoIcon = () => (
  <GlassIconBase color="cyan">
    <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
      <motion.path
        d="M5 3l14 9-14 9V3z"
        fill="currentColor"
        initial={{ scale: 0.8, opacity: 0.5 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "mirror" }}
        className="text-brand-cyan"
      />
      <motion.rect
        x="2" y="2" width="20" height="20" rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="4 4"
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="text-white/30"
      />
    </svg>
  </GlassIconBase>
);

export const CustomDesignIcon = () => (
  <GlassIconBase color="emerald">
    <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
      <motion.circle
        cx="12" cy="12" r="8"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="10 5"
        animate={{ rotate: -360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="text-brand-emerald"
      />
      <motion.path
        d="M12 8v8M8 12h8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="text-white"
      />
      <motion.circle
        cx="12" cy="12" r="3"
        fill="currentColor"
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="text-brand-emerald"
      />
    </svg>
  </GlassIconBase>
);

export const CustomGrowthIcon = () => (
  <GlassIconBase color="cyan">
    <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
      <motion.path
        d="M3 21h18M3 21l8-8 4 4 6-10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, repeat: Infinity }}
        className="text-brand-cyan"
      />
      <motion.circle
        cx="21" cy="7" r="2"
        fill="white"
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
      />
    </svg>
  </GlassIconBase>
);
