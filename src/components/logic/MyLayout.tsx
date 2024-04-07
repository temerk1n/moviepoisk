import React, { FC, ReactNode } from "react";
import { MyHeader } from "./MyHeader";
import { MyFooter } from "../ui/MyFooter";
import { Layout } from "antd";

interface MyLayoutProps {
  children: ReactNode;
  onSearchChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const MyLayout: FC<MyLayoutProps> = ({ children, onSearchChange }) => {
  return (
    <Layout>
      <MyHeader onSearchChange={onSearchChange} />
      {children}
      <MyFooter />
    </Layout>
  );
};
