"use client";
import React, { useState } from 'react';

export default function AdminAbout() {
  const [desc, setDesc] = useState("Sebagai seorang Urban Planner & GIS Specialist, saya mengintegrasikan analisis spasial tingkat lanjut...");
  
  const handleSave = (e) => {
    e.preventDefault();
    alert('Deskripsi About berhasil disimpan!');
  };

  return (
    <div>
      <h1 style={{ fontSize: '2.2rem', marginBottom: '0.5rem' }}>About & Journey</h1>
      <p style={{ color: '#94a3b8', marginBottom: '3rem' }}>Kelola teks profil dan jejak karir/pendidikanmu di sini.</p>

      {/* Form Deskripsi About */}
      <div style={{ backgroundColor: '#0b0f19', padding: '2rem', borderRadius: '1rem', border: '1px solid #1e293b', marginBottom: '3rem' }}>
        <h3 style={{ color: '#00e5ff', marginBottom: '1.5rem' }}>Teks Deskripsi Profil</h3>
        <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <textarea 
            value={desc} onChange={(e) => setDesc(e.target.value)} rows="5"
            style={{ width: '100%', padding: '1rem', borderRadius: '0.5rem', backgroundColor: '#020617', border: '1px solid #1e293b', color: '#fff' }}
          />
          <button type="submit" style={{ padding: '1rem', backgroundColor: '#4f46e5', color: '#fff', border: 'none', borderRadius: '0.5rem', fontWeight: 'bold', cursor: 'pointer', width: '200px' }}>Simpan Teks</button>
        </form>
      </div>

      {/* Tambah Journey Baru */}
      <div style={{ backgroundColor: '#0b0f19', padding: '2rem', borderRadius: '1rem', border: '1px dashed #00e5ff' }}>
        <h3 style={{ color: '#00e5ff', marginBottom: '1.5rem' }}>+ Tambah Jejak Karir / Pendidikan</h3>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <input type="text" placeholder="Tahun (Contoh: 2020 - 2024)" style={inputStyle} />
          <input type="text" placeholder="Judul Jabatan / Pendidikan" style={inputStyle} />
          <input type="text" placeholder="Nama Instansi / Universitas" style={inputStyle} />
          <button type="button" style={{ padding: '1rem', backgroundColor: '#10b981', color: '#fff', border: 'none', borderRadius: '0.5rem', fontWeight: 'bold', cursor: 'pointer' }}>Tambahkan ke Journey</button>
        </form>
      </div>
    </div>
  );
}

const inputStyle = { width: '100%', padding: '1rem', borderRadius: '0.5rem', backgroundColor: '#020617', border: '1px solid #1e293b', color: '#fff' };