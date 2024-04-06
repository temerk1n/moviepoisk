import {Movie} from "./Movie";

export type MovieDetail = {
  similarMovies: Movie[],
} & Movie;