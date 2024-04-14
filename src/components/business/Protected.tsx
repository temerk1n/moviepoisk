import { FC } from "react";
import { useUserSelector } from "../../store/userSlice";
import { Navigate } from "react-router-dom";

interface ProtectedProps {
  children: JSX.Element;
}

export const Protected: FC<ProtectedProps> = ({children}) => {
  const user = useUserSelector();

  if (user) return children;
  else return <Navigate to={"/"}/>;
}