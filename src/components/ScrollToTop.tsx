import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled more than 800px
      if (window.scrollY > 800) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1, translateY: -5 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-[60] w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center text-brand-cyan shadow-lg shadow-brand-purple/20 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple"
          aria-label="Scroll to top"
        >
          <div className="absolute inset-0 bg-brand-purple/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          <ChevronUp size={24} className="relative z-10" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
