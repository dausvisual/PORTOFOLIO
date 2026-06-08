'use client';
import { useState, useEffect } from 'react';

export default function Navbar({ onOpenCv }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsMenuOpen(false);
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}> 
      {/* Logo FI Baru */}
      <a href="#home" className="logo-k3">
        <div className="logo-fi">
          <span className="f">F</span><span className="i">I</span>
        </div>
        <div className="logo-text">
          <h2>Firdaus Ikram</h2>
          <p>GIS Specialist • Urban Planner • Surveyor</p>
        </div>
      </a> 
      
      <i className={`bx ${isMenuOpen ? 'bx-x' : 'bx-menu'}`} id="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}></i>
      
      <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}> 
        <a href="#home" className="active">Home</a> 
        <a href="#about">About Me</a> 
        <a href="#services">Services</a> 
        <a href="#projects">Projects</a> 
        <a href="#education">Training</a> 
        <a href="#certificates">Certifications</a> 
        <a href="#clients">Clients</a> 
        <a href="#contact">Contact</a> 
      </nav>

      {/* Tombol Download CV di Navbar */}
      <a href="#" className="btn-nav-cv" onClick={onOpenCv}>
        <i className='bx bx-download'></i> Download CV
      </a>
    </header>
  );
}