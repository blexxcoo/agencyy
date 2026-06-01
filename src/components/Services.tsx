import React from 'react';
import { motion } from 'motion/react';
import { CustomWebDevIcon, CustomVideoIcon, CustomGrowthIcon } from './GlowIcons';

const services = [
  {
    title: 'Web Development',
    description: 'High-performance, conversion-focused websites for clinics, hospitals, and healthcare practices. Designed to showcase your services and convert patient inquiries into appointments.',
    icon: <CustomWebDevIcon />,
    color: 'purple',
  },
  {
    title: 'Video Editing',
    description: 'Patient education reels, treatment awareness content, and clinic testimonial videos for Instagram Reels, TikTok, and YouTube Shorts. Engaging storytelling that builds trust.',
    icon: <CustomVideoIcon />,
    color: 'cyan',
  },
  {
    title: 'Social Media Growth',
    description: 'Clinic social media management and patient lead generation strategies. We build systems that increase your online visibility and attract qualified patient inquiries.',
    icon: <CustomGrowthIcon />,
    color: 'emerald',
  },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="pt-32 pb-16 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-purple font-bold tracking-[0.2em] text-xs uppercase mb-4"
          >
            SERVICES FOR HEALTHCARE
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-7xl font-display font-bold text-white tracking-tighter"
          >
            Everything your clinic needs <span className="opacity-40 italic">to grow</span> <br />
            <span className="bg-gradient-to-r from-brand-purple to-brand-emerald bg-clip-text text-transparent">and attract more patients.</span>
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <motion.a
              key={service.title}
              href="#contact"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple rounded-3xl"
              aria-label={`Service: ${service.title}. Click to learn more.`}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-3xl -z-10 transition-opacity group-hover:opacity-100 opacity-0" />
              <div className="glass-dark p-6 sm:p-8 rounded-3xl h-full border border-white/5 group-hover:border-white/20 transition-all flex flex-col justify-between overflow-hidden">
                {/* Background Glow */}
                <div className={`absolute -top-20 -right-20 w-40 h-40 bg-brand-${service.color}/10 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity`} />
                
                <div>
                  <div className="w-20 h-20 rounded-2xl glass mb-8 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform overflow-hidden">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-4 transition-colors group-hover:text-brand-cyan">
                    {service.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

