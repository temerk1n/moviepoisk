import { Flex, Layout, Typography } from "antd";
import { Link } from "react-router-dom";
import { CSSProperties, FC } from "react";
import { useFiltersSelector } from "../../store/filtersSlice";
import { getQueryParams } from "../../utils/getQueryParams";
import { SearchMovieInput } from "./SearchMovieInput";
import { useResize } from "../../utils/hooks/useResize";

const { Header } = Layout;
const { Title } = Typography;

const headerStyle: CSSProperties = {
  paddingInline: "10%",
  backgroundColor: "#141414",
  position: "sticky",
  top: 0,
  zIndex: 1,
  display: "flex",
};

const headerTitleStyle: CSSProperties = {
  color: "white",
  fontSize: "1.8rem",
};

export const MyHeader: FC = () => {
  const filters = useFiltersSelector();
  const width = useResize();

  return (
    <Header style={headerStyle}>
      <Flex justify="space-between" align="center" flex={1}>
        <Flex>
          <Link to={"/?" + getQueryParams(filters)}>
            <Title style={headerTitleStyle} level={1} ellipsis>
              MOVIEPOISK
            </Title>
          </Link>
        </Flex>
        <Flex style={{ width: "fit-content", minWidth: width * 0.15 }}>
          <SearchMovieInput />
        </Flex>
      </Flex>
    </Header>
  );
};
