import { Movie } from "../../types/Movie";
import { Card, Flex, Image, List, Skeleton, Typography } from "antd";
import { Link } from "react-router-dom";
import { MovieRating } from "./MovieRating";
import { FC, memo } from "react";
import { MinusOutlined } from "@ant-design/icons";
import { useResize } from "../../utils/hooks/useResize";

const { Title, Text, Paragraph } = Typography;

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard: FC<MovieCardProps> = memo(({ movie }) => {
  const { width } = useResize();

  return (
    <List.Item key={movie.id}>
      <Card bordered={false}>
        <Flex gap="middle" wrap={"wrap"}>
          <Flex vertical>
            {movie.poster.previewUrl ? (
              <Image width={width * 0.1} src={movie.poster.previewUrl} />
            ) : (
              <>
                <Skeleton.Image style={{ width: width * 0.1 }} /> Нет постера
              </>
            )}
          </Flex>
          <Flex flex={1} wrap="wrap">
            <Flex gap="small" vertical align="flex-start">
              <Link to={`/movie/${movie.id}`}>
                <Title level={2} className="card-title">
                  {movie.name ? movie.name : movie.alternativeName}
                </Title>
              </Link>
              <Text>
                {movie.alternativeName ? `${movie.alternativeName}, ` : " "}
                {movie.isSeries
                  ? `${movie.releaseYears[0]?.start}-${movie.releaseYears[0]?.end}, ${movie.seasonsInfo ? movie.seasonsInfo.length + " сезонов" : ""}`
                  : `${movie.year}, ${movie.movieLength} мин.`}
              </Text>
              <Text>
                {movie.countries[0] ? (
                  <>
                    {movie.countries[0].name} <MinusOutlined />{" "}
                  </>
                ) : (
                  ""
                )}
                {movie.genres[0]?.name}
              </Text>
              <Paragraph>{movie.shortDescription}</Paragraph>
            </Flex>
          </Flex>
          <Flex wrap="wrap">
            <Flex justify="flex-end">
              {movie.rating.kp ? (
                <MovieRating rating={movie.rating.kp} />
              ) : (
                <></>
              )}
            </Flex>
          </Flex>
        </Flex>
      </Card>
    </List.Item>
  );
});
