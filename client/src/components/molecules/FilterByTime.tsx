import React, { useState } from "react";
import SelectGenreBar from "./SelectGenreBar";
import FormTime from "./FormTime";

interface FilterByTimeProps {
  id: string;
  addTime: (newTime: string) => void;
  removeTime: (timeToRemove: string) => void;
  selectedTimes: string[];
}

export const FilterByTime = ({
  id,
  addTime,
  removeTime,
  selectedTimes,
}: FilterByTimeProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <SelectGenreBar genre={id} onClick={onClick} />
      {isOpen ? (
        <div className="relative flex flex-row bg-gray-50 p-1">
          <FormTime
            addTime={addTime}
            removeTime={removeTime}
            selectedTimes={selectedTimes}
          />
        </div>
      ) : null}
    </div>
  );
};

export default FilterByTime;
