import InspirationCarousel from '@/components/custom/carousel/inspiration-carousel';
import { Button } from '@/components/ui/button';
import { InspirationData } from '@/types';
import Link from 'next/link';
import React from 'react';

async function InspirationSection() {
  const inspirationData: InspirationData[] = [
    {
      title: 'Modern Living Room Ideas',
      description:
        'Explore contemporary designs that blend comfort and style for your living room.',
      src: '/images/inspiration/inspiration-1.jpg',
      alt: 'Modern Living Room',
      buttonLink: '/inspiration/modern-living-room',
    },
    {
      title: 'Cozy Bedroom Inspirations',
      description: 'Discover ideas to create a warm and inviting bedroom space for relaxation.',
      src: '/images/inspiration/inspiration-2.jpg',
      alt: 'Cozy Bedroom',
      buttonLink: '/inspiration/cozy-bedroom',
    },
    {
      title: 'Stylish Office Setups',
      description: 'Get inspired by chic and functional office furniture arrangements.',
      src: '/images/inspiration/inspiration-3.jpg',
      alt: 'Stylish Office',
      buttonLink: '/inspiration/stylish-office',
    },
    {
      title: 'Elegant Dining Room Designs',
      description: 'Find inspiration for sophisticated dining room furniture and decor.',
      src: '/images/inspiration/inspiration-4.jpg',
      alt: 'Elegant Dining Room',
      buttonLink: '/inspiration/elegant-dining-room',
    },
  ];
  return (
    <div className="py-10 bg-primary/20">
      <div className="app-container grid grid-cols-3">
        <div className="col-span-1 flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-4">100+ Beautiful Inspirations</h2>
          <p className="mb-6">
            Discover our curated selection of inspiring ideas to transform your living space. From
            modern designs to classic styles, find the perfect inspiration for your next home
            project.
          </p>
          <Link href="/inspiration">
            <Button className=" cursor-pointer rounded-none w-max">Explore More</Button>
          </Link>
        </div>
        <div className="col-span-2">
          <InspirationCarousel data={inspirationData} />
        </div>
      </div>
    </div>
  );
}

export default InspirationSection;
