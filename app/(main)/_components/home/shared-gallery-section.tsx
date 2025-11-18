import PhotoGallery from '@/components/custom/photo-gallery';
import React from 'react';

type Props = {};

function ShareGallerySection({}: Props) {
  const data: { src: string; alt: string }[] = [
    { src: '/images/gallery/photo-1.jpg', alt: 'Gallery Image 1' },
    { src: '/images/gallery/photo-2.jpg', alt: 'Gallery Image 2' },
    { src: '/images/gallery/photo-3.jpg', alt: 'Gallery Image 3' },
    { src: '/images/gallery/photo-4.jpg', alt: 'Gallery Image 4' },
    { src: '/images/gallery/photo-5.jpg', alt: 'Gallery Image 5' },
    { src: '/images/gallery/photo-6.jpg', alt: 'Gallery Image 6' },
    { src: '/images/gallery/photo-7.jpg', alt: 'Gallery Image 7' },
    { src: '/images/gallery/photo-8.jpg', alt: 'Gallery Image 8' },
    { src: '/images/gallery/photo-9.jpg', alt: 'Gallery Image 9' },
    { src: '/images/gallery/photo-10.jpg', alt: 'Gallery Image 10' },
    { src: '/images/gallery/photo-11.jpg', alt: 'Gallery Image 11' },
    { src: '/images/gallery/photo-12.jpg', alt: 'Gallery Image 12' },
  ];
  return (
    <div className="py-10 app-container">
      <div className="text-center mb-10">
        <p className="text-gray-400 font-semibold">Shared by our community</p>
        <h2 className="text-4xl font-bold">#FurniShowcase</h2>
      </div>
      <PhotoGallery data={data} />
    </div>
  );
}

export default ShareGallerySection;
