import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
interface FilterMoreProps {}

export const FilterMore = ({}: FilterMoreProps) => {
  return (
    <>
      <div className="flex flex-row bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5">
        <ExpandMoreIcon />
        <span className="flex items-center justify-center">もっと絞り込む</span>
      </div>
    </>
  );
};

export default FilterMore;
