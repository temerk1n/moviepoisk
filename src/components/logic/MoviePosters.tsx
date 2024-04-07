import { CSSProperties, FC } from "react";
import { Carousel, Flex, Image, Skeleton, Typography } from "antd";
import { useGetPostersByMovieIdQuery } from "../../store/movieApi";
import { useParams } from "react-router-dom";
import { Poster } from "../../types/Poster";
import { useResize } from "../../utils/hooks/useResize";

const { Title, Text } = Typography;

const imageScaleFactor: number = 0.4;

const getCarouselStyle = (screenWidth: number): CSSProperties => {
  return {
    width: screenWidth * imageScaleFactor,
  };
};

const getSkeletonImageStyle = (screenWidth: number): CSSProperties => {
  return {
    width: screenWidth * imageScaleFactor,
    height: screenWidth * imageScaleFactor,
  };
};

export const MoviePosters: FC = () => {
  const width = useResize();

  const { movieId } = useParams();
  const { data, isFetching, isSuccess } = useGetPostersByMovieIdQuery({
    movieId,
    type: "promo",
  });

  const PostersList = data?.docs.map((poster: Poster) => {
    return (
      <Image
        key={poster.id}
        src={poster.url}
        width={width * imageScaleFactor}
        preview={false}
        style={{ margin: "auto" }}
      />
    );
  });

  return (
    <Flex align="center" vertical>
      <Title level={3}>Постеры фильма</Title>
      {isFetching ? (
        <Skeleton.Image style={getSkeletonImageStyle(width)} />
      ) : isSuccess && PostersList?.length === 0 ? (
        <Text>Постеров нет</Text>
      ) : (
        <Carousel dotPosition="top" style={getCarouselStyle(width)}>
          {PostersList}
        </Carousel>
      )}
    </Flex>
  );
};
