import { Flex, Input, Layout } from "antd";
import { Link } from "react-router-dom";
import React, { CSSProperties, FC } from "react";
import { useAppSelector } from "../../store/store";

const { Header } = Layout;

const headerStyle: CSSProperties = {
  paddingInline: "10%",
  backgroundColor: "#141414",
};

const headerContentStyle: CSSProperties = {
  paddingInline: "2rem",
  lineHeight: "2rem",
  width: "100%",
  gap: "60%",
};

const headerTitleStyle: CSSProperties = {
  color: "white",
};

interface MyHeaderProps {
  onSearchChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const MyHeader: FC<MyHeaderProps> = ({
  onSearchChange,
}) => {
  const paginationParams = useAppSelector(state => state.paginationParams);

  return (
    <Header style={headerStyle}>
      <Flex style={headerContentStyle} justify="space-between" align="center">
        <Link to={`/?page=${paginationParams.page}&limit=${paginationParams.limit}`}>
          <h1 style={headerTitleStyle}>MOVIEPOISK</h1>
        </Link>
        <Input
          placeholder="Фильмы, сериалы"
          defaultValue=""
          onChange={onSearchChange}
          allowClear
        />
      </Flex>
    </Header>
  );
};
