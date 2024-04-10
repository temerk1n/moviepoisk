import {Flex, Layout, Select, theme} from "antd";
import {FC} from "react";
import {useGetFiltersPossibleValues} from "../../utils/hooks/useGetFiltersPossibleValues";
import {mapOptions} from "../../utils/mapOptions";
import {useAppDispatch} from "../../store/store";
import {setFilters} from "../../store/filtersSlice";
import {FiltersFields} from "../../types/FiltersFields";

const { Sider } = Layout;


export const HomePageSider: FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const dispatch = useAppDispatch();

  const {countries, isCountriesFetching, genres, isGenresFetching} = useGetFiltersPossibleValues();

  const onFiltersChange = (value: string) => {
    dispatch(setFilters([ {name: FiltersFields.genre, value} ]));
  }

  return (
    <Sider
      style={{
        background: colorBgContainer,
        borderRadius: borderRadiusLG,
        height: "50vh",
        marginTop: "1rem",
        position: "fixed",
        overflow: "auto",
        padding: "1rem"
      }}
    >
      <Flex vertical gap="large" justify="flex-start">
        <Select showSearch placeholder="Страна" onChange={onFiltersChange} options={mapOptions(countries)} loading={isCountriesFetching} />
        <Select showSearch placeholder="Жанры" onChange={onFiltersChange} options={mapOptions(genres)} loading={isGenresFetching} />
        <Select showSearch placeholder="Год" onChange={onFiltersChange} />
        <Select showSearch placeholder="Возрастной рейтинг" onChange={onFiltersChange} />
      </Flex>
    </Sider>
  )
}