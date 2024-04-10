import { CSSProperties, FC } from "react";
import { Movie } from "../../types/Movie";
import { Carousel, Flex, Skeleton, Typography } from "antd";
import { useResize } from "../../utils/hooks/useResize";
import { getSkeletonImageStyle } from "../../utils/getSkeletonImageStyle";
import { SimilarMovieItem } from "../ui/SimilarMovieItem";
import { getCarouselStyle } from "../../utils/hooks/getCarouselStyle";

const { Title, Text } = Typography;

interface SimilarMoviesCarouselProps {
  similarMovies: Movie[];
  isFetching: boolean;
}

const dotsStyle: CSSProperties = {
  color: "black",
}

export const SimilarMoviesCarousel: FC<SimilarMoviesCarouselProps> = ({
  similarMovies,
  isFetching,
}: SimilarMoviesCarouselProps) => {
  const width = useResize();

  const similarMoviesList = similarMovies?.map((movie) => {
    return (
      <SimilarMovieItem key={movie.id} movie={movie} />
    );
  });

  return (
    <Flex align="center" vertical>
      <Title level={3}>Похожие фильмы</Title>
      {isFetching ? (
        <Skeleton.Image style={getSkeletonImageStyle(width)} />
      ) : similarMovies.length === 0 ? (
        <Text>Постеров нет</Text>
      ) : (
        <Carousel
          autoplay
          autoplaySpeed={10000}
          dotPosition="top"
          style={getCarouselStyle(width)}
        >
          {similarMoviesList}
        </Carousel>
      )}
    </Flex>
  );
};
