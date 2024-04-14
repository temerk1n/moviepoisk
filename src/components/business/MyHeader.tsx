import { Button, Flex, Layout, Typography } from "antd";
import { CSSProperties, FC, useCallback, useState } from "react";
import { useFiltersSelector } from "../../store/filtersSlice";
import { useResize } from "../../utils/hooks/useResize";
import { SearchMovieInput } from "./SearchMovieInput";
import { Link, useNavigate } from "react-router-dom";
import { getQueryParams } from "../../utils/getQueryParams";
import { AuthButton } from "../ui/AuthButton";
import { setUser, User, useUserSelector } from "../../store/userSlice";
import { ModalWithAuth } from "./ModalWithAuth";
import { users } from "../../constants";
import { useAppDispatch } from "../../store/store";
import { createPortal } from "react-dom";
import { QuestionOutlined } from "@ant-design/icons";

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
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useUserSelector();
  const filters = useFiltersSelector();
  const { width, isScreenMd } = useResize();
  const [showAuthModal, setShowAuthModal] = useState(false);

  const onLogin = (values: User) => {
    if (users.find((user) => values.login === user.login && values.password === user.password)) {
      dispatch(setUser(values));
      onClose();
    }
  }

  const onClick = useCallback(() => {
    if (!user) {
      setShowAuthModal(true);
    }
  }, [user]);

  const onClose = useCallback(() => {
    setShowAuthModal(false);
  }, [])

  const onRandomClick = useCallback(() => {
    navigate('/movie/random');
  }, [navigate])

  if (!isScreenMd) {
    headerTitleStyle.fontSize = "1rem";
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
        <Flex gap='small' align="center" style={{ width: "fit-content", minWidth: width * 0.15 }}>
          <Button onClick={onRandomClick} shape="circle" icon={<QuestionOutlined />}/>
          <SearchMovieInput />
          <AuthButton onClick={onClick} ghost={!!user}/>
        </Flex>
      </Flex>
      {showAuthModal && createPortal(<ModalWithAuth showModal={showAuthModal} onLogin={onLogin} onClose={onClose}/>, document.body)}
    </Header>
  );
};
