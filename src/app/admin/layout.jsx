// Lokasi File: src/app/admin/layout.jsx
"use client"; // Menandakan komponen ini berjalan di browser pengunjung karena menggunakan state

import React, { useState } from 'react';
import Link from 'next/link';

export default function AdminLayout({ children }) {
  // === 1. STATE MANAGEMENT (Penyimpanan Data Sementara) ===
  // Lazy initializer: membaca sessionStorage saat pertama kali render, tanpa useEffect
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem('isAdminLoggedIn') === 'true';
    }
    return false;
  });
  const [passwordInput, setPasswordInput] = useState('');        // Menyimpan teks yang diketik di input
  const [errorMessage, setErrorMessage] = useState('');          // Menyimpan pesan jika password salah

  // === 3. FUNGSI UNTUK MEMPROSES LOGIN ===
  const handleLogin = (e) => {
    e.preventDefault(); // Mencegah halaman ter-refresh saat tombol ditekan
    
    // UBAH PASSWORD INI SESUAI KEINGINANMU (Contoh: 'firdaus123')
    const PASSWORD_RAHASIA = '1712'; 

    if (passwordInput === PASSWORD_RAHASIA) {
      setIsAuthenticated(true); // Beri izin masuk
      sessionStorage.setItem('isAdminLoggedIn', 'true'); // Simpan tanda di browser
      setErrorMessage(''); // Hapus pesan error jika ada
    } else {
      setErrorMessage('Akses Ditolak! Password salah.');
      setPasswordInput(''); // Kosongkan kolom input
    }
  };

  // === 4. FUNGSI KELUAR (LOGOUT) ===
  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('isAdminLoggedIn'); // Hapus tanda dari browser
  };

  // =========================================================================
  // TAMPILAN 1: JIKA BELUM LOGIN (HANYA MUNCULKAN FORM PASSWORD)
  // =========================================================================
  if (!isAuthenticated) {
    return (
      <div style={styles.loginWrapper}>
        <div style={styles.loginCard}>
          <div style={styles.loginLogo}>FI</div>
          <h2 style={{ color: '#fff', marginBottom: '0.5rem', textAlign: 'center' }}>Restricted Area</h2>
          <p style={{ color: '#94a3b8', marginBottom: '2rem', textAlign: 'center', fontSize: '0.9rem' }}>
            Silakan masukkan kata sandi admin.
          </p>

          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            <input
              type="password"
              placeholder="Masukkan Password..."
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              style={styles.loginInput}
              required
            />
            {/* Memunculkan pesan error berwarna merah jika password salah */}
            {errorMessage && <p style={{ color: '#ef4444', fontSize: '0.85rem', textAlign: 'center', margin: '0' }}>{errorMessage}</p>}
            
            <button type="submit" style={styles.loginButton}>Masuk Sistem</button>
            <Link href="/" style={styles.backLink}>← Kembali ke Web Utama</Link>
          </form>
        </div>
      </div>
    );
  }

  // =========================================================================
  // TAMPILAN 2: JIKA SUDAH LOGIN (MUNCULKAN SIDEBAR & KONTEN ADMIN)
  // =========================================================================
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
          
          {/* Tombol Logout & Kembali */}
          <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <button onClick={handleLogout} style={styles.logoutButton}>🔒 Keluar (Logout)</button>
            <Link href="/" style={styles.navLinkBack}>← Kembali ke Web Utama</Link>
          </div>
        </nav>
      </aside>

      {/* === AREA KONTEN KANAN === */}
      <main style={styles.mainContent}>
        <header style={styles.header}>
          <h3>Mode Administrator</h3>
          <div style={styles.adminProfile}>Admin FI</div>
        </header>
        
        <div style={styles.contentArea}>
          {children}
        </div>
      </main>
    </div>
  );
}

// === OBJEK GAYA CSS (STYLING) ===
const styles = {
  // Gaya untuk halaman Login
  loginWrapper: { display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#020617', fontFamily: 'sans-serif' },
  loginCard: { backgroundColor: '#0b0f19', padding: '3rem', borderRadius: '1.5rem', border: '1px solid #1e293b', width: '100%', maxWidth: '400px', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' },
  loginLogo: { width: '60px', height: '60px', backgroundColor: 'rgba(0, 229, 255, 0.1)', border: '2px solid #00e5ff', color: '#00e5ff', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%', fontSize: '1.5rem', fontWeight: 'bold', margin: '0 auto 1.5rem' },
  loginInput: { width: '100%', padding: '1rem', borderRadius: '0.5rem', backgroundColor: '#020617', border: '1px solid #1e293b', color: '#fff', fontSize: '1rem', outline: 'none' },
  loginButton: { width: '100%', padding: '1rem', backgroundColor: '#4f46e5', color: '#fff', border: 'none', borderRadius: '0.5rem', fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer', transition: '0.3s' },
  backLink: { color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem', textAlign: 'center', display: 'block', marginTop: '1rem' },
  
  // Gaya untuk Layout Admin (Sama seperti sebelumnya)
  adminWrapper: { display: 'flex', minHeight: '100vh', backgroundColor: '#020617', color: '#fff', fontFamily: 'sans-serif' },
  sidebar: { width: '280px', backgroundColor: '#0b0f19', padding: '2rem', borderRight: '1px solid #1e293b', display: 'flex', flexDirection: 'column' },
  sidebarTitle: { color: '#00e5ff', fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '2.5rem', textAlign: 'center' },
  navMenu: { display: 'flex', flexDirection: 'column', gap: '0.8rem', height: '100%' },
  navCategory: { color: '#94a3b8', fontSize: '0.9rem', marginTop: '1.5rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' },
  navLink: { color: '#e2e8f0', textDecoration: 'none', fontSize: '1.1rem', padding: '0.8rem 1rem', borderRadius: '0.5rem', transition: '0.3s', backgroundColor: 'rgba(255,255,255,0.02)' },
  navLinkBack: { color: '#00e5ff', textDecoration: 'none', fontSize: '1rem', fontWeight: '600', textAlign: 'center' },
  logoutButton: { backgroundColor: 'transparent', color: '#ef4444', border: '1px solid #ef4444', padding: '0.8rem', borderRadius: '0.5rem', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem', transition: '0.3s' },
  mainContent: { flex: 1, display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden' },
  header: { padding: '1.5rem 3rem', backgroundColor: '#0b0f19', borderBottom: '1px solid #1e293b', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  adminProfile: { padding: '0.5rem 1rem', backgroundColor: 'rgba(0, 229, 255, 0.1)', color: '#00e5ff', borderRadius: '2rem', fontWeight: 'bold' },
  contentArea: { padding: '3rem', overflowY: 'auto', flex: 1 }
};