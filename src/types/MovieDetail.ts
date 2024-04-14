import { Movie } from "./Movie";
import { Person } from "./Person";

export type MovieDetail = {
  description: string | null;
  similarMovies: Movie[];
  persons: Person[];
  slogan: string | null;
} & Movie;

export type MovieDetailKeys = keyof MovieDetail;
