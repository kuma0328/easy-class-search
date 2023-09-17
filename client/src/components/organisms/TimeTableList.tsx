import React, { useState } from "react";
import FilterTimeTable from "../molecules/FilterTimeTable";
import FilterTitle from "../atoms/FilterTitle";

interface TimeTableListProps {}

export const TimeTableList = ({}: TimeTableListProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const noSelect: string = "未実装";
  const [select, setSelect] = useState<string>(noSelect);
  const onClickOpen = () => {
    setIsOpen(!isOpen);
  };

  const daysOfWeek = ["月", "火", "水", "木", "金", "土"];
  return (
    <>
      <FilterTitle
        title="曜日"
        isOpen={isOpen}
        onClickOpen={onClickOpen}
        selectName={select}
      />
      {isOpen ? (
        <div className="flex flex-row mt-1 justify-center bg-gray-100 border border-gray-300 p-5 rounded-lg">
          {daysOfWeek.map((day) => (
            <FilterTimeTable day={day} key={day} />
          ))}
        </div>
      ) : null}
    </>
  );
};

export default TimeTableList;
