import {Alert} from "antd";
import {createPortal} from "react-dom";
import "./ErrorAlert.css"

interface ErrorAlertProps {
  isError: boolean,
  message?: string,
}

export const ErrorAlert = ({isError, message = 'Something went wrong'}: ErrorAlertProps) => {
  return isError ?
    createPortal(<Alert type="error" showIcon className="errorAlert" message="Something went wrong" />, document.body) :
    <></>;
}