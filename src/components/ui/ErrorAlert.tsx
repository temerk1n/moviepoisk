import { Alert } from "antd";
import { createPortal } from "react-dom";
import { CSSProperties, FC } from "react";

interface ErrorAlertProps {
  isError: boolean;
  message?: string;
}

const errorAlertStyle: CSSProperties = {
  position: "absolute",
  zIndex: 1,
  top: "80px",
  right: "50px",
};

// TODO: поменять положение
export const ErrorAlert: FC<ErrorAlertProps> = ({
  isError,
  message = "Something went wrong",
}) => {
  return isError ? (
    createPortal(
      <Alert
        type="error"
        showIcon
        closable
        style={errorAlertStyle}
        message={message}
      />,
      document.body,
    )
  ) : (
    <></>
  );
};
