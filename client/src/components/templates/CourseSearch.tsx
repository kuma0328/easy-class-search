import React from "react";
import TitleBar from "../organisms/TitleBar";
import CourseList from "../organisms/CourseList";
import TCourseInfo from "src/types/Course";
import SelectGenreBarList from "../organisms/SelectGenreBarList";

interface CourseSearchProps {
  courseList: TCourseInfo[];
  genreList: string[];
}

export const CourseSearch = ({ courseList, genreList }: CourseSearchProps) => {
  return (
    <>
      <div className="flex flex-row">
        <SelectGenreBarList genreList={genreList} />
        <CourseList courseList={courseList} />
      </div>
    </>
  );
};

export default CourseSearch;
