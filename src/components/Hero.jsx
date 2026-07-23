import Image from 'next/image';
import { HeroText, HeroFloatingCards } from './HeroClient';

export default function Hero() {
  return (
    <section className="hero-k3" id="home">
      <div className="hero-bg-glow"></div>
      {/* Latar Belakang Garis Kontur Topografi */}
      <div className="topography-bg">
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path fill="none" stroke="rgba(0, 229, 255, 0.15)" strokeWidth="2" d="M0,160 C320,300 420,0 720,160 C1020,320 1120,50 1440,160"></path>
          <path fill="none" stroke="rgba(79, 70, 229, 0.15)" strokeWidth="2" d="M0,200 C280,10 520,350 720,200 C920,50 1160,390 1440,200"></path>
        </svg>
      </div>

      <div className="hero-k3-container">

        {/* === BAGIAN 1: FOTO & CINCIN RAPI === */}
        <div className="hero-k3-visuals hero-fade-in-right">

          {/* Ikon Satelit Melayang */}
          <div className="hero-satellite-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '45px', height: '45px', background: 'rgba(0, 229, 255, 0.1)', borderRadius: '50%', color: '#00e5ff', border: '1px solid rgba(0, 229, 255, 0.2)', boxShadow: '0 0 15px rgba(0, 229, 255, 0.3)' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'rotate(45deg)' }}>
              <path d="M13 7 9 3 5 7l4 4" />
              <path d="m17 11 4 4-4 4-4-4" />
              <path d="m8 12 4 4 6-6-4-4Z" />
              <path d="m16 8 3-3" />
              <path d="M9 21a6 6 0 0 0-6-6" />
            </svg>
          </div>
          <div className="profile-wrapper">
            <div className="glowing-ring-1"></div>
            <div className="glowing-ring-2"></div>
            <Image
              src="/images/profile/profile-v2.webp"
              alt="Firdaus Ikram - GIS Specialist & Urban Planner"
              className="profile-img"
              width={300}
              height={300}
              sizes="(max-width: 768px) 150px, 300px"
              priority
              fetchPriority="high"
            />

            {/* Floating Cards - Client Component for language */}
            <HeroFloatingCards />
          </div>

          {/* Location Tag */}
          <div className="profile-location">
            <p><i className='bx bx-map'></i> Morowali, Indonesia</p>
            <span>5&deg; 8&apos; 6&quot; S &bull; 119&deg; 24&apos; 37&quot; E</span>
          </div>
        </div>

        {/* === BAGIAN 2: TEKS === */}
        <div className="hero-k3-content hero-fade-in-left">
          <HeroText />
        </div>
      </div>
    </section>
  );
}