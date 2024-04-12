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

const baseQuery = fetchBaseQuery({
  baseUrl: "https://api.kinopoisk.dev/",
  prepareHeaders: (headers) => {
    headers.append("X-API-KEY", process.env.REACT_APP_API_TOKEN!);

    return headers;
  },
});

// TODO: change maxRetries to 2
const baseQueryWithRetry = retry(baseQuery, { maxRetries: 0 });

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: baseQueryWithRetry,

  endpoints: (builder) => ({
    getMovies: builder.query<MovieResponse, MoviesQueryParams>({
      query: (queryParams): FetchArgs => {
        const params: any = {
          page: queryParams.page,
          limit: queryParams.limit,
        };
        queryParams.options.forEach((filter) => {
          params[filter.name] = filter.value;
        });

        return { url: "/v1.4/movie", params };
      },
      keepUnusedDataFor: 5 * 60,
    }),
    getMovieByName: builder.query<MovieResponse, { movieName: string }>({
      query: (movieName) => {
        return { url: `/v1.4/movie/search`, params: { query: movieName } };
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
  useLazyGetMovieByNameQuery,
  useGetMovieByIdQuery,
  useGetReviewsByMovieIdQuery,
  useGetPostersByMovieIdQuery,
  useGetPossibleValuesQuery,
} = movieApi;
