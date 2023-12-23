import React, { useEffect, useState } from "react";
import {
  addActiveTabByIdPosts,
  addCourseParamByIdPosts,
  addStarCodePosts,
  addTeacherParamByIdPosts,
  deleteStarCodePosts,
  getActiveTabByIdPosts,
  getCourseCountPosts,
  getCourseInfoPosts,
  getCourseParamPosts,
  getStarCodePosts,
  getTeacherCountPosts,
  getTeacherGradesPosts,
  getTeacherParam,
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
import TFavoriteCourseParam from "src/types/FavoriteCourseParam";
import TCourseCount from "src/types/CourseCount";
import NoData from "../atoms/NoData";
import Loading from "../atoms/Loading";
import TTeacherCount from "src/types/TeacherCount";
import { v4 as uuidv4 } from "uuid";
import TActiveTab from "src/types/ActiveTab";
import initialActiveTab from "src/static/data/activeTab";

export const Top = () => {
  // Cookie に情報を保存する関数
  const saveToCookie = (key: string, value: string) => {
    document.cookie = `${key}=${value}; expires=${new Date(
      Date.now() + 365 * 24 * 60 * 60 * 1000
    ).toUTCString()}; path=/`;
  };
  // Cookie から情報を読み取る関数
  const readFromCookie = (key: string): string | null => {
    try {
      document.cookie = "SameSite=None; Secure";
      const cookies = decodeURIComponent(document.cookie).split(";");
      for (const cookie of cookies) {
        const [cookieKey, cookieValue] = cookie.trim().split("=");
        if (cookieKey === key) {
          return cookieValue;
        }
      }
      return null;
    } catch (error) {
      return null;
    }
  };

  const [courseParam, setCourseParam] = useState<TCourseParam>(
    () => initialCourseParam
  );
  const [courseCount, setCourseCount] = useState<TCourseCount>();
  const [teacherCount, setTeacherCount] = useState<TTeacherCount>();
  const [courseInfoData, setCourseInfoData] = useState<TCourseInfo[]>([]);
  const [isFilter, setIsFilter] = useState<boolean>(false);
  const [teacherParam, setTeacherParam] = useState<TTeacherParam>(
    () => initialTeacherParam
  );
  const [teacherList, setTeacherList] = useState<TRadarChart[]>([]);
  const [starCodeList, setStarCodeList] = useState<TStarCode[]>([]);

  const [userID, setUserID] = useState<string>("");
  const isStarCode = (code: string): boolean => {
    return starCodeList.some((item) => item.code === code);
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

  const courseParamReset = () => {
    setCourseParam({ ...initialCourseParam, id: userID });
  };
  const changeParamOfMajor = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCourseParam((prevParam) => ({
      ...prevParam,
      major: event.target.value,
      courseOffset: 0,
    }));
  };
  const changeParamOfSeason = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCourseParam((prevParam) => ({
      ...prevParam,
      season: event.target.value,
      courseOffset: 0,
    }));
  };
  const changeParamOfPlace = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCourseParam((prevParam) => ({
      ...prevParam,
      place: event.target.value,
      courseOffset: 0,
    }));
  };
  const changeParamOfYear = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCourseParam((prevParam) => ({
      ...prevParam,
      year: parseInt(event.target.value, 10),
      courseOffset: 0,
    }));
  };

  const changeParamOfClassFormat = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setCourseParam((prevParam) => ({
      ...prevParam,
      classFormat: event.target.value,
      courseOffset: 0,
    }));
  };
  const changeParamOfFavorite = () => {
    if (isFilter) {
      return;
    }
    setCourseParam((prevParam) => ({
      ...prevParam,
      favorite: !prevParam.favorite,
      courseOffset: 0,
    }));
  };

  const addTime = (newTime: string) => {
    setCourseParam((prevParam) => ({
      ...prevParam,
      time: [...prevParam.time, newTime], // 新しい要素を追加
      courseOffset: 0,
    }));
  };
  const removeTime = (timeToRemove: string) => {
    setCourseParam((prevParam) => ({
      ...prevParam,
      time: prevParam.time.filter((time) => time !== timeToRemove), // 該当する要素を削除
      courseOffset: 0,
    }));
  };
  const changeParamOfSortBy = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCourseParam((prevParam) => ({
      ...prevParam,
      sortBy: event.target.value,
      courseOffset: 0,
    }));
  };

  const onFilterClick = () => {
    setIsFilter(!isFilter);
  };
  const onFilterFalse = () => {
    setIsFilter(false);
  };
  const [activeTab, setActiveTab] = useState<TActiveTab>(
    () => initialActiveTab
  ); // 初期値を設定

  const handleTabClick = (tab: string) => {
    if (isFilter) {
      return;
    }
    setActiveTab((prevParam) => ({
      ...prevParam,
      activeTab: tab,
    }));
  };

  const teacherParamOfMajor = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTeacherParam((prevParam) => ({
      ...prevParam,
      major: event.target.value,
      teacherOffset: 0,
    }));
  };

  const handleCourseBackClick = () => {
    window.scrollTo({
      top: 0,
    });
    setCourseParam((prevParam) => ({
      ...prevParam,
      courseOffset: prevParam.courseOffset - 30,
    }));
  };

  const handleCourseNextClick = () => {
    window.scrollTo({
      top: 0,
    });
    setCourseParam((prevParam) => ({
      ...prevParam,
      courseOffset: prevParam.courseOffset + 30,
    }));
  };

  const handleTeacherBackClick = () => {
    window.scrollTo({
      top: 0,
    });
    setTeacherParam((prevParam) => ({
      ...prevParam,
      teacherOffset: prevParam.teacherOffset - 30,
    }));
  };

  const handleTeacherNextClick = () => {
    window.scrollTo({
      top: 0,
    });
    setTeacherParam((prevParam) => ({
      ...prevParam,
      teacherOffset: prevParam.teacherOffset + 30,
    }));
  };

  useEffect(() => {
    const userId = readFromCookie("user");
    if (userId) {
      setUserID(userId);
      const fetchData = async () => {
        const saveCourseParam = await getCourseParamPosts(userId);
        if (saveCourseParam.id === userId) setCourseParam(saveCourseParam);
        else setCourseParam({ ...initialCourseParam, id: userId });
        const saveTeacherParam = await getTeacherParam(userId);
        if (saveTeacherParam.id === userId) setTeacherParam(saveTeacherParam);
        else setTeacherParam({ ...initialTeacherParam, id: userId });
        const saveStarCodeList = await getStarCodePosts(userId);
        if (saveStarCodeList) setStarCodeList(saveStarCodeList);
        const saveActiveTab = await getActiveTabByIdPosts(userId);
        if (saveActiveTab.id === userId) setActiveTab(saveActiveTab);
        else setActiveTab({ ...initialActiveTab, id: userId });
      };
      fetchData();
    } else {
      const id = uuidv4();
      setUserID(id);
      saveToCookie("user", id);
      setCourseParam({ ...initialCourseParam, id: id });
      setTeacherParam({ ...initialTeacherParam, id: id });
      setActiveTab({ ...initialActiveTab, id: id });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (courseParam.id === "") return;
    const fetchData = async () => {
      addCourseParamByIdPosts(courseParam);

      try {
        setCourseLoading(true);
        const param: TFavoriteCourseParam = {
          major: courseParam.major,
          season: courseParam.season,
          place: courseParam.place,
          course_time: courseParam.time,
          sortBy: courseParam.sortBy,
          offset: courseParam.courseOffset,
          favorite: courseParam.favorite,
          year: courseParam.year,
          class_format: courseParam.classFormat,
          code: starCodeList.map((item) => item.code),
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
    if (teacherParam.id === "") return;
    addTeacherParamByIdPosts(teacherParam);
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

  useEffect(() => {
    if (activeTab.id === "") return;
    addActiveTabByIdPosts(activeTab);
  }, [activeTab]);

  return (
    <div className="w-screen h-screen">
      <div
        className={`${isFilter ? "opacity-50" : ""}`}
        onClick={(e) => {
          isFilter ? onFilterFalse() : void 0;
        }}
      >
        <TitleBar
          activeTab={activeTab.activeTab}
          handleTabClick={handleTabClick}
        />
        {activeTab.activeTab === "授業検索" ? (
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
                courseParam.courseOffset === 0 ||
                courseInfoData.length === 0
              }
              isLastData={
                courseInfoData === null ||
                courseParam.courseOffset + 30 >= courseCount?.course_count ||
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
              isFirstData={
                teacherList === null || teacherParam.teacherOffset === 0
              }
              isLastData={
                teacherList === null ||
                teacherParam.teacherOffset + 30 >= teacherCount?.teacher_count
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
