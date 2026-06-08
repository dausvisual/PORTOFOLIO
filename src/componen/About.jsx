export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-left">
        <h5 className="heading-sm">ABOUT ME</h5>
        <h2 className="heading" style={{marginBottom: '2rem', fontSize: '4rem'}}>Transforming Spatial Data Into Impactful Solutions</h2>
        <p style={{fontSize: '1.5rem', color: 'var(--text-muted)', marginBottom: '2rem'}}>Sebagai seorang Urban Planner & GIS Specialist, saya mengintegrasikan analisis spasial tingkat lanjut dengan perencanaan wilayah yang strategis. Melalui pemetaan akurat, survei drone, dan pengolahan data berbasis teknologi terkini.</p>
        <p style={{fontSize: '1.5rem', color: 'var(--text-muted)'}}>Saya membantu instansi pemerintah dan sektor swasta merancang keputusan yang presisi demi pembangunan yang berkelanjutan.</p>
        <div className="tech-tags">
          <span>ArcGIS</span><span>QGIS</span><span>Adobe Creative</span><span>Drone Mapping</span>
          <span>SketchUp</span><span>Global Mapper</span><span>Environmental Survey</span><span>Graphic Design</span>
        </div>
      </div>
      <div className="about-right-grid">
        <div className="about-img-box"><img src="/images/projects/awk1.jpg" alt="Field 1" /></div>
        <div className="about-img-box"><img src="/images/projects/awk2.jpg" alt="Field 2" /></div>
        <div className="about-img-box"><img src="/images/projects/adp1.jpg" alt="Field 3" style={{gridColumn: 'span 2'}} /></div>
      </div>
    </section>
  );
}