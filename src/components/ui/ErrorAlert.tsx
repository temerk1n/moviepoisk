import { Alert } from "antd";
import { createPortal } from "react-dom";
import { CSSProperties, FC } from "react";

interface ErrorAlertProps {
  isError: boolean;
  message?: string;
}

const errorAlertStyle: CSSProperties = {
  position: "absolute",
  bottom: "50px",
  right: "50px",
};

export const ErrorAlert: FC<ErrorAlertProps> = ({
  isError,
  message = "Something went wrong",
}) => {
  return isError ? (
    createPortal(
      <Alert type="error" showIcon style={errorAlertStyle} message={message} />,
      document.body,
    )
  ) : (
    <></>
  );
};
