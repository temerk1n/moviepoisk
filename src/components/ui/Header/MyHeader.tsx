import {Flex, Input, Layout} from "antd";
import {Link} from "react-router-dom";
import React from "react";

const {Header} = Layout;

interface MyHeaderProps {
  limit?: string | null,
  onSearchChange: React.ChangeEventHandler<HTMLInputElement>,
}

export const MyHeader = ({limit = '10', onSearchChange}: MyHeaderProps) => {
  return (
    <Header className="header">
      <Flex className="header-content" justify="space-between" align="center">
        <Link to={`/?page=1&limit=${limit}`}><h1>MOVIEPOISK</h1></Link>
        <Input placeholder="Фильмы, сериалы" defaultValue='' onChange={onSearchChange} allowClear/>
      </Flex>
    </Header>
  )
}