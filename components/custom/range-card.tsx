import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
  href: string;
  name: string;
  imageUrl: string;
  alt: string;
};

const RangeCard = ({ href, name, imageUrl, alt }: Props) => {
  return (
    <Link href={href} className="flex-none w-full">
      <div className="min-h-130 relative">
        <Image src={imageUrl} alt={alt} fill className="object-cover" />
      </div>
      <h3 className="mt-2 md:mt-4 text-lg font-bold text-center">{name}</h3>
    </Link>
  );
};

export default RangeCard;
