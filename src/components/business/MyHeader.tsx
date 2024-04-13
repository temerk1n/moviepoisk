import { Flex, Layout, Typography } from "antd";
import { Link } from "react-router-dom";
import React, { CSSProperties, FC } from "react";
import { useFiltersSelector } from "../../store/filtersSlice";
import { getQueryParams } from "../../utils/getQueryParams";
import { SearchMovieInput } from "./SearchMovieInput";

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

const containerStyle: CSSProperties = { minWidth: 200 };


export const MyHeader: FC = () => {
  const filters = useFiltersSelector();

  return (
    <Header style={headerStyle}>
      <Flex style={headerContentStyle} justify="space-between" align="center">
        <Link to={"/?" + getQueryParams(filters)}>
          <Title style={headerTitleStyle} level={2} ellipsis={true}>
            MOVIEPOISK
          </Title>
        </Link>
        <Flex style={containerStyle}>
          <SearchMovieInput/>
        </Flex>
      </Flex>
    </Header>
  );
};
