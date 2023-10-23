import React from "react";
import CourseInfo from "../molecules/CourseInfo";
import TCourseInfo from "src/types/CourseInfo";

interface CourseInfoListProps {
  courseList: TCourseInfo[];
}

export const CourseInfoList = ({ courseList }: CourseInfoListProps) => {
  return (
    <>
      <div>
        {courseList.map((course) => (
          <CourseInfo courseInfo={course} />
        ))}
      </div>
    </>
  );
};

export default CourseInfoList;
