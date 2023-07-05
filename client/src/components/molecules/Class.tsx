import React from "react";

import TClass from "@/types/Class";

import LaunchIcon from "@mui/icons-material/Launch";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

interface ClassProps {
  classInfo: TClass;
  // onClick : () => void;
}

export const Class = ({ classInfo }: ClassProps) => {
  const place = "場所 :";
  const rank = "評価 :";
  return (
    <>
      <div className="justify-between mt-2 max-w-lg border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden p-5">
        <div className="flex flex-col">
          <div className="flex flex-row">
            <span className="text-2xl">{classInfo.subjectName}</span>
            <LaunchIcon fontSize="small" />
          </div>
          <div className="text-gray-400">
            <span className=" border-b">{classInfo.subjectCode}</span>
            <ContentCopyIcon fontSize="small" />
          </div>
        </div>
        <div className="flex pt-2">
          <span className=" pr-2">{place}</span>
          <span className="text-fuchsia-400 pr-2">{classInfo.season}</span>
          <span className="pr-2">{classInfo.place}</span>
          <span className="pr-2">{classInfo.classTime}</span>
        </div>
        <div className="flex">
          <span className="pr-2">{rank}</span>
          <span className="pr-2 text-blue-400">A:{classInfo.rank.A}</span>
          <span className="pr-2">B:{classInfo.rank.B}</span>
          <span className="pr-2">C:{classInfo.rank.C}</span>
          <span className="pr-2">D:{classInfo.rank.D}</span>
          <span className="pr-2 text-red-400">F:{classInfo.rank.F}</span>
        </div>
      </div>
    </>
  );
};

export default Class;
