import React from "react";

import TClass from "@/types/Class";

import Class from "../molecules/Class";

interface ClassListProps {
  classList: TClass[];
}

export const ClassList = ({ classList }: ClassListProps) => {
  return (
    <>
      <div className="grid grid-cols-3 gap-5">
        {classList.map((classInfo) => (
          <Class key={classInfo.subjectCode} classInfo={classInfo} />
        ))}
      </div>
    </>
  );
};

export default ClassList;
