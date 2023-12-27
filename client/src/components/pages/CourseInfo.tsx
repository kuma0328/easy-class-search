import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import TCourseDetail from "src/types/CourseDetail";
import CourseDetail from "../templates/CourseDetail";
import TComment from "src/types/Comment";
import TCommentParam from "src/types/CommentParam";
import NoData from "../atoms/NoData";
import Loading from "../atoms/Loading";
import { getCommentByCode, getCourseDetail } from "src/api/get";
import { postCommentByCode } from "src/api/post";
import Header from "../molecules/Header";
import CourseDetailBar from "../molecules/CourseDetailBar";
import Footer from "../molecules/Footer";

export const CourseInfo = () => {
  const { id } = useParams<{ id: string }>();
  const [courseDetailData, setCourseDetailData] = useState<TCourseDetail>();
  const [commentData, setCommentData] = useState<TComment[]>([] as TComment[]);
  const [commentParam, setCommentParam] = useState<TCommentParam>({
    code: id,
    comment: "",
  });
  const [loading, setLoading] = useState(true);

  const location = useLocation();

  const code = location.state?.code ? location.state.code : "";
  const title = location.state?.title ? location.state.title : "";

  const handleCommentClick = async (param: TCommentParam): Promise<void> => {
    try {
      if (param.comment.trim() === "") {
        return;
      }
      const res = await postCommentByCode(param);
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
        const resCourse = await getCourseDetail(id);
        setCourseDetailData(resCourse);
        const resComment = await getCommentByCode(id);
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
      <div className="bg-white w-screen h-screen">
        <div className="flex items-center justify-center flex-col w-full bg-gray-50 border p-3">
          <Header />
          <CourseDetailBar
            code={loading ? code : courseDetailData?.code}
            title={loading ? title : courseDetailData?.title}
          />
        </div>
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
        <Footer />
      </div>
    </>
  );
};

export default CourseInfo;
