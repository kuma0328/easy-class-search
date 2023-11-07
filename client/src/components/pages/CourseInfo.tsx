import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCourseDetailPosts } from "src/api/post";
import TCourseDetail from "src/types/CourseDetail";
import CourseDetail from "../templates/CourseDetail";

interface CourseInfoProps {}

export const CourseInfo = ({}: CourseInfoProps) => {
  const { id } = useParams<{ id: string }>();
  const [courseDetailData, setCourseDetailData] = useState<TCourseDetail>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getCourseDetailPosts(id);
        setCourseDetailData(res);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData(); // fetchData 関数を呼び出す
  }, [id]);

  return (
    <>
      {courseDetailData ? (
        <CourseDetail courseDetail={courseDetailData} />
      ) : (
        <>データの取得に失敗しました</>
      )}
    </>
  );
};

export default CourseInfo;
