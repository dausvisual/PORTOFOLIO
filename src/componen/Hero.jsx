export default function Hero({ onOpenCv }) {
  return (
    <section className="hero-k3" id="home">
      <div className="hero-bg-glow"></div>
      <div id="particles-js" className="particles-k3"></div>
      
      <div className="hero-k3-container">
        
        {/* === BAGIAN 1 (ATAS MOBILE, KANAN DESKTOP): FOTO & CINCIN RAPI === */}
        <div className="hero-k3-visuals">
          <div className="profile-wrapper">
            <div className="glowing-ring-1"></div>
            <div className="glowing-ring-2"></div>
            {/* Gunakan nama profile.png seperti instruksi sebelumnya */}
            <img src="/images/profile/profile.png" alt="Firdaus Ikram" className="profile-img" />

            {/* Cluster Tiny Floating Cards - Kebanggaan K3 */}
            <div className="float-card card-tl">
              <div className="icon-box"><i className='bx bx-layer'></i></div>
              <div className="text-box"><h4>GIS Analysis</h4><p>Spatial Insight</p></div>
            </div>
            <div className="float-card card-ml">
              <div className="icon-box"><i className='bx bx-target-lock'></i></div>
              <div className="text-box"><h4>Surveyor</h4><p>High Accuracy</p></div>
            </div>
            <div className="float-card card-bl">
              <div className="icon-box"><i className='bx bx-paper-plane'></i></div>
              <div className="text-box"><h4>Drone Mapping</h4><p>Aerial Intelligence</p></div>
            </div>
            <div className="float-card card-tr">
              <div className="icon-box"><i className='bx bx-buildings'></i></div>
              <div className="text-box"><h4>Urban Planner</h4><p>Better Future</p></div>
            </div>
            <div className="float-card card-mr">
              <div className="icon-box" style={{color: '#22c55e'}}><i className='bx bx-leaf'></i></div>
              <div className="text-box"><h4>Environmental</h4><p>Sustainable Solution</p></div>
            </div>
            <div className="float-card card-br">
              <div className="icon-box"><i className='bx bxs-city'></i></div>
              <div className="text-box"><h4>3D Modeler</h4><p>Precise Design</p></div>
            </div>
          </div>

          {/* Location Tag - Clustered tighter below Rings */}
          <div className="profile-location">
            <p><i className='bx bx-map'></i> Morowali, Indonesia</p>
            <span>5° 8' 6" S • 119° 24' 37" E</span>
          </div>
        </div>

        {/* === BAGIAN 2 (BAWAH MOBILE, KIRI DESKTOP): TEKS K3 === */}
        <div className="hero-k3-content">
          {/* Badge Rata Kiri */}
          <div className="avail-badge">
            <span className="avail-dot"></span> On Work
          </div>
          
          {/* Title Rata Kiri & Mengecil di HP */}
          <h1 className="hero-title">
            FIRDAUS <br/>
            <span>IKRAM</span>
          </h1>
          
          {/* Subtitle - Kapitalisasi Sesuai Gambar Target */}
          <h4 className="hero-subtitle">
            GIS SPECIALIST <span>|</span> URBAN PLANNER <span>|</span> SURVEYOR <span>|</span> DRONE PILOT
          </h4>
          
          {/* Buttons - Row layout HP (Baris) */}
          <div className="hero-btn-group">
            <a href="/cv/CV_Firdaus_Ikram.pdf" download="CV_Firdaus_Ikram.pdf" className="btn btn-primary-glow" onClick={() => { onOpenCv(); }}>
              <i className='bx bx-download'></i> DOWNLOAD CV
            </a>
            <a href="#contact" className="btn btn-outline-glow">
              <i className='bx bx-send'></i> CONTACT ME
            </a>
          </div>

          {/* Socials - Row layout Rata Kiri */}
          <div className="hero-socials">
            <a href="https://www.linkedin.com/in/firdaus-ikram-86405b2a6" target="_blank" rel="noreferrer"><i className='bx bxl-linkedin'></i></a>
            <a href="https://www.instagram.com/firdausikram_17" target="_blank" rel="noreferrer"><i className='bx bxl-instagram'></i></a>
            <a href="#" target="_blank" rel="noreferrer"><i className='bx bxl-github'></i></a>
            <a href="https://wa.me/6285341866227" target="_blank" rel="noreferrer"><i className='bx bxl-whatsapp'></i></a>
          </div>

          {/* Description - Rata Kiri di HP */}
          <p className="hero-desc">
             Experienced professional in mapping and geospatial analysis. Helping to transform complex spatial data into better decisions through GIS solutions, high-accuracy surveying, drone mapping, and urban planning.
          </p>
        </div>
      </div>
    </section>
  );
}