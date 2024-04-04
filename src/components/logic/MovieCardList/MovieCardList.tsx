import {List} from "antd";
import React from "react";
import {Movie} from "../../../types/Movie";
import {MovieCard} from "../../ui/MovieCard/MovieCard";
import {useGetMoviesQuery} from "../../../store/services/movieApi";
import {useSearchParams} from "react-router-dom";


export const MovieCardList = () => {
  const [searchParams, setSearchParams] = useSearchParams({page: '1', limit: '10'});
  const {data, isFetching, isError} = useGetMoviesQuery({page: searchParams.get('page'), limit: searchParams.get('limit')})

  if (isFetching) return <div>Loading...</div>;
  if (isError) return <div>Error!</div>;

  const onPageOrPageSizeChange = (page: number, pageSize: number) => {
    setSearchParams({page: page.toString(), limit: pageSize.toString()});
  }

  return (
    <>
      <List
        itemLayout="vertical"
        dataSource={data.docs}
        pagination={{
          current: parseInt(searchParams.get('page')!),
          pageSize: parseInt(searchParams.get('limit')!),
          total: data.pages,
          onChange: onPageOrPageSizeChange,
        }}
        renderItem={(movie: Movie) => (
          <MovieCard movie={movie} />
        )} />
    </>
  )
}