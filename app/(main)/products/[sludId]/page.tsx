import React from 'react';
import BreadCrumbSection from '../../_components/products/breadcrumb-section';
import PhotoSection from '../../_components/products/photo-section';
import DetailSection from '../../_components/products/detail-section';
import ArticleSection from '../../_components/products/article-section';
import AdditionalInfoSection from '../../_components/products/additional-info-section';
import ReviewSection from '../../_components/products/review-section';
import { Separator } from '@/components/ui/separator';
import TabSection from '../../_components/products/tab-section';
import RelatedSection from '../../_components/products/related-section';

type Props = {};

function ProductPage({}: Props) {
  const detail: {
    id: string;
    name: string;
    images: { url: string; alt: string }[];
    price: number;
    oldPrice?: number;
    category: string;
    isNew?: boolean;
    variants?: { id: string; name: string; value: string }[];
    rating?: number;
    reviewCount?: number;
    shortDescription?: string;
    description?: string;
    viewedCount?: number;
    soldCount?: number;
    stock?: number;
    tags?: string[];
    specifications?: { name: string; value: string }[];
  } = {
    id: '1',
    name: 'Sofa Modern Style - Comfortable and Stylish',
    images: [
      { url: '/images/products/product-1.jpg', alt: 'Sample Product Image 1' },
      { url: '/images/products/product-2.jpg', alt: 'Sample Product Image 2' },
      { url: '/images/products/product-3.jpg', alt: 'Sample Product Image 3' },
      { url: '/images/products/product-4.jpg', alt: 'Sample Product Image 4' },
      { url: '/images/products/product-5.jpg', alt: 'Sample Product Image 5' },
    ],
    price: 299.99,
    oldPrice: 349.99,
    stock: 20,
    category: 'Living Room',
    isNew: true,
    variants: [
      { id: '1', name: 'Color', value: 'Red' },
      { id: '2', name: 'Size', value: 'Small' },
    ],
    rating: 4.5,
    reviewCount: 10,
    shortDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    description: `<p>Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>

<p>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin-top: 30px;">
  <div >
    <img src="https://plus.unsplash.com/premium_photo-1661765778256-169bf5e561a6?q=80&w=2070&auto=format&fit=crop" alt="Sofa Front View" style="width: 100%; height: auto; object-fit: contain; mix-blend-mode: multiply;">
  </div>
  <div >
    <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop" alt="Sofa Corner View" style="width: 100%; height: auto; object-fit: contain; mix-blend-mode: multiply;">
  </div>
</div>`,
    viewedCount: 150,
    soldCount: 75,
    tags: ['Living Room', 'Sofa', 'Sofa Set'],
    specifications: [
      { name: 'Material', value: 'Leather' },
      { name: 'Dimensions', value: '80 x 35 x 40 inches' },
      { name: 'Weight', value: '150 lbs' },
      { name: 'Color', value: 'Black' },
      { name: 'Warranty', value: '2 years' },
    ],
  };

  const defaultReviews: Review[] = [
    {
      id: '1',
      author: 'Sarah Jenkins',
      avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
      rating: 5,
      date: 'October 12, 2023',
      content:
        "Absolutely love this sofa! The color is exactly as shown in the pictures (Cream/Beige). It's firm but comfortable, perfect for my small apartment. Delivery was super fast as well.",
      helpfulCount: 24,
    },
    {
      id: '2',
      author: 'Mark Thompson',
      avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
      rating: 4,
      date: 'September 28, 2023',
      content:
        "Great quality for the price. The assembly was straightforward, took me about 20 minutes alone. Deducted one star because one of the legs had a small scratch, but it's barely visible.",
      helpfulCount: 8,
    },
    {
      id: '3',
      author: 'Emily Chen',
      rating: 5,
      date: 'August 15, 2023',
      content:
        "Minimalist and chic. The velvet texture feels very premium. I was worried about stains since it's light-colored, but it cleans up surprisingly well.",
      helpfulCount: 45,
    },
  ];

  return (
    <div>
      <BreadCrumbSection productName={detail.name} />
      <div className="app-container py-10 grid grid-cols-11 gap-0">
        <div className="col-span-5">
          <PhotoSection images={detail.images} />
        </div>
        <div className="col-span-6">
          <DetailSection
            id={detail.id}
            name={detail.name}
            stock={detail.stock}
            price={detail.price}
            oldPrice={detail.oldPrice}
            category={detail.category}
            isNew={detail.isNew}
            variants={detail.variants}
            rating={detail.rating}
            reviewCount={detail.reviewCount}
            shortDescription={detail.shortDescription}
            description={detail.description}
            viewedCount={detail.viewedCount}
            soldCount={detail.soldCount}
          />
        </div>
      </div>
      <Separator />
      <TabSection
        description={<ArticleSection content={detail.description || ''} />}
        additionalInfo={<AdditionalInfoSection specifications={detail.specifications || []} />}
        reviews={<ReviewSection reviews={defaultReviews} averageRating={4} totalReviews={100} />}
      />
      <RelatedSection />
    </div>
  );
}

export default ProductPage;
