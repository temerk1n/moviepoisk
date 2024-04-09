import { List } from "antd";
import React, { FC } from "react";
import { Movie } from "../../types/Movie";
import { MovieCard } from "./MovieCard";
import { usePaginationParamsSelector } from "../../store/paginationParamsSlice";
import { PaginationConfig } from "antd/lib/pagination";

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
  const { page, limit } = usePaginationParamsSelector();

  const paginationConfig: PaginationConfig = {
    defaultCurrent: 1,
    current: page,
    defaultPageSize: 10,
    pageSize: limit,
    total: totalPages,
    hideOnSinglePage: true,
    onChange: onPageOrPageSizeChange,
  }

  return (
    <>
      <List
        itemLayout="vertical"
        dataSource={movies}
        loading={isFetching}
        pagination={paginationConfig}
        renderItem={(movie: Movie) => {
          return <MovieCard movie={movie} />;
        }}
      />
    </>
  );
};
