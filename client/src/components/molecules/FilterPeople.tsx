import { Slider } from "@mui/material";
import React, { useState } from "react";
import FilterTitle from "../atoms/FilterTitle";

interface FilterPeopleProps {}
const valuetext = (value: number): string => {
  return `${value}人`;
};
export const FilterPeople = ({}: FilterPeopleProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const noSelect: string = "0人〜100人";
  const [select, setSelect] = useState<string>(noSelect);
  const onClickOpen = () => {
    setIsOpen(!isOpen);
  };

  const [value, setValue] = useState<number[]>([0, 100]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
    setSelect(`${value[0]}人〜${value[1]}人`);
  };
  return (
    <>
      <FilterTitle
        title="人数絞り込み"
        isOpen={isOpen}
        onClickOpen={onClickOpen}
        selectName={select}
      />
      {isOpen ? (
        <>
          <div className="mt-1 bg-gray-100 border border-gray-300 p-5 rounded-lg">
            <Slider
              getAriaLabel={() => "Temperature range"}
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
              color="secondary"
              min={0}
              max={500}
            />
          </div>
        </>
      ) : null}
    </>
  );
};

export default FilterPeople;
