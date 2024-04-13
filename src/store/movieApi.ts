import {
  createApi,
  FetchArgs,
  fetchBaseQuery,
  retry,
} from "@reduxjs/toolkit/query/react";
import { MovieResponse } from "../types/MovieResponse";
import { ReviewsResponse } from "../types/ReviewsResponse";
import { PostersResponse } from "../types/PostersResponse";
import { MoviesQueryParams } from "../types/MoviesQueryParams";
import { getAllMoviesSelectFields, getMovieDetailFields } from "../constants";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://api.kinopoisk.dev/",
  prepareHeaders: (headers) => {
    headers.append("X-API-KEY", process.env.REACT_APP_TOKEN!);

    return headers;
  },
});

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 2 });

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: baseQueryWithRetry,

  endpoints: (builder) => ({
    getMovies: builder.query<MovieResponse, MoviesQueryParams>({
      query: (queryParams): FetchArgs => {
        const params: URLSearchParams = new URLSearchParams();
        params.append("page", queryParams.page.toString());
        params.append("limit", queryParams.limit.toString());
        if (queryParams.genre) params.append("genres.name", queryParams.genre);
        if (queryParams.ageRating)
          params.append("ageRating", queryParams.ageRating);
        if (queryParams.year) params.append("year", queryParams.year);
        if (queryParams.query) params.append("query", queryParams.query);
        for (const field of getAllMoviesSelectFields)
          params.append("selectFields", field);
        return { url: "/v1.4/movie", params };
      },
      keepUnusedDataFor: 5 * 60,
    }),
    getMovieByName: builder.query<MovieResponse, string>({
      query: (movieName) => {
        const params = new URLSearchParams(movieName);
        for (const field of getMovieDetailFields)
          params.append("selectFields", field);
        return { url: `/v1.4/movie/search`, params };
      },
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
  useLazyGetMoviesQuery,
  useLazyGetMovieByNameQuery,
  useGetMovieByIdQuery,
  useGetReviewsByMovieIdQuery,
  useGetPostersByMovieIdQuery,
  useGetPossibleValuesQuery,
} = movieApi;
