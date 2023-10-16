import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface SelectGenreBarProps {
  genre: string;
  onClick: () => void;
}

export const SelectGenreBar = ({ genre, onClick }: SelectGenreBarProps) => {
  return (
    <>
      <div
        className="flex flex-row justify-between hover:bg-gray-200 bg-gray-50 border-b border-gray-300 text-gray-900 text-sm p-2.5"
        onClick={onClick}
      >
        <span className="flex items-center justify-center">{genre}</span>
        <ExpandMoreIcon />
      </div>
    </>
  );
};

export default SelectGenreBar;
