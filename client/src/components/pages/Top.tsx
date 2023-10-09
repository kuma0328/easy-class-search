import { useState } from "react";
import { getCourseInfoPosts } from "src/api/post";
import TCourseInfo from "src/types/Course";
import CourseList from "../organisms/CourseList";
import TitleBar from "../organisms/TitleBar";
import SortColmuns from "../organisms/SortColmuns";

export const Top = () => {
  const [courseInfoData, setCourseInfoData] = useState<TCourseInfo[]>([]);

  const onclick = async () => {
    try {
      const res = await getCourseInfoPosts();
      setCourseInfoData(res);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className="bg-purple-200 w-screen h-screen">
        <div className="flex justify-center items-center flex-col">
          <SortColmuns text="F率昇順"/>
          <button onClick={onclick}>aaa</button>
          <>{courseInfoData.length}</>
          <CourseList courseList={courseInfoData} />
        </div>
      </div>
    </>
  );
};

export default Top;
