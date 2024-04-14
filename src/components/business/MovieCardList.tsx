import { List } from "antd";
import React, { FC, useCallback } from "react";
import { Movie } from "../../types/Movie";
import { MovieCard } from "../ui/MovieCard";
import { PaginationConfig } from "antd/lib/pagination";
import {
  setPaginationParams,
  useFiltersSelector,
} from "../../store/filtersSlice";
import { useAppDispatch } from "../../store/store";

interface MovieCardListProps {
  movies: Movie[] | undefined;
  totalPages: number | undefined;
  isFetching: boolean;
}

export const MovieCardList: FC<MovieCardListProps> = ({
  movies,
  totalPages,
  isFetching,
}) => {
  const dispatch = useAppDispatch();
  const filters = useFiltersSelector();

  const onPageOrPageSizeChange = useCallback(
    (page: number, pageSize: number) => {
      dispatch(setPaginationParams({ page: page, limit: pageSize }));
    },
    [dispatch],
  );

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
    <List
      itemLayout="vertical"
      dataSource={movies}
      loading={isFetching}
      pagination={paginationConfig}
      renderItem={(movie: Movie) => {
        return <List.Item key={movie.id}><MovieCard movie={movie} /></List.Item>;
      }}
    />
  );
};
