import React from 'react';
import './HomePage.css';
import {MovieCardList} from "../../components/logic/MovieCardList/MovieCardList";
import {Layout} from "antd";
import {Link, useSearchParams} from "react-router-dom";
import {useGetMoviesQuery} from "../../store/services/movieApi";

const {Header, Content} = Layout;

export const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams({page: '1', limit: '10'});
  const {data, isFetching, isError} = useGetMoviesQuery({page: searchParams.get('page')!, limit: searchParams.get('limit')!})

  if (isFetching) return <div>Loading...</div>;
  if (isError) return <div>Error!</div>;

  return (
    <Layout>
      <Header>
        <Link to={`/?page=1&limit=${searchParams.get('limit')}`}><h1>MOVIEPOISK</h1></Link>
      </Header>
      <Content className="content">
        {data && <MovieCardList movies={data.docs} totalPages={data.pages} searchParams={searchParams} setSearchParams={setSearchParams} isFetching={isFetching}/>}
      </Content>
    </Layout>
  );
}
