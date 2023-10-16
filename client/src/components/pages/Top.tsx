import { useEffect, useState } from "react";
import { getCourseInfoPosts } from "src/api/post";
import TCourseInfo from "src/types/Course";
import CourseList from "../organisms/CourseList";
import TitleBar from "../organisms/TitleBar";
import SortColmuns from "../organisms/SortColmuns";
import SelectGenreBarList from "../organisms/SelectGenreBarList";
import TFilter from "src/types/Filter";
import majorFilter from "src/static/text/majorFilter";
import seasonFilter from "src/static/text/seasonFilter";
import placeFilter from "src/static/text/placeFilter";
export const Top = () => {
  const [courseInfoData, setCourseInfoData] = useState<TCourseInfo[]>([]);
  const [isFilter, setIsFilter] = useState<boolean>(false);

  const onFilterClick = () => {
    setIsFilter(!isFilter);
  };

  const onFilterFalse = () => {
    setIsFilter(false);
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
              <TitleBar />
              <SortColmuns text="F率昇順" onFilterClick={onFilterClick} />
              <CourseList courseList={courseInfoData} />
            </div>
            {isFilter ? (
              <div className="fixed right-0 top-0 max-w-md w-4/5">
                <div className="max-h-screen overflow-y-auto">
                  <SelectGenreBarList
                    genreList={["学部", "年度", "人数", "場所", "季節"]}
                    majorFilter={majorFilter}
                    seasonFilter={seasonFilter}
                    placeFilter={placeFilter}
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
