'use client';
import { useState } from 'react';

export default function Clients() {
  const [showAll, setShowAll] = useState(false);
  // Daftar lengkap riwayat kolaborasi Bos Daus
  const clients = [
    { name: 'PT. Sinergi Citra Karya', img: '/images/client/SCK.jpg' },
    { name: 'PT. AFA Tombuku Pratama', img: '/images/client/AFA.jpg' },
    { name: 'PT. Laboratorindo Alam Bestari', img: '/images/client/LAB.jpg' },
    { name: 'PT. VALE Indonesia Tbk.', img: '/images/client/VALE.jpg' },
    { name: 'PT. PAM Mineral Tbk.', img: '/images/client/PAM.jpg' },
    { name: 'PT. Merdeka Tsingshan Indonesia', img: '/images/client/MTI.jpg' },
    { name: 'PT. Mitra Sulawesi Bersama', img: '/images/client/MSB.jpg' },
    { name: 'PT. Ang & Fang Brother', img: '/images/client/AFB.jpg' },
    { name: 'PT. Anindya Wiraputra Konsult', img: '/images/client/ANINDYA.jpg' },
    { name: 'Indonesia Morowali Industrial Park', img: '/images/client/IMIP.jpg' },
    { name: 'Indonesia Huabao Industrial Park', img: '/images/client/IHIP.jpg' },
    { name: 'International Green Industrial Park', img: '/images/client/IGP.jpg' },
    { name: 'PT. Alaska Dwipa Perdana', img: '/images/client/ADP.jpg' },
    { name: 'PT. Farmel Cipta Mandiri', img: '/images/client/FCM.jpg' },
    { name: 'Kabupaten Bulukumba', img: '/images/client/BLK.png' },
    { name: 'BPPW SULSEL', img: '/images/client/PU.png' },
    { name: 'Disperkimtan Bulukumba', img: '/images/client/PER.jpg' },
    { name: 'Benuanta Group', img: '/images/client/BG.jpg' },
    { name: 'PT. Pandit Eka Nusa Agrata', img: '/images/client/PND.jpg' },
    { name: 'PT. Ruang Meja Kerja', img: '/images/client/RMK.jpg' },
    { name: 'GEOPLAN Spatial', img: '/images/client/GPS.png' },
    { name: 'PT. Arya Graha Putratama', img: '/images/client/AGP.jpg' }
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