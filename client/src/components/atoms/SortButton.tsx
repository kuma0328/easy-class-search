import React from "react";
import sortByFilter from "src/static/data/sortByFilter";

interface SortButtonProps {
  text: string;
  changeParamOfSortBy: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const SortButton = ({ text, changeParamOfSortBy }: SortButtonProps) => {
  return (
    <>
      <select
        id="sortBy"
        className="border p-3 rounded-full hover:opacity-50"
        onChange={changeParamOfSortBy}
        value={text}
      >
        {sortByFilter.map((item, i) => (
          <option value={item.value} key={i}>
            {item.text}
          </option>
        ))}
      </select>
    </>
  );
};

export default SortButton;
