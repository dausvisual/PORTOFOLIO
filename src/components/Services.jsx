export default function Services() {
  const services = [
    { 
      icon: 'bx-layer', title: 'GIS & Spatial Analysis', color: '#8b5cf6',
      desc: 'Analisis spasial, pemodelan, dan visualisasi data untuk pengambilan keputusan berbasis data.' 
    },
    { 
      icon: 'bx-paper-plane', title: 'Drone Mapping', color: '#3b82f6',
      desc: 'Pemotretan udara, orthomosaic, DSM, DTM, dan analisis volumetrik dengan teknologi drone.' 
    },
    { 
      icon: 'bx-target-lock', title: 'Survey & Measurement', color: '#10b981',
      desc: 'Survei topografi, GNSS, stake out, boundary survey dengan akurasi tinggi dan standar profesional.' 
    },
    { 
      icon: 'bx-buildings', title: 'Urban Planning', color: '#f59e0b',
      desc: 'Perencanaan wilayah, RDTR, masterplan, siteplan, dan desain kota yang berkelanjutan.' 
    },
    { 
      icon: 'bx-leaf', title: 'Environmental Consulting', color: '#22c55e',
      desc: 'AMDAL, UKL-UPL, pemantauan lingkungan dan konsultasi keberlanjutan.' 
    },
    { 
      icon: 'bx-map-alt', title: 'Web GIS Development', color: '#00e5ff',
      desc: 'Pengembangan Web GIS, dashboard interaktif, dan sistem informasi berbasis peta.' 
    },
  ];

  return (
    <section id="services" className="services-section-k3">
      {/* Header Layanan */}
      <div className="services-header-k3">
        <div className="services-title-box">
          <span className="subtitle display-block">Layanan Utama</span>
          <h2>Solusi Profesional Untuk Kebutuhan Spasial</h2>
        </div>
        <a href="#projects" className="services-link">
          Lihat Semua Layanan <i className='bx bx-right-arrow-alt'></i>
        </a>
      </div>

      {/* Grid 6 Kolom Kartu Layanan */}
      <div className="services-grid-k3">
        {services.map((s, i) => (
          <div className="service-card-k3" key={i} style={{ borderTopColor: s.color }}>
            <i className={`bx ${s.icon} service-icon-k3`} style={{ color: s.color, textShadow: `0 0 15px ${s.color}60` }}></i>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}