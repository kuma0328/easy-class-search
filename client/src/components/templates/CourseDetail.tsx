import React from "react";
import CourseDetailBar from "../molecules/CourseDetailBar";
import Title from "../atoms/Title";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import TCourseDetail from "src/types/CourseDetail";
import CourseInfoList from "../organisms/CourseInfoList";
interface CourseDetailProps {
  courseDetail: TCourseDetail;
}

export const CourseDetail = ({ courseDetail }: CourseDetailProps) => {
  return (
    <>
      <div className="">
        <div className="flex flex-row items-center">
          <div className="group flex flex-row">
            <ArrowBackIosNewIcon />
            <div className="opacity-0 group-hover:opacity-100">戻る</div>
          </div>
          <Title title="同志社楽単サーチ" />
        </div>

        <CourseDetailBar
          code={courseDetail.code}
          title={courseDetail.title}
          credit={courseDetail.credit}
        />
        <div className="flex justify-center items-center">
          <CourseInfoList courseList={courseDetail.info} />
        </div>
      </div>
    </>
  );
};

export default CourseDetail;
