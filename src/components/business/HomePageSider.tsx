import { Button, Flex, Layout, Select, theme, Typography } from "antd";
import { FC, useCallback } from "react";
import { useGetFiltersPossibleValues } from "../../utils/hooks/useGetFiltersPossibleValues";
import { mapOptions } from "../../utils/mapOptions";
import { ageRatingOptions, yearOptions } from "../../constants";
import { FilterName } from "../../types/Filter";
import {
  addFilter,
  resetFilters,
  useFiltersSelector,
} from "../../store/filtersSlice";
import { useAppDispatch } from "../../store/store";

const { Sider } = Layout;

const { Text } = Typography;

export const HomePageSider: FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const dispatch = useAppDispatch();
  const filters = useFiltersSelector();

  const { countries, isCountriesFetching, genres, isGenresFetching } =
    useGetFiltersPossibleValues();

  const getSelectHandler = useCallback(
    (name: FilterName) => {
      return (value: string) => {
        dispatch(addFilter({ name, value }));
      };
    },
    [dispatch],
  );

  const onResetFilters = useCallback(() => {
    dispatch(resetFilters());
  }, [dispatch]);

  return (
    <Sider
      style={{
        background: colorBgContainer,
        borderRadius: borderRadiusLG,
        height: "55vh",
        marginTop: "1rem",
        position: "fixed",
        overflow: "auto",
        padding: "1rem",
      }}
    >
      <Flex vertical gap="large" justify="flex-start">
        <Text>Страна</Text>
        <Select
          showSearch
          value={filters.country}
          placeholder="Страна"
          onChange={getSelectHandler("country")}
          options={mapOptions(countries)}
          loading={isCountriesFetching}
        />
        <Text>Жанр</Text>
        <Select
          showSearch
          value={filters.genre}
          placeholder="Жанры"
          onChange={getSelectHandler("genre")}
          options={mapOptions(genres)}
          loading={isGenresFetching}
        />
        <Text>Год релиза</Text>
        <Select
          showSearch
          value={filters.year}
          placeholder="Год"
          onChange={getSelectHandler("year")}
          options={yearOptions}
        />
        <Text>Возрастной рейтинг</Text>
        <Select
          showSearch
          value={filters.ageRating}
          placeholder="Возрастной рейтинг"
          onChange={getSelectHandler("ageRating")}
          options={ageRatingOptions}
        />
        <Button onClick={onResetFilters}>
          <Text>Очистить фильтры</Text>
        </Button>
      </Flex>
    </Sider>
  );
};
