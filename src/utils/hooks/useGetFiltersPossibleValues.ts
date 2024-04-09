import { useGetPossibleValuesQuery } from "../../store/movieApi";

export const useGetFiltersPossibleValues = () => {
  const { data: countries, isFetching: isCountriesFetching } =
    useGetPossibleValuesQuery("countries.name");
  const { data: genres, isFetching: isGenresFetching } =
    useGetPossibleValuesQuery("genres.name");

  return { countries, isCountriesFetching, genres, isGenresFetching };
};
