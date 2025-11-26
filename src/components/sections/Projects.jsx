import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import ProjectModal from '../ui/ProjectModal';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 'spark',
      title: 'Spark Design System',
      thumb: '/images/thumbs/spark.jpg',
      shortDesc: 'A comprehensive case study detailing the creation of a scalable design system for a new British Gas product, built from the ground up.',
      tools: 'Research, Planning, Management, UI design, Testing',
      industry: ['Utility']
    },
    {
      id: 'bg_brandRefresh',
      title: 'British Gas - Brand Refresh',
      thumb: '/images/thumbs/bg_brandRefresh.jpg',
      shortDesc: 'A visual identity refresh for the British Gas brand, encompassing research, analysis, ideation, UI design, and rigorous testing.',
      tools: 'Research, Analysis, Ideation, UI design, Testing',
      industry: ['Energy']
    },
    {
      id: 'rbs_travel',
      title: 'RBS Travel',
      thumb: '/images/thumbs/rbs_travel.jpg',
      shortDesc: 'A dedicated travel booking platform for RBS customers, providing access to exclusive travel offers and benefits.',
      tools: 'Illustrator, Photoshop, Invision',
      industry: ['Travel', 'Banking', 'Loyalty']
    },
    {
      id: 'centrica_designOps',
      title: 'Centrica - Design Ops Setup',
      thumb: '/images/thumbs/centrica_designOps.jpg',
      shortDesc: 'A strategic initiative to streamline design operations, enhancing the efficiency and quality of the entire design ecosystem.',
      tools: 'Sketch, Illustrator, Photoshop, Zeplin',
      industry: ['Energy']
    },
    {
      id: 'natwest_ui',
      title: 'Natwest Premier App',
      thumb: '/images/thumbs/natwest_ui.jpg',
      shortDesc: 'A premium mobile application for NatWest Premier account holders, offering exclusive benefits and a seamless booking system.',
      tools: 'Sketch, Illustrator, Photoshop, Zeplin',
      industry: ['Banking', 'Loyalty']
    },
    {
      id: 'accolade_ui',
      title: 'Accolade Bank Benefits hub',
      thumb: '/images/thumbs/accolade_dev.jpg',
      shortDesc: 'A white-label product developed for the Mastercard Benefits Optimizer (MBO) program.',
      tools: 'Illustrator, Photoshop',
      industry: ['Banking', 'Loyalty']
    }
  ];

  return (
    <section id="work" className="py-20 relative overflow-hidden">
      {/* Background Gradient Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] bg-blue-200/20 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-thin text-slate-900">Selected Work</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-lg">
            Here are some of the case studies of my recent work
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group bg-white/40 backdrop-blur-md border border-white/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={project.thumb}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="px-6 py-2 bg-white/90 backdrop-blur text-slate-900 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform hover:bg-white shadow-lg"
                  >
                    View Details
                  </button>
                </div>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.industry.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-100 border border-white/50 text-slate-600 text-xs rounded-full font-medium backdrop-blur-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-light text-slate-900 mb-2">{project.title}</h3>
                <p className="text-slate-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                  {project.shortDesc}
                </p>
                <p className="text-xs text-slate-500 border-t border-slate-200/50 pt-4 font-medium">
                  {project.tools}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;
