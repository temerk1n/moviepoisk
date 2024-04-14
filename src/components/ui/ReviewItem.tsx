import { Review } from "../../types/Review";
import { Card, List, Typography } from "antd";
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
        title={<Title level={5}>{review.author}</Title>}
        extra={<Text>{formatDate(review.date)}</Text>}
        style={
          review.type === "Позитивный"
            ? positiveReviewStyle
            : negativeReviewStyle
        }
      >
        <Title level={5}>{review.title}</Title>
        <Paragraph>{review.review}</Paragraph>
      </Card>
    </List.Item>
  );
};
