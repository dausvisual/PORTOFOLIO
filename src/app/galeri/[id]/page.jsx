import { galleryData } from '../../../data/galleryData';
import GalleryContent from '../../../components/GalleryContent';

// Fungsi ini memberi tahu Next.js daftar URL apa saja yang akan dirender statis saat proses build (SSG)
export async function generateStaticParams() {
  const ids = Object.keys(galleryData);
  return ids.map((id) => ({
    id: id,
  }));
}

// Fungsi ini secara dinamis membuat tag <title> dan <meta description> yang SEO-friendly untuk setiap proyek
export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = galleryData[id];

  if (!project) {
    return {
      title: 'Proyek Tidak Ditemukan | Firdaus Ikram',
      description: 'Halaman proyek tidak tersedia di portofolio Firdaus Ikram.',
    };
  }

  return {
    title: `${project.title} | Portofolio Firdaus Ikram`,
    description: project.desc,
    alternates: {
      canonical: `https://firdausikram.com/galeri/${id}`,
    },
    openGraph: {
      title: `${project.title} | Portofolio Firdaus Ikram`,
      description: project.desc,
      url: `https://firdausikram.com/galeri/${id}`,
      siteName: 'FIRDAUS IKRAM, S.PWK',
      images: [
        {
          url: project.images[0] || 'https://firdausikram.com/logo/thumbnail-new.jpg',
          width: 1200,
          height: 630,
          alt: `Preview ${project.title}`,
        },
      ],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} | Portofolio Firdaus Ikram`,
      description: project.desc,
      images: [project.images[0] || 'https://firdausikram.com/logo/thumbnail-new.jpg'],
    },
  };
}

// Komponen Server utama yang membaca data dari `params` dan meneruskannya ke Client Component
export default async function ProjectPage({ params }) {
  const { id } = await params;
  const project = galleryData[id];

  return <GalleryContent proyekId={id} currentGallery={project} />;
}
