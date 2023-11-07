import React, { useState } from "react";
import SelectGenreBar from "./SelectGenreBar";

interface FilterByInputProps {
  id: string;
  changeParamOfCode: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export const FilterByInput = ({
  id,
  changeParamOfCode,
  value,
}: FilterByInputProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <SelectGenreBar genre={id} onClick={onClick} />
      {isOpen ? (
        <div className="relative flex flex-row bg-gray-50 p-1">
          <input
            type="number"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={value}
            onChange={changeParamOfCode}
          />
        </div>
      ) : null}
    </div>
  );
};

export default FilterByInput;
