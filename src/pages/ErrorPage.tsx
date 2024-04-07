import { FC } from "react";
import { Flex, Typography } from "antd";

const { Title, Text } = Typography;

export const ErrorPage: FC = () => {
  return (
    <Flex vertical justify="center" align="center" gap="large">
      <Title level={2}>Oops!</Title>
      <Text type="danger">Not Found Error</Text>
    </Flex>
  );
};
