import { SelectProps } from "antd";

export const imageScaleFactor: number = 0.4;

const calculateYearOptions = (): SelectProps["options"] => {
  const result: SelectProps["options"] = [];
  const startYear: number = 1900;
  const endYear: number = new Date().getFullYear();
  for (let i = endYear; i >= startYear; i--) {
    result.push({ label: i, value: i });
  }
  return result;
};

export const yearOptions: SelectProps["options"] = calculateYearOptions();

export const ageRatingOptions: SelectProps["options"] = [
  { label: "0+", value: "0" },
  { label: "6+", value: "6" },
  { label: "12+", value: "12" },
  { label: "16+", value: "16" },
  { label: "18+", value: "18" },
];
