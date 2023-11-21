import React from "react";
import SortButton from "../atoms/SortButton";
import { FilterButton } from "../atoms/FilterButton";
import { Checkbox } from "@mui/material";

interface SortColmunsProps {
  text: string;
  onFilterClick: () => void;
  changeParamOfSortBy: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  changeParamOfFavorite: () => void;
  isFavorite: boolean;
}

export const SortColmuns = ({
  text,
  onFilterClick,
  changeParamOfSortBy,
  changeParamOfFavorite,
  isFavorite,
}: SortColmunsProps) => {
  return (
    <>
      <div className="bg-gray-50 border p-3 border-b-2 flex justify-between items-center">
        <div className="flex items-center">
          <span>お気に入り</span>
          <Checkbox
            color="secondary"
            checked={isFavorite}
            onChange={changeParamOfFavorite}
          />
        </div>
        <div className="flex items-center space-x-2">
          <SortButton text={text} changeParamOfSortBy={changeParamOfSortBy} />
          <FilterButton onFilterClick={onFilterClick} />
        </div>
      </div>
    </>
  );
};

export default SortColmuns;
