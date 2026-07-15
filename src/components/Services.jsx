'use client';
import { useLanguage } from '../context/LanguageContext';

export default function Services() {
  const { language } = useLanguage();
  const services = [
    {
      icon: 'bx-layer', title: language === 'en' ? 'GIS & Spatial Analysis' : 'GIS & Spatial Analysis', color: '#8b5cf6',
      desc: language === 'en' ? 'Spatial analysis, modeling, and data visualization for data-driven decision making.' : 'Analisis spasial, pemodelan, dan visualisasi data untuk pengambilan keputusan berbasis data.'
    },
    {
      icon: 'bx-paper-plane', title: language === 'en' ? 'Drone Mapping' : 'Drone Mapping', color: '#3b82f6',
      desc: language === 'en' ? 'Drone mapping provider for aerial photography, orthomosaic, DSM, DTM, and volumetric analysis.' : 'Penyedia pemetaan drone untuk pemotretan udara, orthomosaic, DSM, DTM, dan analisis volumetrik.'
    },
    {
      icon: 'bx-target-lock', title: language === 'en' ? 'Survey & Measurement' : 'Survey & Measurement', color: '#10b981',
      desc: language === 'en' ? 'Topographic survey, GNSS, stake out, boundary survey with high accuracy and professional standards.' : 'Survei topografi, GNSS, stake out, boundary survey dengan akurasi tinggi dan standar profesional.'
    },
    {
      icon: 'bx-buildings', title: language === 'en' ? 'Urban Planning' : 'Urban Planning', color: '#f59e0b',
      desc: language === 'en' ? 'Regional planning, RDTR, masterplan, siteplan, and sustainable urban design.' : 'Perencanaan wilayah, RDTR, masterplan, siteplan, dan desain kota yang berkelanjutan.'
    },
    {
      icon: 'bx-leaf', title: language === 'en' ? 'Environmental Consulting' : 'Environmental Consulting', color: '#22c55e',
      desc: language === 'en' ? 'Environmental documents, environmental monitoring and consulting.' : 'Dokumen Lingkungan, pemantauan lingkungan dan konsultasi.'
    },
    {
      icon: 'bx-map-alt', title: language === 'en' ? 'Web GIS Developer' : 'Web GIS Developer', color: '#00e5ff',
      desc: language === 'en' ? 'Web GIS development, interactive dashboards, and spatial information systems by professional Web GIS Developers.' : 'Pengembangan Web GIS, dashboard interaktif, dan sistem informasi spasial oleh profesional Web GIS Developer.'
    },
  ];

  return (
    <section id="services" className="services-section-k3">
      {/* Header Layanan */}
      <div className="section-header-spacing" data-aos="fade-up">
        <div className="services-title-box">
          <span className="heading-sm display-block" data-aos="fade-up">{language === 'en' ? 'Main Services' : 'Layanan Utama'}</span>
          <h2 className="heading" data-aos="fade-up" data-aos-delay="100">{language === 'en' ? 'Professional Solutions For Spatial Needs' : 'Solusi Profesional Untuk Kebutuhan Spasial'}</h2>
        </div>
      </div>

      {/* Grid 6 Kolom Kartu Layanan */}
      <div className="services-grid-k3">
        {services.map((s, i) => (
          <div className="service-card-k3" key={i} style={{ '--card-color': s.color, borderTopColor: s.color }} data-aos="fade-up" data-aos-delay={i * 100}>
            <div className="service-icon-box" style={{ borderColor: `${s.color}50`, background: `${s.color}0a` }}>
              <i className={`bx ${s.icon} service-icon-k3`} style={{ color: s.color, textShadow: `0 0 15px ${s.color}60` }}></i>
            </div>
            <div className="service-text-box">
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}