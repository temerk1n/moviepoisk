import { FC } from "react";
import { Button } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";

interface BackButtonProps {
  onClick: () => void;
}

export const BackButton: FC<BackButtonProps> = ({ onClick }) => {
  return (
    <Button icon={<ArrowLeftOutlined />} onClick={onClick}>
      Назад
    </Button>
  );
};
