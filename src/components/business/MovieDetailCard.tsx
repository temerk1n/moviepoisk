import { Card, Flex } from "antd";
import { FC } from "react";
import { MovieDetailCardMainInfo } from "../ui/MovieDetailCardMainInfo";
import { SimilarMoviesCarousel } from "./SimilarMoviesCarousel";
import { useLazyGetMovieByIdQuery } from "../../store/movieApi";
import { MoviePosters } from "./MoviePosters";
import { useParams } from "react-router-dom";
import { ReviewList } from "./ReviewList";
import { ErrorAlert } from "../ui/ErrorAlert";
import { useRequestTriggerWithAbort } from "../../utils/hooks/useRequestTriggerWithAbort";
import { Seasons } from "./Seasons";

export const MovieDetailCard: FC = () => {
  const { movieId } = useParams();

  const [trigger, { data: movie, isError, isFetching }] =
    useLazyGetMovieByIdQuery();

  useRequestTriggerWithAbort(trigger, { movieId: movieId! });

  const showSkeleton: boolean = isFetching || isError;

  return (
    <Card>
      <Flex gap="medium" vertical>
        <MovieDetailCardMainInfo
          movie={movie!}
          showSkeleton={showSkeleton}
          isError={isError}
        />
        {movie?.isSeries && <Seasons />}
        <MoviePosters />
        <SimilarMoviesCarousel
          similarMovies={movie?.similarMovies!}
          isFetching={isFetching}
        />
        <ReviewList />
      </Flex>
      <ErrorAlert isError={isError} />
    </Card>
  );
};
