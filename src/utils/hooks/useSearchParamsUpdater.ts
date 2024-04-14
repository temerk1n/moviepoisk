import { useFiltersSelector } from "../../store/filtersSlice";
import { useEffect } from "react";
import { getQueryParams } from "../getQueryParams";
import { useNavigate } from "react-router-dom";

export const useSearchParamsUpdater = () => {
  const navigate = useNavigate();
  const filters = useFiltersSelector();

  useEffect(() => {
    const searchParams = new URLSearchParams(getQueryParams(filters));

    navigate({ search: searchParams.toString() }, { replace: true });
  }, [filters, navigate]);
};
