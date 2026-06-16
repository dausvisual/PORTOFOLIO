"use client";
import Link from 'next/link';

export default function AdminDashboard() {
  return (
    <div>
      <h1 style={{ fontSize: '2.2rem', marginBottom: '0.5rem' }}>Dashboard Utama</h1>
      <p style={{ color: '#94a3b8', marginBottom: '3rem' }}>Selamat datang di Panel Admin Firdaus Ikram. Berikut adalah ringkasan data portofolio kamu.</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
        {/* Kartu Statistik */}
        <StatCard title="Total Projects" count="12" icon="📁" color="#3b82f6" />
        <StatCard title="Sertifikat" count="8" icon="📜" color="#10b981" />
        <StatCard title="Clients" count="15" icon="🤝" color="#f59e0b" />
        <StatCard title="Foto Galeri" count="24" icon="📸" color="#8b5cf6" />
      </div>

      <div style={{ backgroundColor: '#0b0f19', padding: '2rem', borderRadius: '1rem', border: '1px solid #1e293b' }}>
        <h3 style={{ color: '#00e5ff', marginBottom: '1rem' }}>Tindakan Cepat</h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/admin/projects" style={btnStyle}>+ Tambah Project</Link>
          <Link href="/admin/gallery" style={btnStyle}>+ Upload Foto Lapangan</Link>
          <Link href="/admin/hero" style={btnStyleOutline}>Edit Status Ketersediaan</Link>
        </div>
      </div>
    </div>
  );
}

// Komponen Pembantu untuk Kartu Statistik
function StatCard({ title, count, icon, color }) {
  return (
    <div style={{ backgroundColor: '#0b0f19', padding: '1.5rem', borderRadius: '1rem', border: '1px solid #1e293b', borderLeft: `4px solid ${color}` }}>
      <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{icon}</div>
      <h2 style={{ fontSize: '2rem', color: '#fff', margin: '0' }}>{count}</h2>
      <p style={{ color: '#94a3b8', fontSize: '1rem', margin: '0' }}>{title}</p>
    </div>
  );
}

const btnStyle = { padding: '0.8rem 1.5rem', backgroundColor: '#4f46e5', color: '#fff', borderRadius: '0.5rem', textDecoration: 'none', fontWeight: 'bold' };
const btnStyleOutline = { padding: '0.8rem 1.5rem', backgroundColor: 'transparent', border: '1px solid #00e5ff', color: '#00e5ff', borderRadius: '0.5rem', textDecoration: 'none', fontWeight: 'bold' };