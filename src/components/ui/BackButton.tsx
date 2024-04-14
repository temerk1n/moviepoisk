import { FC, useCallback } from "react";
import { Button } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useFiltersSelector } from "../../store/filtersSlice";
import { getQueryParams } from "../../utils/getQueryParams";

export const BackButton: FC = () => {
  const navigate = useNavigate();
  const filters = useFiltersSelector();

  const onClick = useCallback(() => {
    navigate("/?" + getQueryParams(filters));
  }, [navigate, filters]);

  return (
    <Button icon={<ArrowLeftOutlined />} onClick={onClick}>
      Назад
    </Button>
  );
};