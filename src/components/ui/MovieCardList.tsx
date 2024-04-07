import { List } from "antd";
import React, { FC } from "react";
import { Movie } from "../../types/Movie";
import { MovieCard } from "./MovieCard";
import { usePaginationParamsSelector } from "../../store/paginationParamsSlice";

interface MovieCardListProps {
  movies: Movie[] | undefined;
  totalPages: number | undefined;
  isFetching: boolean;
  onPageOrPageSizeChange: (page: number, pageSize: number) => void;
}

export const MovieCardList: FC<MovieCardListProps> = ({
  movies,
  totalPages,
  isFetching,
  onPageOrPageSizeChange,
}) => {
  const {page, limit} = usePaginationParamsSelector();
  return (
    <>
      <List
        itemLayout="vertical"
        dataSource={movies}
        loading={isFetching}
        pagination={{
          defaultCurrent: 1,
          current: page,
          defaultPageSize: 10,
          pageSize: limit,
          total: totalPages,
          onChange: onPageOrPageSizeChange,
        }}
        renderItem={(movie: Movie) => {
          return <MovieCard movie={movie} />;
        }}
      />
    </>
  );
};
