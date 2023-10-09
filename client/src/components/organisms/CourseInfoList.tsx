import React from "react";
import TCourseInfo from "src/types/Course";
import CourseInfo from "../molecules/CourseInfo";

interface CourseInfoListProps {
  courseList: TCourseInfo[];
}

export const CourseInfoList = ({ courseList }: CourseInfoListProps) => {
  return (
    <>
      <div>
        {courseList.map((course) => (
          <CourseInfo key={course.code} courseInfo={course} />
        ))}
      </div>
    </>
  );
};

export default CourseInfoList;
