import React from "react";

interface CourseDetailBarProps {
  code: string;
  title: string;
  credit: number;
}

export const CourseDetailBar = ({
  code,
  title,
  credit,
}: CourseDetailBarProps) => {
  return (
    <>
      <div className="flex flex-col border-b-4">
        <span className="text-4xl">{title}</span>
        <span>{code}</span>
      </div>
      <div>
        <span className="pr-2">{credit}単位</span>
      </div>
    </>
  );
};

export default CourseDetailBar;
