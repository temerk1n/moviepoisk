import { Layout } from "antd";
import { useParams } from "react-router-dom";
import { MovieDetailCard } from "../components/business/MovieDetailCard";
import { useGetMovieByIdQuery } from "../store/movieApi";
import { ErrorAlert } from "../components/ui/ErrorAlert";
import { FC } from "react";
import { MyLayout } from "../components/ui/MyLayout";

const { Content } = Layout;

export const MoviePage: FC = () => {
  const { movieId } = useParams();

  const { data: movie, isFetching, isError } = useGetMovieByIdQuery(movieId);

  return (
    <MyLayout>
      <Content className="content">
        <MovieDetailCard
          movie={movie}
          isFetching={isFetching}
          isError={isError}
        />
        <ErrorAlert isError={isError} />
      </Content>
    </MyLayout>
  );
};
