import React, { useState } from "react";
import SelectGenreBar from "./SelectGenreBar";
import FormPeople from "./FormPeople";

interface FilterByPeopleProps {
  id: string;
}

export const FilterByPeople = ({ id }: FilterByPeopleProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <SelectGenreBar genre={id} onClick={onClick} />
      {isOpen ? (
        <div className="relative flex flex-row bg-gray-50 p-1">
          <FormPeople />
        </div>
      ) : null}
    </div>
  );
};

export default FilterByPeople;
