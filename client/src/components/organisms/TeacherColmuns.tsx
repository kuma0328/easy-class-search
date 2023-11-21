import React from "react";
import majorFilter from "src/static/data/majorFilter";

interface TeacherColmunsProps {
  majorText: string;
  changeParamOfMajor: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const TeacherColmuns = ({
  majorText,
  changeParamOfMajor,
}: TeacherColmunsProps) => {
  return (
    <>
      <div className=" bg-gray-50 border p-3 border-b-2">
        <div className="p-3 right-0 flex flex-row-reverse">
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
