import React from "react";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
interface FilterButtonProps {}

export const FilterButton = ({}: FilterButtonProps) => {
  return (
    <>
      <button className="border p-3 rounded-full">
        <FilterAltIcon />
        <span>絞り込み</span>
      </button>
    </>
  );
};

export default FilterButton;
