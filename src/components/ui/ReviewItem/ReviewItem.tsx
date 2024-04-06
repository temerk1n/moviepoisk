import {Review} from "../../../types/Review";
import {Card, List, Typography} from "antd";
import "./ReviewItem.css"

interface ReviewItemProps {
  review: Review,
}

export const ReviewItem = ({review}: ReviewItemProps) => {
  const date = new Date(review.date);
  const dateString = date.toLocaleDateString("ru") + " в " + date.getHours() + ":" + date.getMinutes();

  return (
    <List.Item key={review.id}>
      <Card
        bordered={false}
        title={<Typography.Title level={5}>{review.author}</Typography.Title>}
        extra={<Typography.Text>{dateString}</Typography.Text>}
        className={review.type === "Позитивный" ? "positive-review" : "negative-review"}
      >
        <Typography.Title level={5}>{review.title}</Typography.Title>
        <Typography.Paragraph>{review.review}</Typography.Paragraph>
      </Card>
    </List.Item>
  )
}