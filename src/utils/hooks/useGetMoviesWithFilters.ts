import { useFiltersSelector } from "../../store/filtersSlice";
import { useEffect, useState } from "react";
import { LazyQueryTrigger } from "@reduxjs/toolkit/dist/query/react/buildHooks";

export const useGetMoviesWithFilters = (
  triggerByFilters: LazyQueryTrigger<any>,
  triggerByName: LazyQueryTrigger<any>,
): boolean => {
  const filters = useFiltersSelector();
  const [isSearchByFilters, setIsSearchByFilters] = useState<boolean>(
    !filters.query,
  );

  useEffect(() => {
    let request: ReturnType<LazyQueryTrigger<any>>;
    if (filters.query) {
      setIsSearchByFilters(false);
      request = triggerByName(filters.query);
    } else {
      setIsSearchByFilters(true);
      request = triggerByFilters(filters, true);
    }
    return () => request.abort();
  }, [
    filters.query,
    filters.page,
    filters.limit,
    filters.year,
    filters.country,
    filters.ageRating,
    filters.genre,
  ]);

  return isSearchByFilters;
};
