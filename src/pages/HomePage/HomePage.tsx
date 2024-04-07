import React, { FC } from "react";
import "./HomePage.css";
import { MovieCardList } from "../../components/ui/MovieCardList";
import { Layout } from "antd";
import { useSearchParams } from "react-router-dom";
import { useGetMoviesQuery } from "../../store/movieApi";
import { ErrorAlert } from "../../components/ui/ErrorAlert";
import { Filters } from "../../types/Filters";
import { MyLayout } from "../../components/logic/MyLayout";
import { useFiltersSelector } from "../../store/filtersSlice";
import {
  setPaginationParams,
  usePaginationParamsSelector,
} from "../../store/paginationParamsSlice";
import { PaginationParams } from "../../types/PaginationParams";
import { useAppDispatch } from "../../store/store";

const { Content } = Layout;

export const HomePage: FC = () => {
  const dispatch = useAppDispatch();

  const paginationParams: PaginationParams = usePaginationParamsSelector();
  const filters: Filters = useFiltersSelector();

  const setSearchParams = useSearchParams({
    page: "1",
    limit: "10",
  })[1];

  const onPageOrPageSizeChange = (page: number, pageSize: number) => {
    setSearchParams({ page: page.toString(), limit: pageSize.toString() });
    dispatch(setPaginationParams({ page: page, limit: pageSize }));
  };

  const searchMovies = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const queryParams = {
    page: paginationParams.page.toString(),
    limit: paginationParams.limit.toString(),
  };
  const { data, isFetching, isError } = useGetMoviesQuery(queryParams);

  return (
    <MyLayout onSearchChange={searchMovies}>
      <Content className="content">
        <MovieCardList
          movies={data?.docs}
          page={paginationParams.page}
          limit={paginationParams.limit}
          totalPages={data?.pages}
          isFetching={isFetching}
          onPageOrPageSizeChange={onPageOrPageSizeChange}
        />
        <ErrorAlert isError={isError} />
      </Content>
    </MyLayout>
  );
};
