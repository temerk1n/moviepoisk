import {
  useLazyGetMovieByNameQuery,
  useLazyGetMoviesQuery,
} from "../../store/movieApi";
import { useFiltersSelector } from "../../store/filtersSlice";
import { useEffect } from "react";

export const useGetMoviesWithFilters = () => {
  const filters = useFiltersSelector();

  const [triggerByFilters, byFiltersResult] = useLazyGetMoviesQuery();

  const [triggerByName, byNameResult] = useLazyGetMovieByNameQuery();

  useEffect(() => {
    if (filters.query !== undefined) {
      // setSkipRequest(true);
      triggerByName(filters.query);
    } else {
      // setSkipRequest(false);
      triggerByFilters(filters);
    }
  }, [filters.query]);

  if (filters.query) return byNameResult;
  else return byFiltersResult;
};