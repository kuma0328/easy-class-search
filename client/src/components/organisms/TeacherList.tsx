import React from "react";
import TRadarChart from "src/types/RadarChart";
import TeacherInfo from "../molecules/TeacherInfo";

interface TeacherListProps {
  teacherList: TRadarChart[];
}

export const TeacherList = ({ teacherList }: TeacherListProps) => {
  return (
    <>
      <div className="bg-purple-50 p-5 min-h-screen w-screen">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 md:grid-cols-2">
          {teacherList.map((data) => (
            <TeacherInfo data={data} />
          ))}
        </div>
      </div>
    </>
  );
};

export default TeacherList;
