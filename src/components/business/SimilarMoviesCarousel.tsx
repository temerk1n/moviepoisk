import { FC } from "react";
import { Movie } from "../../types/Movie";
import { Carousel, Flex, Skeleton, Typography } from "antd";
import { useResize } from "../../utils/hooks/useResize";
import { getSkeletonImageStyle } from "../../utils/getSkeletonImageStyle";
import { SimilarMovieItem } from "../ui/SimilarMovieItem";

const { Title, Text } = Typography;

interface SimilarMoviesCarouselProps {
  similarMovies: Movie[];
  isFetching: boolean;
}

export const SimilarMoviesCarousel: FC<SimilarMoviesCarouselProps> = ({
  similarMovies,
  isFetching,
}: SimilarMoviesCarouselProps) => {
  const { width, isScreenMd } = useResize();

  const similarMoviesList = similarMovies?.map((movie) => {
    return <SimilarMovieItem key={movie.id} movie={movie} />;
  });

  return (
    <Flex align="center" vertical>
      <Title level={3}>Похожие фильмы</Title>
      {isFetching ? (
        <Skeleton.Image style={getSkeletonImageStyle(width)} />
      ) : similarMovies?.length === 0 ? (
        <Text>Похожих фильмов нет</Text>
      ) : (
        <Carousel
          autoplay
          autoplaySpeed={10000}
          dotPosition="top"
          style={{ width: isScreenMd ? 400 : 250 }}
        >
          {similarMoviesList ?? []}
        </Carousel>
      )}
    </Flex>
  );
};
