import React from 'react';
import './HomePage.css';
import {MovieCardList} from "../../components/logic/MovieCardList/MovieCardList";
import {Flex, Input, Layout} from "antd";
import {Link, useSearchParams} from "react-router-dom";
import {useGetMoviesQuery} from "../../store/services/movieApi";
import {MyHeader} from "../../components/ui/Header/MyHeader";

const { Content} = Layout;

export const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams(
    {page: '1', limit: '10'}
  );

  const queryParams = {page: searchParams.get('page')!, limit: searchParams.get('limit')!};
  const {data, isFetching, isError} = useGetMoviesQuery(queryParams);

  const searchMovies = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
  }

  if (isFetching) return <div>Loading...</div>;
  if (isError) return <div>Error!</div>;

  return (
    <Layout>
      <MyHeader limit={searchParams.get('limit')} onSearchChange={searchMovies}/>
      <Content className="content">
        <MovieCardList
          movies={data!.docs}
          totalPages={data!.pages}
          searchParams={searchParams}
          setSearchParams={setSearchParams}
          isFetching={isFetching} />
      </Content>
    </Layout>
  );
}
