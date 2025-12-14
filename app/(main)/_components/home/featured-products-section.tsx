import ProductCard from '@/components/custom/product/product-card';
import SectionTitle from '@/components/custom/section-title';
import { Button } from '@/components/ui/button';
import React from 'react';

function FeaturedProductsSection() {
  const products: {
    id: string;
    name: string;
    href: string;
    imageUrl: string;
    alt: string;
    price: number;
    oldPrice?: number;
    category: string;
  }[] = [
    {
      id: '1',
      name: 'Modern Sofa',
      href: '/products/modern-sofa',
      imageUrl: '/images/products/product-1.jpg',
      alt: 'Modern Sofa',
      price: 399.99,
      oldPrice: 499.99,
      category: 'Living Room',
    },
    {
      id: '2',
      name: 'Elegant Dining Table',
      href: '/products/elegant-dining-table',
      imageUrl: '/images/products/product-2.jpg',
      alt: 'Elegant Dining Table',
      price: 599.99,
      category: 'Dining Room',
    },
    {
      id: '3',
      name: 'Comfortable Bed',
      href: '/products/comfortable-bed',
      imageUrl: '/images/products/product-3.jpg',
      alt: 'Comfortable Bed',
      price: 799.99,
      oldPrice: 899.99,
      category: 'Bedroom',
    },
    {
      id: '4',
      name: 'Stylish Office Chair',
      href: '/products/stylish-office-chair',
      imageUrl: '/images/products/product-4.jpg',
      alt: 'Stylish Office Chair',
      price: 699.99,
      category: 'Office',
    },
    {
      id: '5',
      name: 'Cozy Armchair',
      href: '/products/cozy-armchair',
      imageUrl: '/images/products/product-5.jpg',
      alt: 'Cozy Armchair',
      price: 299.99,
      oldPrice: 349.99,
      category: 'Living Room',
    },
    {
      id: '6',
      name: 'Elegant Dining Table',
      href: '/products/elegant-dining-table',
      imageUrl: '/images/products/product-6.jpg',
      alt: 'Elegant Dining Table',
      price: 599.99,
      oldPrice: 699.99,
      category: 'Dining Room',
    },
    {
      id: '7',
      name: 'Comfortable Bed',
      href: '/products/comfortable-bed',
      imageUrl: '/images/products/product-7.jpg',
      alt: 'Comfortable Bed',
      price: 799.99,
      oldPrice: 899.99,
      category: 'Bedroom',
    },
    {
      id: '8',
      name: 'Stylish Office Chair',
      href: '/products/stylish-office-chair',
      imageUrl: '/images/products/product-8.jpg',
      alt: 'Stylish Office Chair',
      price: 699.99,
      oldPrice: 799.99,
      category: 'Office',
    },
  ];
  return (
    <div className="app-container py-10">
      <SectionTitle>Our Products</SectionTitle>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 mt-5">
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
            isNew={product.id === '2' || product.id === '4'}
          />
        ))}
        {/* Placeholder for product cards */}
        {/* <div className="bg-gray-200 h-48 rounded-lg animate-pulse"></div>
        <div className="bg-gray-200 h-48 rounded-lg animate-pulse"></div>
        <div className="bg-gray-200 h-48 rounded-lg animate-pulse"></div>
        <div className="bg-gray-200 h-48 rounded-lg animate-pulse"></div>
        <div className="bg-gray-200 h-48 rounded-lg animate-pulse"></div> */}
      </div>
      <div className="text-center">
        <Button className="w-max mx-auto mt-8">View All Products</Button>
      </div>
    </div>
  );
}

export default FeaturedProductsSection;
