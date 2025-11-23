import React from 'react';

type Props = PromotionBannerData;

const PromotionBannerItem = ({ title, description, icon }: Props) => {
  return (
    <div className="col-span-1 flex items-center gap-2 justify-center">
      {/* <TrophyIcon className="w-16 h-16 text-black" /> */}
      {icon && React.createElement(icon, { className: 'w-16 h-16 text-black' })}
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export default PromotionBannerItem;
