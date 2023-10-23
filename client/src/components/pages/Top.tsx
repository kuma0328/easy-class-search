import React, { useEffect, useState } from "react";
import { getCourseInfoPosts } from "src/api/post";
import TCourseInfo from "src/types/Course";
import CourseList from "../organisms/CourseList";
import TitleBar from "../organisms/TitleBar";
import SortColmuns from "../organisms/SortColmuns";
import SelectGenreBarList from "../organisms/SelectGenreBarList";
import majorFilter from "src/static/data/majorFilter";
import seasonFilter from "src/static/data/seasonFilter";
import placeFilter from "src/static/data/placeFilter";
import TCourseParam from "src/types/CourseParam";
import initialCourseParam from "src/static/data/courseParam";
import TeacherList from "../organisms/TeacherList";
import teacherList from "src/static/data/demoteacherList";
import TTeacherParam from "src/types/TeacherParam";
import initialTeacherParam from "src/static/data/teacherParam";
import TeacherColmuns from "../organisms/TeacherColmuns";
import MoreInfo from "../molecules/MoreInfo";
import Footer from "../molecules/Footer";

export const Top = () => {
  const [courseInfoData, setCourseInfoData] = useState<TCourseInfo[]>([]);
  const [isFilter, setIsFilter] = useState<boolean>(false);
  const [courseParam, setCourseParam] =
    useState<TCourseParam>(initialCourseParam);
  const [teacherParam, setTeacherParam] =
    useState<TTeacherParam>(initialTeacherParam);

  const courseParamReset = () => {
    setCourseParam(initialCourseParam);
  };
  const changeParamOfMajor = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCourseParam({
      ...courseParam,
      major: event.target.value,
    });
  };
  const changeParamOfSeason = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCourseParam({
      ...courseParam,
      season: event.target.value,
    });
  };
  const changeParamOfPlace = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCourseParam({
      ...courseParam,
      place: event.target.value,
    });
  };
  const changeParamOfCode = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCourseParam({
      ...courseParam,
      code: event.target.value,
    });
  };
  const addTime = (newTime: string) => {
    setCourseParam((prevParam) => ({
      ...prevParam,
      time: [...prevParam.time, newTime], // 新しい要素を追加
    }));
  };
  const removeTime = (timeToRemove: string) => {
    setCourseParam((prevParam) => ({
      ...prevParam,
      time: prevParam.time.filter((time) => time !== timeToRemove), // 該当する要素を削除
    }));
  };
  const changeParamOfPeopleMin = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const peopleMinValue = parseInt(event.target.value, 10);
    setCourseParam({
      ...courseParam,
      peopleMin: peopleMinValue,
    });
  };
  const changeParamOfPeopleMax = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const peopleMaxValue = parseInt(event.target.value, 10);
    setCourseParam({
      ...courseParam,
      peopleMax: peopleMaxValue,
    });
  };
  const changeParamOfSortBy = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCourseParam({
      ...courseParam,
      sortBy: event.target.value,
    });
  };
  const changeParamOfTeacher = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCourseParam({
      ...courseParam,
      teacher: event.target.value,
    });
  };
  const onFilterClick = () => {
    setIsFilter(!isFilter);
  };
  const onFilterFalse = () => {
    setIsFilter(false);
  };
  const [activeTab, setActiveTab] = useState("授業検索"); // 初期値を設定

  const handleTabClick = (tab: React.SetStateAction<string>) => {
    setActiveTab(tab);
  };

  const teacherParamOfSortBy = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setTeacherParam({
      ...teacherParam,
      sortBy: event.target.value,
    });
  };

  const teacherParamOfMajor = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTeacherParam({
      ...teacherParam,
      major: event.target.value,
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getCourseInfoPosts();
        setCourseInfoData(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  });
  return (
    <>
      <div className="bg-white w-screen h-screen">
        <div className="flex items-center justify-center">
          <div className="relative flex">
            <div
              className={`${isFilter ? "opacity-50" : ""}`}
              onClick={isFilter ? onFilterFalse : () => void 0}
            >
              <TitleBar activeTab={activeTab} handleTabClick={handleTabClick} />
              {activeTab === "授業検索" ? (
                <>
                  <SortColmuns
                    text={courseParam.sortBy}
                    onFilterClick={onFilterClick}
                    changeParamOfSortBy={changeParamOfSortBy}
                  />
                  <CourseList courseList={courseInfoData} />
                  <MoreInfo
                    handleBackClick={() => {}}
                    handleNextClick={() => {}}
                  />
                </>
              ) : (
                <>
                  <TeacherColmuns
                    sortText={teacherParam.sortBy}
                    majorText={teacherParam.major}
                    changeParamOfMajor={teacherParamOfMajor}
                    changeParamOfSortBy={teacherParamOfSortBy}
                  />
                  <TeacherList teacherList={teacherList} />
                  <MoreInfo
                    handleBackClick={() => {}}
                    handleNextClick={() => {}}
                  />
                </>
              )}
              <Footer />
            </div>
            {isFilter ? (
              <div className="fixed right-0 top-0 max-w-md w-4/5">
                <div className="max-h-screen overflow-y-auto">
                  <SelectGenreBarList
                    majorFilter={majorFilter}
                    seasonFilter={seasonFilter}
                    placeFilter={placeFilter}
                    courseParam={courseParam}
                    changeParamOfMajor={changeParamOfMajor}
                    changeParamOfSeason={changeParamOfSeason}
                    changeParamOfPlace={changeParamOfPlace}
                    changeParamOfCode={changeParamOfCode}
                    changeParamOfPeopleMax={changeParamOfPeopleMax}
                    changeParamOfPeopleMin={changeParamOfPeopleMin}
                    changeParamOfTeacher={changeParamOfTeacher}
                    addTime={addTime}
                    removeTime={removeTime}
                    courseParamReset={courseParamReset}
                    onFilterFalse={onFilterFalse}
                  />
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Top;
