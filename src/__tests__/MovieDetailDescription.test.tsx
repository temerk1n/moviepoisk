import React from "react";
import { render } from "@testing-library/react";
import { MovieDetailDescription } from "../components/ui/MovieDetailDescription";
import { MovieDetail } from "../types/MovieDetail";

const movieDetailMock: MovieDetail = {
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
  description: "Test Description",
  similarMovies: [],
  persons: [{ id: 1, profession: "режиссеры", name: "Director A" }],
  slogan: "Test Slogan",
};

describe("MovieDetailDescription Component", () => {
  it("renders with valid data", () => {
    const { container } = render(
      <MovieDetailDescription
        showSkeleton={false}
        isError={false}
        movie={movieDetailMock}
      />,
    );
    expect(container).toMatchSnapshot();
  });

  it("renders skeleton when isError is true", () => {
    const { container } = render(
      <MovieDetailDescription
        showSkeleton={true}
        isError={true}
        movie={movieDetailMock}
      />,
    );
    expect(container).toMatchSnapshot();
  });

  it("renders skeleton when showSkeleton is true", () => {
    const { container } = render(
      <MovieDetailDescription
        showSkeleton={true}
        isError={false}
        movie={movieDetailMock}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
