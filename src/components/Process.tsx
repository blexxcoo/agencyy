import React from 'react';
import { motion } from 'motion/react';

const steps = [
  {
    number: '01',
    title: 'Strategy',
    description: 'We analyze your clinic\'s needs, target patient demographics, and market positioning to build a custom healthcare marketing roadmap for growth.',
  },
  {
    number: '02',
    title: 'Content Creation',
    description: 'Our team produces patient education reels, treatment awareness videos, and clinic testimonials optimized for maximum engagement and trust-building.',
  },
  {
    number: '03',
    title: 'Implementation',
    description: 'We develop integrated systems for social media management, healthcare advertising, and patient lead generation using proven techniques.',
  },
  {
    number: '04',
    title: 'Scale & Optimize',
    description: 'Launch campaigns and continuously optimize based on patient lead data. We measure results and scale what works for your healthcare practice.',
  },
];

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-20 sm:py-32 relative">
      <div className="container mx-auto px-6 text-center mb-16 sm:mb-24">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-brand-emerald font-bold tracking-[0.2em] text-xs uppercase mb-4"
        >
          OUR HEALTHCARE MARKETING PROCESS
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-6xl font-display font-bold text-white tracking-tighter"
        >
          Our proven system <br />
          <span className="opacity-40 italic">for clinic growth.</span>
        </motion.h2>
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Animated Line */}
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent hidden lg:block" />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-12 relative z-10">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              {/* Connector Dot */}
              <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-black border border-white/20 items-center justify-center group-hover:scale-150 transition-transform">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-purple group-hover:bg-brand-cyan transition-colors" />
              </div>

              <div className="glass-dark p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] border border-white/5 hover:border-brand-purple/30 transition-all sm:group-hover:-translate-y-4">
                <span className="text-6xl sm:text-8xl font-display font-black text-white/5 absolute -top-4 sm:-top-8 -left-2 pointer-events-none group-hover:text-brand-purple/10 transition-colors">
                  {step.number}
                </span>
                
                <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-3 sm:mb-4 relative">
                  {step.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed relative">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
