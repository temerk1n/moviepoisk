export type MoviesQueryParams = {
  page: number;
  limit: number;
  genre?: string;
  year?: number;
  country?: string;
  ageRating?: number;
};
