import { Card } from "antd";
import { MovieDetail } from "../../types/MovieDetail";
import { ReviewList } from "./ReviewList";
import { FC } from "react";
import { MovieDetailCardMainInfo } from "../ui/MovieDetailCardMainInfo";

interface MovieDetailCardProps {
  movie: MovieDetail;
  isFetching: boolean;
  isError: boolean;
}

export const MovieDetailCard: FC<MovieDetailCardProps> = ({
  movie,
  isFetching,
  isError,
}) => {
  const showSkeleton = isFetching || isError;

  return (
    <Card>
      <MovieDetailCardMainInfo movie={movie} showSkeleton={showSkeleton} isError={isError} />
      <ReviewList />
    </Card>
  );
};
