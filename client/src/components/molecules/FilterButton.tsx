import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

interface FilterButtonProps {
  selectName: string;
  selectList: TSelect[];
}

export const FilterButton = ({ selectName, selectList }: FilterButtonProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const noSelect: string = "指定なし";
  const [select, setSelect] = useState<string>(noSelect);
  const onClickOpen = () => {
    setIsOpen(!isOpen);
  };
  const onClickSelect = (value: string) => {
    setSelect(value);
  };
  return (
    <>
      <div
        className="flex flex-row justify-between bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
        onClick={onClickOpen}
      >
        <span>{selectName}</span>
        <span>{select}</span>
        {isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </div>
      {isOpen && (
        <div className="bg-gray-100 border border-gray-300 mt-1 rounded-lg text-sm text-gray-900 w-full p-2.5">
          {selectList.map((option) => (
            <div
              key={option.value}
              className="hover:bg-gray-300 block"
              onClick={() => onClickSelect(option.name)}
            >
              {option.name}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default FilterButton;
