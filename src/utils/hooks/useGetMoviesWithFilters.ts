import {
  useLazyGetMovieByNameQuery,
  useLazyGetMoviesQuery,
} from "../../store/movieApi";
import { useFiltersSelector } from "../../store/filtersSlice";
import { useEffect, useState } from "react";
import { LazyQueryTrigger } from "@reduxjs/toolkit/dist/query/react/buildHooks";

export const useGetMoviesWithFilters = () => {
  const filters = useFiltersSelector();
  const [currentRequest, setCurrentRequest] =
    useState<ReturnType<LazyQueryTrigger<any>>>();

  const [triggerByFilters, byFiltersResult] = useLazyGetMoviesQuery();

  const [triggerByName, byNameResult] = useLazyGetMovieByNameQuery();

  useEffect(() => {
    if (currentRequest) currentRequest.abort();
    if (filters.query) {
      setCurrentRequest(triggerByName(filters.query));
    } else {
      setCurrentRequest(triggerByFilters(filters));
    }
  }, [filters]);

  return filters.query ? byNameResult : byFiltersResult;
};
