// Lokasi File: src/app/admin/projects/page.jsx
"use client";
import React, { useState } from 'react';

export default function AdminProjects() {
  // Simulasi data dari Database
  const [projects, setProjects] = useState([
    { id: 1, title: 'Pemetaan Topografi Morowali', desc: 'Analisis spasial untuk area pertambangan.', tech: 'ArcGIS, Drone Mapping' }
  ]);

  const [isAdding, setIsAdding] = useState(false);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
        <div>
          <h1 style={{ fontSize: '2.2rem', marginBottom: '0.5rem' }}>Kelola Projects</h1>
          <p style={{ color: '#94a3b8' }}>Tambah, edit, atau hapus portofolio proyek kamu di sini.</p>
        </div>
        
        {/* Tombol Buka Form Tambah */}
        <button 
          onClick={() => setIsAdding(!isAdding)}
          style={{ padding: '1rem 2rem', backgroundColor: isAdding ? '#ef4444' : '#00e5ff', color: isAdding ? '#fff' : '#020617', border: 'none', borderRadius: '0.5rem', fontWeight: 'bold', cursor: 'pointer' }}
        >
          {isAdding ? 'Batal Tambah' : '+ Tambah Project Baru'}
        </button>
      </div>

      {/* FORM TAMBAH DATA BARU (Muncul jika tombol ditekan) */}
      {isAdding && (
        <div style={{ backgroundColor: '#0b0f19', padding: '2rem', borderRadius: '1rem', border: '1px dashed #00e5ff', marginBottom: '3rem' }}>
          <h3 style={{ color: '#00e5ff', marginBottom: '1.5rem' }}>Input Detail Project</h3>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <input type="text" placeholder="Judul Proyek..." style={inputStyle} required />
            <textarea placeholder="Deskripsi Singkat..." rows="3" style={inputStyle} required />
            <input type="text" placeholder="Teknologi yang digunakan (pisahkan dengan koma)..." style={inputStyle} required />
            
            <label style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Unggah Gambar/Thumbnail Project:</label>
            <input type="file" accept="image/*" style={inputStyle} required />
            
            <button type="submit" style={{ padding: '1rem', backgroundColor: '#4f46e5', color: '#fff', border: 'none', borderRadius: '0.5rem', fontWeight: 'bold', cursor: 'pointer' }}>
              Unggah & Simpan Project
            </button>
          </form>
        </div>
      )}

      {/* DAFTAR PROJECT YANG SUDAH ADA */}
      <h3 style={{ marginBottom: '1rem', color: '#fff' }}>Daftar Project Terpublikasi ({projects.length})</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
        {projects.map((proj) => (
          <div key={proj.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#0b0f19', padding: '1.5rem 2rem', borderRadius: '0.8rem', border: '1px solid #1e293b' }}>
            <div>
              <h4 style={{ fontSize: '1.3rem', color: '#fff', marginBottom: '0.3rem' }}>{proj.title}</h4>
              <p style={{ color: '#94a3b8', fontSize: '1rem' }}>{proj.desc}</p>
              <p style={{ color: '#00e5ff', fontSize: '0.85rem', marginTop: '0.5rem' }}>Tech: {proj.tech}</p>
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button style={{ padding: '0.6rem 1.2rem', backgroundColor: '#3b82f6', color: 'white', borderRadius: '0.4rem', border: 'none', cursor: 'pointer' }}>Edit</button>
              <button style={{ padding: '0.6rem 1.2rem', backgroundColor: 'transparent', color: '#ef4444', border: '1px solid #ef4444', borderRadius: '0.4rem', cursor: 'pointer' }}>Hapus</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Objek gaya bawaan agar kode bersih
const inputStyle = { width: '100%', padding: '1rem', borderRadius: '0.5rem', backgroundColor: '#020617', border: '1px solid #1e293b', color: '#fff', fontFamily: 'inherit' };