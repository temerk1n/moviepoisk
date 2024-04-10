import { Flex, Layout, Select, theme } from "antd";
import { FC } from "react";
import { useGetFiltersPossibleValues } from "../../utils/hooks/useGetFiltersPossibleValues";
import { mapOptions } from "../../utils/mapOptions";
import { ageRatingOptions, yearOptions } from "../../constants";
import { FilterName } from "../../types/Filter";

const { Sider } = Layout;

interface HomePageSiderProps {
  getSelectHandler: (name: FilterName) => (value: string) => void;
  getSelectClearHandler: (name: FilterName) => () => void;
}

export const HomePageSider: FC<HomePageSiderProps> = ({
  getSelectHandler,
  getSelectClearHandler,
}) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const { countries, isCountriesFetching, genres, isGenresFetching } =
    useGetFiltersPossibleValues();

  return (
    <Sider
      style={{
        background: colorBgContainer,
        borderRadius: borderRadiusLG,
        height: "50vh",
        marginTop: "1rem",
        position: "fixed",
        overflow: "auto",
        padding: "1rem",
      }}
    >
      <Flex vertical gap="large" justify="flex-start">
        <Select
          showSearch
          allowClear
          onClear={getSelectClearHandler("countries.name")}
          placeholder="Страна"
          onChange={getSelectHandler("countries.name")}
          options={mapOptions(countries)}
          loading={isCountriesFetching}
        />
        <Select
          showSearch
          allowClear
          onClear={getSelectClearHandler("genres.name")}
          placeholder="Жанры"
          onChange={getSelectHandler("genres.name")}
          options={mapOptions(genres)}
          loading={isGenresFetching}
        />
        <Select
          showSearch
          allowClear
          onClear={getSelectClearHandler("year")}
          placeholder="Год"
          onChange={getSelectHandler("year")}
          options={yearOptions}
        />
        <Select
          showSearch
          allowClear
          onClear={getSelectClearHandler("ageRating")}
          placeholder="Возрастной рейтинг"
          onChange={getSelectHandler("ageRating")}
          options={ageRatingOptions}
        />
      </Flex>
    </Sider>
  );
};
