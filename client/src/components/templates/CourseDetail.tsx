import React from "react";
import TCourseDetail from "src/types/CourseDetail";
import CourseInfoList from "../organisms/CourseInfoList";
import CommentList from "../organisms/CommentList";
import TComment from "src/types/Comment";
import TCommentParam from "src/types/CommentParam";
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
    </>
  );
};

export default CourseDetail;
