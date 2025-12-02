import ReviewItem from '@/components/custom/product-review/review-item';
import ReviewOverall from '@/components/custom/product-review/review-overall';
import React from 'react';

type Props = {
  reviews: Review[];
  averageRating: number;
  totalReviews: number;
  ratingDistribution?: Record<number, number>;
};

const ReviewSection = ({ reviews, averageRating, totalReviews }: Props) => {
  return (
    <div className="flex flex-col lg:flex-row gap-12">
      <ReviewOverall
        averageRating={averageRating}
        totalReviews={totalReviews}
        ratingDistribution={{
          5: 60,
          4: 25,
          3: 10,
          2: 3,
          1: 2,
        }}
      />

      <div className="w-full lg:w-2/3 space-y-8">
        {reviews.map((review, index) => (
          <ReviewItem
            key={review.id}
            author={review.author}
            avatar={review.avatar}
            rating={review.rating}
            date={review.date}
            content={review.content}
            helpfulCount={review.helpfulCount}
            isLast={index === reviews.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
