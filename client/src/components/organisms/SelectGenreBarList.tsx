import React from "react";
import { FilterBySelect } from "../molecules/FilterBySelect";
import FilterByTime from "../molecules/FilterByTime";
import TCourseParam from "src/types/CourseParam";
import yearFilter from "src/static/data/yearFilter";
import majorFilter from "src/static/data/majorFilter";
import seasonFilter from "src/static/data/seasonFilter";
import placeFilter from "src/static/data/placeFilter";
import classFormatFilter from "src/static/data/classFormatFilter";
interface SelectGenreBarListProps {
  courseParam: TCourseParam;
  changeParamOfMajor: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  changeParamOfSeason: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  changeParamOfPlace: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  changeParamOfYear: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  changeParamOfClassFormat: (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => void;
  addTime: (newTime: string) => void;
  removeTime: (timeToRemove: string) => void;
  courseParamReset: () => void;
  onFilterFalse: () => void;
}

export const SelectGenreBarList = ({
  courseParam,
  changeParamOfMajor,
  changeParamOfSeason,
  changeParamOfPlace,
  changeParamOfYear,
  changeParamOfClassFormat,
  addTime,
  removeTime,
  courseParamReset,
  onFilterFalse,
}: SelectGenreBarListProps) => {
  return (
    <div className="bg-gray-50 max-h-screen overflow-y-auto max-w-md w-11/12 fixed top-0 right-0">
      <div className="flex justify-between p-2 border-t border-b">
        <button className="text-xl hover:opacity-50" onClick={onFilterFalse}>
          ✖️
        </button>
        <span>絞り込み</span>
        <button
          className="text-purple-300 hover:opacity-50 pr-1"
          onClick={courseParamReset}
        >
          クリア
        </button>
      </div>
      <div>
        <FilterBySelect
          id="学部"
          filter={majorFilter}
          onChange={changeParamOfMajor}
          value={courseParam.major}
        />
        <FilterBySelect
          id="季節"
          filter={seasonFilter}
          onChange={changeParamOfSeason}
          value={courseParam.season}
        />
        <FilterBySelect
          id="場所"
          filter={placeFilter}
          onChange={changeParamOfPlace}
          value={courseParam.place}
        />
        <FilterBySelect
          id="授業形態"
          filter={classFormatFilter}
          onChange={changeParamOfClassFormat}
          value={courseParam.classFormat}
        />
        <FilterBySelect
          id="年度"
          filter={yearFilter}
          onChange={changeParamOfYear}
          value={courseParam.year}
        />
        <FilterByTime
          id="時間"
          addTime={addTime}
          removeTime={removeTime}
          selectedTimes={courseParam.time}
        />
      </div>
      <div className="flex items-center justify-center">
        <button
          onClick={onFilterFalse}
          className="bg-gray-50 p-2.5 hover:opacity-50"
        >
          <div className="text-purple-300">検索する</div>
        </button>
      </div>
    </div>
  );
};

export default SelectGenreBarList;
