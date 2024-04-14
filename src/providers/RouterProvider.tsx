import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { MoviePage } from "../pages/MoviePage";
import { ErrorPage } from "../pages/ErrorPage";
import { MyLayout } from "../components/ui/MyLayout";
import { RandomMoviePage } from "../pages/RandomMoviePage";
import { Protected } from "../components/business/Protected";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MyLayout>
        <HomePage />
      </MyLayout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "movie/:movieId",
    element: (
      <MyLayout>
        <MoviePage />
      </MyLayout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "movie/random",
    element: (
      <Protected>
        <MyLayout>
          <RandomMoviePage />
        </MyLayout>
      </Protected>
    ),
    errorElement: <ErrorPage />,
  },
]);

export function BrowserRouter() {
  return <RouterProvider router={router} />;
}
