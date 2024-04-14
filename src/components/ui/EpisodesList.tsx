import { FC, memo } from "react";
import { Episode } from "../../types/Episode";
import { EpisodeListItem } from "./EpisodeListItem";
import { List } from "antd";

interface EpisodesListProps {
  episodes: Episode[];
  isFetching: boolean;
}

export const EpisodesList: FC<EpisodesListProps> = memo(({episodes, isFetching}) => {
  return (
    <List
      dataSource={episodes}
      loading={isFetching}
      renderItem={(episode: Episode) => <EpisodeListItem episode={episode}/>}
    />
  )
})