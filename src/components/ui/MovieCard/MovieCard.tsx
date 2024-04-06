import {Movie} from "../../../types/Movie";
import {Card, Col, Flex, Image, List, Row} from "antd";
import {Link} from "react-router-dom";
import './MovieCard.css'
import {MovieRating} from "../MovieRating/MovieRating";

interface MovieCardProps {
  movie: Movie,
}

export const MovieCard = ({movie}: MovieCardProps) => {

  return (
    <List.Item
    key={movie.id}
    >
      <Card bordered={false} hoverable>
        <Row justify="space-between">
          <Col flex={1}>
            <Image width={150} src={movie.poster.previewUrl}/>
          </Col>
          <Col flex={6}>
            <Flex gap="small" vertical align="start">
              <Link to={`/movie/${movie.id}`}><h2 className="card-title">{movie.name}</h2></Link>
              <span>{movie.alternativeName ? `${movie.alternativeName}, ` : ''}{movie.year}, {movie.movieLength} мин.</span>
              <span>{movie.countries[0].name} {movie.genres[0].name}</span>
              <p>{movie.shortDescription}</p>
            </Flex>
          </Col>
          <Col flex={2}>
            <Flex justify="flex-end">
              {
                movie.rating.kp ?
                  <MovieRating rating={movie.rating.kp} /> :
                  <></>
              }
            </Flex>
          </Col>
        </Row>
      </Card>
    </List.Item>
  )
}