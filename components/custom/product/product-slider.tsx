'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import ProductCard from './product-card';
import { Navigation } from 'swiper/modules';

type Props = {
  products: ProductCard[];
};

const ProductSlider = ({ products }: Props) => {
  return (
    <Swiper slidesPerView={4} spaceBetween={30} navigation={true} modules={[Navigation]}>
      {products.map((product, index) => (
        <SwiperSlide key={index} className="w-1/4">
          <ProductCard
            href={product.href}
            name={product.name}
            imageUrl={product.imageUrl}
            alt={product.alt}
            price={product.price}
            oldPrice={product.oldPrice}
            category={product.category}
            isNew={product.isNew}
            stock={product.stock}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductSlider;
