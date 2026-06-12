// Lokasi File: src/app/admin/layout.jsx

import Link from 'next/link';

export const metadata = {
  title: 'Admin Portal - Firdaus Ikram',
};

export default function AdminLayout({ children }) {
  return (
    <div style={styles.adminWrapper}>
      {/* === SIDEBAR NAVIGASI KIRI === */}
      <aside style={styles.sidebar}>
        <h2 style={styles.sidebarTitle}>FI Admin Panel</h2>
        
        <nav style={styles.navMenu}>
          <p style={styles.navCategory}>Menu Utama</p>
          <Link href="/admin" style={styles.navLink}>📊 Dashboard</Link>
          <Link href="/admin/hero" style={styles.navLink}>🏠 Pengaturan Hero</Link>
          <Link href="/admin/about" style={styles.navLink}>👤 About & Journey</Link>
          
          <p style={styles.navCategory}>Kelola Portofolio</p>
          <Link href="/admin/services" style={styles.navLink}>⚙️ Services</Link>
          <Link href="/admin/projects" style={styles.navLink}>📁 Projects</Link>
          <Link href="/admin/certifications" style={styles.navLink}>📜 Certifications</Link>
          <Link href="/admin/clients" style={styles.navLink}>🤝 Clients</Link>
          <Link href="/admin/gallery" style={styles.navLink}>📸 Gallery Lapangan</Link>
          
          <Link href="/" style={styles.navLinkBack}>← Kembali ke Web Utama</Link>
        </nav>
      </aside>

      {/* === AREA KONTEN KANAN === */}
      <main style={styles.mainContent}>
        {/* Header Admin */}
        <header style={styles.header}>
          <h3>Mode Administrator</h3>
          <div style={styles.adminProfile}>Admin FI</div>
        </header>
        
        {/* Konten Halaman yang akan berubah-ubah */}
        <div style={styles.contentArea}>
          {children}
        </div>
      </main>
    </div>
  );
}

// Dokumentasi: Objek gaya (style) CSS internal khusus untuk Admin agar tidak merusak tampilan web publik.
const styles = {
  adminWrapper: { display: 'flex', minHeight: '100vh', backgroundColor: '#020617', color: '#fff', fontFamily: 'sans-serif' },
  sidebar: { width: '280px', backgroundColor: '#0b0f19', padding: '2rem', borderRight: '1px solid #1e293b', display: 'flex', flexDirection: 'column' },
  sidebarTitle: { color: '#00e5ff', fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '2.5rem', textAlign: 'center' },
  navMenu: { display: 'flex', flexDirection: 'column', gap: '0.8rem' },
  navCategory: { color: '#94a3b8', fontSize: '0.9rem', marginTop: '1.5rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' },
  navLink: { color: '#e2e8f0', textDecoration: 'none', fontSize: '1.1rem', padding: '0.8rem 1rem', borderRadius: '0.5rem', transition: '0.3s', backgroundColor: 'rgba(255,255,255,0.02)' },
  navLinkBack: { color: '#00e5ff', textDecoration: 'none', fontSize: '1rem', marginTop: 'auto', paddingTop: '2rem', fontWeight: '600' },
  mainContent: { flex: 1, display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden' },
  header: { padding: '1.5rem 3rem', backgroundColor: '#0b0f19', borderBottom: '1px solid #1e293b', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  adminProfile: { padding: '0.5rem 1rem', backgroundColor: 'rgba(0, 229, 255, 0.1)', color: '#00e5ff', borderRadius: '2rem', fontWeight: 'bold' },
  contentArea: { padding: '3rem', overflowY: 'auto', flex: 1 }
};