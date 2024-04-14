import { Rating } from "./Rating";
import { Genre } from "./Genre";
import { Poster } from "./Poster";
import { Country } from "./Country";
import { SeasonInfo } from "./SeasonInfo";

export type ReleaseYears = {
  start: number | null;
  end: number | null;
};

export type Movie = {
  id: number;
  name: string | null;
  alternativeName: string | null;
  shortDescription: string | null;
  ageRating: number | null;
  year: number | null;
  movieLength: number | null;
  rating: Rating;
  genres: Genre[];
  poster: Poster;
  countries: Country[];
  releaseYears: ReleaseYears[];
  isSeries: boolean;
  seasonsInfo: SeasonInfo[];
};

export type MovieKeys = keyof Movie;
