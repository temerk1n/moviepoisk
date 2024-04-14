import { useCallback, useState } from "react";

export const usePagination = (): [number, (page: number) => void] => {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  return [currentPage, onPageChange];
};
