import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
  href: string;
  imageUrl: string;
  alt: string;
  title: string;
  description: string;
};

const InspirationCard = ({ href, imageUrl, alt, title, description }: Props) => {
  return (
    <Link href={href} className="h-96 block">
      <div className="w-full h-full relative">
        <Image src={imageUrl} alt={alt} fill className="object-cover" />
        <div className="w-[95%] absolute left-1/2 bottom-2 transform -translate-x-1/2  bg-black/40 flex flex-col justify-end p-4">
          <h3 className="text-white text-xl font-bold line-clamp-1">{title}</h3>
          <p className="text-white text-sm line-clamp-2">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default InspirationCard;
