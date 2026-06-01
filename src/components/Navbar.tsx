import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';
import { Menu, X } from 'lucide-react';
import { GlowingButton } from './GlowingButton';

const navItems = [
  { name: 'Home', href: '#' },
  { name: 'Services', href: '#services' },
  { name: 'Founder', href: '#founder' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
        isScrolled 
          ? 'bg-black/60 backdrop-blur-xl border-white/10 py-1.5' 
          : 'bg-transparent border-transparent py-2.5'
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center group relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple rounded-lg" aria-label="Blexx Co. Home">
          <img 
            src="/logo.png?v=2" 
            alt="Blexx Co. Logo" 
            className="w-[80px] h-[56px] md:w-[100px] md:h-[70px] object-contain transition-all group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              const fallback = document.getElementById('navbar-logo-fallback');
              if (fallback) fallback.classList.remove('hidden');
            }}
          />
          <div id="navbar-logo-fallback" className="hidden text-3xl md:text-4xl font-display font-black tracking-tighter text-white">
            BLE<span className="bg-gradient-to-r from-brand-purple via-brand-cyan to-brand-emerald bg-clip-text text-transparent">XX</span>
            <span className="text-xs font-bold opacity-40 ml-1">CO.</span>
          </div>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center bg-white/5 border border-white/10 rounded-full px-2 py-1 backdrop-blur-md">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors relative group block focus-visible:outline-none focus-visible:text-white"
              >
                {item.name}
                <span className="absolute bottom-1 left-4 right-4 h-[1px] bg-brand-purple scale-x-0 group-hover:scale-x-100 group-focus-visible:scale-x-100 transition-transform origin-center" />
              </a>
            </li>
          ))}
        </ul>

        {/* Right Nav */}
        <div className="flex items-center space-x-4">
          <GlowingButton
            data-cal-link="blexx-co/strategycall"
            data-cal-namespace="strategycall"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
            className="hidden md:block !p-0"
            aria-label="Book a strategy call"
          >
            Let's Talk
          </GlowingButton>
          
          <button 
            className="md:hidden p-2 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple rounded-lg"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden fixed inset-0 top-[60px] bg-black/95 backdrop-blur-3xl overflow-y-auto"
          >
            <div className="flex flex-col h-full p-8">
              <motion.ul 
                className="space-y-6"
                initial="closed"
                animate="open"
                variants={{
                  open: {
                    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
                  },
                  closed: {
                    transition: { staggerChildren: 0.05, staggerDirection: -1 }
                  }
                }}
              >
                {navItems.map((item) => (
                  <motion.li 
                    key={item.name}
                    variants={{
                      open: { y: 0, opacity: 1 },
                      closed: { y: 20, opacity: 0 }
                    }}
                  >
                    <a
                      href={item.href}
                      className="text-4xl font-display font-bold text-white/90 hover:text-brand-purple transition-colors block focus-visible:text-brand-purple"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  </motion.li>
                ))}
                
                <motion.li
                  variants={{
                    open: { y: 0, opacity: 1 },
                    closed: { y: 20, opacity: 0 }
                  }}
                  className="pt-6"
                >
                  <a
                    href="#contact"
                    className="w-full py-5 bg-gradient-to-r from-brand-purple to-purple-600 text-white text-center rounded-2xl font-black text-xl tracking-tight block shadow-xl shadow-brand-purple/20 focus-visible:ring-2 focus-visible:ring-white"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Let's Talk
                  </a>
                </motion.li>
              </motion.ul>

              {/* Secondary Links | Socials */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-auto pt-10 border-t border-white/10"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/30 mb-4">Contact Info</p>
                    <a href="mailto:blexx.coo@gmail.com" className="text-sm text-white/60 hover:text-white block mb-2">blexx.coo@gmail.com</a>
                    <p className="text-sm text-white/60">© 2026 Blexx Co.</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/30 mb-4">Social</p>
                    <div className="flex justify-end space-x-4">
                      {['Instagram', 'Twitter', 'LinkedIn'].map((social) => (
                        <a key={social} href="#" className="text-sm text-white/60 hover:text-brand-cyan transition-colors">{social}</a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
