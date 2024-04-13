import { Flex, Layout, Select, Typography } from "antd";
import { Link, useNavigate } from "react-router-dom";
import React, {
  CSSProperties,
  FC,
  useCallback,
  useEffect,
  useState,
} from "react";
import {
  resetFilters,
  setQuery,
  useFiltersSelector,
} from "../../store/filtersSlice";
import { SearchOutlined } from "@ant-design/icons";
import {
  addToHistory,
  useSearchHistorySelector,
} from "../../store/searchHistorySlice";
import { useAppDispatch } from "../../store/store";
import { useDebounce } from "../../utils/hooks/useDebounce";
import { getQueryParams } from "../../utils/getQueryParams";

const { Header } = Layout;
const { Title } = Typography;

const headerStyle: CSSProperties = {
  paddingInline: "10%",
  backgroundColor: "#141414",
  position: "sticky",
  top: 0,
  zIndex: 1,
};

const headerContentStyle: CSSProperties = {
  paddingInline: "2rem",
};

const headerTitleStyle: CSSProperties = {
  color: "white",
  lineHeight: "1.5rem",
};

export const MyHeader: FC = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const filters = useFiltersSelector();
  const searchHistory = useSearchHistorySelector();

  const [movieName, setMovieName] = useState("");
  const debouncedMovieName = useDebounce(movieName);

  useEffect(() => {
    if (debouncedMovieName) {
      dispatch(addToHistory(debouncedMovieName));
      dispatch(resetFilters());
      dispatch(setQuery(debouncedMovieName));
      navigate(`/?page=1&limit=10&movieName=${debouncedMovieName}}`);
      console.log(searchHistory);
    }
  }, [debouncedMovieName]);

  const onChange = useCallback(
    (value: string) => {
      console.log("selected", value);
      setMovieName(value);
    },
    [setMovieName],
  );

  const onSearch = useCallback(
    (value: string) => {
      setMovieName(value);
    },
    [setMovieName],
  );

  const onClear = useCallback(() => dispatch(resetFilters()), [dispatch]);

  return (
    <Header style={headerStyle}>
      <Flex style={headerContentStyle} justify="space-between" align="center">
        <Link to={"/?" + getQueryParams(filters)}>
          <Title style={headerTitleStyle}>MOVIEPOISK</Title>
        </Link>
        <Flex>
          <Select
            placeholder="Фильмы, сериалы"
            value={filters.query}
            onChange={onChange}
            showSearch
            allowClear
            onClear={onClear}
            onSearch={onSearch}
            options={searchHistory.history.map((value) => {
              return { label: value, value: value };
            })}
            suffixIcon={<SearchOutlined />}
          />
        </Flex>
      </Flex>
    </Header>
  );
};
