'use client';
import { useEffect, useState, use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import '../verify.css';

const certificateData = {
  its: {
    issuer: "Himpunan Mahasiswa Planologi ITS",
    title: "Workshop ArcGIS SCHOOLING",
    certNo: "017/SER/ARCGISSCHOOLING/KK/HMPL-ITS/VIII/21",
    name: "Firdaus Ikram",
    date: "14 Oktober 2021",
    status: "Valid",
    logo: "/images/certificate/ITS.webp" // Menggunakan gambar sertifikat sbg logo
  },
  pgp: {
    issuer: "PT. Profesional Global Persada",
    title: "Webinar Teknik Pengujian Parameter Udara Ambien",
    certNo: "47/A/W/I/2026",
    name: "Firdaus Ikram",
    date: "10 Januari 2026",
    status: "Valid",
    logo: "/images/client/PGP.webp" // PGP memiliki logo client
  },
  lab_admin: {
    issuer: "PT Laboratorindo Alam Bestari",
    title: "Pelatihan Pemahaman Standar Administrasi Laboratorium",
    certNo: "39/PLT/Eks-MA/LAB/XII/2025",
    name: "Firdaus Ikram",
    date: "31 Desember 2025",
    status: "Valid",
    logo: "/images/client/LAB.webp" // LAB memiliki logo client
  },
  lab_sampel: {
    issuer: "PT Laboratorindo Alam Bestari",
    title: "Pelatihan Pengambilan Sampel Udara dan Sampel Air",
    certNo: "44/PLT/Eks-MA/LAB/XII/2025",
    name: "Firdaus Ikram",
    date: "31 Desember 2025",
    status: "Valid",
    logo: "/images/client/LAB.webp" // LAB memiliki logo client
  },
  imc: {
    issuer: "Indonesia Mapping Community",
    title: "Pemetaan Terestris Menggunakan Drone Tingkat Dasar",
    certNo: "0127/IMC-FAHUTAN/DRONE-BASIC/III/2022",
    name: "Firdaus Ikram",
    date: "25 - 30 Maret 2022",
    status: "Valid",
    logo: "/images/certificate/IMC.webp" // Menggunakan sertifikat IMC sbg logo
  },
  bnsp: {
    issuer: "LSP Tenaga Konstruksi Nasional",
    title: "Pelaksana Pemasangan Perlengkapan Jalan",
    certNo: "No. Reg. F 2249 23941 2025 0474163 SI 03",
    name: "FIRDAUS IKRAM",
    date: "2025",
    status: "Terverifikasi",
    logo: "/images/certificate/bnsp.webp",
    head: "Bryan Matthew, ST"
  }
};

/* --- ITS Design (Academic) --- */
function VerifyITS({ data }) {
  return (
    <div className="verify-global-container" style={{ background: '#f8fafc' }}>
      <div className="v-its-wrapper" data-aos="fade-up">
        <div className="v-its-sidebar">
          <img src={data.logo} alt="ITS" className="v-its-logo" />
          <h2>Credential Verification</h2>
          <p>Official Academic Registry</p>
          <div className="v-its-badge">
            <i className='bx bxs-badge-check'></i> {data.status}
          </div>
        </div>
        <div className="v-its-main">
          <h1 className="v-its-title">{data.title}</h1>
          <div className="v-its-info">
            <div>
              <label>Granted To</label>
              <p>{data.name}</p>
            </div>
            <div>
              <label>Issuing Institution</label>
              <p>{data.issuer}</p>
            </div>
            <div style={{ display: 'flex', gap: '3rem' }}>
              <div>
                <label>Certificate No.</label>
                <p>{data.certNo}</p>
              </div>
              <div>
                <label>Date Issued</label>
                <p>{data.date}</p>
              </div>
            </div>
          </div>
          <div className="v-its-footer">
            <span>Secure Academic Portal</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* --- PGP Design (Corporate) --- */
function VerifyPGP({ data }) {
  return (
    <div className="verify-global-container" style={{ background: '#0f172a' }}>
      <div className="v-pgp-wrapper" data-aos="zoom-in">
        <div className="v-pgp-header">
          <img src={data.logo} alt="PGP Logo" className="v-pgp-logo" />
          <div className="v-pgp-status">
            <i className='bx bx-check-shield'></i> {data.status} CREDENTIAL
          </div>
          <h2>CERTIFICATE OF COMPLETION</h2>
          <div className="v-pgp-divider"></div>
        </div>
        <div className="v-pgp-details">
          <p style={{ fontSize: '1.2rem', color: '#64748b' }}>This verifies that</p>
          <h3>{data.name}</h3>
          <p style={{ fontSize: '1.2rem', color: '#64748b' }}>has successfully completed</p>
          <p className="course">{data.title}</p>
          <p className="cert-no">ID: {data.certNo} | Date: {data.date}</p>
        </div>
        <div className="v-pgp-footer">
          <span>Verified by {data.issuer}</span>
        </div>
      </div>
    </div>
  );
}

/* --- LAB Design (Dashboard) --- */
function VerifyLAB({ data }) {
  return (
    <div className="verify-global-container" style={{ background: '#e2e8f0' }}>
      <div className="v-lab-wrapper" data-aos="fade-in">
        <div className="v-lab-header">
          <div className="v-lab-brand">
            <img src={data.logo} alt="LAB Logo" className="v-lab-logo" />
            <h2>Credential Dashboard</h2>
          </div>
          <div className="v-lab-status">
            <i className='bx bx-check-circle'></i> {data.status}
          </div>
        </div>
        <div className="v-lab-body">
          <div className="v-lab-grid">
            <div className="v-lab-item">
              <label>Participant Name</label>
              <p>{data.name}</p>
            </div>
            <div className="v-lab-item">
              <label>Certification Date</label>
              <p>{data.date}</p>
            </div>
            <div className="v-lab-item full">
              <label>Training Module / Certification</label>
              <p>{data.title}</p>
            </div>
            <div className="v-lab-item full">
              <label>Certificate Serial Number</label>
              <p style={{ fontFamily: 'monospace' }}>{data.certNo}</p>
            </div>
          </div>
        </div>
        <div className="v-lab-footer">
          <span style={{ color: '#64748b', fontSize: '0.9rem' }}>Issuer: {data.issuer}</span>
        </div>
      </div>
    </div>
  );
}

/* --- IMC Design (Tech) --- */
function VerifyIMC({ data }) {
  return (
    <div className="verify-global-container" style={{ background: '#000' }}>
      <div className="v-imc-wrapper" data-aos="flip-up">
        <div className="v-imc-content">
          <div className="v-imc-top">
            <img src={data.logo} alt="IMC Logo" className="v-imc-logo" />
            <div className="v-imc-status">
              <i className='bx bx-radar'></i> {data.status}
            </div>
          </div>
          <div className="v-imc-details">
            <div className="v-imc-row highlight">
              <span>Mission / Training</span>
              <strong>{data.title}</strong>
            </div>
            <div className="v-imc-row">
              <span>Operator Name</span>
              <strong>{data.name}</strong>
            </div>
            <div style={{ display: 'flex', gap: '4rem', marginTop: '1rem' }}>
              <div className="v-imc-row">
                <span>License ID</span>
                <strong>{data.certNo}</strong>
              </div>
              <div className="v-imc-row">
                <span>Date Logged</span>
                <strong>{data.date}</strong>
              </div>
            </div>
          </div>
          <div className="v-imc-footer">
            <span>SYS_AUTH: {data.issuer}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* --- BNSP Design (Government/Official) --- */
/* --- BNSP Design (Attachment) --- */
function VerifyBNSP({ data }) {
  return (
    <div className="verify-global-container" style={{ background: '#e5e7eb', flexDirection: 'column', padding: '2rem 1rem' }}>
      <div className="v-bnsp-wrapper" data-aos="fade-up" style={{ padding: '3rem 2rem', display: 'flex', flexDirection: 'column', gap: '2rem', background: '#fff', border: '1px solid #d1d5db', borderRadius: '12px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', maxWidth: '800px', width: '100%' }}>
        <div style={{ textAlign: 'center', marginBottom: '1rem', borderBottom: '2px solid #f3f4f6', paddingBottom: '1.5rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#16a34a', color: '#fff', padding: '0.5rem 1rem', borderRadius: '4px', fontWeight: 700, marginBottom: '1rem', letterSpacing: '1px' }}>
            <i className='bx bxs-check-shield'></i> STATUS: {data.status}
          </div>
          <h2 style={{ color: '#111827', fontSize: '1.8rem', marginBottom: '0.5rem' }}>Lampiran Sertifikat Resmi</h2>
          <p style={{ color: '#4b5563', fontSize: '1.1rem' }}>{data.title}</p>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', alignItems: 'center' }}>
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ color: '#6b7280', fontSize: '0.9rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>Halaman Depan</span>
            <div style={{ position: 'relative', width: '100%', maxWidth: '700px', borderRadius: '8px', border: '1px solid #e5e7eb', overflow: 'hidden', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', userSelect: 'none' }} onContextMenu={(e) => e.preventDefault()}>
              <img src="/images/certificate/Sertifikat SKK FIRDAUS IKRAM_1.webp" alt="Sertifikat Halaman 1" style={{ width: '100%', height: 'auto', display: 'block', WebkitUserDrag: 'none', pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '60%', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', background: 'linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0.9) 60%)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ background: '#fff', padding: '1.2rem 1.5rem', borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', transform: 'translateY(15px)' }}>
                  <i className='bx bxs-lock-alt' style={{ fontSize: '2.5rem', color: '#16a34a' }}></i>
                  <span style={{ color: '#111827', fontWeight: 700, fontSize: '1.1rem' }}>Dokumen Terkunci</span>
                  <span style={{ color: '#6b7280', fontSize: '0.85rem', textAlign: 'center', maxWidth: '250px', lineHeight: '1.4' }}>Menampilkan sebagian dokumen untuk mencegah penyalahgunaan.</span>
                </div>
              </div>
            </div>
          </div>
          
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ color: '#6b7280', fontSize: '0.9rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>Halaman Belakang</span>
            <div style={{ position: 'relative', width: '100%', maxWidth: '700px', borderRadius: '8px', border: '1px solid #e5e7eb', overflow: 'hidden', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', userSelect: 'none' }} onContextMenu={(e) => e.preventDefault()}>
              <img src="/images/certificate/Sertifikat SKK FIRDAUS IKRAM_2.webp" alt="Sertifikat Halaman 2" style={{ width: '100%', height: 'auto', display: 'block', WebkitUserDrag: 'none', pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '70%', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', background: 'linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0.9) 60%)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ background: '#fff', padding: '1.2rem 1.5rem', borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                  <i className='bx bxs-lock-alt' style={{ fontSize: '2.5rem', color: '#16a34a' }}></i>
                  <span style={{ color: '#111827', fontWeight: 700, fontSize: '1.1rem' }}>Dokumen Terkunci</span>
                  <span style={{ color: '#6b7280', fontSize: '0.85rem', textAlign: 'center', maxWidth: '250px', lineHeight: '1.4' }}>Informasi disembunyikan untuk melindungi privasi data.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function VerifyPage({ params }) {
  const unwrappedParams = use(params);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulasi loading 800ms
    const timer = setTimeout(() => {
      const id = unwrappedParams?.id;
      if (id && certificateData[id]) {
        setData(certificateData[id]);
      } else {
        notFound();
      }
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [unwrappedParams.id]);

  if (loading) {
    return (
      <div className="verify-loading-container">
        <div className="loader"></div>
        <p>Verifying Credential...</p>
      </div>
    );
  }

  if (!data) return null;

  const id = unwrappedParams.id;
  
  if (id === 'its') return <VerifyITS data={data} />;
  if (id === 'pgp') return <VerifyPGP data={data} />;
  if (id === 'lab_admin' || id === 'lab_sampel') return <VerifyLAB data={data} />;
  if (id === 'imc') return <VerifyIMC data={data} />;
  if (id === 'bnsp') return <VerifyBNSP data={data} />;
  
  return null;
}
