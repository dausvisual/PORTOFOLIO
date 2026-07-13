'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { language, toggleLanguage } = useLanguage();

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
          <Image src="/logo/logo-fi.webp" alt="Logo Firdaus Ikram" width={55} height={55} priority />
        </div>

        <div className="logo-text">
          <span className="logo-title">FIRDAUS IKRAM</span>
          <p>GIS Specialist | Urban Planner</p>
        </div>
      </Link>

      <nav className={`navbar ${isActive ? 'active' : ''}`}>
        <a href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={() => setIsActive(false)}>{language === 'en' ? 'Home' : 'Beranda'}</a>
        <a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={() => setIsActive(false)}>{language === 'en' ? 'About' : 'Tentang'}</a>
        <a href="#myjourney" className={activeSection === 'myjourney' ? 'active' : ''} onClick={() => setIsActive(false)}>{language === 'en' ? 'Journey' : 'Perjalanan'}</a>
        <a href="#services" className={activeSection === 'services' ? 'active' : ''} onClick={() => setIsActive(false)}>{language === 'en' ? 'Services' : 'Layanan'}</a>
        <a href="#certificates" className={activeSection === 'certificates' ? 'active' : ''} onClick={() => setIsActive(false)}>{language === 'en' ? 'Certifications' : 'Sertifikasi'}</a>
        <a href="#projects" className={activeSection === 'projects' ? 'active' : ''} onClick={() => setIsActive(false)}>{language === 'en' ? 'Projects' : 'Proyek'}</a>
        <a href="#clients" className={activeSection === 'clients' ? 'active' : ''} onClick={() => setIsActive(false)}>{language === 'en' ? 'Clients' : 'Klien'}</a>
        <a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={() => setIsActive(false)}>{language === 'en' ? 'Contact' : 'Kontak'}</a>
      </nav>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        <button onClick={toggleLanguage} className="btn-nav-cv" style={{ cursor: 'pointer', background: 'transparent', border: '1px solid var(--neon-blue)', color: 'var(--neon-blue)', display: 'flex', alignItems: 'center', gap: '0.4rem', padding: '0.4rem 0.8rem', fontSize: '1rem', borderRadius: '0.5rem' }}>
          <i className='bx bx-globe'></i> {language === 'en' ? 'ID' : 'EN'}
        </button>
        <i className={`bx bx-menu ${isActive ? 'bx-x' : ''}`} id="menu-icon" onClick={toggleMenu} style={{ fontSize: '2.5rem' }}></i>
      </div>
    </header>
  );
};

export default Navbar;