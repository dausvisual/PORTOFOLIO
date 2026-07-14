// Lokasi File: src/app/admin/layout.jsx
"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function AdminLayout({ children }) {
  // === 1. STATE MANAGEMENT ===
  // Hapus penggunaan sessionStorage agar jebakan ter-reset saat halaman di-refresh
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [trapLevel, setTrapLevel] = useState(0);
  
  const [escapeClicks, setEscapeClicks] = useState(0);
  const [passwordInput, setPasswordInput] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // === FUNGSI UNTUK MEMPROSES LOGIN ===
  const handleLogin = (e) => {
    e.preventDefault(); 
    
    // HONEYPOT: Terima password APAPUN yang dimasukkan user
    if (passwordInput.trim().length > 0) {
      setIsAuthenticated(true); 
      setTrapLevel(1);
      setErrorMessage(''); 
      
      // Push state dummy agar tombol back di browser bisa ditangkap
      window.history.pushState({ trap: true }, '');
    } else {
      setErrorMessage('Silakan masukkan password.');
    }
  };

  // === FUNGSI KELUAR (LOGOUT) ===
  const handleLogout = () => {
    setIsAuthenticated(false);
    setTrapLevel(0);
    setEscapeClicks(0);
  };

  const trapLevelRef = useRef(trapLevel);
  const escapeClicksRef = useRef(escapeClicks);

  // Selalu sinkronkan Ref dengan State terbaru tanpa me-retrigger event listener
  useEffect(() => {
    trapLevelRef.current = trapLevel;
    escapeClicksRef.current = escapeClicks;
  }, [trapLevel, escapeClicks]);

  // === TANGKAP TOMBOL BACK (BROWSER/PONSEL) ===
  useEffect(() => {
    const handlePopState = (e) => {
      const currentTrap = trapLevelRef.current;
      const currentClicks = escapeClicksRef.current;

      if (currentTrap === 1) {
        setTrapLevel(2);
      } else if (currentTrap === 2) {
        if (currentClicks < 6) {
          setEscapeClicks(prev => prev + 1);
        } else {
          // Lepaskan jebakan
          handleLogout();
          window.location.href = '/';
        }
      }
    };
    
    if (isAuthenticated) {
      // 2. Beri 7 lapis buffer history saat jebakan pertama aktif!
      // Mendorong di awal lebih aman dari blokir history Chrome/Safari
      for (let i = 0; i < 7; i++) {
        window.history.pushState({ trapCount: i }, '', window.location.href);
      }
      window.addEventListener('popstate', handlePopState);
    }
    
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [isAuthenticated]);

  // === TANGKAP TOMBOL BACK DI LAYAR ===
  const handleOnScreenBack = () => {
    const currentTrap = trapLevelRef.current;
    const currentClicks = escapeClicksRef.current;
    
    if (currentTrap === 1) {
      setTrapLevel(2);
    } else if (currentTrap === 2) {
      if (currentClicks < 6) {
        setEscapeClicks(prev => prev + 1);
      } else {
        handleLogout();
        window.location.href = '/';
      }
    }
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
  // TAMPILAN 2: JIKA SUDAH LOGIN (MUNCULKAN HALAMAN PALSU TAHAP 1 & 2)
  // =========================================================================
  if (trapLevel === 1) {
    return (
      <div style={styles.honeypotWrapper}>
        <div style={styles.honeypotContent}>
          <h1 style={styles.honeypotTitle}>MAU NGAPAIN?</h1>
          <p style={styles.honeypotSubtitle}>Akses Ditolak. Aktivitas Anda telah direkam.</p>
          <button onClick={handleOnScreenBack} style={styles.honeypotButton}>
            Kembali
          </button>
        </div>
      </div>
    );
  }

  // TRAP 2: DIRETAS
  const hackingProgress = [0, 12, 17, 70, 80, 85, 90];
  const progressPercent = hackingProgress[Math.min(escapeClicks, 6)];

  return (
    <div style={styles.trap2Wrapper}>
      <div style={styles.trap2Content}>
        <div style={styles.skullIcon}>☠️</div>
        <h1 style={styles.trap2Title}>PERANGKAT TELAH DIRETAS</h1>
        <div style={styles.glitchBox}>
          <p style={styles.trap2Subtitle}>MENGUNDUH SEMUA DATA PRIBADI...</p>
          <div style={styles.progressBarWrapper}>
            <div style={{...styles.progressBarFill, width: `${progressPercent}%`}}></div>
          </div>
          <p style={{color: '#ff0000', marginTop: '0.5rem', fontFamily: 'monospace', fontWeight: 'bold'}}>{progressPercent}% - Sedang Menyalin Data</p>
        </div>
        <button onClick={handleOnScreenBack} style={styles.trap2Button}>
          BATALKAN
        </button>
      </div>
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
  
  // Gaya untuk halaman Honeypot Tahap 1
  honeypotWrapper: { display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#000', fontFamily: 'sans-serif' },
  honeypotContent: { textAlign: 'center', padding: '2rem' },
  honeypotTitle: { fontSize: '5rem', color: '#ef4444', fontWeight: '900', letterSpacing: '2px', textShadow: '0 0 20px rgba(239, 68, 68, 0.5)', margin: 0 },
  honeypotSubtitle: { fontSize: '1.2rem', color: '#f87171', marginTop: '1rem', marginBottom: '3rem', fontFamily: 'monospace' },
  honeypotButton: { backgroundColor: 'transparent', color: '#ef4444', border: '1px solid #ef4444', padding: '0.8rem 2rem', borderRadius: '0.5rem', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem', transition: 'all 0.3s', textTransform: 'uppercase' },

  // Gaya untuk halaman Honeypot Tahap 2 (DIRETAS)
  trap2Wrapper: { display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#0a0000', fontFamily: 'monospace', backgroundImage: 'radial-gradient(#3a0000 1px, transparent 1px)', backgroundSize: '10px 10px' },
  trap2Content: { textAlign: 'center', padding: '2rem', backgroundColor: 'rgba(0,0,0,0.8)', border: '2px solid #ff0000', boxShadow: '0 0 50px rgba(255, 0, 0, 0.4)', borderRadius: '1rem', maxWidth: '600px', width: '90%' },
  skullIcon: { fontSize: '6rem', margin: '0 auto', animation: 'pulse 1s infinite alternate', filter: 'drop-shadow(0 0 10px red)' },
  trap2Title: { fontSize: '3rem', color: '#ff0000', fontWeight: '900', letterSpacing: '3px', textShadow: '2px 2px 0px #000, -2px -2px 0px #000', margin: '1rem 0' },
  glitchBox: { border: '1px dashed #ff0000', padding: '1.5rem', marginBottom: '2rem', backgroundColor: 'rgba(255, 0, 0, 0.05)' },
  trap2Subtitle: { fontSize: '1.2rem', color: '#fff', marginBottom: '1rem', fontWeight: 'bold', letterSpacing: '1px' },
  progressBarWrapper: { width: '100%', height: '20px', backgroundColor: '#333', border: '1px solid #ff0000' },
  progressBarFill: { height: '100%', backgroundColor: '#ff0000', transition: 'width 0.5s ease-in-out' },
  trap2Button: { backgroundColor: '#ff0000', color: '#000', border: '2px solid #ff0000', padding: '1rem 2rem', borderRadius: '0.5rem', cursor: 'pointer', fontWeight: '900', fontSize: '1.1rem', transition: 'all 0.1s', textTransform: 'uppercase', boxShadow: '0 0 15px rgba(255,0,0,0.5)' }
};