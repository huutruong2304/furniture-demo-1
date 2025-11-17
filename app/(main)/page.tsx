import React from 'react';
import HeroSection from './_components/home/hero-section';
import BrowseRangeSection from './_components/home/browse-range-section';
import FeaturedProductsSection from './_components/home/featured-products-section';
import InspirationSection from './_components/home/inspiration-section';
import ShareGallerySection from './_components/home/shared-gallery-section';

const HomePage = () => {
  return (
    <div className="min-h-[50vh]">
      <HeroSection />
      <BrowseRangeSection />
      <FeaturedProductsSection />
      <InspirationSection />
      <ShareGallerySection />
    </div>
  );
};

export default HomePage;
