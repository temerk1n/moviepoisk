import { FC } from "react";
import { MovieCardList } from "../components/business/MovieCardList";
import { Layout } from "antd";
import { ErrorAlert } from "../components/ui/ErrorAlert";
import { MyLayout } from "../components/ui/MyLayout";
import { HomePageSider } from "../components/business/HomePageSider";
import { useSearchParamsFilters } from "../utils/hooks/useSearchParamsFilters";
import { useSearchParamsUpdater } from "../utils/hooks/useSearchParamsUpdater";
import { useGetMoviesWithFilters } from "../utils/hooks/useGetMoviesWithFilters";

const { Content } = Layout;

export const HomePage: FC = () => {
  const { data, isFetching, isError } = useGetMoviesWithFilters();

  useSearchParamsFilters();
  useSearchParamsUpdater();

  return (
    <MyLayout>
      <Content className="content">
        <Layout style={{ gap: "2rem" }}>
          <HomePageSider />
          <Content style={{ marginLeft: "14rem" }}>
            <MovieCardList
              movies={data?.docs}
              totalPages={data?.pages}
              isFetching={isFetching}
            />
            <ErrorAlert isError={isError} />
          </Content>
        </Layout>
      </Content>
    </MyLayout>
  );
};
