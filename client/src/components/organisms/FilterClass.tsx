import React from "react";
import FilterButton from "../molecules/FilterButton";
import FilterPeople from "../molecules/FilterPeople";
import TimeTableList from "./TimeTableList";

interface FilterClassProps {}
const departmentList: TSelect[] = [
  {
    name: "法学部",
    value: "law",
  },
  {
    name: "商学部",
    value: "commerce",
  },
  {
    name: "経済学部",
    value: "economics",
  },
];
export const FilterClass = ({}: FilterClassProps) => {
  return (
    <>
      <div className=" bg-purple-100 p-5 rounded-lg">
        <div className="m-2">
          <FilterButton selectName="学部" selectList={departmentList} />
        </div>
        <div className="m-2">
          <FilterPeople />
        </div>
        <div className="m-2">
          <TimeTableList />
        </div>
      </div>
    </>
  );
};

export default FilterClass;
