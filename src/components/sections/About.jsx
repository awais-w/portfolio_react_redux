import React from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, Mail, FileText, Code, Layers, Clock, Award } from 'lucide-react';
import ProfileCard from '../ui/ProfileCard';

const About = () => {
  const stats = [
    {
      icon: <Layers className="w-6 h-6 text-blue-600" />,
      label: "Design Systems & Design Ops",
      desc: "Setup and maintenance of scalable design systems and processes"
    },
    {
      icon: <Code className="w-6 h-6 text-blue-600" />,
      label: "Hybrid Designer/Developer",
      desc: "UX/UI Designer with hands-on experience in React & TypeScript"
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-600" />,
      label: "15+ Years Experience",
      desc: "Working with large enterprises as well as start-ups"
    },
    {
      icon: <Award className="w-6 h-6 text-blue-600" />,
      label: "Education",
      desc: "Masters in New Media Art & Design, BS in Computer Sciences"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <div className="flex flex-col md:flex-row gap-12 items-start">
            {/* Profile Info */}
            <div className="w-full md:w-1/3 space-y-6 relative md:sticky md:top-24 h-fit">
              <ProfileCard />
            </div>

            {/* Bio & Stats */}
            <div className="w-full md:w-2/3">
              <h2 className="text-4xl md:text-5xl font-thin text-slate-900 mb-8">About Me</h2>
              <div className="space-y-6 text-slate-700 text-lg leading-relaxed font-light">
                <p>
                  I specialise in the curation and maintenance of scalable Design Systems, ensuring consistency and efficiency across product ecosystems. My expertise lies in bridging the gap between design and development through robust governance and documentation.
                </p>
                <p>
                  I have a strong track record in establishing Design Ops, optimizing ways of working, and implementing tools and processes that streamline collaboration. I focus on creating seamless workflows that empower teams to deliver high-quality products at speed.
                </p>
                <p>
                  Beyond design, I bring hands-on experience in Front-end development, utilising the React stack and TypeScript to build production-ready components. This technical proficiency allows me to design with feasibility in mind and contribute directly to the codebase.
                </p>
              </div>

              <div className="mt-12 grid gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-6 p-6 bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl hover:bg-white/50 transition-all shadow-sm hover:shadow-md"
                  >
                    <div className="shrink-0 mt-1 p-3 bg-white/50 rounded-xl h-fit">{stat.icon}</div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg">{stat.label}</h3>
                      <p className="text-slate-600 mt-1">{stat.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
