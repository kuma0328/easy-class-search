import React, { useState } from "react";
import TimeCheckBox from "../atoms/TimeCheckBox";
interface FilterTimeTableProps {
  day: string;
}

export const FilterTimeTable = ({ day }: FilterTimeTableProps) => {
  const lectureTime: string[] = [
    "1限",
    "2限",
    "3限",
    "4限",
    "5限",
    "6限",
    "7限",
    "集中",
  ];

  return (
    <>
      <div className="flex flex-col w-1/6">
        <span className="h-16 bg-gray-400 flex items-center justify-center border">
          {day}
        </span>
        {lectureTime.map((time) => (
          <TimeCheckBox text={time} key={time} />
        ))}
      </div>
    </>
  );
};

export default FilterTimeTable;
