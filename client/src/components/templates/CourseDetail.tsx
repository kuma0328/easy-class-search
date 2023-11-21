import React from "react";
import CourseDetailBar from "../molecules/CourseDetailBar";
import TCourseDetail from "src/types/CourseDetail";
import CourseInfoList from "../organisms/CourseInfoList";
import Title from "../atoms/Title";
import CommentList from "../organisms/CommentList";
import TComment from "src/types/Comment";
import TCommentParam from "src/types/CommentParam";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link } from "react-router-dom";
interface CourseDetailProps {
  courseDetail: TCourseDetail;
  commentList: TComment[];
  commentParam: TCommentParam;
  handleCommentClick: (param: TCommentParam) => Promise<void>;
  handleTextChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CourseDetail = ({
  courseDetail,
  commentList,
  commentParam,
  handleCommentClick,
  handleTextChange,
}: CourseDetailProps) => {
  return (
    <>
      <div className="bg-white w-screen h-screen">
        <div className="flex items-center justify-center flex-col w-full bg-gray-50 border p-3">
          <div className="flex flex-row items-center">
            <Link to="/">
              <div className="left-0 top-0 fixed p-3 hover:opacity-50">
                <ArrowBackIosIcon />
              </div>
              <Title title="同志社楽単サーチ" />
            </Link>
          </div>
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
        <CommentList
          commentList={commentList}
          commentParam={commentParam}
          handleCommentClick={handleCommentClick}
          handleTextChange={handleTextChange}
        />
      </div>
    </>
  );
};

export default CourseDetail;
