import Image from 'next/image';
import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '../ui/breadcrumb';
import PromotionBannerSection from '@/components/layout/promotion-banner-section';

type Props = {
  title?: string;
  bannerImageUrl?: string;
  bannerImageAlt?: string;
  breadcrumbItems?: Array<{
    label: string;
    href?: string;
    isCurrentPage?: boolean;
  }>;
  children?: React.ReactNode;
};

const BannerLayout = ({
  title,
  bannerImageUrl,
  bannerImageAlt,
  breadcrumbItems,
  children,
}: Props) => {
  return (
    <div>
      <div className="relative h-80">
        <Image
          src={bannerImageUrl || '/images/banner/banner-1.jpg'}
          alt={bannerImageAlt || 'Banner Image'}
          className="w-full h-auto object-cover"
          fill
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black flex flex-col items-center">
          <h1 className="text-4xl font-bold">{title}</h1>
          <Breadcrumb className="mt-2">
            <BreadcrumbList>
              {breadcrumbItems?.map((item, index) => (
                <React.Fragment key={index}>
                  <BreadcrumbItem>
                    <BreadcrumbLink
                      href={item.href || '#'}
                      className={`text-base text-black ${!item.isCurrentPage ? 'font-bold' : ''}`}
                    >
                      {item.label}
                    </BreadcrumbLink>
                  </BreadcrumbItem>

                  {index < breadcrumbItems.length - 1 && (
                    <BreadcrumbSeparator className="text-black text-base" />
                  )}
                </React.Fragment>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      {!!children && children}
      {/* promotion and banner section  */}
      <PromotionBannerSection />
    </div>
  );
};

export default BannerLayout;
