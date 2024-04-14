import { FC } from "react";
import { Carousel, Flex, Image, Skeleton, Typography } from "antd";
import { useLazyGetPostersByMovieIdQuery } from "../../store/movieApi";
import { useParams } from "react-router-dom";
import { Poster } from "../../types/Poster";
import { useResize } from "../../utils/hooks/useResize";
import { imageScaleFactor } from "../../constants";
import { getSkeletonImageStyle } from "../../utils/getSkeletonImageStyle";
import { getCarouselStyle } from "../../utils/hooks/getCarouselStyle";
import { useRequestTriggerWithAbort } from "../../utils/hooks/useRequestTriggerWithAbort";

const { Title, Text } = Typography;

export const MoviePosters: FC = () => {
  const { movieId } = useParams();
  const width = useResize();

  const [trigger, { data, isFetching, isSuccess }] =
    useLazyGetPostersByMovieIdQuery();

  useRequestTriggerWithAbort(trigger, { movieId: movieId!, type: "promo" });

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
