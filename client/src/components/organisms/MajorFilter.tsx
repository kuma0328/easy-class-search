import React, { useState } from "react";
import TFilter from "src/types/Filter";
import SelectGenreBar from "../molecules/SelectGenreBar";

interface MajorFilterProps {
  id: string;
  filter: TFilter[];
}

export const MajorFilter = ({ id, filter }: MajorFilterProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <SelectGenreBar genre={id} onClick={onClick} />
      {isOpen ? (
        <div className="relative flex flex-row bg-gray-50 p-1">
          <select
            id={id}
            className="block w-full px-4 py-2 mt-1 border rounded-lg"
          >
            {filter.map((item, i) => (
              <option value={item.value} key={i}>
                {item.text}
              </option>
            ))}
          </select>
        </div>
      ) : null}
    </div>
  );
};

export default MajorFilter;
