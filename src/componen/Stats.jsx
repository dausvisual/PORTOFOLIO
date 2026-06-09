export default function Stats() {
  const stats = [
    { icon: 'bx-briefcase-alt-2', num: '30+', label: 'Proyek Selesai', color: '#a855f7' }, // Ungu
    { icon: 'bx-layer', num: '3+', label: 'Tahun Pengalaman', color: '#3b82f6' }, // Biru
    { icon: 'bx-target-lock', num: '50.000+', label: 'Ha Area Survei', color: '#00e5ff' }, // Cyan
    { icon: 'bx-group', num: '50+', label: 'Klien & Instansi', color: '#8b5cf6' }, // Ungu Muda
    { icon: 'bx-medal', num: '6', label: 'Sertifikasi & Lisensi', color: '#10b981' } // Hijau
  ];

  return (
    <div className="stats-k3-wrapper">
      <div className="stats-k3-container">
        {stats.map((s, i) => (
          <div className="stat-k3-item" key={i}>
            <div className="stat-k3-icon" style={{ color: s.color, textShadow: `0 0 15px ${s.color}80` }}>
              <i className={`bx ${s.icon}`}></i>
            </div>
            <div className="stat-k3-text">
              <h2>{s.num}</h2>
              <p>{s.label}</p>
            </div>
            {/* Garis pembatas, tidak ditampilkan di item paling akhir */}
            {i !== stats.length - 1 && <div className="stat-divider"></div>}
          </div>
        ))}
      </div>
    </div>
  );
}