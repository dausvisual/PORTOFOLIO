"use client";
import React, { useState } from 'react';

export default function AdminGallery() {
  const [photos] = useState([
    { id: 1, title: 'Survei Topografi Tambang', url: '/images/field1.webp' },
    { id: 2, title: 'Penerbangan Drone Area Kota', url: '/images/field2.webp' }
  ]);
  const [isAdding, setIsAdding] = useState(false);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
        <div>
          <h1 style={{ fontSize: '2.2rem', marginBottom: '0.5rem' }}>Gallery Lapangan</h1>
          <p style={{ color: '#94a3b8' }}>Upload foto-foto kegiatan lapangan terbarumu.</p>
        </div>
        <button onClick={() => setIsAdding(!isAdding)} style={{ padding: '1rem 2rem', backgroundColor: isAdding ? '#ef4444' : '#00e5ff', color: isAdding ? '#fff' : '#020617', border: 'none', borderRadius: '0.5rem', fontWeight: 'bold', cursor: 'pointer' }}>
          {isAdding ? 'Batal Upload' : '+ Upload Foto Baru'}
        </button>
      </div>

      {isAdding && (
        <div style={{ backgroundColor: '#0b0f19', padding: '2rem', borderRadius: '1rem', border: '1px dashed #00e5ff', marginBottom: '3rem' }}>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <input type="text" placeholder="Judul/Keterangan Foto..." style={inputStyle} required />
            <input type="file" accept="image/*" style={inputStyle} required />
            <button type="button" style={{ padding: '1rem', backgroundColor: '#4f46e5', color: '#fff', border: 'none', borderRadius: '0.5rem', fontWeight: 'bold', cursor: 'pointer' }}>Mulai Upload</button>
          </form>
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1.5rem' }}>
        {photos.map((photo) => (
          <div key={photo.id} style={{ backgroundColor: '#0b0f19', padding: '1rem', borderRadius: '0.8rem', border: '1px solid #1e293b' }}>
            <div style={{ height: '150px', backgroundColor: '#020617', borderRadius: '0.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4f46e5' }}>[Preview Gambar]</div>
            <p style={{ color: '#fff', fontSize: '1rem', marginBottom: '1rem' }}>{photo.title}</p>
            <button style={{ width: '100%', padding: '0.6rem', backgroundColor: 'transparent', color: '#ef4444', border: '1px solid #ef4444', borderRadius: '0.4rem', cursor: 'pointer' }}>Hapus Foto</button>
          </div>
        ))}
      </div>
    </div>
  );
}

const inputStyle = { width: '100%', padding: '1rem', borderRadius: '0.5rem', backgroundColor: '#020617', border: '1px solid #1e293b', color: '#fff' };