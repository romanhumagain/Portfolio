// App.js
import React, { useRef, useState, useEffect } from 'react';
import Navbar from "./components/Navbar/Navbar";
import MobileNavbar from "./components/Navbar/MobileNavbar";
import HomePage from "./components/HomePage";
import About from "./components/AboutPage/About";
import SkillsPage from "./components/SkillsPage/SkillsPage";
import ServicePage from "./components/ServicePage/ServicePage";
import ProjectPage from "./components/ProjectsPage/ProjectPage";
import CertificatesPage from "./components/CertificatesPage/CertificatesPage";
import Footer from "./components/Footer/Footer";
import Mode from "./components/Mode/Mode";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const servicesRef = useRef(null);
  const projectsRef = useRef(null);
  const certificatesRef = useRef(null);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Set initial state based on window size

  const scrollToSection = (ref) => {
    if (ref.current) {
      const navbarHeight = 60; // Adjust this value according to your navbar height
      const top = ref.current.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Update mobile state on resize
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-slate-200 via-slate-300 to-slate-400 dark:from-neutral-900 dark:to-neutral-950" style={{ fontFamily: "Montserrat, sans-serif" }}>
      <div className='absolute z-50 top-4 right-4'>
        <Mode />
      </div>
      <div className='flex justify-center'>
        {isMobile ? (
          <MobileNavbar
            homeRef={homeRef}
            aboutRef={aboutRef}
            skillsRef={skillsRef}
            servicesRef={servicesRef}
            projectsRef={projectsRef}
            certificatesRef={certificatesRef}
            scrollToSection={scrollToSection}
          />
        ) : (
          <Navbar
            homeRef={homeRef}
            aboutRef={aboutRef}
            skillsRef={skillsRef}
            servicesRef={servicesRef}
            projectsRef={projectsRef}
            certificatesRef={certificatesRef}
            scrollToSection={scrollToSection}
          />
        )}
      </div>

      <div ref={homeRef}><HomePage /></div>
      <div ref={aboutRef}><About /></div>
      <div ref={skillsRef}><SkillsPage /></div>
      <div ref={servicesRef}><ServicePage /></div>
      <div ref={projectsRef}><ProjectPage /></div>
      <div ref={certificatesRef}><CertificatesPage /></div>
      <Footer />
    </div>
  );
}

export default App;
