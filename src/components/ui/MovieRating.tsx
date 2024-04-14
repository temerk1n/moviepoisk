import { Flex, Rate } from "antd";
import { FC } from "react";

interface MovieRatingProps {
  rating: number;
}

export const MovieRating: FC<MovieRatingProps> = ({ rating }) => {
  return (
    <Flex>
      {rating}
      <Rate disabled allowHalf defaultValue={1} value={1} count={1} />
    </Flex>
  );
};
