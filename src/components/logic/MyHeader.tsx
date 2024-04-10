import { Flex, Input, Layout, Typography } from "antd";
import { Link } from "react-router-dom";
import React, { CSSProperties, FC } from "react";
import { useFiltersSelector } from "../../store/filtersSlice";

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

interface MyHeaderProps {
  onSearchChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const MyHeader: FC<MyHeaderProps> = ({ onSearchChange }) => {
  const filters = useFiltersSelector();

  return (
    <Header style={headerStyle}>
      <Flex style={headerContentStyle} justify="space-between" align="center">
        <Link to={`/?page=${filters.page}&limit=${filters.limit}`}>
          <Title style={headerTitleStyle}>MOVIEPOISK</Title>
        </Link>
        <div style={{ width: "30%" }}>
          <Input
            placeholder="Фильмы, сериалы"
            defaultValue=""
            onChange={onSearchChange}
            allowClear
          />
        </div>
      </Flex>
    </Header>
  );
};
