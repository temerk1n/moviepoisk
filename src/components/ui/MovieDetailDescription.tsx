import { Skeleton, Typography } from "antd";
import { MovieDetail } from "../../types/MovieDetail";
import { MovieDetailDescriptionItem } from "./MovieDetailDescriptionItem";

const { Title, Paragraph } = Typography;

interface MovieDetailDescriptionProps {
  showSkeleton: boolean;
  isError: boolean;
  movie: MovieDetail;
}

export const MovieDetailDescription = ({
  showSkeleton,
  isError,
  movie,
}: MovieDetailDescriptionProps) => {
  return (
    <Skeleton active={!isError} loading={showSkeleton} paragraph={{ rows: 14 }}>
      <Title level={2}>
        {movie?.name} ({movie?.year})
      </Title>
      <Title level={4} type="secondary">
        {movie?.alternativeName ? `${movie.alternativeName}, ` : ""}
        {movie?.ageRating ? `${movie.ageRating}+` : "Нет возрастного рейтинга"}
      </Title>
      <Title level={3}>Описание</Title>
      <Paragraph>
        {movie?.description ? movie.description : "Нет описания"}
      </Paragraph>
      <Title
        level={3}
      >{`О ${movie?.isSeries ? "сериале" : "фильме"}`}</Title>
      <MovieDetailDescriptionItem
        title="Год производства"
        description={movie?.year}
      />
      {!movie?.isSeries && (
        <MovieDetailDescriptionItem
          title="Продолжительность"
          description={`${movie?.movieLength} мин.`}
        />
      )}
      <MovieDetailDescriptionItem
        title="Жанр"
        description={movie?.genres
          .map(
            (genre) => genre.name.charAt(0).toUpperCase() + genre.name.slice(1),
          )
          .join(" ")}
      />
      <MovieDetailDescriptionItem title="Слоган" description={movie?.slogan} />
      <MovieDetailDescriptionItem
        title="Режиссеры"
        description={movie?.persons
          .filter((person) => person.profession === "режиссеры")
          .map((director) => director.name)
          .join(", ")}
      />
    </Skeleton>
  );
};
