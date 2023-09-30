import React from "react";

interface CourseTitleProps {
  course_title: string;
}

export const CourseTitle = ({ course_title }: CourseTitleProps) => {
  return <div className=" text-4xl">{course_title}</div>;
};

export default CourseTitle;
