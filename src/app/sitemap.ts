import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  // Daftar semua ID proyek untuk diindeks secara dinamis
  const projectIds = [
    'vale', 'pam', 'mti', 'msb', 'awk', 'imip', 'igip', 'ihip', 
    'adp', 'fcm', 'mss', 'bma', 'khubsurat', 'ortho', 'benuanta', 
    'pandit', 'bira', 'dispar', 'bppwsulsel', 'rmk', 'disperkimtan', 
    'wihamedia', 'freelance'
  ]

  const projectUrls = projectIds.map((id) => ({
    url: `https://firdausikram.xyz/galeri?proyek=${id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    {
      url: 'https://firdausikram.xyz',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://firdausikram.xyz/galeri',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    ...projectUrls
  ]
}
