import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getCourseInfoByTeacherPosts } from "src/api/post";
import TCourse from "src/types/Course";
import CourseList from "../organisms/CourseList";
import Title from "../atoms/Title";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import NoData from "../atoms/NoData";
import Loading from "../atoms/Loading";

interface TeacherInfoProps {}

export const TeacherInfo = ({}: TeacherInfoProps) => {
  const { id } = useParams<{ id: string }>();
  const [courseData, setCourseData] = useState<TCourse[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await getCourseInfoByTeacherPosts(id);
        setCourseData(res);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);
  // Cookie に情報を保存する関数
  const saveToCookie = (key: string, value: string) => {
    document.cookie = `${key}=${value}; expires=${new Date(
      Date.now() + 365 * 24 * 60 * 60 * 1000
    ).toUTCString()}; path=/`;
  };

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
  const readStarCodeListCookie = (): string[] => {
    const storedStarCodeParam = readFromCookie("starCodeList");
    if (storedStarCodeParam) {
      const parsedStarCodeParam: string[] = JSON.parse(storedStarCodeParam);
      return parsedStarCodeParam;
    }
    return [];
  };
  const [starCodeList, setStarCodeList] = useState<string[]>(() =>
    readStarCodeListCookie()
  );
  const isStarCode = (code: string): boolean => {
    return starCodeList.includes(code);
  };

  const handleStarButtonClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    clickCode: string
  ) => {
    event.preventDefault();
    event.stopPropagation();
    let newStarCodeList: string[];
    const codeList: string[] = readStarCodeListCookie();
    if (codeList.includes(clickCode)) {
      newStarCodeList = codeList.filter((code) => code !== clickCode);
    } else {
      newStarCodeList = [...codeList, clickCode];
    }
    setStarCodeList(newStarCodeList);
    saveToCookie("starCodeList", JSON.stringify(newStarCodeList));
  };
  return (
    <>
      <div className="bg-white w-screen h-screen">
        <div className="flex items-center justify-center flex-col w-full bg-gray-50 border-b-2">
          <div className="flex flex-row items-center">
            <Link to="/">
              <div className="left-0 top-0 fixed p-3 hover:opacity-50">
                <ArrowBackIosIcon />
              </div>
              <Title title="同志社楽単サーチ" />
            </Link>
          </div>
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
