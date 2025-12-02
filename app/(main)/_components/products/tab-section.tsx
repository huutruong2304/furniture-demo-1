'use client';
import React, { useState } from 'react';

type Props = {
  description: React.ReactNode;
  additionalInfo: React.ReactNode;
  reviews: React.ReactNode;
};

enum TabEnum {
  DESCRIPTION = 'description',
  ADDITIONAL_INFO = 'additionalInfo',
  REVIEWS = 'reviews',
}

const TABS: { id: TabEnum; title: string }[] = [
  { id: TabEnum.DESCRIPTION, title: 'Description' },
  { id: TabEnum.ADDITIONAL_INFO, title: 'Additional Information' },
  { id: TabEnum.REVIEWS, title: 'Reviews' },
];

const TabSection = ({ description, additionalInfo, reviews }: Props) => {
  const [activeTab, setActiveTab] = useState<TabEnum>(TabEnum.DESCRIPTION);

  return (
    <div className="app-container py-10">
      <div className="flex justify-center items-center gap-10">
        {TABS.map((tab) => (
          <h2
            key={tab.id}
            className={`text-xl mb-5 cursor-pointer ${
              activeTab === tab.id ? 'font-bold' : 'opacity-50'
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.title}
          </h2>
        ))}
      </div>
      <div className="mt-5">
        <div
          className={`transition-all ease-in-out duration-500 ${
            activeTab === TabEnum.DESCRIPTION
              ? 'opacity-100 visible translate-y-0'
              : 'opacity-0 invisible translate-y-2 h-0 overflow-hidden'
          }`}
        >
          {description}
        </div>
        <div
          className={`transition-all ease-in-out duration-500 ${
            activeTab === TabEnum.ADDITIONAL_INFO
              ? 'opacity-100 visible translate-y-0'
              : 'opacity-0 invisible translate-y-2 h-0 overflow-hidden'
          }`}
        >
          {additionalInfo}
        </div>
        <div
          className={`transition-all ease-in-out duration-500 ${
            activeTab === TabEnum.REVIEWS
              ? 'opacity-100 visible translate-y-0'
              : 'opacity-0 invisible translate-y-2 h-0 overflow-hidden'
          }`}
        >
          {reviews}
        </div>
      </div>
    </div>
  );
};

export default TabSection;
