import React from 'react';

// Menggunakan font Poppins yang sudah kamu siapkan di CSS
const logoStyle = {
    fontFamily: '"Poppins", sans-serif',
};

const logoFIWrapper = {
    width: '40px',
    height: '40px',
    background: 'var(--main-color)', // Menggunakan variabel warna unguindigo kamu
    borderRadius: '1rem', // Border radius halus seperti di gambar
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '2rem',
    fontWeight: '700',
    color: 'white',
    position: 'relative', // Untuk penempatan I yang tumpang tindih
    overflow: 'hidden', // Opsional, untuk memotong jika terlalu besar
};

const letterF = {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-65%)', // Menggeser F sedikit ke kiri
    zIndex: 1,
};

const letterI = {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-35%)', // Menggeser I sedikit ke kanan
    zIndex: 2, // I berada di depan F
    fontSize: '2.3rem', // Membuat I sedikit lebih besar
    color: 'rgba(255, 255, 255, 0.9)', // Sedikit transparan untuk efek tumpang tindih
};

export default function LogoFI() {
  return (
    <div style={logoStyle} className="logo-fi-wrapper">
      <div style={logoFIWrapper}>
        <span style={letterF}>F</span>
        <span style={letterI}>I</span>
      </div>
    </div>
  );
}