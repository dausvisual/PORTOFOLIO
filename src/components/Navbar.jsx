'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = ({ onOpenCv }) => {
  const [isActive, setIsActive] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = '';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute('id');
        }
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <header className="header">
      <Link href="/" className="logo-k3">
        <div className="logo-fi-container">
          <Image src="/logo/logo fi.png" alt="Logo Firdaus Ikram" width={55} height={55} priority />
        </div>

        <div className="logo-text">
          <h2>FIRDAUS IKRAM</h2>
          <p>GIS Specialist | Urban Planner</p>
        </div>
      </Link>

      <i className={`bx bx-menu ${isActive ? 'bx-x' : ''}`} id="menu-icon" onClick={toggleMenu}></i>

      <nav className={`navbar ${isActive ? 'active' : ''}`}>
        <a href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={() => setIsActive(false)}>Home</a>
        <a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={() => setIsActive(false)}>About</a>
        <a href="#myjourney" className={activeSection === 'myjourney' ? 'active' : ''} onClick={() => setIsActive(false)}>Journey</a>
        <a href="#services" className={activeSection === 'services' ? 'active' : ''} onClick={() => setIsActive(false)}>Services</a>
        <a href="#certificates" className={activeSection === 'certificates' ? 'active' : ''} onClick={() => setIsActive(false)}>Certifications</a>
        <a href="#projects" className={activeSection === 'projects' ? 'active' : ''} onClick={() => setIsActive(false)}>Projects</a>
        <a href="#clients" className={activeSection === 'clients' ? 'active' : ''} onClick={() => setIsActive(false)}>Clients</a>
        <a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={() => setIsActive(false)}>Contact</a>
        <button className="btn-dropdown-cv" onClick={onOpenCv}>Download CV</button>
      </nav>

      <button className="btn-nav-cv" onClick={onOpenCv}>
        <i className='bx bx-download'></i> Download CV
      </button>
    </header>
  );
};

export default Navbar;