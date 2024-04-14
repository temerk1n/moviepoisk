import { Flex, Layout, Typography } from "antd";
import { CSSProperties, FC } from "react";
import { useFiltersSelector } from "../../store/filtersSlice";
import { useResize } from "../../utils/hooks/useResize";
import { SearchMovieInput } from "./SearchMovieInput";
import { Link } from "react-router-dom";
import { getQueryParams } from "../../utils/getQueryParams";

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
};

export const MyHeader: FC = () => {
  const filters = useFiltersSelector();
  const { width, isScreenMd } = useResize();

  if (!isScreenMd) {
    headerTitleStyle.fontSize = "1.2rem";
  } else {
    headerTitleStyle.fontSize = "1.8rem";
  }

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
