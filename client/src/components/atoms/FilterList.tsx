import React from "react";

interface FilterListProps {
  isOpen: boolean;
  selectList: TSelect[];
  onClickSelect: (value: string) => void;
}

export const FilterList = ({
  isOpen,
  selectList,
  onClickSelect,
}: FilterListProps) => {
  return (
    <>
      {isOpen && (
        <div className="bg-gray-100 border border-gray-300 mt-1 rounded-lg text-sm text-gray-900 w-full p-2.5">
          {selectList.map((option) => (
            <div
              key={option.value}
              className="hover:bg-gray-300 block"
              onClick={() => onClickSelect(option.name)}
            >
              {option.name}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default FilterList;
