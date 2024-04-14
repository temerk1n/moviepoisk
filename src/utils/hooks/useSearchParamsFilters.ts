import { useEffect } from "react";
import {
  addFilter,
  setPaginationParams,
  setQuery,
} from "../../store/filtersSlice";
import { useLocation } from "react-router-dom";
import { useAppDispatch } from "../../store/store";

export const useSearchParamsFilters = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);

    if (searchParams.has("query")) {
      dispatch(setQuery(searchParams.get("query")!));
    }

    if (searchParams.has("page") && searchParams.has("limit")) {
      dispatch(
        setPaginationParams({
          page: parseInt(searchParams.get("page")!),
          limit: parseInt(searchParams.get("limit")!),
        }),
      );
    }
    if (searchParams.has("genre"))
      dispatch(
        addFilter({
          name: "genre",
          value: searchParams.get("genre")!,
        }),
      );
    if (searchParams.has("year"))
      dispatch(addFilter({ name: "year", value: searchParams.get("year")! }));
    if (searchParams.has("ageRating"))
      dispatch(
        addFilter({ name: "ageRating", value: searchParams.get("ageRating")! }),
      );
    if (searchParams.has("country"))
      dispatch(
        addFilter({
          name: "country",
          value: searchParams.get("country")!,
        }),
      );
  }, [dispatch, location.search]);
};
