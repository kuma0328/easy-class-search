import React from "react";
import CourseDetailBar from "../molecules/CourseDetailBar";
import CourseInfoList from "../organisms/CourseInfoList";
import EvaluationList from "../organisms/EvaluationList";
import TCourseInfo from "src/types/Course";
import TEvaluation from "src/types/Evaluation";

interface CourseDetailProps {
  courseList: TCourseInfo[];
  evaluationList: TEvaluation[];
}

export const CourseDetail = ({
  courseList,
  evaluationList,
}: CourseDetailProps) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <CourseDetailBar
          code={courseList[0].code}
          title={courseList[0].title}
          place={courseList[0].place}
          time={courseList[0].time}
          credit={2}
          teacherName={courseList[0].teacher}
          course_url={courseList[0].course_url}
        />
        <EvaluationList evaluationList={evaluationList} />
        <CourseInfoList courseList={courseList} />
      </div>
    </>
  );
};

export default CourseDetail;
