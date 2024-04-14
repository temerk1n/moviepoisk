import { Review } from "../../types/Review";
import { Card, Flex, List, Typography } from "antd";
import { CSSProperties, FC } from "react";
import { formatDate } from "../../utils/formatDate";

const { Title, Text, Paragraph } = Typography;

const positiveReviewStyle: CSSProperties = {
  backgroundColor: "lightgreen",
};

const negativeReviewStyle: CSSProperties = {
  backgroundColor: "indianred",
};

interface ReviewItemProps {
  review: Review;
}

export const ReviewItem: FC<ReviewItemProps> = ({ review }) => {
  return (
    <List.Item key={review.id}>
      <Card
        bordered={false}
        style={
          review.type === "Позитивный"
            ? positiveReviewStyle
            : negativeReviewStyle
        }
      >
        <Flex align="center" justify="space-between">
          <Title level={4}>{review.author}</Title>
          <Text>{formatDate(review.date)}</Text>
        </Flex>
        <Flex vertical>
          <Title level={5}>{review.title}</Title>
          <Paragraph>{review.review}</Paragraph>
        </Flex>
      </Card>
    </List.Item>
  );
};
