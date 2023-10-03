import React from "react";
import SelectGenreBar from "../molecules/SelectGenreBar";

interface SelectGenreBarListProps {
  genreList: string[];
}

export const SelectGenreBarList = ({ genreList }: SelectGenreBarListProps) => {
  return (
    <>
      <div>
        {genreList.map((genre, i) => (
          <SelectGenreBar genre={genre} key={i} />
        ))}
      </div>
    </>
  );
};

export default SelectGenreBarList;
