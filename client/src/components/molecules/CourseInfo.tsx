import React from "react";
import TCourseInfo from "src/types/Course";
import Grades from "./Grades";

interface CourseInfoProps {
  courseInfo: TCourseInfo;
}

export const CourseInfo = ({ courseInfo }: CourseInfoProps) => {
  return (
    <>
      <div className="border-2 p-3 max-w-md">
        <div className="pb-2">
          <span>{courseInfo.year}年</span>
          <span className="pl-2">{courseInfo.teacher}</span>
        </div>
        <Grades
          people={courseInfo.people}
          rate_a={courseInfo.rate_a}
          rate_b={courseInfo.rate_b}
          rate_c={courseInfo.rate_c}
          rate_d={courseInfo.rate_d}
          rate_f={courseInfo.rate_f}
          rate_average={courseInfo.rate_average}
        />
      </div>
    </>
  );
};

export default CourseInfo;
