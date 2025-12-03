import ProductCard from '@/components/custom/product/product-card';

import React from 'react';
import FilterSection from '../_components/shop/filter-section';
import { Metadata } from 'next';
import PaginationSection from '../_components/shop/pagination-section';
import { MOCK_PRODUCTS } from '@/mock-data/product';
import BannerLayout from '@/components/layout/banner-layout';

export const metadata: Metadata = {
  title: 'All Products - Furniture E-Commerce',
  description: 'Explore our wide range of furniture products.',
  // Open Graph Configuration (Facebook, Zalo, LinkedIn...)
  openGraph: {
    title: 'All Products - Furniture E-Commerce',
    description: 'Explore our wide range of furniture products.',
    url: '/shop',
    siteName: 'Furniture E-Commerce',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 800,
        height: 600,
        alt: 'Furniture Collection Preview',
      },
    ],
    type: 'website',
  },

  // Twitter Configuration (X)
  twitter: {
    card: 'summary_large_image',
    title: 'All Products - Furniture E-Commerce',
    description: 'Explore our wide range of furniture products.',
    images: ['/images/og-image.jpg'],
  },
};

function ShopPage() {
  const products = MOCK_PRODUCTS;
  return (
    <BannerLayout
      title="Shop"
      bannerImageUrl="/images/banner/banner-1.jpg"
      bannerImageAlt="Shop Banner"
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Shop', href: '/shop' },
        { label: 'All Products', isCurrentPage: true },
      ]}
    >
      <FilterSection />
      <div className="app-container py-10">
        {/* Product grid would go here */}
        <div className="grid grid-cols-4 gap-6">
          {/* Example Product Card */}

          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              href={product.href}
              imageUrl={product.imageUrl}
              alt={product.alt}
              price={product.price}
              oldPrice={product.oldPrice}
              category={product.category}
              isNew={product.id === '1'}
            />
          ))}
        </div>

        {/* Pagination would go here */}
        <div className="py-10">
          <PaginationSection totalPage={20} />
        </div>
      </div>
    </BannerLayout>
  );
}

export default ShopPage;
