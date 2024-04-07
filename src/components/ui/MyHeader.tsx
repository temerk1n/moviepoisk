import {Flex, Input, Layout} from "antd";
import {Link} from "react-router-dom";
import React, {CSSProperties, FC} from "react";

const {Header} = Layout;

interface MyHeaderProps {
  limit?: string | null,
  onSearchChange: React.ChangeEventHandler<HTMLInputElement>,
}

const headerStyle: CSSProperties = {
  paddingInline: '10%',
  backgroundColor: '#141414',
}

const headerContentStyle: CSSProperties = {
  paddingInline: '2rem',
  lineHeight: '2rem',
  width: '100%',
  gap: '60%',
}

const headerTitleStyle: CSSProperties = {
  color: 'white',
}

export const MyHeader: FC<MyHeaderProps> = ({limit = '10', onSearchChange}) => {
  return (
    <Header style={headerStyle}>
      <Flex style={headerContentStyle} justify="space-between" align="center">
        <Link to={`/?page=1&limit=${limit}`}><h1 style={headerTitleStyle}>MOVIEPOISK</h1></Link>
        <Input placeholder="Фильмы, сериалы" defaultValue='' onChange={onSearchChange} allowClear/>
      </Flex>
    </Header>
  )
}