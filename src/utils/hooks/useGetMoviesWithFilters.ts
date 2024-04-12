import {useLazyGetMovieByNameQuery, useLazyGetMoviesQuery,} from "../../store/movieApi";
import {useFiltersSelector} from "../../store/filtersSlice";
import {useEffect} from "react";

export const useGetMoviesWithFilters = () => {
  const filters = useFiltersSelector();

  const [triggerByFilters, byFiltersResult] = useLazyGetMoviesQuery();

  const [triggerByName, byNameResult] = useLazyGetMovieByNameQuery();

  useEffect(() => {
    if (filters.query) {
      triggerByName(filters.query);
    } else {
      triggerByFilters(filters);
    }
  }, [filters]);

  if (filters.query) return byNameResult;
  else return byFiltersResult;
};