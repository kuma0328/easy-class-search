import React from "react";
import Grades from "./Grades";
import EvaluationList from "../organisms/EvaluationList";
import TCourseInfo from "src/types/CourseInfo";

interface CourseInfoProps {
  courseInfo: TCourseInfo;
}

export const CourseInfo = ({ courseInfo }: CourseInfoProps) => {
  return (
    <>
      <div className="justify-between mt-2 border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden p-5 bg-white shadow-md">
        <div className="pb-2">
          <span>{courseInfo.year}年</span>
          <span className="pl-2">{courseInfo.teacher}</span>
        </div>
        <div className="pb-2">
          <EvaluationList evaluationList={courseInfo.evaluation} />
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
        <div className="pt-2">
          <span className="border-b text-purple-300 border-purple-300 hover:opacity-50">
            シラバス
          </span>
        </div>
      </div>
    </>
  );
};

export default CourseInfo;
