
export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-left" data-aos="fade-up">
        <span className="heading-sm display-block">ABOUT ME</span>
        <h2 className="heading about-title">Transforming Spatial Data Into Impactful Solutions</h2>
        <p className="about-desc">Sebagai seorang Urban Planner &amp; GIS Specialist, saya mengintegrasikan analisis spasial tingkat lanjut dengan perencanaan wilayah yang strategis. Melalui pemetaan akurat, survei drone, dan pengolahan data berbasis teknologi terkini.</p>
        <p className="about-desc">Saya membantu instansi pemerintah dan sektor swasta merancang keputusan yang presisi demi pembangunan yang berkelanjutan.</p>
        
        <div className="tech-tags">
          <span>ArcGIS</span><span>QGIS</span><span>Adobe Creative</span><span>Drone Mapping</span>
          <span>SketchUp</span><span>Global Mapper</span><span>Environment Survey</span><span>Graphic Design</span>
        </div>
      </div>
      <div className="about-right-grid" data-aos="fade-left" data-aos-delay="200">
        <div className="about-img-box"><img src="/images/projects/fcm1.webp" alt="Survey lapangan Farmel Cipta Mandiri" /></div>
        <div className="about-img-box"><img src="/images/projects/adp2.webp" alt="Survey lapangan Alaska Dwipa" /></div>
        <div className="about-img-box"><img src="/images/projects/awk4.webp" alt="Survey lapangan Anindya Wiraputra" /></div>
        <div className="about-img-box"><img src="/images/projects/awk3.webp" alt="Survey Drone Mapping" /></div>
      </div>
    </section>
  );
}