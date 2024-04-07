import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "../pages/HomePage/HomePage";
import { MoviePage } from "../pages/MoviePage/MoviePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "movie/:movieId",
    element: <MoviePage />,
  },
]);

export function BrowserRouter() {
  return <RouterProvider router={router} />;
}
