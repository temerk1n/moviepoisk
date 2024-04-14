import { Rate } from "antd";
import { FC } from "react";

interface MovieRatingProps {
  rating: number;
}

export const MovieRating: FC<MovieRatingProps> = ({ rating }) => {
  return (
    <Rate disabled allowHalf defaultValue={0} value={rating / 2} count={5} />
  );
};
