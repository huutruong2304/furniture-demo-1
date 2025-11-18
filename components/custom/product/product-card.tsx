import { Button } from '@/components/ui/button';
import { GitCompareIcon, HeartIcon, ShareIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
  name: string;
  href: string;
  imageUrl: string;
  alt: string;
  price: number;
  oldPrice?: number;
  category: string;
  isNew?: boolean;
};

const ProductCard = ({ name, href, imageUrl, alt, price, oldPrice, category, isNew }: Props) => {
  return (
    <div className="flex-none w-full bg-neutral-100">
      <div className="relative min-h-80 group">
        <Image src={imageUrl} alt={alt} fill className="object-cover" />
        <div className="z-10 w-full h-full bg-black/60 opacity-0 group-hover:opacity-100  absolute top-0 left-0 transition-opacity duration-300 ease-in-out flex flex-col justify-center items-center">
          <Button className=" min-w-1/2 cursor-pointer">Add to cart</Button>
          <div className="w-full flex items-center">
            <Button variant={'link'} className="text-white cursor-pointer">
              <ShareIcon />
              Share
            </Button>
            <Button variant={'link'} className="text-white cursor-pointer">
              <GitCompareIcon />
              Compare
            </Button>
            <Button variant={'link'} className="text-white cursor-pointer">
              <HeartIcon />
              Like
            </Button>
          </div>
        </div>
        {/* discount */}
        {oldPrice && (
          <div className="absolute top-2 right-2 bg-red-400 text-white w-12 text-sm font-semibold rounded-full aspect-square flex justify-center items-center">
            {oldPrice ? `-${Math.round(((oldPrice - price) / oldPrice) * 100)}%` : null}
          </div>
        )}
        {/* new product badge */}
        {isNew && (
          <div className="absolute top-2 left-2 bg-green-400 text-white w-12 text-sm font-semibold rounded-full aspect-square flex justify-center items-center">
            New
          </div>
        )}
      </div>
      <Link href={href}>
        <div className="p-2">
          <h3 className="text-lg font-bold">{name}</h3>
          <p className="text-gray-600">{category}</p>
          <div className="flex justify-between">
            <span className="text-lg font-semibold">${price}</span>
            {oldPrice && <span className="text-gray-600 line-through mr-2">${oldPrice}</span>}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
