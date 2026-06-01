import React from 'react';
import { motion } from 'motion/react';
import { Linkedin, ExternalLink, Mail } from 'lucide-react';

export const Founder: React.FC = () => {
  return (
    <section id="founder" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-sans tracking-tight text-white mb-4">
              Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-cyan">Founder</span>
            </h2>
            <div className="h-1 w-20 bg-brand-purple mx-auto rounded-full" />
          </motion.div>

          <div className="w-full max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Image Side */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative group"
              >
                {/* Decorative Elements */}
                <div className="absolute -inset-4 bg-gradient-to-r from-brand-purple/20 to-brand-cyan/20 blur-2xl rounded-[2rem] opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900 shadow-2xl">
                  <img 
                    src="/founder.png" 
                    alt="Beemari Buchi Babu - Founder" 
                    className="w-full h-auto aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop";
                    }}
                  />
                  
                  {/* Overlay Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/80 to-transparent">
                    <h3 className="text-2xl font-bold text-white mb-1">Beemari Buchi Babu</h3>
                    <p className="text-brand-cyan font-medium text-sm tracking-widest uppercase">Founder</p>
                  </div>
                </div>

                {/* Floating Badge */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 -right-6 p-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl z-10"
                >
                  <p className="text-xs font-bold text-white/80 uppercase tracking-tighter">Visionary</p>
                  <p className="text-lg font-bold text-brand-purple">2026</p>
                </motion.div>
              </motion.div>

              {/* Content Side */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-6"
              >
                <div className="glass-dark p-8 rounded-3xl border border-white/5 space-y-6">
                  <p className="text-base text-white/70 leading-relaxed">
                    Buchi specializes in helping clinics, hospitals, and healthcare professionals grow their digital presence. With a focus on strategic content creation and targeted advertising, we understand the unique challenges healthcare businesses face in patient acquisition.
                  </p>
                  <div className="flex items-center space-x-4">
                    <a 
                      href="https://www.linkedin.com/in/beemaribuchibabu/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-white/5 rounded-2xl border border-white/10 text-gray-400 hover:text-brand-purple hover:border-brand-purple/50 transition-all duration-300 group/link"
                    >
                      <Linkedin size={24} className="group-hover/link:scale-110 transition-transform" />
                    </a>
                    <a 
                      href="mailto:buchibeemari@gmail.com" 
                      className="p-4 bg-white/5 rounded-2xl border border-white/10 text-gray-400 hover:text-brand-emerald hover:border-brand-emerald/50 transition-all duration-300 group/link"
                    >
                      <Mail size={24} className="group-hover/link:scale-110 transition-transform" />
                    </a>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 items-center">
                  <a 
                    href="mailto:buchibeemari@gmail.com"
                    className="w-full sm:w-auto px-8 py-4 bg-brand-purple rounded-2xl text-white text-center font-bold text-sm tracking-wider uppercase hover:bg-brand-purple/90 transition-all shadow-[0_0_20px_rgba(155,92,255,0.3)] active:scale-95 inline-block"
                  >
                    Connect with me
                  </a>
                  <a href="#contact" className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2 text-sm font-medium">
                    <span>Inquiry about services</span>
                    <ExternalLink size={16} />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
