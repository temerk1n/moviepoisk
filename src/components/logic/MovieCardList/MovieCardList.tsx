import {List} from "antd";
import React from "react";
import {Movie} from "../../../types/Movie";
import {MovieCard} from "../../ui/MovieCard/MovieCard";
import {SetURLSearchParams} from "react-router-dom";

interface MovieCardListProps {
  movies: Movie[],
  totalPages: number,
  isFetching: boolean,
  searchParams: URLSearchParams,
  setSearchParams: SetURLSearchParams,
}

export const MovieCardList = ({movies, totalPages, isFetching, searchParams, setSearchParams}: MovieCardListProps) => {


  const onPageOrPageSizeChange = (page: number, pageSize: number) => {
    setSearchParams({page: page.toString(), limit: pageSize.toString()});
  }

  return (
    <>
      <List
        itemLayout="vertical"
        dataSource={movies}
        pagination={{
          defaultCurrent: 1,
          current: parseInt(searchParams.get('page')!),
          defaultPageSize: 10,
          pageSize: parseInt(searchParams.get('limit')!),
          total: totalPages,
          onChange: onPageOrPageSizeChange,
        }}
        renderItem={(movie: Movie) => (
          <MovieCard movie={movie} />
        )} />
    </>
  )
}