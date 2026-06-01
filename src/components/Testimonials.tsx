import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Dr. Harikrishna',
    role: 'Doctor, AIFADS Institute',
    content: "Absolutely impressed with the editing quality. Every transition, cut, and effect felt smooth and intentional. The pacing was engaging, the color grading looked clean, and the final output matched the vision perfectly. Fast delivery, clear communication, and great attention to detail throughout the entire project.",
    avatar: '/review1.png',
  },
  {
    name: 'Dr. Sarah Mitchell',
    role: 'Clinic Director, Wellness Physical Therapy',
    content: "Blexx Co. transformed our social media strategy. The patient education reels they created increased our appointment bookings by 250%. Their understanding of healthcare marketing and patient psychology is exceptional.",
    avatar: 'https://i.pravatar.cc/150?u=sarah',
  },
  {
    name: 'Dr. James Chen',
    role: 'Founder, Modern Dental Care',
    content: "The website redesign and video content we received have completely changed how potential patients perceive our practice. We've seen a 180% increase in patient inquiries in just two months.",
    avatar: 'https://i.pravatar.cc/150?u=james',
  },
  {
    name: 'Dr. Elena Rodriguez',
    role: 'Clinical Director, Chiropractic & Wellness',
    content: "Working with Blexx Co. was like having an in-house marketing expert who truly understands the healthcare industry. Their content resonates with our target patients and has significantly improved our online visibility.",
    avatar: 'https://i.pravatar.cc/150?u=elena',
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-white/[0.02]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 sm:mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-brand-cyan font-bold tracking-[0.2em] text-xs uppercase mb-4"
          >
            TESTIMONIALS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-6xl font-display font-bold text-white tracking-tighter"
          >
            What elite partners <br />
            <span className="opacity-40 italic">say about us.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 sm:p-10 rounded-[1.5rem] sm:rounded-[2.5rem] border border-white/5 relative group"
            >
              <Quote className="absolute top-8 right-8 text-white/5 w-16 h-16 group-hover:text-brand-purple/20 transition-colors" />
              
              <p className="text-lg text-white/70 italic mb-8 relative z-10 leading-relaxed font-light">
                "{t.content}"
              </p>
              
              <div className="flex items-center space-x-4">
                <img 
                  src={t.avatar} 
                  alt={`Avatar of ${t.name}`} 
                  className="w-12 h-12 rounded-full border border-white/10" 
                  loading="lazy"
                  decoding="async"
                />
                <div>
                  <div className="text-white font-bold">{t.name}</div>
                  <div className="text-white/30 text-xs uppercase tracking-widest">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
