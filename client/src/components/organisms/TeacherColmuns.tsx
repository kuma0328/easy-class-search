import React from "react";
import majorFilter from "src/static/data/majorFilter";
import SortButton from "../atoms/SortButton";

interface TeacherColmunsProps {
  sortText: string;
  majorText: string;
  changeParamOfSortBy: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  changeParamOfMajor: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const TeacherColmuns = ({
  sortText,
  majorText,
  changeParamOfMajor,
  changeParamOfSortBy,
}: TeacherColmunsProps) => {
  return (
    <>
      <div className="w-full bg-gray-50 border p-3 border-b-2">
        <div className="p-3 right-0 flex flex-row-reverse">
          <SortButton
            text={sortText}
            changeParamOfSortBy={changeParamOfSortBy}
          />
          <div className="pr-2"></div>
          <select
            id="major"
            className="border p-3 rounded-full hover:opacity-50"
            onChange={changeParamOfMajor}
            value={majorText}
          >
            {majorFilter.map((item, i) => (
              <option value={item.value} key={i}>
                {item.text}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default TeacherColmuns;
