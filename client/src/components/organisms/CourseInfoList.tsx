import React from "react";
import CourseInfo from "../molecules/CourseInfo";
import TCourseInfo from "src/types/CourseInfo";

interface CourseInfoListProps {
  courseList: TCourseInfo[];
}

export const CourseInfoList = ({ courseList }: CourseInfoListProps) => {
  return (
    <>
      <div className="bg-purple-50 xl:p-5 lg:p-3 p-1 w-screen">
        <div className="grid grid-cols-1 xl:gap-5 xl:grid-cols-3 lg:grid-cols-2 lg:gap-3 gap-2">
          {courseList.map((course, i) => (
            <CourseInfo courseInfo={course} key={i}/>
          ))}
        </div>
      </div>
    </>
  );
};

export default CourseInfoList;
