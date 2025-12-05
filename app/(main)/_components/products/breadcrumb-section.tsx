import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import Link from 'next/link';
import React from 'react';

type Props = {
  productName?: string;
};

const BreadCrumbSection = ({ productName }: Props) => {
  return (
    <div className="bg-primary/10 py-5">
      <Breadcrumb className="app-container ">
        <BreadcrumbList className="text-black">
          <BreadcrumbItem>
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <Link href="/shop" className="hover:text-foreground transition-colors">
              Shop
            </Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <span className="text-black font-bold">{productName || '...'}</span>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default BreadCrumbSection;
