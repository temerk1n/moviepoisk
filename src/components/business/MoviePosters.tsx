import { FC } from "react";
import { Carousel, Flex, Image, Skeleton, Typography } from "antd";
import { useLazyGetPostersByMovieIdQuery } from "../../store/movieApi";
import { useParams } from "react-router-dom";
import { Poster } from "../../types/Poster";
import { useResize } from "../../utils/hooks/useResize";
import { getSkeletonImageStyle } from "../../utils/getSkeletonImageStyle";
import { useRequestTriggerWithAbort } from "../../utils/hooks/useRequestTriggerWithAbort";

const { Title, Text } = Typography;

export const MoviePosters: FC = () => {
  const { movieId } = useParams();
  const { width, isScreenMd } = useResize();

  const [trigger, { data, isFetching, isSuccess }] =
    useLazyGetPostersByMovieIdQuery();

  useRequestTriggerWithAbort(trigger, { movieId: movieId!, type: "promo" });

  const PostersList = data?.docs.map((poster: Poster) => {
    return (
      <Image
        key={poster.id}
        src={poster.url}
        width={isScreenMd ? 400 : 250}
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
        <Carousel dotPosition="top" style={{ width: isScreenMd ? 400 : 250 }}>
          {PostersList}
        </Carousel>
      )}
    </Flex>
  );
};
