import { MoviesQueryParams } from "../types/MoviesQueryParams";

export const getQueryParams = (filters: MoviesQueryParams): string => {
  return `${Object.entries(filters)
    .map(([filterName, filterValue]) => `${filterName}=${filterValue}`)
    .join("&")}`;
};
