import React, { useEffect, useState } from "react";
import TCourseInfo from "src/types/Course";
import CourseList from "../organisms/CourseList";
import TitleBar from "../organisms/TitleBar";
import SortColmuns from "../organisms/SortColmuns";
import SelectGenreBarList from "../organisms/SelectGenreBarList";
import TCourseParam from "src/types/CourseParam";
import initialCourseParam from "src/static/data/courseParam";
import MoreInfo from "../molecules/MoreInfo";
import Footer from "../molecules/Footer";
import TFavoriteCourseParam from "src/types/FavoriteCourseParam";
import TCourseCount from "src/types/CourseCount";
import NoData from "../atoms/NoData";
import Loading from "../atoms/Loading";
import { v4 as uuidv4 } from "uuid";
import { deleteStarCode } from "src/api/delete";
import { postStarCode } from "src/api/post";
import { getCourseCount, getCourseInfo } from "src/api/get";
import initialFavoriteCourseParam from "src/static/data/favoriteCourseParam";

export const Top = () => {
  const [courseParam, setCourseParam] = useState<TCourseParam>(
    () => initialCourseParam
  );
  const [courseCount, setCourseCount] = useState<TCourseCount>();
  const [courseInfoData, setCourseInfoData] = useState<TCourseInfo[]>([]);
  const [isFilter, setIsFilter] = useState<boolean>(false);
  const [starCodeList, setStarCodeList] = useState<TStarCode[]>([]);

  const [userID, setUserID] = useState<string>("");
  const isStarCode = (code: string): boolean => {
    return starCodeList.some((item) => item.code === code);
  };

  const [courseLoading, setCourseLoading] = useState(false);

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
        deleteStarCode({
          id: userID,
          code: clickCode,
        });
        return prevList.filter((item) => item.code !== clickCode);
      } else {
        // clickCode が starCodeList に存在しない場合は追加
        postStarCode({ id: userID, code: clickCode });
        return [...prevList, { id: userID, code: clickCode }];
      }
    });
    localStorage.setItem("starCodeList", JSON.stringify(starCodeList));
  };

  const courseParamReset = () => {
    setCourseParam({ ...initialCourseParam, id: userID });
    setCourseLoading(true);
  };
  const changeParamOfMajor = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCourseParam((prevParam) => ({
      ...prevParam,
      major: event.target.value,
      courseOffset: 0,
    }));
    setCourseLoading(true);
  };
  const changeParamOfSeason = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCourseParam((prevParam) => ({
      ...prevParam,
      season: event.target.value,
      courseOffset: 0,
    }));
    setCourseLoading(true);
  };
  const changeParamOfPlace = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCourseParam((prevParam) => ({
      ...prevParam,
      place: event.target.value,
      courseOffset: 0,
    }));
    setCourseLoading(true);
  };
  const changeParamOfYear = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCourseParam((prevParam) => ({
      ...prevParam,
      year: parseInt(event.target.value, 10),
      courseOffset: 0,
    }));
    setCourseLoading(true);
  };

  const changeParamOfClassFormat = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setCourseParam((prevParam) => ({
      ...prevParam,
      classFormat: event.target.value,
      courseOffset: 0,
    }));
    setCourseLoading(true);
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
    setCourseLoading(true);
  };

  const addTime = (newTime: string) => {
    setCourseParam((prevParam) => ({
      ...prevParam,
      time: [...prevParam.time, newTime], // 新しい要素を追加
      courseOffset: 0,
    }));
    setCourseLoading(true);
  };
  const removeTime = (timeToRemove: string) => {
    setCourseParam((prevParam) => ({
      ...prevParam,
      time: prevParam.time.filter((time) => time !== timeToRemove), // 該当する要素を削除
      courseOffset: 0,
    }));
    setCourseLoading(true);
  };
  const changeParamOfSortBy = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCourseParam((prevParam) => ({
      ...prevParam,
      sortBy: event.target.value,
      courseOffset: 0,
    }));
    setCourseLoading(true);
  };

  const onFilterClick = () => {
    setIsFilter(!isFilter);
  };
  const onFilterFalse = () => {
    setIsFilter(false);
  };

  const handleCourseBackClick = () => {
    window.scrollTo({
      top: 0,
    });
    setCourseParam((prevParam) => ({
      ...prevParam,
      courseOffset: prevParam.courseOffset - 30,
    }));
    setCourseLoading(true);
  };

  const handleCourseNextClick = () => {
    window.scrollTo({
      top: 0,
    });
    setCourseParam((prevParam) => ({
      ...prevParam,
      courseOffset: prevParam.courseOffset + 30,
    }));
    setCourseLoading(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      const cacheCourseInfo = localStorage.getItem("courseData");
      if (cacheCourseInfo) {
        setCourseInfoData(JSON.parse(cacheCourseInfo));
      } else {
        setCourseLoading(true);
        const courseInfo = await getCourseInfo(initialFavoriteCourseParam);
        setCourseInfoData(courseInfo);
        localStorage.setItem("courseData", JSON.stringify(courseInfo));
        setCourseLoading(false);
      }

      const cacheCourseParam = localStorage.getItem("courseParam");
      if (cacheCourseParam) {
        setCourseParam(JSON.parse(cacheCourseParam));
      } else {
        setCourseParam(initialCourseParam);
        localStorage.setItem("courseParam", JSON.stringify(initialCourseParam));
      }

      const cacheCourseCount = localStorage.getItem("courseCount");
      if (cacheCourseCount) {
        setCourseCount(JSON.parse(cacheCourseCount));
      } else {
        setCourseLoading(true);
        const courseCount = await getCourseCount(initialFavoriteCourseParam);
        setCourseCount(courseCount);
        localStorage.setItem("courseCount", JSON.stringify(courseCount));
        setCourseLoading(false);
      }

      const cacheStarCodeList = localStorage.getItem("starCodeList");
      if (cacheStarCodeList) {
        setStarCodeList(JSON.parse(cacheStarCodeList));
      }

      const cacheUserID = localStorage.getItem("userID");
      if (cacheUserID) {
        setUserID(JSON.parse(cacheUserID));
      } else {
        const newID = uuidv4();
        setUserID(newID);
        localStorage.setItem("userID", JSON.stringify(newID));
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
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
        const courseCount = await getCourseCount(param);
        setCourseCount(courseCount);
        localStorage.setItem("courseCount", JSON.stringify(courseCount));
        const courseInfo = await getCourseInfo(param);
        setCourseInfoData(courseInfo);
        localStorage.setItem("courseData", JSON.stringify(courseInfo));
      } catch (error) {
        console.log(error);
      } finally {
        setCourseLoading(false);
      }
    };
    if (courseLoading) {
      localStorage.setItem("courseParam", JSON.stringify(courseParam));
      fetchData();
    }
  }, [courseLoading, courseParam, starCodeList]);

  return (
    <div className="w-screen h-screen">
      <div
        className={`${isFilter ? "opacity-50" : ""}`}
        onClick={(e) => {
          isFilter ? onFilterFalse() : void 0;
        }}
      >
        <TitleBar activeTab={"授業検索"} />
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
