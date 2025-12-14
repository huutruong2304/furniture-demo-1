'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination } from 'swiper/modules';
import InspirationCard from './inspiration-card';

type Props = {
  data: InspirationData[];
};

const InspirationCarousel = ({ data }: Props) => {
  return (
    <Swiper
      slidesPerView={2.5}
      spaceBetween={20}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      loop={true}
    >
      {data.map((item, index) => (
        <SwiperSlide key={index}>
          <InspirationCard
            href={item.buttonLink || '#'}
            imageUrl={item.src}
            alt={item.alt}
            title={item.title}
            description={item.description}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default InspirationCarousel;
