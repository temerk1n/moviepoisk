import { List } from "antd";
import React, { FC } from "react";
import { Movie } from "../../types/Movie";
import { MovieCard } from "../ui/MovieCard";
import { SetURLSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { setPaginationParams } from "../../store/paginationParamsSlice";

interface MovieCardListProps {
  movies: Movie[] | undefined;
  totalPages: number | undefined;
  isFetching: boolean;
  setSearchParams: SetURLSearchParams;
}

export const MovieCardList: FC<MovieCardListProps> = ({
  movies,
  totalPages,
  isFetching,
  setSearchParams,
}) => {
  const dispatch = useAppDispatch();

  const paginationParams = useAppSelector((state) => state.paginationParams);

  const onPageOrPageSizeChange = (page: number, pageSize: number) => {
    setSearchParams({ page: page.toString(), limit: pageSize.toString() });
    dispatch(setPaginationParams({ page: page, limit: pageSize }));
  };

  return (
    <>
      <List
        itemLayout="vertical"
        dataSource={movies}
        loading={isFetching}
        pagination={{
          defaultCurrent: 1,
          current: paginationParams.page,
          defaultPageSize: 10,
          pageSize: paginationParams.limit,
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
