import React from "react";

import TCourseInfo from "src/types/Course";

import StarBorderIcon from "@mui/icons-material/StarBorder";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";
interface CourseProps {
  courseInfo: TCourseInfo;
}

export const Course = ({ courseInfo }: CourseProps) => {
  return (
    <>
      <div className="relative justify-between mt-2 max-w-md border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden p-5 bg-white hover:opacity-60">
        <div className="flex flex-col h-14">
          <div className="flex flex-row">
            <span className="text-xl">{courseInfo.title}</span>
            <StarBorderIcon />
          </div>
        </div>
        <div className="border-b border-gray-300"></div>
        <div className="absolute top-1/2 right-0 transform translate-y-(-50%)">
          <ArrowForwardIosIcon />
        </div>
        <div className="flex">
          <span className="text-fuchsia-400 pr-2">{courseInfo.season}</span>
          <span className="pr-2">{courseInfo.place}</span>
          <span className="pr-2">{courseInfo.time}</span>
        </div>
        <div className="mx-auto pt-2 ">
          <table className="table-auto border-collapse border border-gray-400">
            <thead>
              <tr>
                <th className="border border-gray-400 w-16">人数</th>
                <th className="border border-gray-400 w-16">A</th>
                <th className="border border-gray-400 w-16">B</th>
                <th className="border border-gray-400 w-16">C</th>
                <th className="border border-gray-400 w-16">D</th>
                <th className="border border-gray-400 w-16">F</th>
                <th className="border border-gray-400 w-16">平均</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-400 text-center align-middle">
                  {courseInfo.people}
                </td>
                <td className="border border-gray-400 text-center align-middle">
                  {courseInfo.rate_a}
                </td>
                <td className="border border-gray-400 text-center align-middle">
                  {courseInfo.rate_b}
                </td>
                <td className="border border-gray-400 text-center align-middle">
                  {courseInfo.rate_c}
                </td>
                <td className="border border-gray-400 text-center align-middle">
                  {courseInfo.rate_d}
                </td>
                <td className="border border-gray-400 text-center align-middle">
                  {courseInfo.rate_f}
                </td>
                <td className="border border-gray-400 text-center align-middle">
                  {courseInfo.rate_average}
                </td>
              </tr>
            </tbody>
          </table>
          <Link to={`/course/${courseInfo.code}`}>aaa</Link>
        </div>
      </div>
    </>
  );
};

export default Course;
