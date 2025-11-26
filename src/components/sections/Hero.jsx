import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import BackgroundBlobs from '../ui/BackgroundBlobs';

import Caricature from '../ui/Caricature';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      <BackgroundBlobs />

      {/* Glass Overlay for better text readability if needed, or just let blobs show through */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px] z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="max-w-2xl w-full md:w-[66%]">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-block px-4 py-2 rounded-full bg-white/40 backdrop-blur-md border border-white/50 text-blue-700 font-semibold tracking-wide uppercase shadow-sm mb-6"
            >
              🧩 Design System Specialist
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-6xl md:text-8xl font-thin text-black leading-tight mix-blend-multiply"
            >
              Awais Waheed
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 text-xl md:text-2xl text-slate-900 leading-relaxed max-w-2xl font-light"
            >
              <b>I architect scalable and accessible multi-brand design systems.</b>
              <br />
              Adaptive tokens, cohesive component libraries, and governance model that works in the real world — everything teams need to design and deliver at scale.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-12 flex flex-wrap gap-4"
            >
              <a
                href="#work"
                className="px-8 py-4 bg-blue-600/90 backdrop-blur-sm text-white rounded-xl font-medium hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30 flex items-center gap-2"
              >
                View My Work <ArrowRight size={20} />
              </a>
              <a
                href="#contact"
                className="px-8 py-4 bg-white/50 backdrop-blur-md text-slate-800 border border-white/60 rounded-xl font-medium hover:bg-white/70 transition-all shadow-sm hover:shadow-md"
              >
                Contact Me
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Pinned Caricature */}
      <div className="absolute bottom-0 left-0 w-full z-50 hidden md:block pointer-events-none">
        <div className="container mx-auto px-6 h-full relative">
          <div className="absolute bottom-0 right-6 lg:right-[-40px] md:right-[-70px] pointer-events-auto">
            <Caricature />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
