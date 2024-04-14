import { SelectProps } from "antd";

interface Option {
  name: string;
}

const formatLabel = (label: string) => {
  return label.charAt(0).toUpperCase() + label.slice(1);
};

const formatOption = (option: Option) => {
  return {
    label: formatLabel(option.name),
    value: option.name,
  };
};

export const mapOptions = (options: Option[]): SelectProps["options"] => {
  return options?.map(formatOption);
};
