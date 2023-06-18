import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

interface FilterButtonProps {
  selectName: string;
  selectList: TSelect[];
}

export const FilterButton = ({ selectName, selectList }: FilterButtonProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex flex-row">
        <div>{selectName}</div>
        <button onClick={onClick}>
          {isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </button>
      </div>
      {isOpen &&
        selectList.map((option) => <div key={option.value}>{option.name}</div>)}
    </>
  );
};

export default FilterButton;
