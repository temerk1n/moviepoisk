import React, { FC, ReactNode } from "react";
import { MyHeader } from "./MyHeader";
import { MyFooter } from "../ui/MyFooter";
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
