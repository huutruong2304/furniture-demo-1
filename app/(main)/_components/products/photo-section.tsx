'use client';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Image from 'next/image';

type Props = {
  images: { url: string; alt: string }[];
};

const PhotoSection = ({ images }: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <div className="select-none">
      <Swiper
        thumbs={{ swiper: thumbsSwiper }}
        loop={true}
        modules={[FreeMode, Navigation, Thumbs]}
        navigation={true}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="w-full aspect-square">
            <Image
              fill
              key={index}
              src={image.url}
              alt={image.alt}
              className="object-cover aspect-square"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        modules={[FreeMode, Navigation, Thumbs]}
        slidesPerView={4}
        spaceBetween={10}
        freeMode={true}
        watchSlidesProgress={true}
        className="mt-5"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="h-20 cursor-pointer aspect-square">
            <Image
              fill
              key={index}
              src={image.url}
              alt={image.alt}
              className="object-cover aspect-square w-full h-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PhotoSection;
