import { FC } from "react";
import { MovieCardList } from "../components/business/MovieCardList";
import { Layout } from "antd";
import { ErrorAlert } from "../components/ui/ErrorAlert";
import { HomePageSider } from "../components/business/HomePageSider";
import { useGetMoviesWithFilters } from "../utils/hooks/useGetMoviesWithFilters";
import { useSearchParamsUpdater } from "../utils/hooks/useSearchParamsUpdater";
import { useSearchParamsFilters } from "../utils/hooks/useSearchParamsFilters";
import {
  useLazyGetMovieByNameQuery,
  useLazyGetMoviesQuery,
} from "../store/movieApi";

const { Content } = Layout;

export const HomePage: FC = () => {
  const [triggerByFilters, byFiltersResult] = useLazyGetMoviesQuery();

  const [triggerByName, byNameResult] = useLazyGetMovieByNameQuery();
  const isSearchByFilter = useGetMoviesWithFilters(
    triggerByFilters,
    triggerByName,
  );

  const {
    data: movies,
    isError,
    isFetching,
  } = isSearchByFilter ? byFiltersResult : byNameResult;

  useSearchParamsFilters();
  useSearchParamsUpdater();

  return (
    <Content className="content">
      <Layout style={{ gap: "2rem" }}>
        <HomePageSider />
        <Content style={{ marginLeft: "14rem" }}>
          <MovieCardList
            movies={movies?.docs}
            totalPages={movies?.pages}
            isFetching={isFetching}
          />
          <ErrorAlert isError={isError} />
        </Content>
      </Layout>
    </Content>
  );
};
