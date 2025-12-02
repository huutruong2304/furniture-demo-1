import ProductCard from '@/components/custom/product/product-card';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

import Image from 'next/image';
import React from 'react';
import PromotionBannerSection from '../_components/shop/promotion-banner-section';
import FilterSection from '../_components/shop/filter-section';
import { Metadata } from 'next';
import PaginationSection from '../_components/shop/pagination-section';
import { MOCK_PRODUCTS } from '@/mock-data/product';

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
    <div>
      <div className="relative h-80">
        <Image
          src="/images/banner/banner-1.jpg"
          alt="Shop Banner"
          className="w-full h-auto object-cover"
          fill
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-black">
          <h1 className="text-4xl font-bold mb-0">Welcome to our Shop</h1>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="text-black font-bold">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-black " />
              <BreadcrumbItem>
                <BreadcrumbLink className="text-black font-bold">Shop</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-black" />
              <BreadcrumbItem>
                <BreadcrumbLink asChild className="text-black">
                  <span>All Products</span>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
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
      {/* promotion and banner section  */}
      <PromotionBannerSection />
    </div>
  );
}

export default ShopPage;
