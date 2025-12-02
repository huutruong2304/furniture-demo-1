import React from 'react';

export type SpecificationItem = {
  name: string;
  value: string;
};

type AdditionalInfoProps = {
  specifications: SpecificationItem[];
  className?: string;
};

const AdditionalInfoSection = ({ specifications, className = '' }: AdditionalInfoProps) => {
  return (
    <div className={`w-full text-sm sm:text-base ${className}`}>
      {specifications.map((item, index) => (
        <InfoRow
          key={index}
          name={item.name}
          value={item.value}
          isLast={index === specifications.length - 1}
        />
      ))}
    </div>
  );
};

export default AdditionalInfoSection;

type InfoRowProps = {
  name: string;
  value: string;
  isLast?: boolean;
};

const InfoRow = ({ name, value, isLast }: InfoRowProps) => {
  return (
    <div
      className={`
        flex flex-col sm:flex-row sm:items-center py-3 
        ${!isLast ? 'border-b border-gray-200' : ''}
      `}
    >
      <span className="w-full sm:w-1/3 font-medium text-foreground mb-1 sm:mb-0">{name}</span>

      <span className="w-full sm:w-2/3 text-muted-foreground">{value}</span>
    </div>
  );
};
