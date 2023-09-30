import React from "react";
import TFilter from "src/types/Filter";

interface MajorFilterProps {
  id: string;
  filter: TFilter[];
}

export const MajorFilter = ({ id, filter }: MajorFilterProps) => {
  return (
    <div className="relative flex flex-row">
      <select id={id} className="block w-full px-4 py-2 mt-1 border rounded-lg">
        {filter.map((item, i) => (
          <option value={item.value} key={i}>
            {item.text}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MajorFilter;
