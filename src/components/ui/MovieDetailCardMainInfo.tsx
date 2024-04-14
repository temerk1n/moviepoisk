import { FC } from "react";
import { Flex, Image, Skeleton, Typography } from "antd";
import { MovieDetailDescription } from "./MovieDetailDescription";
import { MovieRating } from "./MovieRating";
import { ActorsList } from "../business/ActorsList";
import { MovieDetail } from "../../types/MovieDetail";
import { useResize } from "../../utils/hooks/useResize";

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
  const width = useResize();

  return (
    <Flex gap="large" wrap="wrap">
      <Flex vertical flex={1}>
        {showSkeleton ? (
          <Skeleton.Image
            active={!isError}
            style={{ width: width * 0.2, height: width * 0.2 }}
          />
        ) : (
          <Image width={width * 0.2} src={movie?.poster.url} alt="Movie poster" />
        )}
      </Flex>
      <Flex vertical flex={3}>
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
