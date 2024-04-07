import { FC } from "react";
import { Layout } from "antd";

const { Footer } = Layout;

export const MyFooter: FC = () => {
  return (
    <Footer style={{ textAlign: "center" }}>
      Тестовое задание на стажировку в Авито
    </Footer>
  )
}