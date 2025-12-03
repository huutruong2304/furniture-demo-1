import PromotionBannerItem from '@/components/custom/promotion-banner-item';
import { TrophyIcon, ShieldCheckIcon, PackageIcon, HeadsetIcon } from 'lucide-react';
import React from 'react';

function PromotionBannerSection() {
  const promotionItems: PromotionBannerData[] = [
    {
      title: 'High Quality',
      description: 'crafted from top materials',
      icon: TrophyIcon,
    },
    {
      title: 'Warranty Protection',
      description: 'Over 2 years',
      icon: ShieldCheckIcon,
    },
    {
      title: 'Free Shipping',
      description: 'Order over 150 $',
      icon: PackageIcon,
    },
    {
      title: '24 / 7 Support',
      description: 'Dedicated support',
      icon: HeadsetIcon,
    },
  ];
  return (
    <div className="py-15 bg-primary/20 ">
      <div className="grid grid-cols-4">
        {promotionItems.map((item, index) => (
          <PromotionBannerItem
            key={index}
            title={item.title}
            description={item.description}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
}

export default PromotionBannerSection;
