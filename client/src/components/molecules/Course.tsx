import React from "react";

import TCourseInfo from "src/types/Course";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";

import Grades from "./Grades";
import { Link } from "react-router-dom";
interface CourseProps {
  courseInfo: TCourseInfo;
  handleStarButtonClick: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    clickCode: string
  ) => void;
  isStarCode: (code: string) => boolean;
  isFilter?: boolean;
}

export const Course = ({
  courseInfo,
  handleStarButtonClick,
  isStarCode,
  isFilter,
}: CourseProps) => {
  const getClassFormatAfterSlash = () => {
    const slashIndex = courseInfo.class_format.indexOf("/");
    return slashIndex !== -1
      ? courseInfo.class_format.slice(slashIndex + 1)
      : courseInfo.class_format;
  };

  return (
    <>
      <Link to={isFilter ? "#" : `/course/${courseInfo.code}`}>
        <div className="justify-between mt-2 border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden p-5 bg-white shadow-md">
          <div className="flex flex-col h-14">
            <div className="flex justify-between">
              <span className="text-xl truncate">{courseInfo.title}</span>
              <button
                className="hover:opacity-50 p-1 rounded-full"
                onClick={(e) => handleStarButtonClick(e, courseInfo.code)}
              >
                {isStarCode(courseInfo.code) ? (
                  <StarIcon fontSize="large" color="secondary" />
                ) : (
                  <StarBorderIcon fontSize="large" />
                )}
              </button>
            </div>
          </div>
          <div className="border-b border-gray-300"></div>
          <div className="hover:opacity-30">
            <div className="truncate">
              {courseInfo.class_format !== "-1" ? (
                <span className="pr-2">{getClassFormatAfterSlash()}</span>
              ) : null}

              <span className="pr-2">{courseInfo.place}</span>
              <span className="pr-2">{courseInfo.major}</span>
            </div>
            <div className="truncate">
              <span className="pr-2">{courseInfo.season}</span>
              {courseInfo.course_time !== "-1" ? (
                <span className="pr-2">{courseInfo.course_time}</span>
              ) : null}

              <span className="pr-2">{courseInfo.credit}単位</span>
            </div>
            <div className="mx-auto pt-2 ">
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
          </div>
        </div>
      </Link>
    </>
  );
};

export default Course;
