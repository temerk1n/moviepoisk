import { FC } from "react";
import { Flex, Image, Skeleton, Typography } from "antd";
import { MovieDetailDescription } from "./MovieDetailDescription";
import { MovieRating } from "./MovieRating";
import { ActorsList } from "../business/ActorsList";
import { MovieDetail } from "../../types/MovieDetail";

const { Text } = Typography;

interface MovieDetailCardMainInfoProps {
  movie: MovieDetail;
  showSkeleton: boolean;
  isError: boolean;
}

export const MovieDetailCardMainInfo: FC<MovieDetailCardMainInfoProps> = ({
  movie,
  showSkeleton,
  isError,
}) => {
  return (
    <Flex gap="large" wrap="wrap">
      <Flex vertical>
        {showSkeleton ? (
          <Skeleton.Image
            active={!isError}
            style={{ width: 300, height: 300 }}
          />
        ) : (
          <Image width={300} src={movie?.poster.url} alt="Movie poster" />
        )}
      </Flex>
      <Flex vertical flex={2}>
        <MovieDetailDescription
          showSkeleton={showSkeleton}
          isError={isError}
          movie={movie}
        />
      </Flex>
      <Flex vertical flex={1} justify="flex-start" align="center" gap="middle">
        <Skeleton
          active={!isError}
          loading={showSkeleton}
          title={false}
          paragraph={{ rows: 10 }}
        >
          {movie?.rating.kp ? (
            <MovieRating rating={movie.rating.kp} />
          ) : (
            <Text strong>Нет информации о рейтинге</Text>
          )}
          <ActorsList persons={movie?.persons} />
        </Skeleton>
      </Flex>
    </Flex>
  );
};
