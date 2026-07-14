'use client';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { language } = useLanguage();
  return (
    <section className="about" id="about">
      <div className="about-left" data-aos="fade-up">
        <span className="heading-sm display-block">{language === 'en' ? 'ABOUT ME' : 'TENTANG SAYA'}</span>
        <h2 className="heading about-title">{language === 'en' ? 'Transforming Spatial Data Into Impactful Solutions' : 'Mengubah Data Spasial Menjadi Solusi Berdampak'}</h2>
        <p className="about-desc" dangerouslySetInnerHTML={{ __html: language === 'en' ? 'I am a professional in the fields of <strong>GIS</strong>, <strong>Urban and Regional Planning</strong>, <strong>Surveying</strong>, <strong>Drone Mapping</strong>, and <strong>Environmental Analysis</strong> focused on providing data-driven geospatial solutions.' : 'Saya adalah profesional di bidang <strong>GIS</strong>, <strong>Perencanaan Wilayah dan Kota</strong>, <strong>Survei</strong>, <strong>Drone Mapping</strong>, dan <strong>Analisis Lingkungan</strong> yang berfokus pada penyediaan solusi geospasial berbasis data.' }}></p>
        <p className="about-desc" dangerouslySetInnerHTML={{ __html: language === 'en' ? 'By integrating modern mapping technologies and spatial analysis, I help governments, companies, and various organizations generate accurate information as a foundation for effective and sustainable decision-making.' : 'Dengan mengintegrasikan teknologi pemetaan modern dan analisis spasial, saya membantu pemerintah, perusahaan, dan berbagai organisasi menghasilkan informasi yang akurat sebagai dasar pengambilan keputusan yang efektif dan berkelanjutan.' }}></p>
        <div className="skills-image-container">
          <Image 
            src="/images/software-skills.webp" 
            alt="Software Skills" 
            width={800} 
            height={200} 
            className="skills-image"
            priority
          />
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