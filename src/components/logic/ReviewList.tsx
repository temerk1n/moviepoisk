import { List, Skeleton, Typography } from "antd";
import { PaginationConfig } from "antd/lib/pagination";
import { Review } from "../../types/Review";
import { ReviewItem } from "../ui/ReviewItem";
import { usePagination } from "../../utils/hooks/usePagination";
import { useGetReviewsByMovieIdQuery } from "../../store/services/movieApi";
import { useParams } from "react-router-dom";
import { FC } from "react";

export const ReviewList: FC = () => {
  const { movieId } = useParams();
  const [currentPage, onPageChange] = usePagination();

  const { data, isFetching } = useGetReviewsByMovieIdQuery({
    movieId,
    page: currentPage,
  });

  const reviews = data?.docs;

  const paginationConfig: PaginationConfig = {
    current: currentPage,
    defaultPageSize: 10,
    total: data?.total,
    onChange: onPageChange,
    hideOnSinglePage: true,
    showSizeChanger: false,
  };

  return (
    <Skeleton loading={isFetching} active={isFetching}>
      <List
        header={
          <Typography.Title level={3}>Отзывы пользователей</Typography.Title>
        }
        itemLayout="vertical"
        dataSource={reviews}
        pagination={paginationConfig}
        renderItem={(review: Review) => <ReviewItem review={review} />}
      />
    </Skeleton>
  );
};
