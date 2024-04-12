import { FC, useState } from "react";
import { MovieCardList } from "../components/business/MovieCardList";
import { Layout } from "antd";
import { ErrorAlert } from "../components/ui/ErrorAlert";
import { MyLayout } from "../components/business/MyLayout";
import { useFiltersSelector } from "../store/filtersSlice";
import { HomePageSider } from "../components/business/HomePageSider";
import { useSearchParamsFilters } from "../utils/hooks/useSearchParamsFilters";
import { useGetMoviesQuery } from "../store/movieApi";
import { useSearchParamsUpdater } from "../utils/hooks/useSearchParamsUpdater";

const { Content } = Layout;

export const HomePage: FC = () => {
  const filters = useFiltersSelector();

  const [skipRequest, setSkipRequest] = useState(true);

  const result = useGetMoviesQuery(filters, { skip: skipRequest });

  useSearchParamsFilters(setSkipRequest);
  useSearchParamsUpdater();

  return (
    <MyLayout>
      <Content className="content">
        <Layout style={{ gap: "2rem" }}>
          <HomePageSider />
          <Content style={{ marginLeft: "14rem" }}>
            <MovieCardList
              movies={result.data?.docs}
              totalPages={result.data?.pages}
              isFetching={result.isFetching}
            />
            <ErrorAlert isError={result.isError} />
          </Content>
        </Layout>
      </Content>
    </MyLayout>
  );
};
