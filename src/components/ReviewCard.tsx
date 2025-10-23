import { Card } from "@/components/ui/card";
import { StarRating } from "@/components/StarRating";

interface ReviewCardProps {
  name: string;
  location: string;
  rating: number;
  review: string;
  date: string;
}

export const ReviewCard = ({ name, location, rating, review, date }: ReviewCardProps) => {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h4 className="font-bold text-foreground">{name}</h4>
          <p className="text-xs text-muted-foreground">{location}</p>
        </div>
        <StarRating rating={rating} size="sm" />
      </div>
      <p className="text-sm text-foreground/90 leading-relaxed mb-3">
        "{review}"
      </p>
      <p className="text-xs text-muted-foreground italic">Verified Purchase • {date}</p>
    </Card>
  );
};
