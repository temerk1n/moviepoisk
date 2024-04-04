import {Rating} from "./Rating";
import {Genre} from "./Genre";
import {Poster} from "./Poster";

export type Movie = {
  id: number;
  type: string,
  name: string,
  alternativeName: string,
  shortDescription: string | null,
  year: number,
  movieLength: number,
  rating: Rating,
  genres: Genre[],
  poster: Poster,
}