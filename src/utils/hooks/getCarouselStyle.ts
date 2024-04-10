import { CSSProperties } from "react";
import { imageScaleFactor } from "../../constants";

export const getCarouselStyle = (screenWidth: number): CSSProperties => {
  return {
    width: screenWidth * imageScaleFactor,
  };
};
