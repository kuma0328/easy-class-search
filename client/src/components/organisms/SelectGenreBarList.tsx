import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import MajorFilter from "./MajorFilter";
import TFilter from "src/types/Filter";
import FilterByInput from "../molecules/FilterByInput";
import FilterByPeople from "../molecules/FilterByPeople";
import FilterByTime from "../molecules/FilterByTime";
interface SelectGenreBarListProps {
  genreList: string[];
  majorFilter: TFilter[];
  seasonFilter: TFilter[];
  placeFilter: TFilter[];
}

export const SelectGenreBarList = ({
  genreList,
  majorFilter,
  seasonFilter,
  placeFilter,
}: SelectGenreBarListProps) => {
  return (
    <div className="bg-gray-50">
      <div className="flex justify-between p-2 border-t border-b">
        <button className="text-purple-300">クリア</button>
        <span>絞り込み</span>
        <CloseIcon />
      </div>
      <div>
        <MajorFilter id="学部" filter={majorFilter} />
        <MajorFilter id="季節" filter={seasonFilter} />
        <MajorFilter id="場所" filter={placeFilter} />
        <FilterByInput id="コード" />
        <FilterByPeople id="人数" />
        <FilterByTime id="時間" />
      </div>
    </div>
  );
};

export default SelectGenreBarList;
