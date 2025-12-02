import { StarIcon } from 'lucide-react';
import React from 'react';

type Props = {
  value?: number;
};

const Rating = ({ value = 0 }: Props) => {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }, (_, index) => {
        const ratingValue = index + 1;
        return (
          <StarIcon
            key={index}
            className={`size-5 ${
              ratingValue <= value
                ? 'text-yellow-400 fill-yellow-400'
                : 'text-gray-400 fill-gray-400'
            }`}
          />
        );
      })}
    </div>
  );
};

export default Rating;
