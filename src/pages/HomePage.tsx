import React, { FC } from "react";
import { MovieCardList } from "../components/ui/MovieCardList";
import { Layout, theme } from "antd";
import { useSearchParams } from "react-router-dom";
import { useGetMoviesQuery } from "../store/movieApi";
import { ErrorAlert } from "../components/ui/ErrorAlert";
import { Filters } from "../types/Filters";
import { MyLayout } from "../components/logic/MyLayout";
import { useFiltersSelector } from "../store/filtersSlice";
import {
  setPaginationParams,
  usePaginationParamsSelector,
} from "../store/paginationParamsSlice";
import { PaginationParams } from "../types/PaginationParams";
import { useAppDispatch } from "../store/store";
import { MoviesQueryParams } from "../types/MoviesQueryParams";
import { HomePageSider } from "../components/logic/HomePageSider";

const { Content } = Layout;

export const HomePage: FC = () => {
  const {
    token: { borderRadiusLG },
  } = theme.useToken();

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

  const onNameSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const queryParams: MoviesQueryParams = {
    page: paginationParams.page,
    limit: paginationParams.limit,
    // genre: filters.genre,
    // year: filters.year,
    // country: filters.country,
    // ageRating: filters.ageRating,
  };
  const { data, isFetching, isError } = useGetMoviesQuery(queryParams);

  return (
    <MyLayout onSearchChange={onNameSearch}>
      <Content className="content">
        <Layout style={{ borderRadius: borderRadiusLG, gap: "2rem" }}>
          <HomePageSider />
          <Content style={{ marginLeft: "14rem" }}>
            <MovieCardList
              movies={data?.docs}
              totalPages={data?.pages}
              isFetching={isFetching}
              onPageOrPageSizeChange={onPageOrPageSizeChange}
            />
            <ErrorAlert isError={isError} />
          </Content>
        </Layout>
      </Content>
    </MyLayout>
  );
};
