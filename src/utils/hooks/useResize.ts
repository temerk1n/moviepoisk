import { useCallback, useEffect, useState } from "react";

export const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = useCallback((event: Event) => {
    const target = event.target as Window;
    setWidth(target.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return width;
};