import { Card, Flex } from "antd";
import { MovieDetail } from "../../types/MovieDetail";
import { ReviewList } from "./ReviewList";
import { FC } from "react";
import { MovieDetailCardMainInfo } from "../ui/MovieDetailCardMainInfo";
import { MoviePosters } from "./MoviePosters";
import { SimilarMoviesCarousel } from "./SimilarMoviesCarousel";

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
  const showSkeleton: boolean = isFetching || isError;

  return (
    <Card>
      <Flex gap="medium" vertical>
        <MovieDetailCardMainInfo
          movie={movie}
          showSkeleton={showSkeleton}
          isError={isError}
        />
        <MoviePosters />
        <SimilarMoviesCarousel
          similarMovies={movie?.similarMovies}
          isFetching={isFetching}
        />
        <ReviewList />
      </Flex>
    </Card>
  );
};