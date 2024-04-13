import React, {
  CSSProperties,
  FC,
  useCallback,
  useEffect,
  useState,
} from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Select } from "antd";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/store";
import {
  resetFilters,
  setQuery,
  useFiltersSelector,
} from "../../store/filtersSlice";
import {
  addToHistory,
  useSearchHistorySelector,
} from "../../store/searchHistorySlice";
import { useDebounce } from "../../utils/hooks/useDebounce";

const selectStyle: CSSProperties = { flexGrow: 1 };

export const SearchMovieInput: FC = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const filters = useFiltersSelector();
  const searchHistory = useSearchHistorySelector();

  const [movieName, setMovieName] = useState("");
  const debouncedMovieName = useDebounce(movieName);

  useEffect(() => {
    if (debouncedMovieName) {
      dispatch(addToHistory(debouncedMovieName));
      dispatch(resetFilters());
      dispatch(setQuery(debouncedMovieName));
      navigate(`/?page=1&limit=10&movieName=${debouncedMovieName}`);
    }
  }, [debouncedMovieName, dispatch, navigate, searchHistory]);

  const onChange = useCallback(
    (value: string) => {
      setMovieName(value);
    },
    [setMovieName],
  );

  const onSearch = useCallback(
    (value: string) => {
      setMovieName(value);
    },
    [setMovieName],
  );

  const onClear = useCallback(() => dispatch(resetFilters()), [dispatch]);

  return (
    <Select
      style={selectStyle}
      placeholder="Фильмы, сериалы"
      value={filters.query}
      onChange={onChange}
      showSearch
      allowClear
      onClear={onClear}
      onSearch={onSearch}
      options={searchHistory.history.map((value) => {
        return { label: value, value: value };
      })}
      suffixIcon={<SearchOutlined />}
    />
  );
};
