import { Star } from "lucide-react";

interface Prop {
  size: number;
}

export const Rating = ({ size }: Prop) => (
  <div className="flex">
    {Array(5)
      .fill(0)
      .map((_, i) => (
        <Star
          className={`size-4 ${
            i < size
              ? "stroke-secondary fill-secondary"
              : "fill-gray-200 stroke-gray-200"
          }`}
        />
      ))}
  </div>
);

Rating.displayName = "Rating";
