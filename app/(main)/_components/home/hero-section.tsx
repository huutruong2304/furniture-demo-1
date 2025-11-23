import React from 'react';
import Carousel from '@/components/custom/carousel/carousel';

async function HeroSection() {
  const MOCK_HERO_DATA: HeroData[] = [
    {
      title: 'Welcome to \n Our Furniture Store',
      subtitle: 'Quality Furniture for Your Home',
      description:
        'Discover our wide range of furniture that combines style and comfort. From modern designs to classic pieces, we have something for every taste.',
      src: '/images/hero-slide/slide-1.jpg',
      alt: 'Furniture Store Hero Image',
      buttonText: 'Shop Now',
      buttonLink: '/shop',
    },
    {
      title: 'Quality Furniture \n for Your Home',
      subtitle: 'Quality Furniture for Your Home',
      description:
        'Discover our wide range of furniture that combines style and comfort. From modern designs to classic pieces, we have something for every taste.',
      src: '/images/hero-slide/slide-2.jpg',
      alt: 'Furniture Store Hero Image',
      buttonText: 'Shop Now',
      buttonLink: '/shop',
    },
    {
      title: 'Transform Your Space \n with Our Furniture',
      subtitle: 'Quality Furniture for Your Home',
      description:
        'Discover our wide range of furniture that combines style and comfort. From modern designs to classic pieces, we have something for every taste.',
      src: '/images/hero-slide/slide-3.jpg',
      alt: 'Furniture Store Hero Image',
      buttonText: 'Shop Now',
      buttonLink: '/shop',
    },
  ];

  return (
    <div className="app-container">
      <Carousel data={MOCK_HERO_DATA} />
    </div>
  );
}

export default HeroSection;
