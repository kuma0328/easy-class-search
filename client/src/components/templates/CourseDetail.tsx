import React from "react";
import CourseDetailBar from "../molecules/CourseDetailBar";
import TCourseDetail from "src/types/CourseDetail";
import CourseInfoList from "../organisms/CourseInfoList";
import Title from "../atoms/Title";
interface CourseDetailProps {
  courseDetail: TCourseDetail;
}

export const CourseDetail = ({ courseDetail }: CourseDetailProps) => {
  return (
    <>
      <div className="bg-white w-screen h-screen">
        <div className="flex items-center justify-center flex-col w-full bg-gray-50 border p-3">
          <Title title="同志社楽単サーチ" />

          <CourseDetailBar
            code={courseDetail.code}
            title={courseDetail.title}
            credit={courseDetail.credit}
          />
        </div>
        <div>
          <div className="flex justify-center items-center">
            <CourseInfoList courseList={courseDetail.info} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseDetail;
