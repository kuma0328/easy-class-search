import React, { useState } from "react";
import SelectGenreBar from "./SelectGenreBar";

interface FilterByTeacherProps {
  id: string;
  changeParamOfTeacher: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export const FilterByTeacher = ({
  id,
  changeParamOfTeacher,
  value,
}: FilterByTeacherProps) => {
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
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={value}
            onChange={changeParamOfTeacher}
          />
        </div>
      ) : null}
    </div>
  );
};

export default FilterByTeacher;
