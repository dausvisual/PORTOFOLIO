'use client';
import { useState } from 'react';

export default function Clients() {
  const [showAll, setShowAll] = useState(false);
  // Daftar lengkap riwayat kolaborasi Bos Daus
  const clients = [
    { name: 'PT. Sinergi Citra Karya', img: '/images/client/SCK.webp' },
    { name: 'PT. AFA Tombuku Pratama', img: '/images/client/AFA.webp' },
    { name: 'PT. Laboratorindo Alam Bestari', img: '/images/client/LAB.webp' },
    { name: 'PT. VALE Indonesia Tbk.', img: '/images/client/VALE.webp' },
    { name: 'PT. PAM Mineral Tbk.', img: '/images/client/PAM.webp' },
    { name: 'PT. Merdeka Tsingshan Indonesia', img: '/images/client/MTI.webp' },
    { name: 'PT. Mitra Sulawesi Bersama', img: '/images/client/MSB.webp' },
    { name: 'PT. Ang & Fang Brother', img: '/images/client/AFB.webp' },
    { name: 'PT. Anindya Wiraputra Konsult', img: '/images/client/ANINDYA.webp' },
    { name: 'Indonesia Morowali Industrial Park', img: '/images/client/IMIP.webp' },
    { name: 'Indonesia Huabao Industrial Park', img: '/images/client/IHIP.webp' },
    { name: 'International Green Industrial Park', img: '/images/client/IGP.webp' },
    { name: 'PT. Alaska Dwipa Perdana', img: '/images/client/ADP.webp' },
    { name: 'PT. Farmel Cipta Mandiri', img: '/images/client/FCM.webp' },
    { name: 'Kabupaten Bulukumba', img: '/images/client/BLK.webp' },
    { name: 'Kabupaten Morowali', img: '/images/client/MRW.webp' },
    { name: 'Kabupaten Luwu', img: '/images/client/LUWU.webp' },
    { name: 'BPPW SULSEL', img: '/images/client/PU.webp' },
    { name: 'Disperkimtan Bulukumba', img: '/images/client/PER.webp' },
    { name: 'Benuanta Group', img: '/images/client/BG.webp' },
    { name: 'PT. Pandit Eka Nusa Agrata', img: '/images/client/PND.webp' },
    { name: 'PT. Ruang Meja Kerja', img: '/images/client/RMK.webp' },
    { name: 'GEOPLAN Spatial', img: '/images/client/GPS.webp' },
    { name: 'PT. Arya Graha Putratama', img: '/images/client/AGP.webp' }
  ];

  return (
    <section id="clients" className="projects-section-k3">
      <h5 className="heading-sm">CLIENTS & PARTNERS</h5>
      <h2 className="heading">Riwayat Kolaborasi</h2>
      
      <div className={`clients-grid-container ${!showAll ? 'is-collapsed' : ''}`}>
        <div className="clients-grid">
          {clients.map((client, index) => (
            <div className="client-card" key={index}>
              <img src={client.img} alt={client.name} loading="lazy" decoding="async" />
              <p>{client.name}</p>
            </div>
          ))}
        </div>
        {!showAll && <div className="fade-overlay"></div>}
      </div>

      <div className={`projects-action-bar ${!showAll ? 'floating-btn' : 'normal-btn'}`}>
        {!showAll ? (
          <button className="btn btn-primary" onClick={() => setShowAll(true)}>
            Lihat Selengkapnya <i className='bx bx-chevron-down'></i>
          </button>
        ) : (
          <button className="btn btn-outline" onClick={() => setShowAll(false)}>
            Sembunyikan <i className='bx bx-chevron-up'></i>
          </button>
        )}
      </div>
    </section>
  );
}