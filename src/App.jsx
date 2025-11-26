import React from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import EducationSkills from './components/sections/EducationSkills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main>
        <Hero />
        <Projects />
        <About />
        <Experience />
        <EducationSkills />
        <Contact />
      </main>
      <footer className="py-8 text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} Awais Waheed. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
