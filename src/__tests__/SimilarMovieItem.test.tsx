import React from "react";
import { render, screen } from "@testing-library/react";
import { SimilarMovieItem } from "../components/ui/SimilarMovieItem";
import { Movie } from "../types/Movie";
import { MemoryRouter } from "react-router-dom";

const movieMock: Movie = {
  id: 1,
  name: "Sample Movie",
  alternativeName: "Alternative Sample Movie",
  shortDescription: "Sample description",
  ageRating: 12,
  year: 2021,
  movieLength: 120,
  rating: { kp: 7.5 },
  genres: [{ name: "Action" }],
  poster: {
    id: "1",
    previewUrl: "http://example.com/poster.jpg",
    url: "http://example.com/poster.jpg",
  },
  countries: [{ name: "USA" }],
  releaseYears: [{ start: 2020, end: 2022 }],
  isSeries: false,
  seasonsInfo: [],
};

const movieMock2: Movie = {
  id: 1,
  name: "",
  alternativeName: "Alternative Movie Title",
  shortDescription: "Sample description",
  ageRating: 12,
  year: 2021,
  movieLength: 120,
  rating: { kp: 7.5 },
  genres: [{ name: "Action" }],
  poster: {
    id: "1",
    previewUrl: "http://example.com/poster.jpg",
    url: "http://example.com/poster.jpg",
  },
  countries: [{ name: "USA" }],
  releaseYears: [{ start: 2020, end: 2022 }],
  isSeries: false,
  seasonsInfo: [],
};

describe("SimilarMovieItem", () => {
  it("renders SimilarMovieItem component with valid data", () => {
    const { container } = render(
      <MemoryRouter>
        <SimilarMovieItem movie={movieMock} />
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });

  it("renders SimilarMovieItem component without movie name", () => {
    render(
      <MemoryRouter>
        <SimilarMovieItem movie={movieMock2} />
      </MemoryRouter>,
    );
    screen.getByText("Alternative Movie Title");
  });
});
