import { FC, memo } from "react";
import { UserOutlined } from "@ant-design/icons";
import { Button } from "antd";

interface AuthButtonProps {
  onClick: () => void;
  ghost: boolean;
}

export const AuthButton: FC<AuthButtonProps> = memo(({onClick, ghost}) => {
  return <Button shape="circle" icon={<UserOutlined />} onClick={onClick} ghost={ghost}/>;
});