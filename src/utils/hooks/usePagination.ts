import { useState } from "react";

export const usePagination = (): [number, (page: number) => void] => {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  return [currentPage, onPageChange];
};
