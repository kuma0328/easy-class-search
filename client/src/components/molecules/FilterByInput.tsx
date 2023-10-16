import React, { useState } from "react";
import SelectGenreBar from "./SelectGenreBar";
import FormLarge from "../atoms/FormLarge";

interface FilterByInputProps {
  id: string;
}

export const FilterByInput = ({ id }: FilterByInputProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <SelectGenreBar genre={id} onClick={onClick} />
      {isOpen ? (
        <div className="relative flex flex-row bg-gray-50 p-1">
          <FormLarge />
        </div>
      ) : null}
    </div>
  );
};

export default FilterByInput;
