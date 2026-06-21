import Image from 'next/image';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-left" data-aos="fade-up">
        <span className="heading-sm display-block">ABOUT ME</span>
        <h2 className="heading about-title">Transforming Spatial Data Into Impactful Solutions</h2>
        <p className="about-desc">Berperan aktif sebagai <strong>Konsultan GIS</strong> dan <strong>Urban Planner</strong>, saya mengintegrasikan analisis spasial tingkat lanjut dengan perencanaan wilayah yang strategis. Melalui penyediaan <strong>Drone Mapping</strong>, pemetaan akurat, dan pengolahan data berbasis teknologi terkini.</p>
        <p className="about-desc">Sebagai seorang <strong>GIS Specialist</strong>, saya membantu instansi pemerintah dan sektor swasta merancang keputusan yang presisi demi pembangunan yang berkelanjutan.</p>
        
        <div className="tech-tags">
          <span>ArcGIS</span><span>QGIS</span><span>Adobe Creative</span><span>Drone Mapping</span>
          <span>SketchUp</span><span>Global Mapper</span><span>Environment Survey</span><span>Graphic Design</span>
        </div>
      </div>
      <div className="about-right-grid" data-aos="fade-left" data-aos-delay="200">
        <div className="about-img-box"><Image src="/images/projects/fcm1.webp" alt="Survey lapangan Farmel Cipta Mandiri" width={300} height={200} /></div>
        <div className="about-img-box"><Image src="/images/projects/adp2.webp" alt="Survey lapangan Alaska Dwipa" width={300} height={200} /></div>
        <div className="about-img-box"><Image src="/images/projects/awk4.webp" alt="Survey lapangan Anindya Wiraputra" width={300} height={200} /></div>
        <div className="about-img-box"><Image src="/images/projects/awk3.webp" alt="Survey Drone Mapping" width={300} height={200} /></div>
      </div>
    </section>
  );
}