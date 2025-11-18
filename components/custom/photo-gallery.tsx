'use client';
import Image from 'next/image';
import React from 'react';
import Masonry from 'react-masonry-css';

type Props = {
  data: {
    src: string;
    alt: string;
  }[];
};

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

const PhotoGallery = ({ data }: Props) => {
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {data.map((item, index) => (
        <div key={index}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={item.src} alt={item.alt} className="object-cover" />
        </div>
      ))}
    </Masonry>
  );
};

export default PhotoGallery;
