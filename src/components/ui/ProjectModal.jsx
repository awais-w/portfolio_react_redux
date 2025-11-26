import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';
import CustomProjectDetails from './CustomProjectDetails';

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  // Map project IDs to their HTML files
  const projectLinks = {
    spark: '/spark/Spark.html',
    bg_brandRefresh: '/brandrefresh/brandRefresh.html',
    rbs_travel: '/rbsTravel/rbs_travel.html',
    centrica_designOps: '/designOps/design_ops.html',
  };

  const contentUrl = projectLinks[project.id];
  const hasCustomDetails = ['natwest_ui', 'accolade_ui'].includes(project.id);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full h-full max-w-6xl bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-white/20"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b bg-white z-10 shrink-0">
              <h3 className="text-2xl font-light text-slate-900">{project.title}</h3>
              <div className="flex items-center gap-4">
                {contentUrl && (
                  <a
                    href={contentUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 flex items-center gap-2 text-sm font-medium"
                  >
                    <span className="hidden md:inline">Open in New Tab</span> <ExternalLink size={16} />
                  </a>
                )}
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500 hover:text-slate-900"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 bg-slate-50 relative overflow-y-auto">
              {hasCustomDetails ? (
                <CustomProjectDetails project={project} />
              ) : contentUrl ? (
                <iframe
                  src={contentUrl}
                  title={project.title}
                  className="w-full h-full border-0 min-h-[500px]"
                />
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-slate-500 p-8 text-center">
                  <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center mb-4">
                    <ExternalLink size={32} className="text-slate-400" />
                  </div>
                  <h4 className="text-lg font-medium text-slate-900 mb-2">Detailed Case Study Not Available</h4>
                  <p className="max-w-md">
                    The detailed case study for this project is currently being updated.
                    Please check back later or contact me for more details.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
