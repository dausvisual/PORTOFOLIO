export default function Footer() {
  return (
    <footer className="footer" id="footer-contact">
      <div className="social"> 
        <a href="https://www.facebook.com/idda.firdaus.17" target="_blank" rel="noreferrer" aria-label="Facebook"><i className='bx bxl-facebook'></i></a>
        <a href="https://wa.me/qr/HODCKMXCPB4UA1" target="_blank" rel="noreferrer" aria-label="WhatsApp"><i className='bx bxl-whatsapp'></i></a>
        <a href="https://www.instagram.com/firdausikram_17?igsh=YTQwYTdtYmd2bjBm" target="_blank" rel="noreferrer" aria-label="Instagram"><i className='bx bxl-instagram'></i></a>
        <a href="https://www.linkedin.com/in/firdaus-ikram-86405b2a6/?originalSubdomain=id" target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className='bx bxl-linkedin'></i></a>
      </div>

      <nav aria-label="Footer Navigation">
        <ul className="list"> 
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About Me</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <p className="copyright"> &copy; 2026 Firdaus Ikram. All Rights Reserved</p> 
    </footer>
  );
}