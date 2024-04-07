import {Review} from "../../../types/Review";
import {Card, List, Typography} from "antd";
import "./ReviewItem.css"

const {Title, Text, Paragraph} = Typography;

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
        title={<Title level={5}>{review.author}</Title>}
        extra={<Text>{dateString}</Text>}
        className={review.type === "Позитивный" ? "positive-review" : "negative-review"}
      >
        <Title level={5}>{review.title}</Title>
        <Paragraph>{review.review}</Paragraph>
      </Card>
    </List.Item>
  )
}