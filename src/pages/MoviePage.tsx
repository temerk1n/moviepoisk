import { Layout } from "antd";
import { MovieDetailCard } from "../components/business/MovieDetailCard";
import { FC } from "react";

const { Content } = Layout;

export const MoviePage: FC = () => {
  return (
    <Content className="content">
      <MovieDetailCard />
    </Content>
  );
};
