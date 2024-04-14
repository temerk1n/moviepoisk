import { CSSProperties } from "react";

const imageScaleFactor: number = 0.4;

export const getSkeletonImageStyle = (screenWidth: number): CSSProperties => {
  return {
    width: screenWidth * imageScaleFactor,
    height: screenWidth * imageScaleFactor,
  };
};
