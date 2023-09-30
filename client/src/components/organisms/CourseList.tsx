import React from "react";
import TCourseInfo from "src/types/Course";
import Course from "../molecules/Course";

interface CourseListProps {
  courseList: TCourseInfo[];
}

export const CourseList = ({ courseList }: CourseListProps) => {
  return (
    <>
      <div className="bg-gray-100 rounded-lg p-5">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {courseList.map((course) => (
            <Course key={course.code} courseInfo={course} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CourseList;
