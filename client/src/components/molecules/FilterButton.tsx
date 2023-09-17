import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import FilterTitle from "../atoms/FilterTitle";
import FilterList from "./FilterList";

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
      <FilterTitle
        title={selectName}
        isOpen={isOpen}
        onClickOpen={onClickOpen}
        selectName={select}
      />
      <FilterList
        isOpen={isOpen}
        selectList={selectList}
        onClickSelect={onClickSelect}
      />
    </>
  );
};

export default FilterButton;
