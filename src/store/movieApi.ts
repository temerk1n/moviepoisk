import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
import { MovieResponse } from "../types/MovieResponse";
import { ReviewsResponse } from "../types/ReviewsResponse";
import { PostersResponse } from "../types/PostersResponse";
import { MoviesQueryParams } from "../types/MoviesQueryParams";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_API_URL,
  prepareHeaders: (headers) => {
    headers.append("X-API-KEY", process.env.REACT_APP_API_TOKEN!);

    return headers;
  },
});

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 2 });

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: baseQueryWithRetry,

  endpoints: (builder) => ({
    getMovies: builder.query<MovieResponse, MoviesQueryParams>({
      query: (queryParams) => {
        return { url: "/v1.4/movie", params: queryParams };
      },
      keepUnusedDataFor: 5 * 60,
    }),
    getMovieById: builder.query({
      query: (movieId) => `/v1.4/movie/${movieId}`,
      keepUnusedDataFor: 5 * 60,
    }),
    getReviewsByMovieId: builder.query<
      ReviewsResponse,
      { movieId: string | undefined; page: number }
    >({
      query: (queryParams) => {
        return { url: "/v1.4/review", params: queryParams };
      },
      keepUnusedDataFor: 60,
    }),
    getPostersByMovieId: builder.query<
      PostersResponse,
      { movieId: string | undefined; type: string | undefined }
    >({
      query: (queryParams) => {
        return { url: "/v1.4/image", params: queryParams };
      },
    }),
    getPossibleValues: builder.query({
      query: (field) => {
        return { url: "/v1/movie/possible-values-by-field", params: { field } };
      },
      keepUnusedDataFor: 10 * 60,
    }),
  }),
});

export const {
  useGetMoviesQuery,
  useGetMovieByIdQuery,
  useGetReviewsByMovieIdQuery,
  useGetPostersByMovieIdQuery,
  useGetPossibleValuesQuery,
} = movieApi;
