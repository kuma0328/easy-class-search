import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  addCommentByCodePostts,
  getCommentByCodePosts,
  getCourseDetailPosts,
} from "src/api/post";
import TCourseDetail from "src/types/CourseDetail";
import CourseDetail from "../templates/CourseDetail";
import TComment from "src/types/Comment";
import TCommentParam from "src/types/CommentParam";
import NoData from "../atoms/NoData";
import Loading from "../atoms/Loading";

interface CourseInfoProps {}

export const CourseInfo = ({}: CourseInfoProps) => {
  const { id } = useParams<{ id: string }>();
  const [courseDetailData, setCourseDetailData] = useState<TCourseDetail>();
  const [commentData, setCommentData] = useState<TComment[]>([] as TComment[]);
  const [commentParam, setCommentParam] = useState<TCommentParam>({
    code: id,
    comment: "",
  });
  const [loading, setLoading] = useState(true);

  const handleCommentClick = async (param: TCommentParam): Promise<void> => {
    try {
      if (param.comment.trim() === "") {
        return;
      }
      const res = await addCommentByCodePostts(param);
      setCommentParam({
        code: id,
        comment: "",
      });
      setCommentData([res, ...commentData]); // 新しいコメントを配列の最初に追加
    } catch (error) {
      console.log(error);
    }
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCommentParam({
      ...commentParam,
      comment: event.target.value,
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const resCourse = await getCourseDetailPosts(id);
        setCourseDetailData(resCourse);
        const resComment = await getCommentByCodePosts(id);
        if (resComment) {
          setCommentData(resComment);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData(); // fetchData 関数を呼び出す
  }, [id]);

  return (
    <>
      <div>
        {loading ? (
          <Loading />
        ) : (
          <>
            {courseDetailData ? (
              <CourseDetail
                courseDetail={courseDetailData}
                commentList={commentData}
                commentParam={commentParam}
                handleCommentClick={handleCommentClick}
                handleTextChange={handleTextChange}
              />
            ) : (
              <NoData />
            )}
          </>
        )}
      </div>
    </>
  );
};

export default CourseInfo;
