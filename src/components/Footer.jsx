'use client';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { language } = useLanguage();
  return (
    <footer className="footer" id="footer-contact">

      <p className="copyright"> &copy; 2026 Firdaus Ikram. {language === 'en' ? 'All Rights Reserved' : 'Hak Cipta Dilindungi'}</p> 
    </footer>
  );
}