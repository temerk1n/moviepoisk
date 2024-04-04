import {Movie} from "../../../types/Movie";
import {Card, Flex, Image, List, Rate} from "antd";

interface MovieCardProps {
  movie: Movie,
}

export const MovieCard = ({movie}: MovieCardProps) => {
  return (
    <List.Item
    key={movie.id}>
      <Card bordered={false} hoverable>
        <Flex gap="middle" justify="space-between">
          <Image width={150} src={movie.poster.previewUrl}/>
          <Flex gap="small" vertical align="start">
            <h2>{movie.name}</h2>
            <span>{movie.alternativeName}, {movie.year}, {movie.movieLength} мин.</span>
            <span>{movie.countries[0].name} {movie.genres[0].name}</span>
            <p>{movie.shortDescription}</p>
          </Flex>
          {
            movie.rating.kp ?
            <Rate disabled allowHalf defaultValue={0} value={movie.rating.kp / 2} count={5}/> :
            <></>
          }
        </Flex>
      </Card>
    </List.Item>
  )
}