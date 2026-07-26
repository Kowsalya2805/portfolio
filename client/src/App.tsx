import React from 'react';
import { ScrollProgress } from './components/ScrollProgress';
import { AnimatedCursor } from './components/AnimatedCursor';
import { ParticlesBackground } from './components/ParticlesBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Achievements } from './components/Achievements';
import { VisitorCounter } from './components/VisitorCounter';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden selection:bg-royal selection:text-white">
      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Animated Custom Cursor */}
      <AnimatedCursor />

      {/* Interactive Particles Background */}
      <ParticlesBackground />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Page Content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Achievements />
        <VisitorCounter />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
