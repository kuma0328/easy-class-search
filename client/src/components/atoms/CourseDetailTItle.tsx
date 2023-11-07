import React from "react";

interface CourseDetailTitleProps {
  title: string;
}

export const CourseDetailTitle = ({ title }: CourseDetailTitleProps) => {
  return (
    <>
      <div className="flex flex-row">
        <img
          src="COURSE001/images/COURSE001/logo.svg"
          alt=""
          className="w-10 h-10 object-contain" // アスペクト比を維持
        />
        <div className="text-2xl font-bold text-gray-800 font-sans">
          {title}
        </div>
      </div>
    </>
  );
};

export default CourseDetailTitle;
