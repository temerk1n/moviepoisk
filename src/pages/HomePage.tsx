import { FC } from "react";
import { MovieCardList } from "../components/business/MovieCardList";
import { Flex, Layout } from "antd";
import { ErrorAlert } from "../components/ui/ErrorAlert";
import { PageSider } from "../components/business/PageSider";
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
      <Layout>
        <Flex gap="middle" wrap="wrap">
          <PageSider />
          <Flex flex={3}>
            <Content>
              <MovieCardList
                movies={movies?.docs}
                totalPages={movies?.pages}
                isFetching={isFetching}
              />
              <ErrorAlert isError={isError} />
            </Content>
          </Flex>
        </Flex>
      </Layout>
    </Content>
  );
};
