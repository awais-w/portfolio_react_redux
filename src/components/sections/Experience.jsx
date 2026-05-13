import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import BrandTicker from '../ui/BrandTicker';

const ExperienceTile = ({ exp }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showReadMore, setShowReadMore] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    const checkHeight = () => {
      if (contentRef.current) {
        setShowReadMore(contentRef.current.scrollHeight > 300);
      }
    };

    // Initial check
    checkHeight();

    // Observe resize events
    const observer = new ResizeObserver(checkHeight);
    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => observer.disconnect();
  }, [exp.desc]);

  return (
    <div
      className="backdrop-blur-md border-4 p-8 rounded-3xl shadow-sm hover:shadow-lg transition-all group relative overflow-hidden"
      style={{
        borderColor: exp.color,
        background: `linear-gradient(145deg, rgba(255,255,255,0.6) 0%, ${exp.color}15 100%)`
      }}
    >
      {/* Header: Date & Logo (Mobile Only) */}
      <div className="md:hidden flex flex-col items-start gap-3 mb-6">
        <span className="text-sm text-slate-500 font-bold bg-white/50 px-3 py-1 rounded-full border border-white/40">{exp.period}</span>
        {exp.logo && (
          exp.url ? (
            <a href={exp.url} target="_blank" rel="noopener noreferrer" className="block p-2 transition-all hover:scale-105 opacity-90 hover:opacity-100 cursor-pointer">
              <img src={exp.logo} alt={exp.company} className="w-64 h-auto object-contain" style={{ maxHeight: exp.company === 'BPP University' ? '100px' : 'none' }} />
            </a>
          ) : (
            <div className="p-2">
              <img src={exp.logo} alt={exp.company} className="w-32 h-auto object-contain opacity-80" style={{ maxHeight: exp.company === 'BPP University' ? '100px' : 'none' }} />
            </div>
          )
        )}
      </div>

      <h3 className="text-2xl font-light text-slate-900 mb-2">{exp.company}</h3>
      <div className="flex items-center gap-2 text-blue-600 font-medium mb-6">
        <Briefcase size={16} />
        <span>{exp.role}</span>
      </div>

      <div
        ref={contentRef}
        className={`relative transition-all duration-500 ease-in-out ${!isExpanded ? 'max-h-[300px] overflow-hidden' : 'max-h-[2000px]'}`}
        style={{
          maskImage: !isExpanded && showReadMore ? 'linear-gradient(to bottom, black 50%, transparent 100%)' : 'none',
          WebkitMaskImage: !isExpanded && showReadMore ? 'linear-gradient(to bottom, black 50%, transparent 100%)' : 'none'
        }}
      >
        {Array.isArray(exp.desc) ? (
          <ul className="space-y-3">
            {exp.desc.map((item, i) => (
              <li key={i} className="text-slate-600 text-sm leading-relaxed flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <div
            className="text-slate-600 text-sm leading-relaxed"
            dangerouslySetInnerHTML={{ __html: exp.desc }}
          />
        )}
      </div>

      {showReadMore && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors text-sm cursor-pointer"
        >
          {isExpanded ? (
            <>
              Read Less <ChevronUp size={16} />
            </>
          ) : (
            <>
              Read More <ChevronDown size={16} />
            </>
          )}
        </button>
      )}
    </div>
  );
};

const Experience = () => {
  const experiences = [
    {
      company: "Dunnhumby",
      role: "Design Manager – Design System",
      period: "Jul 2024 – Present",
      logo: "/images/logos/dunnhumby.png",
      color: "#003A5D",
      url: "https://www.dunnhumby.com/",
      desc: `<p>Dunnhumby is a global leader in customer data science, empowering businesses everywhere to compete and thrive in the modern data-driven economy.</p>
      <br/><p>
  Leading the strategy, governance and delivery of Dunnhumby’s enterprise <strong>design system</strong>. 
  Managing designers and engineers contributing to the system. Defined scalable <strong>token architecture</strong> supporting multi-brand, theming and localisation. Delivered <strong>WCAG AA compliant foundations</strong> across colour, typography, spacing and components. Established <strong>governance model</strong>, contribution workflow and <strong>release pipeline</strong>. Pioneered <strong>AI-driven research</strong> and workflows, utilizing <strong>MCP tools</strong> and <strong>skills.md files</strong> to extract context from design and generate production-ready code with design tokens intact. Partnering with product, engineering and content teams to drive adoption across the business.
</p>`
    },
    {
      company: "BPP University",
      role: "Design System Lead (Contract)",
      period: "Jan 2024 – Jun 2024",
      logo: "/images/logos/bpp.png",
      color: "#182046",
      url: "https://www.bpp.com",
      desc: `<p>BPP University is a private university in the UK, dedicated to business and the professions.</p>
      <br/><p>
  Led the evolution of Scholar, BPP’s <strong>design system</strong>. Introduced structured <strong>token architecture</strong> and improved Figma library foundations. Conducted <strong>accessibility audits</strong> and aligned patterns to <strong>WCAG standards</strong>. Strengthened <strong>design-to-development consistency</strong>. Established <strong>governance guidance</strong> for system adoption across product teams.
</p>`
    },
    {
      company: "Alchemy Global Solutions",
      role: "Senior Product Designer / Front-End Engineer",
      period: "Jul 2023 – Jan 2024",
      logo: "/images/logos/alchemy.svg",
      color: "#FC400B",
      url: "https://www.alchemyglobalsolutions.com/",
      desc: `<p>Alchemy Global Solutions is an international business providing circular economy solutions for the technology industry.</p>
      <br/><p>
  Worked as a designer-developer on OneTouch, an internal warehouse operations app used to inspect, connect and grade devices. Designed complete <strong>UX flows</strong> and <strong>UI patterns</strong>. Built front-end using <strong>React, Redux Toolkit</strong> and <strong>Styled Components</strong>. Used MUI initially, then identified the need for a centralised system.</p>
  <br/><p><strong>Initiated & Led: Vulcan Design System</strong><br/>
  Founded and led development of Vulcan – Alchemy’s internal design system. Designed in <strong>Figma</strong> and developed in <strong>React + Storybook</strong>. Tokenised foundations supporting multi-brand theming. Embedded accessibility and localisation at foundation level. Defined <strong>component APIs</strong> and documentation standards.
</p>`
    },
    {
      company: "Fold7",
      role: "Senior Design System Designer (Contract)",
      period: "Apr 2023 – Jul 2023",
      logo: "/images/logos/fold7.svg",
      color: "#000000",
      url: "https://fold7.com",
      desc: `<p>Fold7 is an independent creative advertising agency based in London.</p>
      <br/><p>
  Contracted to build a <strong>multi-brand design system</strong> for IWG workspace brands including Regus, Signature, Spaces, and HQ. Designed a single scalable design system serving multiple brands.</p>
  <br/><p><strong>Highlights:</strong><br/>
  Built multi-brand <strong>token architecture</strong> using <strong>Tokens Studio</strong>. Tokens hosted and version-controlled via <strong>GitHub</strong>. Designed scalable UI kit in <strong>Figma</strong>. Enabled brand switching through token-driven foundations. Established consistent <strong>component patterns</strong> across all workspace brands. This was a true enterprise multi-brand system — not separate libraries pretending to be unified.
</p>`
    },
    {
      company: "British Gas",
      role: "Design System Lead",
      period: "Nov 2021 - Mar 2023",
      logo: "/images/logos/britishgas.png",
      color: "#0099FF",
      url: "https://www.britishgas.co.uk/",
      desc: `<p>British Gas is one of the UK's largest energy suppliers, serving millions of households with gas, electricity, and home services.</p>
      <br/><p>
  As <strong>Design System Lead</strong>, I established the foundations of a scalable, multi-brand 
  <strong>Design System</strong> across the organisation. My work involved building 
  <strong>Design Ops</strong> practices, defining <strong>workflow standards</strong>, and creating 
  <strong>robust governance</strong> to align design and engineering teams. I led the 
  <strong>setup and maintenance of UI kits</strong> for multiple brands, mentored designers through 
  <strong>workshops and training</strong>, and introduced 
  <strong>streamlined collaboration processes</strong> that improved delivery quality. I also 
  contributed to <strong>user research</strong>, <strong>testing</strong>, and 
  <strong>Figma plugin development</strong>, ensuring the system supported both efficiency and 
  real-world product needs.
</p>`
    },
    {
      company: "Autodesk",
      role: "Senior UX/UI Designer",
      period: "Apr 2021 - Nov 2021",
      logo: "/images/logos/autodesk.png",
      color: "#000000",
      url: "https://www.autodesk.co.uk/bim-360/",
      desc: `<p>Autodesk is a global leader in software for architecture, engineering, construction, manufacturing, media, and entertainment.</p>
      <br/><p>
  As a <strong>Senior UX/UI Designer</strong>, I focused on solving complex problems for cloud-based 
  <strong>SaaS construction management products</strong>. My role involved extensive 
  <strong>ideation, exploration, wireframing, and prototyping</strong> to simplify intricate workflows through effective 
  <strong>UX mapping</strong>. I established a <strong>bespoke wireframe library</strong> and file structure templates to improve consistency and efficiency. Additionally, I played a key role in 
  <strong>mentoring the team</strong> on best practices for using <strong>Figma</strong> as a primary design and prototyping tool.
</p>`
    },
    {
      company: "Sainsbury's / Argos",
      role: "Lead UX/UI Designer / UI Developer",
      period: "Mar 2019 - Apr 2021",
      logo: "/images/logos/sainsburys.png",
      color: "#FF8200",
      url: "https://www.sainsburys.co.uk",
      desc: `<p>Sainsbury's is one of the UK's leading supermarkets, and Argos is a prominent catalogue retailer, together serving millions of customers.</p>
      <br/><p>
  As a <strong>Lead UX/UI Designer & UI Developer</strong>, I was the sole designer for an internal 
  <strong>Call Centre Application</strong> used by agents to support customers. I conducted 
  <strong>user research</strong> and business requirement gathering to produce 
  <strong>optimized prototypes</strong> that delivered tangible business value. I developed an 
  <strong>agent-facing UI design system</strong> and provided front-end expertise using 
  <strong>React JS, TypeScript, and Redux</strong>, taking ownership of components in 
  <strong>Storybook</strong>. My role bridged the gap between design and development, working closely with Product Owners to ensure 
  <strong>build feasibility</strong> and efficient delivery.
</p>`
    },
    {
      company: "Semantic Integration",
      role: "Lead UX/UI Designer",
      period: "Jan 2019 - Feb 2019",
      logo: "/images/logos/si.png",
      color: "#B1B1B1",
      url: null,
      desc: `<p>Semantic Integration is a data-driven solutions and consulting agency working with high-profile clients like Pearson.</p>
      <br/><p>
  As a <strong>Lead UX/UI Designer</strong>, I was brought in for a specialized project at Pearson to enhance an internal 
  <strong>asset management application</strong>. I conducted <strong>user research</strong> and translated business requirements into 
  <strong>wireframes</strong> and highly interactive <strong>prototypes</strong> using <strong>Axure RP</strong>. Through rigorous 
  <strong>user testing sessions</strong>, I delivered an optimized solution that aligned user needs with business goals.
</p>`
    },
    {
      company: "Affinion International",
      role: "Lead UI-UX Designer / Front-End Developer",
      period: "Jul 2014 - Nov 2018",
      logo: "/images/logos/affinion.png",
      color: "#1C4890",
      url: null,
      desc: `<p>Affinion International is a global leader in customer engagement and loyalty programs, partnering with major brands.</p>
      <br/><p>
  As a <strong>Lead UI/UX Designer & Front-End Developer</strong>, I led the design and development of key 
  <strong>FinTech projects</strong>. I defined <strong>UX strategies</strong>, created high-fidelity visual creatives, and built 
  <strong>interactive click-through prototypes</strong>. I delivered polished, <strong>pixel-perfect UIs</strong> while mentoring junior designers. On the technical side, I developed front-end interfaces using 
  <strong>modern web technologies</strong>, integrating with <strong>REST APIs</strong> and managing complex application state.
</p>`
    },
    {
      company: "Superdrug",
      role: "Front-end Developer / UI Designer",
      period: "Jul 2012 - Jul 2014",
      logo: "/images/logos/superdrug.png",
      color: "#FF69B4",
      url: "https://www.superdrug.com",
      desc: `<p>Superdrug is one of the UK's largest health and beauty retailers.</p>
      <br/><p>
  As a <strong>Front-end Developer & UI Designer</strong>, I played a pivotal role in building Superdrug's new website from scratch for both desktop and mobile. I led the 
  <strong>front-end development</strong>, translating <strong>wireframes and UI designs</strong> into functional, responsive interfaces. My tech stack included 
  <strong>HTML, CSS, XML, jQuery, and JSON</strong>, ensuring a seamless and accessible user experience.
</p>`
    },
    {
      company: "Coral",
      role: "Visual Designer",
      period: "May 2012 - Jun 2012",
      logo: "/images/logos/coral.png",
      color: "#004595",
      url: "http://www.coral.co.uk",
      desc: `<p>Coral is a leading European betting and gaming company with a strong market presence.</p>
      <br/><p>
  As a <strong>Visual Designer</strong>, I produced <strong>high-end graphics</strong> for various business divisions. My work primarily focused on creating engaging 
  <strong>gaming banners</strong>, combining static designs with <strong>animated Flash elements</strong> to drive user engagement and support marketing campaigns.
</p>`
    },
    {
      company: "Kaplan International",
      role: "UI Designer/Developer",
      period: "Aug 2010 - Apr 2012",
      logo: "/images/logos/kaplan.png",
      color: "#46166B",
      url: "http://www.kaplaninternational.com",
      desc: `<p>Kaplan is a premier provider of educational services for individuals, schools, and businesses worldwide.</p>
      <br/><p>
  As a <strong>UI Designer/Developer</strong>, I was responsible for the full lifecycle of web projects, from 
  <strong>designing concepts</strong> to coding responsive pages using <strong>HTML5, CSS3, and jQuery</strong>. I ensured strict 
  <strong>cross-browser optimization</strong> and conducted testing on Litmus. I also designed and developed 
  <strong>email campaigns</strong> using platforms like Dotmailer and Cheetahmail.
</p>`
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <BrandTicker />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-thin text-slate-900">Experience</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-lg">
            My professional journey across various industries and roles
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-blue-200/80" />

          <div className="space-y-12 md:space-y-0">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 items-center md:-mb-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-6px] md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-md z-10 mt-8 md:mt-0 ring-4 ring-blue-100" />

                {/* Date/Logo Side (Desktop) */}
                <div className={`hidden md:flex w-1/2 ${index % 2 === 0 ? 'justify-start pl-12' : 'justify-end pr-12'
                  }`}>
                  <div className="flex flex-col gap-2 items-center">
                    <span className="text-slate-500 font-bold bg-white/50 px-4 py-1.5 rounded-full text-sm backdrop-blur-sm shadow-sm border border-white/40">
                      {exp.period}
                    </span>
                    {exp.logo && (
                      exp.url ? (
                        <a href={exp.url} target="_blank" rel="noopener noreferrer" className="block p-2 transition-all hover:scale-105 opacity-90 hover:opacity-100 cursor-pointer">
                          <img src={exp.logo} alt={exp.company} className="w-64 h-auto object-contain" style={{ maxHeight: exp.company === 'BPP University' ? '100px' : 'none' }} />
                        </a>
                      ) : (
                        <div className="p-2">
                          <img src={exp.logo} alt={exp.company} className="w-64 h-auto object-contain opacity-80" style={{ maxHeight: exp.company === 'BPP University' ? '100px' : 'none' }} />
                        </div>
                      )
                    )}
                  </div>
                </div>
                {/* Content Side */}
                <div className={`w-full md:w-1/2 pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                  }`}>
                  <ExperienceTile exp={exp} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
