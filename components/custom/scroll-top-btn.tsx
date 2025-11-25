'use client'; // Bắt buộc vì dùng hooks (useState, useEffect) và window object

import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

type Props = {
  threshold?: number;
};

const ScrollTopBtn = ({ threshold = 300 }: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > threshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add event listener
    window.addEventListener('scroll', toggleVisibility);

    // Clean up event listener khi component unmount
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [threshold]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`
        fixed bottom-8 right-8 z-50 
        flex h-12 w-12 items-center justify-center rounded-full 
        bg-primary text-primary-foreground shadow-lg 
        transition-all duration-300 ease-in-out
        hover:bg-primary/90 hover:shadow-xl hover:-translate-y-1
        focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2
        ${
          isVisible
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 translate-y-4 scale-0 pointer-events-none'
        }
      `}
    >
      <ArrowUp className="h-6 w-6" />
    </Button>
  );
};

export default ScrollTopBtn;
