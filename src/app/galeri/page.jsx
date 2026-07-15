import { redirect } from 'next/navigation';

export default async function GaleriRedirectPage({ searchParams }) {
  const params = await searchParams;
  const proyekId = params?.proyek;

  if (proyekId) {
    redirect(`/galeri/${proyekId}`);
  }

  // Jika tidak ada ID proyek, kembalikan ke beranda
  redirect('/#projects');
}
