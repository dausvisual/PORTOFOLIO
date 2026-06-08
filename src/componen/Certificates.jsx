export default function Certificates() {
  return (
    <section className="certificates section-light" id="certificates">
      <div className="section-header"> 
        <h3><i className="fas fa-certificate"></i> SERTIFIKASI</h3>
        <h2>Pelatihan <span>& Sertifikasi</span></h2>
      </div>

      <div className="certificates-grid"> 
        <div className="project-card">
          <img src="/images/certificate/APDI.jpg" alt="Asosiasi Pilot Drone Indonesia" className="project-img" loading="lazy" decoding="async" />
          <div className="project-info"> <h3>Asosiasi Pilot Drone Indonesia</h3>
            <a href="galeri.html?proyek=apdi"><i className='bx bx-link-external'></i></a>
          </div>
          <p className="project-desc">Sertifikat Lisensi Pilot Drone Resmi dari APDI.</p>
          <div className="tech-stack"><span>Drone Pilot</span><span>Sertifikasi</span></div>
        </div>

        <div className="project-card">
          <img src="/images/certificate/DJPU.jpg" alt="Direktorat Jenderal Perhubungan Udara" className="project-img" loading="lazy" decoding="async" />
          <div className="project-info">
            <h3>Direktorat Jenderal Perhubungan Udara</h3>
            <a href="galeri.html?proyek=djpu"><i className='bx bx-link-external'></i></a>
          </div>
          <p className="project-desc">Sertifikasi Registrasi Remote Pilot Resmi Kenegaraan.</p>
          <div className="tech-stack"><span>Drone Pilot</span><span>Sertifikasi</span></div>
        </div>

        <div className="project-card">
          <img src="/images/certificate/IMC.jpg" alt="Indonesia Mapping Community" className="project-img" loading="lazy" decoding="async" />
          <div className="project-info">
            <h3>Indonesia Mapping Community</h3>
            <a href="galeri.html?proyek=imc"><i className='bx bx-link-external'></i></a>
          </div>
          <p className="project-desc">Pelatihan Pemetaan Terestris Menggunakan Drone Tingkat Dasar.</p>
          <div className="tech-stack"><span>Pelatihan</span><span>Pemetaan</span></div>
        </div>

        <div className="project-card">
          <img src="/images/certificate/ITS.jpg" alt="HMP Planologi ITS Surabaya" className="project-img" loading="lazy" decoding="async" />
          <div className="project-info">
            <h3>HMP Planologi ITS Surabaya</h3>
            <a href="galeri.html?proyek=its"><i className='bx bx-link-external'></i></a>
          </div>
          <p className="project-desc">ArcGIS Schooling: Tingkat Lanjut Pemrosesan Spasial Kawasan Kota.</p>
          <div className="tech-stack"><span>Pelatihan</span><span>Arcgis</span></div>
        </div>

        <div className="project-card">
          <img src="/images/certificate/LAB.jpg" alt="PT. Laboratorindo Alam Bestari" className="project-img" loading="lazy" decoding="async" />
          <div className="project-info">
            <h3>PT. Laboratorindo Alam Bestari</h3>
            <a href="galeri.html?proyek=lab_cert"><i className='bx bx-link-external'></i></a>
          </div>
          <p className="project-desc">Pelatihan Teknis Pengambilan Sampel Air Limbah & Baku Mutu Udara.</p>
          <div className="tech-stack"><span>Pelatihan</span><span>Pengambilan Sampel</span></div>
        </div>

        <div className="project-card">
          <img src="/images/certificate/PGP.jpg" alt="PT. Professional Global Persada" className="project-img" loading="lazy" decoding="async" />
          <div className="project-info">
            <h3>PT. Professional Global Persada</h3>
            <a href="galeri.html?proyek=pgp"><i className='bx bx-link-external'></i></a>
          </div>
          <p className="project-desc">Pelatihan Teknik Pengujian Parameter Udara Ambien Sesuai Regulasi SNi.</p>
          <div className="tech-stack"><span>Pelatihan</span><span>Pengujian SNI</span></div>
        </div>
      </div>
    </section>
  );
}