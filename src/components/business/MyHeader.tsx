import { Flex, Layout, Select, SelectProps, Typography } from "antd";
import { Link, useNavigate } from "react-router-dom";
import React, { CSSProperties, FC, useEffect, useState } from "react";
import { useFiltersSelector } from "../../store/filtersSlice";
import { SearchOutlined } from "@ant-design/icons";
import {
  addToHistory,
  useSearchHistorySelector,
} from "../../store/searchHistorySlice";
import { useLazyGetMovieByNameQuery } from "../../store/movieApi";
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

  const [options, setOptions] = useState<SelectProps["options"]>();

  const [movieName, setMovieName] = useState("");
  const debouncedMovieName = useDebounce(movieName);

  const [trigger, result] = useLazyGetMovieByNameQuery();

  useEffect(() => {
    if (debouncedMovieName) {
      dispatch(addToHistory(debouncedMovieName));
      console.log(searchHistory);
      trigger(debouncedMovieName, true);
    }
  }, [debouncedMovieName, dispatch]);

  useEffect(() => {
    setOptions(
      result.data?.docs?.map((movie: any) => {
        return { label: movie.name, value: movie.id };
      }),
    );
  }, [result]);

  const onChange = (value: string) => {
    console.log("selected", value);
    navigate("/movie/" + value);
  };

  const onSearch = (value: string) => {
    setMovieName(value);
    // console.log(value)
    // trigger(value, true);
  };

  return (
    <Header style={headerStyle}>
      <Flex style={headerContentStyle} justify="space-between" align="center">
        <Link to={"/?" + getQueryParams(filters)}>
          <Title style={headerTitleStyle}>MOVIEPOISK</Title>
        </Link>
        <div>
          {/*<Input*/}
          {/*  placeholder="Фильмы, сериалы"*/}
          {/*  defaultValue=""*/}
          {/*  onChange={onSearchChange}*/}
          {/*  allowClear*/}
          {/*  suffix={<SearchOutlined />}*/}
          {/*/>*/}
          <Select
            allowClear
            // value={movieName}
            placeholder="Фильмы, сериалы"
            suffixIcon={<SearchOutlined />}
            showSearch
            onChange={onChange}
            onSearch={onSearch}
            options={options}
          />
        </div>
      </Flex>
    </Header>
  );
};
