export type FilterName =
  | "year"
  | "genres.name"
  | "countries.name"
  | "ageRating";

export type Filter = {
  name: FilterName;
  value: string;
};
