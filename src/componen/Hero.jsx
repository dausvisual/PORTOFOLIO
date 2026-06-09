export default function Hero({ onOpenCv }) {
  return (
    <section className="hero-k3" id="home">
      <div className="hero-bg-glow"></div>
      <div id="particles-js" className="particles-k3"></div>
      
      <div className="hero-k3-container">
        
        {/* BAGIAN KIRI: Teks & Tombol */}
        <div className="hero-k3-content">
          <div className="avail-badge">
            <span className="avail-dot"></span> Available for Work
          </div>
          
          <h1 className="hero-title">
            Turning Spatial Data <br/>
            <span>Into Better Decisions</span>
          </h1>
          
          <h4 className="hero-subtitle">
            <span>Urban Planner</span> | <span>GIS Specialist</span> | <span>Surveyor</span> | <span className="highlight-purple">Drone Pilot</span>
          </h4>
          
          <p className="hero-desc">
            Membantu pemerintah, perusahaan, dan organisasi mengubah data spasial menjadi solusi perencanaan yang akurat, berkelanjutan, dan berdampak melalui GIS, survei, dan teknologi drone modern.
          </p>
          
          <div className="hero-btn-group">
            <a href="#projects" className="btn btn-primary-glow">
              <i className='bx bx-briefcase-alt-2'></i> Lihat Proyek Saya 
            </a>
            <a href="#contact" className="btn btn-outline-glow">
              <i className='bx bx-send'></i> Hubungi Saya
            </a>
          </div>

          <div className="hero-socials">
            <a href="https://www.linkedin.com/in/firdaus-ikram-86405b2a6" target="_blank" rel="noreferrer"><i className='bx bxl-linkedin'></i></a>
            <a href="https://www.instagram.com/firdausikram_17" target="_blank" rel="noreferrer"><i className='bx bxl-instagram'></i></a>
            <a href="#"><i className='bx bx-envelope'></i></a>
            <a href="https://wa.me/6285341866227" target="_blank" rel="noreferrer"><i className='bx bxl-whatsapp'></i></a>
          </div>
        </div>
        
        {/* BAGIAN KANAN: Foto Lingkaran (Sudah diperbaiki namanya) */}
        <div className="hero-k3-visuals">
          <div className="profile-wrapper">
            <div className="glowing-ring-1"></div>
            <div className="glowing-ring-2"></div>
            {/* PASTIKAN NAMA FILE DI FOLDER SUDAH DIUBAH JADI profile.png */}
            <img src="/images/profile/profile.png" alt="Firdaus Ikram" className="profile-img" />

            {/* KARTU KIRI */}
            <div className="float-card card-tl">
              <div className="icon-box"><i className='bx bx-layer'></i></div>
              <div className="text-box"><h4>GIS Analysis</h4><p>Spatial Insight</p></div>
            </div>
            <div className="float-card card-ml">
              <div className="icon-box"><i className='bx bx-target-lock'></i></div>
              <div className="text-box"><h4>Survey & Mapping</h4><p>High Accuracy</p></div>
            </div>
            <div className="float-card card-bl">
              <div className="icon-box"><i className='bx bx-paper-plane'></i></div>
              <div className="text-box"><h4>Drone Mapping</h4><p>Aerial Intelligence</p></div>
            </div>

            {/* KARTU KANAN */}
            <div className="float-card card-tr">
                <div className="icon-box-drone"><i className='bx bx-paper-plane'></i></div>
            </div>
            <div className="float-card card-mr">
              <div className="icon-box"><i className='bx bx-buildings'></i></div>
              <div className="text-box"><h4>Urban Planning</h4><p>Better Future</p></div>
            </div>
            <div className="float-card card-br">
              <div className="icon-box" style={{color: '#22c55e'}}><i className='bx bx-leaf'></i></div>
              <div className="text-box"><h4>Environmental</h4><p>Sustainable Solution</p></div>
            </div>
          </div>

          <div className="profile-location">
            <p><i className='bx bx-map'></i> Makassar, Indonesia</p>
            <span>5° 8' 6" S • 119° 24' 37" E</span>
          </div>
        </div>
      </div>
    </section>
  );
}