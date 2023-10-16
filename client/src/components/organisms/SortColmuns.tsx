import React from "react";
import SortButton from "../atoms/SortButton";
import { FilterButton } from "../atoms/FilterButton";

interface SortColmunsProps {
  text: string;
  onFilterClick: () => void;
}

export const SortColmuns = ({ text, onFilterClick }: SortColmunsProps) => {
  return (
    <>
      <div className="w-full bg-gray-50 border p-3">
        <div className="p-3 right-0 flex flex-row-reverse">
          <SortButton text={text} />
          <div className="pr-2"></div>
          <FilterButton onFilterClick={onFilterClick} />
        </div>
      </div>
    </>
  );
};

export default SortColmuns;
