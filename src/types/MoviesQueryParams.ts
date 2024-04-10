import { Filter } from "./Filter";
import { PaginationParams } from "./PaginationParams";

export type MoviesQueryParams = PaginationParams & {
  options: Filter[];
};
