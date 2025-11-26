import React from 'react';
import { motion } from 'framer-motion';

const CustomProjectDetails = ({ project }) => {
  const details = {
    natwest_ui: {
      logo: '/images/logos/natwest.png',
      title: 'Natwest Premier App',
      description: 'A mobile application for Natwest Premier account holders which offers some exclusive benefits and bookings system. Goal was to develop an Elite class app to target the high end Natwest premier account holders. The app main function was to give NatWest Premier customers access to different services, such us buying cinema e-codes, booking holidays and event tickets within a seamless experience.',
      primaryImage: '/images/details-images/primary/natwest_ui.png',
      gradient: 'bg-gradient-to-t from-[#3b41c5] via-[#a981bb] to-[#ffc8a9]',
      tools: [
        { name: 'Sketch', icon: '/images/tools/sketch.png' },
        { name: 'Illustrator', icon: '/images/tools/illustrator.png' },
        { name: 'Photoshop', icon: '/images/tools/photoshop.png' },
        { name: 'Zeplin', icon: '/images/tools/zeplin.png' }
      ],
      activities: [
        'Visual research, brainstorming, developing useful ideas.',
        'Working closely with UX, marketing, software engineers and project management to devise an interface appealing to the high end market.',
        'Utilization of the client branding and visual language to ensure usability and effectiveness of the product.',
        'UI design and behaviour, integration of contents with the marketing team.',
        'Developing the brand identity and visual language.'
      ],
      screens: [
        'image3.png', 'image1.png', 'image2.png', 'image4.png',
        'image5.png', 'image6.png', 'image7.png', 'image8.png'
      ].map(img => `/images/slider/natwest_ui/${img}`)
    },
    accolade_ui: {
      logo: '/images/logos/mastercard.png',
      title: 'Accolade Bank Benefits Hub',
      description: 'Accolade bank is a white-label product and part of Mastercard Benefits Optimizer (MBO) program. The MBO platform gives millions of Mastercard customers access to custom designed loyalty products. The objective is to develop a generic web-interface running on a plug-and-play platform to sell to third-party banks.',
      primaryImage: '/images/details-images/primary/accolade.png',
      gradient: 'bg-gradient-to-br from-[#1E8E97] via-[#1D6FA3] to-[#ABD7DD]',
      tools: [
        { name: 'Illustrator', icon: '/images/tools/illustrator.png' },
        { name: 'Photoshop', icon: '/images/tools/photoshop.png' }
      ],
      activities: [
        'Built a generic design language, laid out rules forming a style guide.',
        'Formed a design which is easy to be themed as per the nature of the project.',
        'Conversion of wireframe prototypes into visual interface.',
        'Adaptive design which fits all screen across all platforms.',
        'Laid out a design which the other designers in the team would follow to produce a full fledge Mockup of the product.'
      ],
      screens: [
        'desktop1.jpg', 'desktop2.jpg', 'desktop3.jpg',
        'mobile1.jpg', 'mobile2.jpg', 'mobile3.jpg'
      ].map(img => `/images/slider/accolade_dev/${img}`)
    }
  };

  const data = details[project.id];

  if (!data) return null;

  return (
    <div className="w-full">
      {/* Header Section */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <img src={data.logo} alt={data.title} className="h-12 mx-auto mb-6 object-contain" />
          <h2 className="text-4xl md:text-5xl font-thin text-slate-900 mb-6">{data.title}</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            {data.description}
          </p>

          {project.industry && (
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {project.industry.map((tag, i) => (
                <span key={i} className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full font-medium">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Primary Image Section */}
      <div className={`w-full py-12 ${data.gradient}`}>
        <div className="container mx-auto px-6 text-center">
          <img
            src={data.primaryImage}
            alt={data.title}
            className="max-w-full md:max-w-4xl mx-auto rounded-lg shadow-2xl"
          />
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-12 gap-12">
          {/* Tools Section */}
          <div className="md:col-span-4">
            <h3 className="text-3xl font-light text-slate-900 mb-6">Tools Used</h3>
            <ul className="space-y-4">
              {data.tools.map((tool, index) => (
                <li key={index} className="flex items-center gap-4">
                  <img src={tool.icon} alt={tool.name} className="w-8 h-8 object-contain" />
                  <span className="text-slate-700 font-medium">{tool.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Activities Section */}
          <div className="md:col-span-8">
            <h3 className="text-3xl font-light text-slate-900 mb-6">Activities</h3>
            <ul className="space-y-3">
              {data.activities.map((activity, index) => (
                <li key={index} className="flex items-start gap-3 text-slate-600 leading-relaxed">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                  {activity}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Screens Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-light text-slate-900 mb-8">Screens</h3>
          <p className="text-sm text-slate-500 mb-6">(Scroll horizontally to view more)</p>

          <div className="flex overflow-x-auto gap-6 pb-8 snap-x">
            {data.screens.map((screen, index) => (
              <div key={index} className="flex-none w-[300px] md:w-[400px] snap-center">
                <a href={screen} target="_blank" rel="noopener noreferrer" className="block group">
                  <img
                    src={screen}
                    alt={`Screen ${index + 1}`}
                    className="w-full rounded-lg shadow-md group-hover:shadow-xl transition-shadow border border-slate-100"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomProjectDetails;
