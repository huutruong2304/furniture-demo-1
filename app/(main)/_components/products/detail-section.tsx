'use client';
import Rating from '@/components/custom/rating';
import { Button } from '@/components/ui/button';
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group';
import { MinusIcon, PlusIcon, ShoppingCartIcon } from 'lucide-react';
import React, { useState } from 'react';

type Props = {
  id: string;
  name: string;
  price: number;
  stock?: number;
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
};

const DetailSection = ({
  id,
  name,
  price,
  stock,
  oldPrice,
  category,
  isNew,
  variants,
  rating,
  reviewCount,
  shortDescription,
  description,
  viewedCount,
  soldCount,
}: Props) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (value: number) => {
    const newQuantity = Math.max(1, quantity + value);
    setQuantity(newQuantity);
  };

  return (
    <div className="px-10">
      <h1 className="text-3xl font-bold">{name}</h1>
      <div className="flex mt-5">
        <h3 className="text-2xl font-semibold text-primary mr-3">${price}</h3>
        {oldPrice && (
          <h3 className="text-xl font-semibold text-gray-500 line-through">${oldPrice}</h3>
        )}
      </div>
      {/* review */}
      {!!reviewCount && (
        <div className="flex gap-5 mt-5">
          <Rating value={rating} />
          <span className="text-gray-500">({reviewCount} Reviews)</span>
        </div>
      )}

      <p className="mt-5 text-gray-700 line-clamp-5">{shortDescription}</p>
      {/* variants */}
      <div className="mt-5">
        <h3 className="text-gray-500 mb-2">Size</h3>
        <div className="flex gap-5">
          <Button>XS</Button>
          <Button className="bg-primary/40 text-foreground">L</Button>
          <Button className="bg-primary/40 text-foreground">XL</Button>
        </div>
      </div>
      <div className="mt-5">
        <h3 className="text-gray-500 mb-2">Color</h3>
        <div className="flex gap-5">
          <button className="w-10 aspect-square bg-red-500 rounded-full border-primary border-2"></button>
          <button className="w-10 aspect-square bg-purple-500 rounded-full"></button>
          <button className="w-10 aspect-square bg-primary rounded-full"></button>
        </div>
      </div>
      {/* add to cart button */}
      <div className="mt-5 flex items-center gap-5">
        <InputGroup className="rounded-none w-1/3 text-lg h-12">
          <InputGroupAddon onClick={() => handleQuantityChange(-1)} align={'inline-start'}>
            <MinusIcon className="cursor-pointer" />
          </InputGroupAddon>
          <InputGroupInput className="mx-auto select-none text-center" value={quantity} />
          <InputGroupAddon onClick={() => handleQuantityChange(1)} align={'inline-end'}>
            <PlusIcon className="cursor-pointer" />
          </InputGroupAddon>
        </InputGroup>
        <Button className="w-1/3 h-12 cursor-pointer text-base">
          <ShoppingCartIcon className="font-semibold" />
          Add to Cart
        </Button>
        <Button className="w-1/3 h-12  cursor-pointer text-base">Buy Now</Button>
      </div>
      {/* extra info */}
      <hr className="border-gray-200 my-5" />
      <div className="mt-5 text-gray-500 flex flex-col gap-2">
        <p>Category: {category}</p>
        <p>Viewed: {viewedCount}</p>
        <p>Sold: {soldCount}</p>
        {stock !== undefined && <p>Stock Available: {stock}</p>}
        <p>Tags: </p>
        {/* sharing */}
        <p>
          Share:
          <Button variant={'link'} className="ml-1 underline px-1">
            Facebook
          </Button>
          <Button variant={'link'} className="ml-1 underline px-1">
            Twitter
          </Button>
        </p>
      </div>
    </div>
  );
};

export default DetailSection;
