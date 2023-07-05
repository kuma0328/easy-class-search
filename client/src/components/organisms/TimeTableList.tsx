import React from "react";
import FilterTimeTable from "../molecules/FilterTimeTable";

interface TimeTableListProps {}

export const TimeTableList = ({}: TimeTableListProps) => {
  const daysOfWeek = [
    "月曜日",
    "火曜日",
    "水曜日",
    "木曜日",
    "金曜日",
    "土曜日",
    "日曜日",
  ];
  return (
    <>
      <div className="flex flex-row">
        {daysOfWeek.map((day) => (
          <FilterTimeTable day={day} key={day} />
        ))}
      </div>
    </>
  );
};

export default TimeTableList;
