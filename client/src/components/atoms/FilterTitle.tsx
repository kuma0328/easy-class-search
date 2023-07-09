import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

interface FilterTitleProps {
  title: string;
  isOpen: boolean;
  onClickOpen: () => void;
  selectName: string;
}

export const FilterTitle = ({
  title,
  isOpen,
  onClickOpen,
  selectName,
}: FilterTitleProps) => {
  return (
    <>
      <div
        className="flex flex-row justify-between bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
        onClick={onClickOpen}
      >
        <span>{title}</span>
        <span>{selectName}</span>
        {isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </div>
    </>
  );
};

export default FilterTitle;
