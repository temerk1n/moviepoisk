import { FC, useCallback, useEffect } from "react";
import { Card, Flex, Layout, Spin } from "antd";
import { PageSider } from "../components/business/PageSider";
import { useLazyGetRandomMovieQuery } from "../store/movieApi";
import { useFiltersSelector } from "../store/filtersSlice";
import { MovieCard } from "../components/ui/MovieCard";

const { Content } = Layout;

export const RandomMoviePage: FC = () => {
  const filters = useFiltersSelector();

  const [trigger, { data, isFetching }] = useLazyGetRandomMovieQuery();

  useEffect(() => {
    const request = trigger(filters);
    return () => request.abort();
  }, [filters]);

  const onRandomClick = useCallback(() => {
    trigger(filters);
  }, [filters, trigger]);

  return (
    <Content className="content">
      <Layout>
        <Flex gap="middle" wrap="wrap">
          <PageSider showRandomButton onRandomClick={onRandomClick} />
          <Flex flex={3}>
            <Content style={{ marginTop: "1rem" }}>
              {isFetching ? (
                <Card loading={isFetching}>
                  <Spin />
                </Card>
              ) : (
                data && <MovieCard movie={data!} />
              )}
            </Content>
          </Flex>
        </Flex>
      </Layout>
    </Content>
  );
};
