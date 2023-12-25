import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  addStarCodePosts,
  deleteStarCodePosts,
  getCourseInfoByTeacherPosts,
  getStarCodePosts,
} from "src/api/post";
import TCourse from "src/types/Course";
import CourseList from "../organisms/CourseList";
import NoData from "../atoms/NoData";
import Loading from "../atoms/Loading";
import { v4 as uuidv4 } from "uuid";
import Header from "../molecules/Header";
export const TeacherInfo = () => {
  const { id } = useParams<{ id: string }>();
  const [courseData, setCourseData] = useState<TCourse[]>([]);
  const [loading, setLoading] = useState(true);
  const [userID, setUserID] = useState("");

  // Cookie から情報を読み取る関数
  const readFromCookie = (key: string): string | null => {
    const cookies = document.cookie.split(";");
    for (const cookie of cookies) {
      const [cookieKey, cookieValue] = cookie.trim().split("=");
      if (cookieKey === key) {
        return cookieValue;
      }
    }

    return null;
  };

  useEffect(() => {
    let userId = readFromCookie("user");
    if (!userId) userId = uuidv4();
    setUserID(userId);
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await getCourseInfoByTeacherPosts(id);
        setCourseData(res);
        const saveStarCodeList = await getStarCodePosts(userId ? userId : "");
        if (saveStarCodeList) setStarCodeList(saveStarCodeList);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const [starCodeList, setStarCodeList] = useState<TStarCode[]>([]);
  const isStarCode = (code: string): boolean => {
    return starCodeList.some((item) => item.code === code);
  };

  const handleStarButtonClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    clickCode: string
  ) => {
    event.preventDefault();
    event.stopPropagation();
    setStarCodeList((prevList) => {
      if (isStarCode(clickCode)) {
        // clickCode が starCodeList に存在する場合は削除
        deleteStarCodePosts({
          id: userID,
          code: clickCode,
        });
        return prevList.filter((item) => item.code !== clickCode);
      } else {
        // clickCode が starCodeList に存在しない場合は追加
        addStarCodePosts({ id: userID, code: clickCode });
        return [...prevList, { id: userID, code: clickCode }];
      }
    });
  };
  return (
    <>
      <div className="bg-white w-screen h-screen">
        <div className="flex items-center justify-center flex-col w-full bg-gray-50 border-b-2">
          <Header />
          <span className="text-4xl pb-2">{id}</span>
        </div>
        <div>
          {loading ? (
            <Loading />
          ) : (
            <>
              {courseData ? (
                <CourseList
                  courseList={courseData}
                  handleStarButtonClick={handleStarButtonClick}
                  isStarCode={isStarCode}
                />
              ) : (
                <NoData />
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default TeacherInfo;
