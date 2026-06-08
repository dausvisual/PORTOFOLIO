'use client';
import { useSearchParams } from 'next/navigation';
import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';

// Data Galeri dipusatkan agar kode sangat rapi
const galleryData = {
  vale: { title: "PT. Vale Indonesia Tbk.", desc: "Ketua Tim Survei Pengambilan Sampel Air, PT. VALE Indonesia Tbk.", images: ["/images/projects/vale1.jpg.jpg", "/images/projects/vale2.jpg.jpg", "/images/projects/vale3.jpg.jpg", "/images/projects/vale4.jpg.jpg"] },
  pam: { title: "PT. PAM Mineral Tbk.", desc: "Ketua Tim Survei Pengambilan Sampel Air, PT. PAM Mineral Tbk.", images: ["/images/projects/pam1.jpg", "/images/projects/pam3.jpg", "/images/projects/pam4.jpg", "/images/projects/pam5.jpg"] },
  mti: { title: "PT. Merdeka Tsingshan Indonesia", desc: "Ketua Tim Survei Pengambilan Sampel Air, PT. Merdeka Tsingshan Indonesia", images: ["/images/projects/mti1.jpg", "/images/projects/mti2.jpg", "/images/projects/mti3.jpg", "/images/projects/mti4.jpg"] },
  msb: { title: "PT. Mitra Sulawesi Bersama", desc: "Ketua Tim Survei Pengambilan Sampel Air, PT. Mitra Sulawesi Bersama", images: ["/images/projects/msb1.jpg", "/images/projects/msb2.jpg", "/images/projects/msb3.jpg"] },
  imip: { title: "Indonesia Morowali Industrial Park", desc: "Ketua Tim Survei Pengambilan Sampel Udara, Indonesia Morowali Industrial Park", images: ["/images/projects/imip1.jpg", "/images/projects/imip2.jpg"] },
  awk: { title: "PT. Anindya Wiraputra Konsult", desc: "Ketua Tim Survei Pengambilan Sampel Air, PT. Anindya Wiraputra Konsult", images: ["/images/projects/awk1.jpg", "/images/projects/awk2.jpg", "/images/projects/awk3.jpg", "/images/projects/awk4.jpg", "/images/projects/awk5.jpg", "/images/projects/awk6.jpg", "/images/projects/awk7.jpg"] },
  igip: { title: "International Green Industrial Park", desc: "Ketua Tim Survei Pengambilan Sampel Udara, International Green Industrial Park", images: ["/images/projects/igip1.jpg", "/images/projects/igip2.jpg"] },
  ihip: { title: "Indonesia Huabao Industrial Park", desc: "Ketua Tim Survei Pengambilan Sampel Udara, Indonesia Huabao Industrial Park", images: ["/images/projects/ihip1.jpg", "/images/projects/ihip2.jpg", "/images/projects/ihip3.jpg"] },
  adp: { title: "PT. Alaska Dwipa Perdana", desc: "Ketua Tim Survei Pengambilan Sampel Udara, PT. Alaska Dwipa Perdana", images: ["/images/projects/adp1.jpg", "/images/projects/adp2.jpg", "/images/projects/adp3.jpg", "/images/projects/adp4.jpg"] },
  fcm: { title: "PT. Farmel Cipta Mandiri", desc: "Ketua Tim Survei Pengambilan Sampel Udara, PT. Farmel Cipta Mandiri", images: ["/images/projects/fcm1.jpg", "/images/projects/fcm2.jpg", "/images/projects/fcm3.jpg", "/images/projects/fcm4.jpg"] },
};

function GalleryContent() {
  const searchParams = useSearchParams();
  const proyekId = searchParams.get('proyek');
  const [activeImg, setActiveImg] = useState(null);

  const currentGallery = galleryData[proyekId];

  // Efek mematikan scroll layar belakang saat lightbox terbuka
  useEffect(() => {
    document.body.style.overflow = activeImg ? 'hidden' : 'auto';
  }, [activeImg]);

  return (
    <section className="gallery-section">
      <Link href="/#projects" className="btn-back">
        <i className='bx bx-arrow-back'></i> Kembali
      </Link>

      {currentGallery ? (
        <div className="gallery-group active">
          <h2 className="heading">Galeri <span>{currentGallery.title}</span></h2>
          <p className="gallery-desc">{currentGallery.desc}</p>
          
          <div className="gallery-grid">
            {currentGallery.images.map((src, index) => (
              <img 
                key={index} 
                src={src} 
                alt={`${currentGallery.title} ${index + 1}`} 
                loading="lazy" 
                onClick={() => setActiveImg(src)}
              />
            ))}
          </div>
        </div>
      ) : (
        <h2 className="heading" style={{marginTop: '4rem'}}>Pilih proyek dari halaman utama.</h2>
      )}

      {/* Lightbox Pop-up */}
      <div className={`lightbox ${activeImg ? 'show' : ''}`} onClick={() => setActiveImg(null)}>
        <span className="close-lightbox" onClick={() => setActiveImg(null)}>&times;</span>
        <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
          <img className="lightbox-content" src={activeImg || ''} alt="Enlarged" />
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div style={{padding: '10rem', color: 'white', textAlign: 'center'}}>Loading Gallery...</div>}>
      <GalleryContent />
    </Suspense>
  );
}