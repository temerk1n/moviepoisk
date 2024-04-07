import { Layout } from "antd";
import "./MoviePage.css";
import { MyHeader } from "../../components/logic/MyHeader";
import { useParams } from "react-router-dom";
import { MovieDetailCard } from "../../components/logic/MovieDetailCard";
import { useGetMovieByIdQuery } from "../../store/movieApi";
import { ErrorAlert } from "../../components/ui/ErrorAlert";
import React, { FC } from "react";
import { MyFooter } from "../../components/ui/MyFooter";

const { Content } = Layout;

export const MoviePage: FC = () => {
  const { movieId } = useParams();

  const { data: movie, isFetching, isError } = useGetMovieByIdQuery(movieId);

  return (
    <Layout>
      <MyHeader onSearchChange={() => console.log("search")} />
      <Content className="content">
        <MovieDetailCard
          movie={movie}
          isFetching={isFetching}
          isError={isError}
        />
        <ErrorAlert isError={isError} />
      </Content>
      <MyFooter />
    </Layout>
  );
};
