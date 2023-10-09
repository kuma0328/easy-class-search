import React from "react";

interface CourseDetailBarProps {
  code: string;
  title: string;
  place: string;
  time: string;
  credit: number;
  teacherName: string;
  course_url: string;
}

export const CourseDetailBar = ({
  code,
  title,
  place,
  time,
  credit,
  teacherName,
  course_url,
}: CourseDetailBarProps) => {
  return (
    <>
      <div className="flex flex-col border-b-4">
        <span className="text-4xl">{title}</span>
        <span>{code}</span>
        <span>{teacherName}</span>
      </div>
      <div>
        <span className="pr-2">{credit}単位</span>
        <span className="pr-2">{place}</span>
        <span>{time}</span>
      </div>
    </>
  );
};

export default CourseDetailBar;
