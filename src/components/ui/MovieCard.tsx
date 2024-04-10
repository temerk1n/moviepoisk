import { Movie } from "../../types/Movie";
import { Card, Col, Flex, Image, List, Row, Typography } from "antd";
import { Link } from "react-router-dom";
import { MovieRating } from "./MovieRating";
import { FC } from "react";
import { MinusOutlined } from "@ant-design/icons";

const { Title, Text, Paragraph } = Typography;

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard: FC<MovieCardProps> = ({ movie }) => {
  return (
    <List.Item key={movie.id}>
      <Card bordered={false}>
        <Row justify="space-between">
          <Col flex={1}>
            <Image width={150} src={movie.poster.previewUrl} />
          </Col>
          <Col flex={6}>
            <Flex gap="small" vertical align="start">
              <Link to={`/movie/${movie.id}`}>
                <Title level={2} className="card-title">
                  {movie.name ? movie.name : movie.alternativeName}
                </Title>
              </Link>
              <Text>
                {movie.alternativeName ? `${movie.alternativeName}, ` : " "}
                {movie.type === "tv-series"
                  ? `${movie.releaseYears[0]?.start}-${movie.releaseYears[0]?.end}, ${movie.seriesLength} серий`
                  : `${movie.year}, ${movie.movieLength} мин.`}
              </Text>
              <Text>
                {movie.countries[0].name} <MinusOutlined />{" "}
                {movie.genres[0]?.name}
              </Text>
              <Paragraph>{movie.shortDescription}</Paragraph>
            </Flex>
          </Col>
          <Col flex={2}>
            <Flex justify="flex-end">
              {movie.rating.kp ? (
                <MovieRating rating={movie.rating.kp} />
              ) : (
                <></>
              )}
            </Flex>
          </Col>
        </Row>
      </Card>
    </List.Item>
  );
};
