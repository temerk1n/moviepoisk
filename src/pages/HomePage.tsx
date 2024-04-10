import { ChangeEvent, FC } from "react";
import { MovieCardList } from "../components/ui/MovieCardList";
import { Layout } from "antd";
import { useSearchParams } from "react-router-dom";
import { ErrorAlert } from "../components/ui/ErrorAlert";
import { MyLayout } from "../components/logic/MyLayout";
import { addFilter, useFiltersSelector } from "../store/filtersSlice";
import { useAppDispatch } from "../store/store";
import { HomePageSider } from "../components/logic/HomePageSider";
import { FilterName } from "../types/Filter";
import { useGetMoviesQuery } from "../store/movieApi";
import { MoviesQueryParams } from "../types/MoviesQueryParams";

const { Content } = Layout;

// TODO: searchParams

export const HomePage: FC = () => {
  const dispatch = useAppDispatch();
  const filters = useFiltersSelector();

  const [searchParams, setSearchParams] = useSearchParams({
    page: "1",
    limit: "10",
  });

  // const { data, isFetching, isError } = useSearchParamsFilters(searchParams, dispatch, filters);
  const queryParams: MoviesQueryParams = {
    page: searchParams.has("page")
      ? parseInt(searchParams.get("page")!)
      : filters.page,
    limit: searchParams.has("limit")
      ? parseInt(searchParams.get("limit")!)
      : filters.limit,
    options: filters.options,
  };

  // TODO: переписать на lazy query
  const { data, isFetching, isError } = useGetMoviesQuery(queryParams);

  const onPageOrPageSizeChange = (page: number, pageSize: number) => {
    // dispatch(setPaginationParams({ page: page, limit: pageSize }));

    searchParams.set("page", page.toString());
    searchParams.set("limit", pageSize.toString());
    setSearchParams(searchParams);
  };

  const getSelectHandler = (name: FilterName) => {
    return (value: string) => {
      dispatch(addFilter({ name, value }));

      searchParams.set(name, value);
      setSearchParams(searchParams);
    };
  };

  const getSelectClearHandler = (name: FilterName) => {
    return () => {
      searchParams.delete(name);
      setSearchParams(searchParams);
      // console.log(filters.options);
    };
  };

  const onNameSearch = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <MyLayout onSearchChange={onNameSearch}>
      <Content className="content">
        <Layout style={{ gap: "2rem" }}>
          <HomePageSider
            getSelectHandler={getSelectHandler}
            getSelectClearHandler={getSelectClearHandler}
          />
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
