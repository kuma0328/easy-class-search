import React from "react";
import TRadarChart from "src/types/RadarChart";
import TeacherInfo from "../molecules/TeacherInfo";

interface TeacherListProps {
  teacherList: TRadarChart[];
}

export const TeacherList = ({ teacherList }: TeacherListProps) => {
  return (
    <>
      <div className="bg-purple-50 xl:p-5 lg:p-3 p-1  min-h-screen">
        <div className="grid grid-cols-1 xl:gap-5 xl:grid-cols-3 lg:grid-cols-2 lg:gap-3 gap-2">
          {teacherList.map((data) => (
            <TeacherInfo data={data} />
          ))}
        </div>
      </div>
    </>
  );
};

export default TeacherList;
