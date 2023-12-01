import React, { useEffect, useState } from "react";
import {
  getCourseCountPosts,
  getCourseInfoPosts,
  getTeacherCountPosts,
  getTeacherGradesPosts,
} from "src/api/post";
import TCourseInfo from "src/types/Course";
import CourseList from "../organisms/CourseList";
import TitleBar from "../organisms/TitleBar";
import SortColmuns from "../organisms/SortColmuns";
import SelectGenreBarList from "../organisms/SelectGenreBarList";
import TCourseParam from "src/types/CourseParam";
import initialCourseParam from "src/static/data/courseParam";
import TeacherList from "../organisms/TeacherList";
import TTeacherParam from "src/types/TeacherParam";
import initialTeacherParam from "src/static/data/teacherParam";
import TeacherColmuns from "../organisms/TeacherColmuns";
import MoreInfo from "../molecules/MoreInfo";
import Footer from "../molecules/Footer";
import TRadarChart from "src/types/RadarChart";
import { isEqual } from "lodash";
import TFavoriteCourseParam from "src/types/FavoriteCourseParam";
import TCourseCount from "src/types/CourseCount";
import NoData from "../atoms/NoData";
import Loading from "../atoms/Loading";
import TTeacherCount from "src/types/TeacherCount";

export const Top = () => {
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

  const readCourseParamCookie = (): TCourseParam => {
    const storedCourseParam = readFromCookie("courseParam");
    if (storedCourseParam) {
      const parsedCourseParam: TCourseParam = JSON.parse(storedCourseParam);
      return parsedCourseParam;
    }
    return initialCourseParam;
  };

  const readTeacherParamCookie = (): TTeacherParam => {
    const storedTeacherParam = readFromCookie("teacherParam");
    if (storedTeacherParam) {
      const parsedTeacherParam: TTeacherParam = JSON.parse(storedTeacherParam);
      return parsedTeacherParam;
    }
    return initialTeacherParam;
  };

  const readStarCodeListCookie = (): string[] => {
    const storedStarCodeParam = readFromCookie("starCodeList");
    if (storedStarCodeParam) {
      const parsedStarCodeParam: string[] = JSON.parse(storedStarCodeParam);
      return parsedStarCodeParam;
    }
    return [];
  };

  const [courseParam, setCourseParam] = useState<TCourseParam>(() =>
    readCourseParamCookie()
  );
  const [courseCount, setCourseCount] = useState<TCourseCount>();
  const [teacherCount, setTeacherCount] = useState<TTeacherCount>();
  const [courseInfoData, setCourseInfoData] = useState<TCourseInfo[]>([]);
  const [isFilter, setIsFilter] = useState<boolean>(false);
  const [teacherParam, setTeacherParam] = useState<TTeacherParam>(() =>
    readTeacherParamCookie()
  );
  const [teacherList, setTeacherList] = useState<TRadarChart[]>([]);
  const [starCodeList, setStarCodeList] = useState<string[]>(() =>
    readStarCodeListCookie()
  );

  const isStarCode = (code: string): boolean => {
    return starCodeList.includes(code);
  };

  const [courseLoading, setCourseLoading] = useState(true);
  const [teacherLoading, setTeacherLoading] = useState(true);

  const handleStarButtonClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    clickCode: string
  ) => {
    if (isFilter) {
      return;
    }
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

  const courseParamReset = () => {
    setCourseParam(initialCourseParam);
  };
  const changeParamOfMajor = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCourseParam((prevParam) => ({
      ...prevParam,
      major: event.target.value,
      offset: 0,
    }));
  };
  const changeParamOfSeason = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCourseParam((prevParam) => ({
      ...prevParam,
      season: event.target.value,
      offset: 0,
    }));
  };
  const changeParamOfPlace = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCourseParam((prevParam) => ({
      ...prevParam,
      place: event.target.value,
      offset: 0,
    }));
  };
  const changeParamOfYear = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCourseParam((prevParam) => ({
      ...prevParam,
      year: parseInt(event.target.value, 10),
      offset: 0,
    }));
  };

  const changeParamOfClassFormat = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setCourseParam((prevParam) => ({
      ...prevParam,
      classFormat: event.target.value,
      offset: 0,
    }));
  };
  const changeParamOfFavorite = () => {
    if (isFilter) {
      return;
    }
    setCourseParam((prevParam) => ({
      ...prevParam,
      favorite: !prevParam.favorite,
      offset: 0,
    }));
  };

  const addTime = (newTime: string) => {
    setCourseParam((prevParam) => ({
      ...prevParam,
      time: [...prevParam.time, newTime], // 新しい要素を追加
      offset: 0,
    }));
  };
  const removeTime = (timeToRemove: string) => {
    setCourseParam((prevParam) => ({
      ...prevParam,
      time: prevParam.time.filter((time) => time !== timeToRemove), // 該当する要素を削除
      offset: 0,
    }));
  };
  const changeParamOfSortBy = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCourseParam((prevParam) => ({
      ...prevParam,
      sortBy: event.target.value,
      offset: 0,
    }));
  };

  const onFilterClick = () => {
    setIsFilter(!isFilter);
  };
  const onFilterFalse = () => {
    setIsFilter(false);
  };
  const [activeTab, setActiveTab] = useState("授業検索"); // 初期値を設定

  const handleTabClick = (tab: React.SetStateAction<string>) => {
    if (isFilter) {
      return;
    }
    setActiveTab(tab);
    saveToCookie("activeTab", JSON.stringify(tab));
  };

  const teacherParamOfMajor = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTeacherParam((prevParam) => ({
      ...prevParam,
      major: event.target.value,
      offset: 0,
    }));
  };

  const handleCourseBackClick = () => {
    window.scrollTo({
      top: 0,
    });
    setCourseParam((prevParam) => ({
      ...prevParam,
      offset: prevParam.offset - 30,
    }));
  };

  const handleCourseNextClick = () => {
    window.scrollTo({
      top: 0,
    });
    setCourseParam((prevParam) => ({
      ...prevParam,
      offset: prevParam.offset + 30,
    }));
  };

  const handleTeacherBackClick = () => {
    window.scrollTo({
      top: 0,
    });
    setTeacherParam((prevParam) => ({
      ...prevParam,
      offset: prevParam.offset - 30,
    }));
  };

  const handleTeacherNextClick = () => {
    window.scrollTo({
      top: 0,
    });
    setTeacherParam((prevParam) => ({
      ...prevParam,
      offset: prevParam.offset + 30,
    }));
  };

  useEffect(() => {
    const storedTeacherParam = readFromCookie("teacherParam");
    if (storedTeacherParam) {
      const parsedTeacherParam: TTeacherParam = JSON.parse(storedTeacherParam);
      if (!isEqual(parsedTeacherParam, teacherParam)) {
        setTeacherParam(parsedTeacherParam);
      }
    }

    const storedActiveTab = readFromCookie("activeTab");
    if (storedActiveTab) {
      const parsedActiveTab: string = JSON.parse(storedActiveTab);
      setActiveTab(parsedActiveTab);
    }

    const storedCourseParam = readFromCookie("courseParam");
    if (storedCourseParam) {
      const parsedCourseParam: TCourseParam = JSON.parse(storedCourseParam);
      if (!isEqual(parsedCourseParam, courseParam)) {
        setCourseParam(parsedCourseParam);
      }
    }

    const storedStarList = readFromCookie("starCodeList");
    if (storedStarList) {
      const parsedStarList: string[] = JSON.parse(storedStarList);
      setStarCodeList(parsedStarList);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      saveToCookie("courseParam", JSON.stringify(courseParam));
      try {
        setCourseLoading(true);
        const param: TFavoriteCourseParam = {
          major: courseParam.major,
          season: courseParam.season,
          place: courseParam.place,
          course_time: courseParam.time,
          sortBy: courseParam.sortBy,
          offset: courseParam.offset,
          favorite: courseParam.favorite,
          year: courseParam.year,
          class_format: courseParam.classFormat,
          code: starCodeList,
        };
        const courseCount = await getCourseCountPosts(param);
        setCourseCount(courseCount);
        const courseInfo = await getCourseInfoPosts(param);
        setCourseInfoData(courseInfo);
      } catch (error) {
        console.log(error);
      } finally {
        setCourseLoading(false);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [courseParam]);

  useEffect(() => {
    saveToCookie("teacherParam", JSON.stringify(teacherParam));

    const fetchData = async () => {
      try {
        setTeacherLoading(true);
        const teacherCount = await getTeacherCountPosts(teacherParam);
        setTeacherCount(teacherCount);
        const teacherInfo = await getTeacherGradesPosts(teacherParam);
        setTeacherList(teacherInfo);
      } catch (error) {
        console.log(error);
      } finally {
        setTeacherLoading(false);
      }
    };
    fetchData();
  }, [teacherParam]);

  return (
    <div className="w-screen h-screen">
      <div
        className={`${isFilter ? "opacity-50" : ""}`}
        onClick={(e) => {
          isFilter ? onFilterFalse() : void 0;
        }}
      >
        <TitleBar activeTab={activeTab} handleTabClick={handleTabClick} />
        {activeTab === "授業検索" ? (
          <div>
            <SortColmuns
              text={courseParam.sortBy}
              onFilterClick={onFilterClick}
              changeParamOfSortBy={changeParamOfSortBy}
              changeParamOfFavorite={changeParamOfFavorite}
              isFavorite={courseParam.favorite}
            />
            {courseLoading ? (
              <Loading />
            ) : (
              <>
                {courseInfoData ? (
                  <CourseList
                    courseList={courseInfoData}
                    handleStarButtonClick={handleStarButtonClick}
                    isStarCode={isStarCode}
                    isFilter={isFilter}
                  />
                ) : (
                  <NoData />
                )}
              </>
            )}
            <MoreInfo
              handleBackClick={handleCourseBackClick}
              handleNextClick={handleCourseNextClick}
              isFirstData={
                courseInfoData === null ||
                courseParam.offset === 0 ||
                courseInfoData.length === 0
              }
              isLastData={
                courseInfoData === null ||
                courseParam.offset + 30 >= courseCount?.course_count ||
                courseInfoData.length === 0
              }
            />
          </div>
        ) : (
          <div>
            <TeacherColmuns
              majorText={teacherParam.major}
              changeParamOfMajor={teacherParamOfMajor}
            />
            {teacherLoading ? (
              <Loading />
            ) : (
              <>
                {teacherList ? (
                  <TeacherList teacherList={teacherList} />
                ) : (
                  <NoData />
                )}
              </>
            )}
            <MoreInfo
              handleBackClick={handleTeacherBackClick}
              handleNextClick={handleTeacherNextClick}
              isFirstData={teacherList === null || teacherParam.offset === 0}
              isLastData={
                teacherList === null ||
                teacherParam.offset + 30 >= teacherCount?.teacher_count
              }
            />
          </div>
        )}
        <Footer />
      </div>
      <div>
        {isFilter ? (
          <SelectGenreBarList
            courseParam={courseParam}
            changeParamOfMajor={changeParamOfMajor}
            changeParamOfSeason={changeParamOfSeason}
            changeParamOfPlace={changeParamOfPlace}
            changeParamOfClassFormat={changeParamOfClassFormat}
            changeParamOfYear={changeParamOfYear}
            addTime={addTime}
            removeTime={removeTime}
            courseParamReset={courseParamReset}
            onFilterFalse={onFilterFalse}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Top;
