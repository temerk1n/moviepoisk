import {MovieDetail} from "../../../types/MovieDetail";
import {Card, Flex, Image} from "antd";

interface MovieDetailCardProps {
  movie: MovieDetail,
}

export const MovieDetailCard = ({movie}: MovieDetailCardProps) => {
  return (
    <Card>
      <Flex gap="small" justify="space-between">
        <Image width={200} src={movie.poster.url}/>
        <h2>{movie.name}</h2>
      </Flex>
    </Card>
  )
}