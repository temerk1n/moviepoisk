import {Skeleton, Typography} from "antd";
import {MovieDetail} from "../../../types/MovieDetail";

interface DescriptionItemProps {
  title: string,
  description: string | number,
}

const DescriptionItem = ({title, description}: DescriptionItemProps) => {
  return (
    <>
      <Typography.Text strong>{title}</Typography.Text>
      <Typography.Text>{description}</Typography.Text>
    </>
  )
}

interface MovieDetailDescriptionProps {
  showSkeleton: boolean,
  isError: boolean,
  movie: MovieDetail,
}

export const MovieDetailDescription = ({showSkeleton, isError, movie}: MovieDetailDescriptionProps) => {
  return (
    <Skeleton active={!isError} loading={showSkeleton} paragraph={{ rows: 14 }}>
      <Typography.Title level={2}>{movie?.name} ({movie?.year})</Typography.Title>
      <Typography.Title level={4} type="secondary">
        {movie?.alternativeName ? `${movie.alternativeName}, ` : ""}
        {movie?.ageRating ? `${movie.ageRating}+` : "Нет возрастного рейтинга"}
      </Typography.Title>
      <Typography.Title level={3}>Описание</Typography.Title>
      <Typography.Paragraph>{movie?.description ? movie.description : "Нет описания"}</Typography.Paragraph>
      <Typography.Title level={3}>{`О ${movie?.type === 'movie' ? "фильме" : "сериале"}`}</Typography.Title>
      <DescriptionItem title="Год производства" description={movie?.year} />
      <DescriptionItem title="Продолжительность" description={`${movie?.movieLength} мин.`} />
      <DescriptionItem title="Жанр" description={movie?.genres.map(genre => genre.name.charAt(0).toUpperCase() + genre.name.slice(1)).join(' ')} />
      <DescriptionItem title="Слоган" description={movie?.slogan} />
      <DescriptionItem
        title="Режиссеры"
        description={movie?.persons.filter(person => person.profession === "режиссеры").map(director => director.name).join(', ')}
      />
    </Skeleton>
  )
}