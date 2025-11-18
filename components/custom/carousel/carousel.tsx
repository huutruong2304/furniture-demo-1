'use client';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { HeroData } from '@/types';
import HeroSlide from './hero-slide';

type Props = {
  data: HeroData[];
};

const Carousel = ({ data }: Props) => {
  const progressCircle = useRef<SVGSVGElement | null>(null);
  const progressContent = useRef<HTMLSpanElement | null>(null);
  const onAutoplayTimeLeft = (s: unknown, time: number, progress: number) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty('--progress', (1 - progress).toString());
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      onAutoplayTimeLeft={onAutoplayTimeLeft}
    >
      {data.map((item, index) => (
        <SwiperSlide key={index}>
          <HeroSlide
            title={item.title}
            subtitle={item.subtitle}
            description={item.description}
            src={item.src}
            alt={item.alt}
            buttonText={item.buttonText}
            buttonLink={item.buttonLink}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
