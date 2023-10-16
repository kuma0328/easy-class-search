import React, { useState } from "react";
import SelectGenreBar from "./SelectGenreBar";
import FormTime from "./FormTime";

interface FilterByTimeProps {
  id: string;
}

export const FilterByTime = ({ id }: FilterByTimeProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <SelectGenreBar genre={id} onClick={onClick} />
      {isOpen ? (
        <div className="relative flex flex-row bg-gray-50 p-1">
          <FormTime />
        </div>
      ) : null}
    </div>
  );
};

export default FilterByTime;
