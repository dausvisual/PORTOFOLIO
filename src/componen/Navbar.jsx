import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = ({ onOpenCv }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <header className="header">
      <Link href="/" className="logo-k3">
  {/* === REVOLUSI LOGO: Memanggil file webp hasil konversi otomatis === */}
      <div className="logo-fi-container">
      <img src="/logo/logo fi.png" alt="Logo Firdaus Ikram" />
      </div>
  
      <div className="logo-text">
      <h2>FIRDAUS IKRAM</h2>
      <p>GIS Specialist | Urban Planner</p>
      </div>
</Link>

      <i className={`bx bx-menu ${isActive ? 'bx-x' : ''}`} id="menu-icon" onClick={toggleMenu}></i>

      <nav className={`navbar ${isActive ? 'active' : ''}`}>
        <a href="#home" className="active" onClick={() => setIsActive(false)}>Home</a>
        <a href="#about" onClick={() => setIsActive(false)}>About</a>
        <a href="#myjourney" onClick={() => setIsActive(false)}>Journey</a>
        
        <a href="#services" onClick={() => setIsActive(false)}>Services</a>
        <a href="#certificates" onClick={() => setIsActive(false)}>Certifications</a>
        <a href="#projects" onClick={() => setIsActive(false)}>Projects</a>
        
        <a href="#clients" onClick={() => setIsActive(false)}>Clients</a>
        <a href="#contact" onClick={() => setIsActive(false)}>Contact</a>
        <button className="btn-dropdown-cv" onClick={onOpenCv}>Download CV</button>
      </nav>

      <button className="btn-nav-cv" onClick={onOpenCv}>
        <i className='bx bx-download'></i> Download CV
      </button>
    </header>
  );
};

export default Navbar;