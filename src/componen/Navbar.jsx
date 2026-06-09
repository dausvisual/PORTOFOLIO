'use client';
import { useState, useEffect } from 'react';

export default function Navbar({ onOpenCv }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsMenuOpen(false);
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}> 
      {/* Brand Logo */}
      <a href="#home" className="logo-k3">
        <div className="logo-fi">
          <span className="f">F</span><span className="i">I</span>
        </div>
        <div className="logo-text">
          <h2>Firdaus Ikram</h2>
          <p>GIS Specialist • Urban Planner</p>
        </div>
      </a> 
      
      {/* Hamburger Toggle */}
      <i 
        className={`bx ${isMenuOpen ? 'bx-x' : 'bx-menu'}`} 
        id="menu-icon" 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      ></i>
      
      {/* Nav Menu */}
      <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}> 
        <a href="#home" className="active" onClick={() => setIsMenuOpen(false)}>Home</a> 
        <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a> 
        <a href="#education" onClick={() => setIsMenuOpen(false)}>Journey</a> 
        <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a> 
        <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a> 
        <a href="#certificates" onClick={() => setIsMenuOpen(false)}>Certifications</a> 
        <a href="#clients" onClick={() => setIsMenuOpen(false)}>Clients</a> 
        <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a> 
        
        {/* Tombol CV Khusus Layaran Mobile di Dalam Menu Dropdown */}
        <a href="#" className="btn-dropdown-cv" onClick={(e) => { e.preventDefault(); onOpenCv(); setIsMenuOpen(false); }}>
          <i className='bx bx-download'></i> Download CV
        </a>
      </nav>

      {/* Tombol Download CV Desktop standard */}
      <a href="#" className="btn-nav-cv" onClick={(e) => { e.preventDefault(); onOpenCv(); }}>
        <i className='bx bx-download'></i> Download CV
      </a>
    </header>
  );
}