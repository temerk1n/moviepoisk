import React, { FC } from "react";
import "./HomePage.css";
import { MovieCardList } from "../../components/logic/MovieCardList";
import { Layout } from "antd";
import { useSearchParams } from "react-router-dom";
import { useGetMoviesQuery } from "../../store/movieApi";
import { MyHeader } from "../../components/ui/MyHeader";
import { MyFooter } from "../../components/ui/MyFooter";
import { ErrorAlert } from "../../components/ui/ErrorAlert";
import { useAppSelector } from "../../store/store";

const { Content } = Layout;

export const HomePage: FC = () => {
  const setSearchParams = useSearchParams({
    page: "1",
    limit: "10",
  })[1];

  const paginationParams = useAppSelector(state => state.paginationParams);

  const queryParams = {
    page: paginationParams.page.toString(),
    limit: paginationParams.limit.toString(),
  };
  const { data, isFetching, isError } = useGetMoviesQuery(queryParams);

  const searchMovies = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  if (isFetching) return <div>Loading...</div>;
  if (isError) return <div>Error!</div>;

  return (
    <Layout>
      <MyHeader
        onSearchChange={searchMovies}
      />
      <Content className="content">
        <MovieCardList
          movies={data!.docs}
          totalPages={data!.pages}
          setSearchParams={setSearchParams}
          isFetching={isFetching}
        />
        <ErrorAlert isError={isError} />
      </Content>
      <MyFooter />
    </Layout>
  );
};
