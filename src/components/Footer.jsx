'use client';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { language } = useLanguage();
  return (
    <footer className="footer" id="footer-contact">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>Firdaus Ikram, S.PWK</h3>
          <p className="footer-skills">GIS SPECIALIST | URBAN PLANNER | ENVIRONMENTAL SURVEYOR | DRONE PILOT</p>
        </div>

        <div className="social">
          <a href="https://www.linkedin.com/in/firdaus-ikram-s-pwk-86405b2a6?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" aria-label="LinkedIn Profile"><i className='bx bxl-linkedin'></i></a>
          <a href="https://www.instagram.com/firdausikram_17" target="_blank" rel="noreferrer" aria-label="Instagram Profile"><i className='bx bxl-instagram'></i></a>
          <a href="https://wa.me/6285770029172" target="_blank" rel="noreferrer" aria-label="WhatsApp Contact"><i className='bx bxl-whatsapp'></i></a>
        </div>
      </div>

      <p className="copyright"> &copy; {new Date().getFullYear()} Firdaus Ikram. {language === 'en' ? 'All Rights Reserved' : 'Hak Cipta Dilindungi'}</p>
    </footer>
  );
}