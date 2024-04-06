import {Rate} from "antd";

interface MovieRatingProps {
  rating: number;
}

export const MovieRating = ({rating}: MovieRatingProps) => {
  return <Rate disabled allowHalf defaultValue={0} value={rating / 2} count={5}/>
}