import { FC } from "react";
import { useParams } from "react-router-dom";
import { useRequestTriggerWithAbort } from "../../utils/hooks/useRequestTriggerWithAbort";
import { useLazyGetSeasonsByMovieIdQuery } from "../../store/movieApi";
import { Tabs, TabsProps, Typography } from "antd";
import { Season } from "../../types/Season";
import { EpisodesList } from "../ui/EpisodesList";

const { Title } = Typography;

export const Seasons: FC = () => {
  const { movieId } = useParams();

  const [trigger, { data, isFetching }] = useLazyGetSeasonsByMovieIdQuery();

  useRequestTriggerWithAbort(trigger, { movieId: movieId ?? "" });

  const tabItems: TabsProps["items"] = data?.docs
    .map((season: Season) => {
      return {
        key: season.number.toString(),
        label: `${season.number} сезон`,
        children: (
          <EpisodesList episodes={season.episodes} isFetching={isFetching} />
        ),
      };
    })
    .sort((a, b) => parseInt(a.key) - parseInt(b.key));

  if (!data) return <Title level={4}>Не найдено информации о сезонах</Title>;

  return (
    <>
      <Title level={4}>Сезоны</Title>
      <Tabs defaultActiveKey={"1"} items={tabItems} />
    </>
  );
};
