import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  // Daftar semua ID proyek untuk diindeks secara dinamis
  const projectIds = [
    'vale', 'pam', 'mti', 'msb', 'awk', 'imip', 'igip', 'ihip', 
    'adp', 'fcm', 'mss', 'bma', 'khubsurat', 'ortho', 'benuanta', 
    'pandit', 'bira', 'dispar', 'bppwsulsel', 'rmk', 'disperkimtan', 
    'wihamedia', 'freelance'
  ]

  // Daftar ID verifikasi sertifikat
  const verifyIds = [
    'its', 'pgp', 'lab_admin', 'lab_sampel', 'imc', 'bnsp'
  ]

  const today = new Date().toISOString().split('T')[0];

  const projectUrls = projectIds.map((id) => ({
    url: `https://firdausikram.xyz/galeri?proyek=${id}`,
    lastModified: today,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const verifyUrls = verifyIds.map((id) => ({
    url: `https://firdausikram.xyz/verify/${id}`,
    lastModified: today,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [
    {
      url: 'https://firdausikram.xyz',
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://firdausikram.xyz/galeri',
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    ...projectUrls,
    ...verifyUrls
  ]
}
