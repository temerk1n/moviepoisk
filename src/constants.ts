import { SelectProps } from "antd";
import { MovieKeys } from "./types/Movie";
import { MovieDetailKeys } from "./types/MovieDetail";

export const imageScaleFactor: number = 0.3;

export const getAllMoviesSelectFields: MovieKeys[] = [
  "id",
  "name",
  "alternativeName",
  "shortDescription",
  "ageRating",
  "year",
  "movieLength",
  "rating",
  "genres",
  "poster",
  "countries",
  "releaseYears",
  "isSeries",
  "seasonsInfo",
];

export const getMovieDetailFields: MovieDetailKeys[] = [
  ...getAllMoviesSelectFields,
  "description",
  "similarMovies",
  "persons",
  "slogan",
];

const calculateYearOptions = (): SelectProps["options"] => {
  const result: SelectProps["options"] = [];
  const startYear: number = 1900;
  const endYear: number = new Date().getFullYear();
  for (let i = endYear; i >= startYear; i--) {
    result.push({ label: i, value: i });
  }
  return result;
};

export const yearOptions: SelectProps["options"] = calculateYearOptions();

export const ageRatingOptions: SelectProps["options"] = [
  { label: "0+", value: "0" },
  { label: "6+", value: "6" },
  { label: "12+", value: "12" },
  { label: "16+", value: "16" },
  { label: "18+", value: "18" },
];
