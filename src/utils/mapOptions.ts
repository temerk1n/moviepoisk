import { PossibleFilterField } from "../types/PossibleFilterField";
import { SelectProps } from "antd";

export const mapOptions = (
  options: PossibleFilterField[],
): SelectProps["options"] => {
  return options?.map((option) => {
    return {
      label: option.name.charAt(0).toUpperCase() + option.name.slice(1),
      value: option.slug,
    };
  });
};