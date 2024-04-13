import React, { FC, ReactNode } from "react";
import { MyHeader } from "../business/MyHeader";
import { MyFooter } from "./MyFooter";
import { Layout } from "antd";

interface MyLayoutProps {
  children: ReactNode;
}

export const MyLayout: FC<MyLayoutProps> = ({ children }) => {
  return (
    <Layout>
      <MyHeader />
      {children}
      <MyFooter />
    </Layout>
  );
};
