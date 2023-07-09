import React from "react";
import FilterButton from "../molecules/FilterButton";
import FilterPeople from "../molecules/FilterPeople";
import TimeTableList from "../organisms/TimeTableList";

interface FilterPageProps {}
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
export const FilterPage = ({}: FilterPageProps) => {
  return (
    <>
      <div>
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

export default FilterPage;
