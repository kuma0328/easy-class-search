import React from "react";
import TCourseInfo from "src/types/Course";
import Course from "../molecules/Course";

interface CourseListProps {
  courseList: TCourseInfo[];
  handleStarButtonClick: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    clickCode: string
  ) => void;
  isStarCode: (code: string) => boolean;
  isFilter?: boolean;
}

export const CourseList = ({
  courseList,
  handleStarButtonClick,
  isStarCode,
  isFilter,
}: CourseListProps) => {
  return (
    <>
      <div className="bg-purple-50 xl:p-5 lg:p-3 min-h-screen p-1">
        <div className="grid grid-cols-1 xl:gap-5 xl:grid-cols-3 lg:grid-cols-2 lg:gap-3 gap-2">
          {courseList !== null && courseList !== undefined
            ? courseList.map((course, i) => (
                <Course
                  key={i}
                  courseInfo={course}
                  handleStarButtonClick={handleStarButtonClick}
                  isStarCode={isStarCode}
                  isFilter={isFilter}
                />
              ))
            : null}
        </div>
      </div>
    </>
  );
};

export default CourseList;
