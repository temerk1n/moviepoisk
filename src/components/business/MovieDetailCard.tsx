import { Card, Flex } from "antd";
import { FC, useCallback } from "react";
import { MovieDetailCardMainInfo } from "../ui/MovieDetailCardMainInfo";
import { SimilarMoviesCarousel } from "./SimilarMoviesCarousel";
import { useLazyGetMovieByIdQuery } from "../../store/movieApi";
import { MoviePosters } from "./MoviePosters";
import { useNavigate, useParams } from "react-router-dom";
import { ReviewList } from "./ReviewList";
import { ErrorAlert } from "../ui/ErrorAlert";
import { useRequestTriggerWithAbort } from "../../utils/hooks/useRequestTriggerWithAbort";
import { Seasons } from "./Seasons";
import { BackButton } from "../ui/BackButton";
import { getQueryParams } from "../../utils/getQueryParams";
import { useFiltersSelector } from "../../store/filtersSlice";

export const MovieDetailCard: FC = () => {
  const { movieId } = useParams();
  const filters = useFiltersSelector();
  const navigate = useNavigate();

  const [trigger, { data: movie, isError, isFetching }] =
    useLazyGetMovieByIdQuery();

  useRequestTriggerWithAbort(trigger, { movieId: movieId! });

  const showSkeleton: boolean = isFetching || isError;

  const onClick = useCallback(() => {
    navigate("/?" + getQueryParams(filters));
  }, [navigate, filters]);

  return (
    <Card>
      <Flex vertical gap="middle">
        <Flex style={{ maxWidth: "2rem" }}>
          <BackButton onClick={onClick} />
        </Flex>
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
      </Flex>
    </Card>
  );
};
