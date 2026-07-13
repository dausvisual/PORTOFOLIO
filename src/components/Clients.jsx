'use client';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';

export default function Clients() {
  const { language } = useLanguage();
  // Daftar lengkap riwayat kolaborasi
  const clients = [
    { name: 'PT. Sinergi Citra Karya', img: '/images/client/SCK.webp' },
    { name: 'PT. AFA Tombuku Pratama', img: '/images/client/AFA.webp' },
    { name: 'PT. Laboratorindo Alam Bestari', img: '/images/client/LAB.webp', url: 'https://www.ptlab.co.id/' },
    { name: 'PT. VALE Indonesia Tbk.', img: '/images/client/VALE.webp', url: 'https://vale.com/in/indonesia' },
    { name: 'PT. PAM Mineral Tbk.', img: '/images/client/PAM.webp', url: 'https://pammineral.co.id/' },
    { name: 'PT. Merdeka Tsingshan Indonesia', img: '/images/client/MTI.webp', url: 'https://merdekacoppergold.com/' },
    { name: 'PT. Mitra Sulawesi Bersama', img: '/images/client/MSB.webp' },
    { name: 'PT. Ang & Fang Brother', img: '/images/client/AFB.webp' },
    { name: 'PT. Anindya Wiraputra Konsult', img: '/images/client/ANINDYA.webp', url: 'https://web.anindya.biz/' },
    { name: 'Indonesia Morowali Industrial Park', img: '/images/client/IMIP.webp', url: 'https://imip.co.id/' },
    { name: 'Indonesia Huabao Industrial Park', img: '/images/client/IHIP.webp', url: 'https://www.huabao-industrialpark.com' },
    { name: 'International Green Industrial Park', img: '/images/client/IGP.webp' },
    { name: 'PT. Alaska Dwipa Perdana', img: '/images/client/ADP.webp' },
    { name: 'PT. Farmel Cipta Mandiri', img: '/images/client/FCM.webp', url: 'https://farmel.co.id/' },
    { name: 'PT. Metal Smeltindo Selaras', img: '/images/client/MSS.webp', url: 'http://idnmss.com/id/col.jsp?id=110' },
    { name: 'PT. Khubsurat Meherban Ilahi', img: '/images/client/KHUBSURAT.webp' },
    { name: 'Kabupaten Bulukumba', img: '/images/client/BLK.webp', url: 'https://bulukumbakab.go.id/' },
    { name: 'Kabupaten Morowali', img: '/images/client/MRW.webp', url: 'https://morowalikab.go.id/' },
    { name: 'Kabupaten Luwu', img: '/images/client/LUWU.webp', url: 'https://luwukab.go.id/' },
    { name: 'BPPW SULSEL', img: '/images/client/PU.webp', url: 'https://ciptakarya.pu.go.id/bppw-detail?satker=505940' },
    { name: 'Disperkimtan Bulukumba', img: '/images/client/PER.webp' },
    { name: 'Benuanta Group', img: '/images/client/BG.webp' },
    { name: 'PT. Pandit Eka Nusa Agrata', img: '/images/client/PND.webp', url: 'https://panditekanusa.com/' },
    { name: 'PT. Ruang Meja Kerja', img: '/images/client/RMK.webp' },
    { name: 'GEOPLAN Spatial', img: '/images/client/GPS.webp' },
    { name: 'PT. Arya Graha Putratama', img: '/images/client/AGP.webp' },
  ];

  return (
    <section id="clients" className="projects-section-k3">
      <span className="heading-sm display-block" data-aos="fade-up">{language === 'en' ? 'CLIENTS & PARTNERS' : 'KLIEN & MITRA'}</span>
      <h2 className="heading" data-aos="fade-up" data-aos-delay="100">{language === 'en' ? 'Collaboration History' : 'Riwayat Kolaborasi'}</h2>
      
      <div className="clients-grid-container">
        <div className="clients-grid">
          {clients.map((client, index) => (
            <div className="client-card" key={index} data-aos="zoom-in" data-aos-delay={(index % 4) * 50}>
              {client.url ? (
                <a href={client.url} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', color: 'inherit', width: '100%', height: '100%' }}>
                  <Image src={client.img} alt={client.name} width={75} height={75} />
                  <p>{client.name}</p>
                </a>
              ) : (
                <>
                  <Image src={client.img} alt={client.name} width={75} height={75} />
                  <p>{client.name}</p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}