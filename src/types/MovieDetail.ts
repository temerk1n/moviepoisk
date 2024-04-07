import { Movie } from "./Movie";
import { Person } from "./Person";

export type MovieDetail = {
  description: string;
  similarMovies: Movie[];
  persons: Person[];
  slogan: string;
} & Movie;
