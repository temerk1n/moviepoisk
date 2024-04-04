import {List} from "antd";
import React, {useState} from "react";
import {Movie} from "../../../types/Movie";
import {MovieCard} from "../../ui/MovieCard/MovieCard";
import {useGetMoviesQuery} from "../../../store/services/movieApi";


export const MovieCardList = () => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const {data, isFetching, isError} = useGetMoviesQuery({page: page, limit: pageSize})

  if (isFetching) return <div>Loading...</div>;
  if (isError) return <div>Error!</div>;

  const onPageOrPageSizeChange = (page: number, pageSize: number) => {
    setPage(page);
    setPageSize(pageSize);
  }

  return (
    <>
      <List
        itemLayout="vertical"
        dataSource={data.docs}
        pagination={{
          current: page,
          pageSize: pageSize,
          total: data.pages,
          onChange: onPageOrPageSizeChange,
        }}
        renderItem={(movie: Movie) => (
          <MovieCard movie={movie} />
        )} />
    </>
  )
}