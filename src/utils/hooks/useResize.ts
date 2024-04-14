import { useEffect, useState } from "react";

const SCREEN_SM = 380;
const SCREEN_MD = 768;
const SCREEN_LG = 992;

export const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = (event: Event) => {
    const target = event.target as Window;
    setWidth(target.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    width,
    isScreenSm: width >= SCREEN_SM,
    isScreenMd: width >= SCREEN_MD,
    isScreenLg: width >= SCREEN_LG,
  };
};
