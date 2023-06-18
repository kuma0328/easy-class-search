import React from "react";

import TClass from "@/types/Class";

import LaunchIcon from "@mui/icons-material/Launch";

interface ClassProps {
  classInfo: TClass;
  // onClick : () => void;
}

export const Class = ({ classInfo }: ClassProps) => {
  return (
    <>
      <div className="flex justify-between border border-black mt-2 max-w-lg border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <div className="flex flex-col">
          <div className="text-gray-400">{classInfo.subjectCode}</div>
          <div className="text-2xl pt-2">{classInfo.subjectName}</div>
          <div className="pt-2">{classInfo.teacherName}</div>
        </div>
        <div className="flex flex-col">
          <div className="flex">
            <div className="text-fuchsia-400 pr-2">{classInfo.season}</div>
            <div className="pr-2">{classInfo.place}</div>
            <div className="pr-2">{classInfo.classTime}</div>
          </div>
          <div className="flex pt-2">
            <div className="text-4xl pr-2 text-red-600">
              F率 {classInfo.rankF}%
            </div>
            <div className="text-3xl text-sky-600">A率 {classInfo.rankA}%</div>
          </div>
          <div className="flex pt-2">
            <div className="pr-2">B:{classInfo.rankB}</div>
            <div className="pr-2">C:{classInfo.rankC}</div>
            <div className="pr-2">D:{classInfo.rankD}</div>
            <div className="pr-2">E:{classInfo.rankE}</div>
            <div>
              <LaunchIcon></LaunchIcon>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Class;
