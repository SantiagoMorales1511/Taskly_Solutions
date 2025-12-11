import React, { useEffect, useState } from 'react';
import { Navbar } from './sections/Navbar';
import { Hero } from './sections/Hero';
import { Services } from './sections/Services';
import { Process } from './sections/Process';
import { Cases } from './sections/Cases';
import { About } from './sections/About';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';
import { useSmoothScroll } from './hooks/useSmoothScroll';

function App() {
  const { scrollToSection } = useSmoothScroll();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (window.location.hash) {
      const target = window.location.hash.replace('#', '');
      const timer = setTimeout(() => scrollToSection(target), 60);
      return () => clearTimeout(timer);
    }
  }, [scrollToSection]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero isMounted={isMounted} />
        <Services isMounted={isMounted} />
        <Process isMounted={isMounted} />
        <Cases isMounted={isMounted} />
        <About isMounted={isMounted} />
        <Contact isMounted={isMounted} />
      </main>
      <Footer />
    </div>
  );
}

export default App;

