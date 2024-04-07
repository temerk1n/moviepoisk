import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { MoviePage } from "../pages/MoviePage";
import { ErrorPage } from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "movie/:movieId",
    element: <MoviePage />,
    errorElement: <ErrorPage />,
  },
]);

export function BrowserRouter() {
  return <RouterProvider router={router} />;
}
