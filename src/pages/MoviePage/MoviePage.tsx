import {Layout} from "antd";
import "./MoviePage.css"
import {MyHeader} from "../../components/ui/Header/MyHeader";
import {useGetMovieByIdQuery} from "../../store/services/movieApi";
import {useParams} from "react-router-dom";
import {MovieDetailCard} from "../../components/ui/MovieDetailCard/MovieDetailCard";

const {Content} = Layout;

export const MoviePage = () => {
  const {movieId} = useParams();
  const {data, isFetching, isError} = useGetMovieByIdQuery(movieId);

  if (isFetching) return <div>Loading...</div>
  if (isError) return <div>Error</div>

  return (
    <Layout>
        <MyHeader onSearchChange={() => console.log(1)} />
        <Content className="content">
          <MovieDetailCard movie={data}/>
        </Content>
    </Layout>
  )
}