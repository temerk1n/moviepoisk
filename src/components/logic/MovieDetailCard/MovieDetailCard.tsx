import {Card, Flex, Image, Skeleton, Typography} from "antd";
import {MovieRating} from "../../ui/MovieRating";
import {ActorsList} from "../ActorsList/ActorsList";
import {MovieDetail} from "../../../types/MovieDetail";
import {MovieDetailDescription} from "../../ui/MovieDetailDescription";
import {ReviewList} from "../../ui/ReviewList";

interface MovieDetailCardProps {
  movie: MovieDetail,
  isFetching: boolean,
  isError: boolean,
}

export const MovieDetailCard = ({movie, isFetching, isError}: MovieDetailCardProps) => {
  const showSkeleton = isFetching || isError;

  return (
    <Card>
      <Flex gap="large" wrap="wrap">
        <Flex vertical>
          { showSkeleton ?
            <Skeleton.Image active={!isError} style={{ width: 300, height: 300 }}/> :
            <Image width={300} src={movie?.poster.url} alt="Movie poster" />
          }
        </Flex>
        <Flex vertical flex={2}>
          <MovieDetailDescription
            showSkeleton={showSkeleton}
            isError={isError}
            movie={movie}
          />
        </Flex>
        <Flex vertical flex={1} justify="flex-start" align="center" gap="middle">
          <Skeleton active={!isError} loading={showSkeleton} title={false} paragraph={{ rows: 10 }}>
            {
              movie?.rating.kp ?
                <MovieRating rating={movie.rating.kp} /> :
                <Typography.Text strong>Нет информации о рейтинге</Typography.Text>
            }
            <ActorsList persons={movie?.persons}/>
          </Skeleton>
        </Flex>
      </Flex>
      <ReviewList />
    </Card>
  )
}