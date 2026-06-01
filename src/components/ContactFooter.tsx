import React from 'react';
import { motion } from 'motion/react';
import { Mail, Github, Twitter, Instagram, ArrowRight } from 'lucide-react';
import { GlowingButton } from './GlowingButton';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 sm:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="glass-dark border border-white/5 rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-12 md:p-20 overflow-hidden relative">
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-purple/10 blur-[120px] rounded-full z-0" />
          
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto relative z-10">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-brand-purple font-bold tracking-[0.2em] text-xs uppercase mb-4"
            >
              READY TO GROW YOUR PRACTICE?
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl sm:text-6xl md:text-8xl font-display font-bold text-white tracking-tighter mb-8"
            >
              Let's help your clinic <br />
              <span className="opacity-40 italic">attract more patients.</span>
            </motion.h2>
            
            <p className="text-white/40 text-lg mb-12 max-w-2xl">
              We partner exclusively with healthcare professionals who are serious about growth. If you're ready to scale your patient base through strategic content and advertising, let's talk.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="w-full flex flex-col items-center space-y-8"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="relative group"
              >
                <div className="absolute -inset-4 bg-brand-purple/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                <GlowingButton
                  data-cal-link="blexx-co/strategycall"
                  data-cal-namespace="strategycall"
                  data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
                  className="!p-0 relative z-20"
                >
                  Book a meeting
                </GlowingButton>
              </motion.div>

              <a 
                href="mailto:blexx.coo@gmail.com"
                className="flex items-center space-x-4 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple rounded-2xl p-2 transition-all"
                aria-label="Send an email to blexx.coo@gmail.com"
              >
                <div className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center group-hover:border-brand-purple/50 transition-all">
                  <Mail size={20} className="text-brand-cyan group-hover:scale-110 transition-transform" />
                </div>
                <div className="text-left">
                  <div className="text-white font-bold text-lg group-hover:text-brand-cyan transition-colors">blexx.coo@gmail.com</div>
                  <div className="text-white/20 text-[10px] uppercase tracking-[0.2em]">Contact us directly</div>
                </div>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
