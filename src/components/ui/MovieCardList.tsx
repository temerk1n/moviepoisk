import { List } from "antd";
import React, { FC } from "react";
import { Movie } from "../../types/Movie";
import { MovieCard } from "./MovieCard";
import { PaginationConfig } from "antd/lib/pagination";
import { useFiltersSelector } from "../../store/filtersSlice";

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
  const filters = useFiltersSelector();

  const paginationConfig: PaginationConfig = {
    defaultCurrent: 1,
    current: filters.page,
    defaultPageSize: 10,
    pageSize: filters.limit,
    total: totalPages,
    hideOnSinglePage: true,
    onChange: onPageOrPageSizeChange,
  };

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
