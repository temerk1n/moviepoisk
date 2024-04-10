import { SelectProps } from "antd";

export const mapOptions = (
  options: { name: string }[],
): SelectProps["options"] => {
  return options?.map((option) => {
    return {
      label: option.name.charAt(0).toUpperCase() + option.name.slice(1),
      value: option.name,
    };
  });
};
