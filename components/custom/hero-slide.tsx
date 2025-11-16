import React from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';

type Props = {
  title: React.ReactNode;
  subtitle?: string;
  description: string;
  src: string;
  alt: string;
  buttonText: string;
  buttonLink: string;
};

const HeroSlide = ({ title, subtitle, description, src, alt, buttonText, buttonLink }: Props) => {
  return (
    <div className="h-[600px] w-full relative snap-center flex-none">
      <Image src={src} alt={alt} fill className="object-cover object-center" priority />
      <div className="w-1/2 min-h-1/2 right-10 top-1/2 transform -translate-y-1/2 absolute bg-[#FFF3E3] rounded-lg p-10 ">
        {!!subtitle && <h5 className="text-lg mb-6">{subtitle}</h5>}
        <h1 className="text-5xl font-bold mb-4 text-primary whitespace-pre-line">{title}</h1>
        <p className="line-clamp-2 mb-4">{description}</p>
        <a href={buttonLink}>
          <Button className="rounded-none">{buttonText}</Button>
        </a>
      </div>
    </div>
  );
};

export default HeroSlide;
