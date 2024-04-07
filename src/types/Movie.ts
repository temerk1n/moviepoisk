import { Rating } from "./Rating";
import { Genre } from "./Genre";
import { Poster } from "./Poster";
import { Country } from "./Country";

export type Movie = {
  id: number;
  type: string;
  name: string;
  alternativeName: string;
  shortDescription: string | null;
  ageRating: number;
  year: number;
  movieLength: number;
  rating: Rating;
  genres: Genre[];
  poster: Poster;
  countries: Country[];
};
