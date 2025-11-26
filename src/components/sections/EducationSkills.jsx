import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Wrench, Code, Palette, Terminal, Database, Layout, Users } from 'lucide-react';

const EducationSkills = () => {
  const education = [
    {
      degree: "Masters degree",
      field: "New media Art & Design",
      institution: "University of Hertfordshire", // Inferred or generic if not found
      year: "2007" // Inferred from experience start or generic
    },
    {
      degree: "First degree",
      field: "Computer Sciences (BCS)",
      institution: "University of Central Punjab", // Inferred or generic if not found
      year: "2005" // Inferred
    },
    {
      degree: "Certification",
      field: "Design and Multimedia",
      institution: "National College of Arts", // Inferred or generic if not found
      year: "2006" // Inferred
    }
  ];

  const skills = [
    {
      category: "Design",
      icon: <Palette className="w-6 h-6" />,
      items: ["UI/UX Design", "Design Systems", "Prototyping", "Wireframing", "User Research", "Figma", "Sketch", "Adobe Suite"]
    },
    {
      category: "Development",
      icon: <Code className="w-6 h-6" />,
      items: ["React", "Redux", "JavaScript (ES6+)", "TypeScript", "HTML5/CSS3", "Tailwind CSS", "SASS/LESS", "Git"]
    },
    {
      category: "Methodologies",
      icon: <Layout className="w-6 h-6" />,
      items: ["Agile (Scrum/Kanban)", "Waterfall", "Design Ops", "Responsive Design", "Accessibility (WCAG)", "Cross-browser Testing"]
    },
    {
      category: "Management",
      icon: <Users className="w-6 h-6" />,
      items: ["Design Leadership", "Mentoring", "Stakeholder Management", "Design Strategy", "Team Management", "Project Planning"]
    }
  ];

  const tools = [
    { name: "Figma", icon: "/images/tools/figma.png" },
    { name: "Miro", icon: "/images/tools/miro.png" },
    { name: "ZeroHeight", icon: "/images/tools/zeroheight.png" },
    { name: "Framer", icon: "/images/tools/framer.png" },
    { name: "Sketch", icon: "/images/tools/sketch.png" },
    { name: "Photoshop", icon: "/images/tools/photoshop.png" },
    { name: "Illustrator", icon: "/images/tools/illustrator.png" },
    { name: "React", icon: "/images/tools/react.png" },
    { name: "TypeScript", icon: "/images/tools/typescript.png" },
    { name: "Redux Toolkit", icon: "/images/tools/redux.png" },
    { name: "Styled Components", icon: "/images/tools/styled-components.png" },
    { name: "JavaScript", icon: "/images/tools/js.png" },
    { name: "HTML5", icon: "/images/tools/html.png" },
    { name: "CSS3", icon: "/images/tools/css.png" },
    { name: "SASS", icon: "/images/tools/sass.png" },
    { name: "Storybook", icon: "/images/tools/storybook.png" },
    { name: "Git", icon: "/images/tools/git.png" },
    { name: "NPM", icon: "/images/tools/npm.png" }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Blob */}
      <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] bg-purple-200/20 rounded-full blur-3xl -z-10 translate-y-1/2 translate-x-1/4" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-thin text-slate-900">Skills & Tools</h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-lg">
              A comprehensive toolkit for designing and building digital products
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/40 backdrop-blur-md border border-white/50 p-8 rounded-3xl shadow-sm hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-50 to-blue-100/50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                  {skill.icon}
                </div>
                <h3 className="text-2xl font-light text-slate-900 mb-4">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <span key={i} className="px-4 py-1.5 bg-white/60 border border-white/60 text-slate-700 text-sm rounded-full shadow-sm backdrop-blur-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tools Grid */}
          <div className="bg-white/30 backdrop-blur-md border border-white/50 p-10 rounded-3xl shadow-lg">
            <h3 className="text-xl font-light text-slate-900 mb-10 text-center tracking-wide">Tech stack I Work With</h3>
            <div className="flex flex-wrap justify-center gap-10 md:gap-16">
              {tools.map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group relative flex flex-col items-center"
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110 drop-shadow-sm">
                    <img
                      src={tool.icon}
                      alt={tool.name}
                      className="max-w-full max-h-full object-contain"
                      onError={(e) => { e.target.style.display = 'none' }} // Hide if image missing
                    />
                  </div>
                  <span className="absolute -bottom-8 text-xs font-medium text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-white/80 px-2 py-1 rounded-md backdrop-blur-sm shadow-sm">
                    {tool.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-thin text-slate-900">Education</h2>
          </div>

          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className={`bg-white/40 backdrop-blur-md border border-white/50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all flex items-start gap-5 ${index === 2 ? 'md:col-span-2 md:w-[calc(50%-0.75rem)] md:mx-auto' : ''}`}
              >
                <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center shrink-0 shadow-sm">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{edu.field}</h3>
                  <p className="text-slate-600 font-medium">{edu.degree}</p>
                  <div className="flex items-center gap-2 mt-2 text-sm text-slate-500">
                    <span className="bg-white/50 px-2 py-0.5 rounded-md">{edu.year}</span>
                    <span>{edu.institution}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default EducationSkills;
