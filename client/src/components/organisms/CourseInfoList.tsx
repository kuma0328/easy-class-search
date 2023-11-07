import React from "react";
import CourseInfo from "../molecules/CourseInfo";
import TCourseInfo from "src/types/CourseInfo";

interface CourseInfoListProps {
  courseList: TCourseInfo[];
}

export const CourseInfoList = ({ courseList }: CourseInfoListProps) => {
  return (
    <>
      <div className="bg-purple-50 p-5 min-h-screen w-screen">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 md:grid-cols-2">
          {courseList.map((course) => (
            <CourseInfo courseInfo={course} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CourseInfoList;
