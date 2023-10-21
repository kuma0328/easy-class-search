import React, { useState } from "react";
import SelectGenreBar from "./SelectGenreBar";
import FormPeople from "./FormPeople";

interface FilterByPeopleProps {
  id: string;
  changeParamOfPeopleMin: (event: React.ChangeEvent<HTMLInputElement>) => void;
  changeParamOfPeopleMax: (event: React.ChangeEvent<HTMLInputElement>) => void;
  minValue: number;
  maxValue: number;
}

export const FilterByPeople = ({
  id,
  changeParamOfPeopleMax,
  changeParamOfPeopleMin,
  minValue,
  maxValue,
}: FilterByPeopleProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <SelectGenreBar genre={id} onClick={onClick} />
      {isOpen ? (
        <div className="relative flex flex-row bg-gray-50 p-1">
          <div className="flex flex-row items-center">
            <input
              type="number"
              className="shadow appearance-none border rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={changeParamOfPeopleMin}
              value={minValue}
            />
            <div>以上</div>
            <input
              type="number"
              className="shadow appearance-none border rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={changeParamOfPeopleMax}
              value={maxValue}
            />
            <div>以下</div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default FilterByPeople;
