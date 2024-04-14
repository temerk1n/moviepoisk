import { FC, memo } from "react";
import { Episode } from "../../types/Episode";
import { Flex, List, Typography } from "antd";

const { Title, Paragraph } = Typography;

interface EpisodeListItemProps {
  episode: Episode,
}

export const EpisodeListItem: FC<EpisodeListItemProps> = memo(({episode}) => {
  return (
    <List.Item key={episode.name}>
      <Flex vertical>
        <Title level={5}>{episode.name !== "" ? episode.name : episode.enName}</Title>
        <Paragraph>
          {episode.description !== "" ? episode.description : episode.enDescription}
        </Paragraph>
      </Flex>
    </List.Item>
  )
})