import { FC } from "react";
import { Typography } from "antd";

const { Text } = Typography;

interface MovieDetailDescriptionItemProps {
  title: string;
  description: string | number | null;
}

export const MovieDetailDescriptionItem: FC<MovieDetailDescriptionItemProps> = ({title, description}) => {
  return (
    <>
      <Text strong>{title}</Text>
      <Text>{description ? description : "Нет информации"}</Text>
    </>
  );
}