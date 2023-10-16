import React from "react";

import TCourseInfo from "src/types/Course";

import StarBorderIcon from "@mui/icons-material/StarBorder";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";
import Grades from "./Grades";
interface CourseProps {
  courseInfo: TCourseInfo;
}

export const Course = ({ courseInfo }: CourseProps) => {
  return (
    <>
      <div className="justify-between mt-2 border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden p-5 bg-white hover:opacity-60">
        <div className="flex flex-col h-14">
          <div className="flex flex-row">
            <span className="text-xl">{courseInfo.title}</span>
            <StarBorderIcon />
          </div>
        </div>
        <div className="border-b border-gray-300"></div>
        <div className="flex">
          <span className="text-fuchsia-400 pr-2">{courseInfo.season}</span>
          <span className="pr-2">{courseInfo.place}</span>
          <span className="pr-2">{courseInfo.time}</span>
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

          {/* <Link to={`/course/${courseInfo.code}`}>aaa</Link> */}
        </div>
      </div>
    </>
  );
};

export default Course;
