import React from "react";
import { FilterBySelect } from "../molecules/FilterBySelect";
import TFilter from "src/types/Filter";
import FilterByInput from "../molecules/FilterByInput";
import FilterByPeople from "../molecules/FilterByPeople";
import FilterByTime from "../molecules/FilterByTime";
import TCourseParam from "src/types/CourseParam";
import FilterByTeacher from "../molecules/FilterByTeacher";
interface SelectGenreBarListProps {
  majorFilter: TFilter[];
  seasonFilter: TFilter[];
  placeFilter: TFilter[];
  courseParam: TCourseParam;
  changeParamOfMajor: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  changeParamOfSeason: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  changeParamOfPlace: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  changeParamOfCode: (event: React.ChangeEvent<HTMLInputElement>) => void;
  changeParamOfPeopleMin: (event: React.ChangeEvent<HTMLInputElement>) => void;
  changeParamOfPeopleMax: (event: React.ChangeEvent<HTMLInputElement>) => void;
  changeParamOfTeacher: (event: React.ChangeEvent<HTMLInputElement>) => void;
  addTime: (newTime: string) => void;
  removeTime: (timeToRemove: string) => void;
  courseParamReset: () => void;
  onFilterFalse: () => void;
}

export const SelectGenreBarList = ({
  majorFilter,
  seasonFilter,
  placeFilter,
  courseParam,
  changeParamOfMajor,
  changeParamOfSeason,
  changeParamOfPlace,
  changeParamOfCode,
  changeParamOfPeopleMax,
  changeParamOfPeopleMin,
  changeParamOfTeacher,
  addTime,
  removeTime,
  courseParamReset,
  onFilterFalse,
}: SelectGenreBarListProps) => {
  return (
    <div className="bg-gray-50">
      <div className="flex justify-between p-2 border-t border-b">
        <div className="text-xl hover:opacity-50" onClick={onFilterFalse}>
          ✖️
        </div>
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
        <FilterByTeacher
          id="先生"
          changeParamOfTeacher={changeParamOfTeacher}
          value={courseParam.teacher}
        />
        <FilterByInput
          id="コード"
          changeParamOfCode={changeParamOfCode}
          value={courseParam.code}
        />
        <FilterByPeople
          id="人数"
          changeParamOfPeopleMax={changeParamOfPeopleMax}
          changeParamOfPeopleMin={changeParamOfPeopleMin}
          minValue={courseParam.peopleMin}
          maxValue={courseParam.peopleMax}
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
          className="bg-gray-50 p-2.5 hover:opacity-50 w-full"
        >
          <div className="text-purple-300">検索する</div>
        </button>
      </div>
    </div>
  );
};

export default SelectGenreBarList;
