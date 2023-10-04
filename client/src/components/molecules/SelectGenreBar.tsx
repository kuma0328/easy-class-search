import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface SelectGenreBarProps {
  genre: string;
}

export const SelectGenreBar = ({ genre }: SelectGenreBarProps) => {
  return (
    <>
      <div className="flex flex-row justify-between hover:bg-gray-200 bg-gray-50 border-b border-gray-300 text-gray-900 text-sm w-full p-2.5">
        <span className="flex items-center justify-center">{genre}</span>
        <ExpandMoreIcon />
      </div>
    </>
  );
};

export default SelectGenreBar;
