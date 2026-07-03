import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', background: 'var(--bg-dark)', color: 'var(--text-light)', textAlign: 'center', padding: '2rem' }}>
      <h1 style={{ fontSize: '6rem', color: 'var(--neon-blue)', marginBottom: '1rem', textShadow: '0 0 20px rgba(0, 229, 255, 0.4)' }}>404</h1>
      <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Halaman Tidak Ditemukan</h2>
      <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '3rem', maxWidth: '500px' }}>
        Maaf, halaman yang Anda cari mungkin telah dihapus, diubah namanya, atau tidak tersedia untuk sementara waktu.
      </p>
      <Link href="/" className="btn btn-primary" style={{ padding: '1rem 2.5rem', borderRadius: '30px' }}>
        <i className='bx bx-home'></i> Kembali ke Beranda
      </Link>
    </div>
  );
}
