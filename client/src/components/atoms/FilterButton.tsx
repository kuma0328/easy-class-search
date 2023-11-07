import React from "react";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
interface FilterButtonProps {
  onFilterClick: () => void;
}

export const FilterButton = ({ onFilterClick }: FilterButtonProps) => {
  return (
    <>
      <button
        className="border p-3 rounded-full hover:opacity-50 bg-white"
        onClick={onFilterClick}
      >
        <FilterAltIcon />
        <span>絞り込み</span>
      </button>
    </>
  );
};

export default FilterButton;
