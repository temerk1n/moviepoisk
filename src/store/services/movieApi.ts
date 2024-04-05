import {createApi, fetchBaseQuery, retry} from "@reduxjs/toolkit/query/react";
import {MovieResponse} from "../../types/MovieResponse";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_API_URL,
  prepareHeaders: (headers) => {
    headers.append('X-API-KEY', process.env.REACT_APP_API_TOKEN!);

    return headers;
  },
})

const baseQueryWithRetry = retry(baseQuery, {maxRetries: 0})

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: baseQueryWithRetry,

  endpoints: (builder) => ({
    getMovies: builder.query<MovieResponse, {page: string, limit: string}>({
      query: (queryParams) => {
        return {url: '/movie', params: queryParams};
      },
      keepUnusedDataFor: 5 * 60,
    }),
    getMovieById: builder.query({
      query: (movieId) => `movie/${movieId}`,
      keepUnusedDataFor: 5 * 60,
    })
  })
})

export const { useGetMoviesQuery, useGetMovieByIdQuery } = movieApi;
