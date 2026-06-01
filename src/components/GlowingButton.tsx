import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface GlowingButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}

export const GlowingButton: React.FC<GlowingButtonProps> = ({ children, className = '', ...props }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`group relative p-0.5 rounded-2xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple ${className}`}
      {...props}
    >
      {/* Background Subtle Base */}
      <div className="absolute inset-0 bg-white/5 rounded-2xl -z-10" />

      {/* Fluid Glass Container */}
      <div className="relative z-20 flex items-center justify-center space-x-3 bg-white/5 backdrop-blur-2xl px-10 py-5 rounded-2xl border border-white/20 group-hover:border-white/40 group-hover:bg-white/10 transition-all duration-500 overflow-hidden shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
        {/* Internal Fluid Blobs */}
        <motion.div 
          animate={{ 
            x: [0, 20, -20, 0],
            y: [0, -10, 10, 0],
            scale: [1, 1.2, 0.9, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 -left-4 w-24 h-24 bg-brand-purple/20 blur-2xl rounded-full -z-10" 
        />
        <motion.div 
          animate={{ 
            x: [0, -30, 20, 0],
            y: [0, 15, -15, 0],
            scale: [1, 0.8, 1.1, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-0 -right-6 w-32 h-32 bg-brand-cyan/20 blur-2xl rounded-full -z-10" 
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-50" />

        <span className="text-white font-bold uppercase tracking-[0.25em] text-sm relative z-30 whitespace-nowrap">
          {children}
        </span>
        <ArrowRight size={18} className="text-white group-hover:translate-x-2 transition-transform duration-500 relative z-30 flex-shrink-0" />
      </div>

      {/* Shine Highlight */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-30 pointer-events-none" />
      
      {/* Outer Atmospheric Glow */}
      <div className="absolute -inset-1 rounded-[17px] bg-gradient-to-r from-brand-purple/30 via-brand-cyan/30 to-brand-emerald/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-30" />
    </motion.button>
  );
};
