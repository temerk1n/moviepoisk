import {Layout} from "antd";
import "./MoviePage.css"
import {MyHeader} from "../../components/ui/MyHeader";
import {useParams} from "react-router-dom";
import {MovieDetailCard} from "../../components/logic/MovieDetailCard/MovieDetailCard";
import {useGetMovieByIdQuery} from "../../store/services/movieApi";
import {ErrorAlert} from "../../components/ui/ErrorAlert";

const {Content} = Layout;

export const MoviePage = () => {
  const {movieId} = useParams();

  const {data: movie, isFetching, isError} = useGetMovieByIdQuery(movieId);

  return (
    <Layout>
        <MyHeader onSearchChange={() => console.log('search')} />
        <Content className="content">
          <MovieDetailCard movie={movie} isFetching={isFetching} isError={isError} />
          <ErrorAlert isError={isError} />
        </Content>
    </Layout>
  )
}