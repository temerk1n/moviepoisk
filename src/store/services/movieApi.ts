import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
import { MovieResponse } from "../../types/MovieResponse";
import { ReviewsResponse } from "../../types/ReviewsResponse";

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
    getMovies: builder.query<MovieResponse, { page: string; limit: string }>({
      query: (queryParams) => {
        return { url: "/movie", params: queryParams };
      },
      keepUnusedDataFor: 5 * 60,
    }),
    getMovieByName: builder.query<
      MovieResponse,
      { page: string; limit: string }
    >({
      query: (queryParams) => {
        return { url: "/movie/search", params: queryParams };
      },
    }),
    getMovieById: builder.query({
      query: (movieId) => `/movie/${movieId}`,
      keepUnusedDataFor: 5 * 60,
    }),
    getReviewsByMovieId: builder.query<
      ReviewsResponse,
      { movieId: string | undefined; page: number }
    >({
      query: (queryParams) => {
        return { url: "/review", params: queryParams };
      },
      keepUnusedDataFor: 60,
    }),
  }),
});

export const {
  useGetMoviesQuery,
  useGetMovieByNameQuery,
  useGetMovieByIdQuery,
  useGetReviewsByMovieIdQuery,
} = movieApi;
