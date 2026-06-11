export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-left">
        <h5 className="heading-sm">ABOUT ME</h5>
        {/* Class about-title ditambahkan agar mudah dikontrol lewat CSS */}
        <h2 className="heading about-title">Transforming Spatial Data Into Impactful Solutions</h2>
        <p className="about-desc">Sebagai seorang Urban Planner & GIS Specialist, saya mengintegrasikan analisis spasial tingkat lanjut dengan perencanaan wilayah yang strategis. Melalui pemetaan akurat, survei drone, dan pengolahan data berbasis teknologi terkini.</p>
        <p className="about-desc">Saya membantu instansi pemerintah dan sektor swasta merancang keputusan yang presisi demi pembangunan yang berkelanjutan.</p>
        
        <div className="tech-tags">
          <span>ArcGIS</span><span>QGIS</span><span>Adobe Creative</span><span>Drone Mapping</span>
          <span>SketchUp</span><span>Global Mapper</span><span>Environment Survey</span><span>Graphic Design</span>
        </div>
      </div>
      <div className="about-right-grid">
        <div className="about-img-box"><img src="/images/projects/fcm1.webp" alt="Field 1" /></div>
        <div className="about-img-box"><img src="/images/projects/awk1.webp" alt="Field 2" /></div>
        <div className="about-img-box"><img src="/images/projects/awk4.JPG" alt="Field 3" /></div>
        <div className="about-img-box"><img src="/images/projects/awk3.JPG" alt="Field 4" style={{gridColumn: 'span 2'}} /></div>
      </div>
    </section>
  );
}