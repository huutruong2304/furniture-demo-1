import React from 'react';
import Rating from '../rating';
import { Progress } from '@/components/ui/progress';
import { StarIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

type Props = {
  totalReviews: number;
  averageRating: number;
  ratingDistribution?: Record<number, number>;
};

const ReviewOverall = ({ totalReviews, averageRating, ratingDistribution }: Props) => {
  return (
    <div className="w-full lg:w-1/3 space-y-6">
      <div className="bg-muted/30 p-6 rounded-xl border">
        <div className="flex items-end gap-2 mb-4">
          <span className="text-5xl font-bold text-foreground">{averageRating}</span>
          <div className="mb-2">
            <Rating value={averageRating} />
            <p className="text-sm text-muted-foreground mt-1">Based on {totalReviews} reviews</p>
          </div>
        </div>

        {/* Các thanh Progress Bar */}
        <div className="space-y-3">
          {[5, 4, 3, 2, 1].map((star) => (
            <div key={star} className="flex items-center gap-3 text-sm">
              <span className="w-3 font-medium">{star}</span>
              <StarIcon className="w-4 h-4 text-muted-foreground" />
              <Progress value={ratingDistribution?.[star]} className="h-2 flex-1" />
              <span className="w-8 text-right text-muted-foreground">
                {ratingDistribution?.[star] || 0}%
              </span>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-6 border-t">
          <h4 className="font-semibold mb-2">Share your thoughts</h4>
          <p className="text-sm text-muted-foreground mb-4">
            If you’ve used this product, share your thoughts with other customers.
          </p>
          <Button className="w-full">Write a Review</Button>
        </div>
      </div>
    </div>
  );
};

export default ReviewOverall;
