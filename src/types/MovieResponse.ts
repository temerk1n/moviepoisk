import { Movie } from "./Movie";

export type MovieResponse = {
  docs: Movie[];
  limit: number;
  page: number;
  pages: number;
  total: number;
};
