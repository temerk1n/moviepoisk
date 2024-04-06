import {Card, Flex, Image, Typography} from "antd";
import {MovieRating} from "../../ui/MovieRating/MovieRating";
import {ActorsList} from "../ActorsList/ActorsList";
import {MovieDetail} from "../../../types/MovieDetail";

interface MovieDetailCardProps {
  movie: MovieDetail,
}

export const MovieDetailCard = ({movie}: MovieDetailCardProps) => {
  return (
    <Card>
      <Flex gap="large" wrap="wrap">
        <Flex vertical>
          <Image width={300} src={movie.poster.url}/>
        </Flex>
        <Flex vertical flex={2}>
          <Typography.Title level={2}>{movie.name}</Typography.Title>
          <Typography.Title level={4} type="secondary">
            {movie.alternativeName ? `${movie.alternativeName}, ` : ""}
            {movie.ageRating ? `${movie.ageRating}+` : "Нет возрастного рейтинга"}
          </Typography.Title>
          <Typography.Title level={3}>Описание</Typography.Title>
          <Typography.Paragraph>{movie.description ? movie.description : "Нет описания"}</Typography.Paragraph>
        </Flex>
        <Flex vertical flex={1} justify="flex-start" align="center" gap="middle">
          {
            movie.rating.kp ?
              <MovieRating rating={movie.rating.kp} /> :
              <Typography.Text strong>Нет информации о рейтинге</Typography.Text>
          }
          <ActorsList persons={movie.persons}/>
        </Flex>
      </Flex>
    </Card>
  )
}