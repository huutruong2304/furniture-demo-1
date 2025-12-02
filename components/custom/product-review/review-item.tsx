import { ThumbsUp, MessageSquare } from 'lucide-react';
import React from 'react';
import Rating from '../rating';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';

type Props = {
  author: string;
  avatar?: string;
  rating: number;
  date: string;
  content: string;
  helpfulCount: number;
  isLast?: boolean;
};

const ReviewItem = ({ author, avatar, rating, date, content, helpfulCount, isLast }: Props) => {
  return (
    <div className="duration-500">
      <div className="flex justify-between items-start mb-2">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={avatar} />
            <AvatarFallback>{author.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <h4 className="font-semibold text-sm">{author}</h4>
            <p className="text-xs text-muted-foreground">{date}</p>
          </div>
        </div>
        <Rating value={rating} />
      </div>

      <div className="py-2">
        <p className="text-foreground/90 leading-relaxed text-sm sm:text-base">{content}</p>
      </div>

      <div className="flex items-center gap-4 mt-3">
        <button className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors">
          <ThumbsUp className="w-3.5 h-3.5" />
          Helpful ({helpfulCount})
        </button>
        <button className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors">
          <MessageSquare className="w-3.5 h-3.5" />
          Reply
        </button>
      </div>

      {isLast && <Separator className="mt-8" />}
    </div>
  );
};

export default ReviewItem;
