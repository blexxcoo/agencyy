import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Play } from 'lucide-react';

const projects = [
  {
    title: 'Nexus AI Platform',
    category: 'Web Design & Dev',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800',
    altText: 'Abstract representation of an AI platform with glowing purple neural networks',
    color: 'purple',
  },
  {
    title: 'Velocity Motion',
    category: 'Video Editing',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800',
    altText: 'High-energy motion graphics with vibrant blue and cyan light streaks',
    type: 'video',
    color: 'cyan',
  },
  {
    title: 'Prism Branding',
    category: 'Graphic Design',
    image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&q=80&w=800',
    altText: 'Vibrant prism effect creating a spectrum of abstract geometric shapes',
    color: 'emerald',
  },
  {
    title: 'Zen Growth Strategy',
    category: 'Social Media',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    altText: 'Clean and modern data visualization showing business growth analytics',
    color: 'purple',
  },
];

export const Work: React.FC = () => {
  return (
    <section id="work" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 space-y-6 md:space-y-0">
          <div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-brand-cyan font-bold tracking-[0.2em] text-xs uppercase mb-4"
            >
              SELECTED WORK
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-6xl font-display font-bold text-white tracking-tighter"
            >
              Cinematic solutions <br />
              <span className="opacity-40 italic">& digital excellence.</span>
            </motion.h2>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/10 text-white font-bold text-sm bg-white/5 backdrop-blur-md hover:bg-white hover:text-black transition-all min-h-[50px] flex items-center justify-center"
          >
            See All Projects
          </motion.button>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href="#"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative block focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-purple rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden"
              aria-label={`View project: ${project.title}`}
            >
              <div className="relative overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] aspect-[16/10] bg-zinc-900 border border-white/5">
                {/* Image */}
                <img
                  src={project.image}
                  alt={project.altText}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 opacity-60 group-hover:opacity-100"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-100 group-hover:opacity-80 transition-opacity duration-500" />

                {/* Video Play Icon if type is video */}
                {project.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-full glass border border-white/20 flex items-center justify-center shadow-2xl z-10"
                    >
                      <Play size={24} fill="white" className="ml-1" />
                    </motion.div>
                  </div>
                )}

                {/* Project Info */}
                <div className="absolute bottom-0 left-0 p-6 sm:p-8 md:p-10 w-full flex items-end justify-between">
                  <div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <p className={`text-brand-${project.color} group-hover:text-white transition-colors duration-500 font-bold text-[10px] sm:text-xs uppercase tracking-widest mb-1 sm:mb-2`}>
                      {project.category}
                    </p>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-white tracking-tight group-hover:scale-[1.02] origin-left transition-transform duration-500">
                      {project.title}
                    </h3>
                  </div>
                  
                  <div className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 hidden sm:block">
                    <div className="w-12 h-12 rounded-full glass border border-white/20 flex items-center justify-center">
                      <ExternalLink size={20} className="text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
