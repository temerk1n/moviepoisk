import { useEffect } from "react";
import { addFilter, setPaginationParams } from "../../store/filtersSlice";
import { store } from "../../store/store";

export const useSearchParamsFilters = (
  searchParams: URLSearchParams,
  dispatch: typeof store.dispatch,
) => {
  useEffect(() => {
    if (searchParams.has("page") && searchParams.has("limit")) {
      dispatch(
        setPaginationParams({
          page: parseInt(searchParams.get("page")!),
          limit: parseInt(searchParams.get("limit")!),
        }),
      );
    }
    if (searchParams.has("genres.name"))
      dispatch(
        addFilter({
          name: "genres.name",
          value: searchParams.get("genres.name")!,
        }),
      );
    if (searchParams.has("year"))
      dispatch(addFilter({ name: "year", value: searchParams.get("year")! }));
    if (searchParams.has("ageRating"))
      dispatch(
        addFilter({ name: "ageRating", value: searchParams.get("ageRating")! }),
      );
    if (searchParams.has("countries.name"))
      dispatch(
        addFilter({
          name: "countries.name",
          value: searchParams.get("countries.name")!,
        }),
      );
  }, []);
};
