import ProductCard from '@/components/custom/product/product-card';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from '@/components/ui/pagination';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import PromotionBannerSection from '../_components/shop/promotion-banner-section';
import FilterSection from '../_components/shop/filter-section';

type Props = {};

function ShopPage({}: Props) {
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
    {
      id: '9',
      name: 'Modern Sofa',
      href: '/products/modern-sofa-2',
      imageUrl: '/images/products/product-1.jpg',
      alt: 'Modern Sofa',
      price: 399.99,
      oldPrice: 499.99,
      category: 'Living Room',
    },
    {
      id: '10',
      name: 'Elegant Dining Table',
      href: '/products/elegant-dining-table-2',
      imageUrl: '/images/products/product-2.jpg',
      alt: 'Elegant Dining Table',
      price: 599.99,
      category: 'Dining Room',
    },
    {
      id: '11',
      name: 'Comfortable Bed',
      href: '/products/comfortable-bed-2',
      imageUrl: '/images/products/product-3.jpg',
      alt: 'Comfortable Bed',
      price: 799.99,
      oldPrice: 899.99,
      category: 'Bedroom',
    },
    {
      id: '12',
      name: 'Stylish Office Chair',
      href: '/products/stylish-office-chair-2',
      imageUrl: '/images/products/product-4.jpg',
      alt: 'Stylish Office Chair',
      price: 699.99,
      category: 'Office',
    },
  ];
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
          <Pagination>
            <PaginationContent className="space-x-4">
              <PaginationItem className="h-10 aspect-square bg-primary text-white flex justify-center items-center ">
                <Link href="#">1</Link>
              </PaginationItem>
              <PaginationItem className="h-10 aspect-square bg-primary/20 flex justify-center items-center ">
                <Link href="#">2</Link>
              </PaginationItem>
              <PaginationItem className="h-10 aspect-square bg-primary/20 flex justify-center items-center ">
                <Link href="#">3</Link>
              </PaginationItem>
              <PaginationItem className="h-10 px-4 bg-primary/20 flex justify-center items-center ">
                <PaginationLink href="#" aria-label="Next">
                  Next
                </PaginationLink>
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
      {/* promotion and banner section  */}
      <PromotionBannerSection />
    </div>
  );
}

export default ShopPage;
