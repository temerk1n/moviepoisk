import { FC } from "react";
import { Movie } from "../../types/Movie";
import { Card, Flex, Typography } from "antd";
import { MovieRating } from "./MovieRating";
import { Link } from "react-router-dom";

const { Meta } = Card;

const { Title } = Typography;

interface SimilarMovieItemProps {
  movie: Movie;
}

export const SimilarMovieItem: FC<SimilarMovieItemProps> = ({ movie }) => {
  const title = (
    <Link to={`/movie/${movie.id}`}>
      <Title className="card-title" level={3}>
        {movie.name ? movie.name : movie.alternativeName}
      </Title>
    </Link>
  );

  const description = (
    <Flex justify="space-between">
      {movie.year}
      {movie.rating.kp ? <MovieRating rating={movie.rating.kp} /> : <></>}
    </Flex>
  );

  return (
    <Card cover={<img alt="Постер" src={movie.poster.url} />}>
      <Meta title={title} description={description} />
    </Card>
  );
};
