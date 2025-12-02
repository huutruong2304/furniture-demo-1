import ProductSlider from '@/components/custom/product/product-slider';
import SectionTitle from '@/components/custom/section-title';
import { MOCK_PRODUCTS } from '@/mock-data/product';
import React from 'react';

const RelatedSection = () => {
  const products = MOCK_PRODUCTS;
  return (
    <div className="app-container py-10">
      <SectionTitle>Related Products</SectionTitle>
      <div className="mt-5">
        <ProductSlider products={products} />
      </div>
    </div>
  );
};

export default RelatedSection;
