export type FilterName = "year" | "genre" | "country" | "ageRating";

export type Filter = {
  name: FilterName;
  value: string;
};
