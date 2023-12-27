import React from "react";

interface CourseDetailBarProps {
  code: string;
  title: string;
}

export const CourseDetailBar = ({ code, title }: CourseDetailBarProps) => {
  return (
    <>
      <div className="flex flex-col border-b-4">
        <span className="text-4xl">{title}</span>
        <span>{code}</span>
      </div>
    </>
  );
};

export default CourseDetailBar;
