import RangeCard from '@/components/custom/range-card';
import React from 'react';

function BrowseRangeSection() {
  const ranges: { name: string; href: string; imageUrl: string; alt: string }[] = [
    {
      name: 'Living Room',
      href: '/ranges/living-room',
      imageUrl: '/images/ranges/range-1.jpg',
      alt: 'Living Room',
    },
    {
      name: 'Bedroom',
      href: '/ranges/bedroom',
      imageUrl: '/images/ranges/range-2.jpg',
      alt: 'Bedroom',
    },
    {
      name: 'Dining Room',
      href: '/ranges/dining-room',
      imageUrl: '/images/ranges/range-3.jpg',
      alt: 'Dining Room',
    },
  ];
  return (
    <div className="app-container py-10">
      <div className="mb-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Browse By Range</h2>
        <p className="mt-2 text-gray-600">
          Explore our diverse furniture ranges to find the perfect fit for your home.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {ranges.map((range) => (
          <RangeCard
            key={range.name}
            href={range.href}
            name={range.name}
            imageUrl={range.imageUrl}
            alt={range.alt}
          />
        ))}
      </div>
    </div>
  );
}

export default BrowseRangeSection;
