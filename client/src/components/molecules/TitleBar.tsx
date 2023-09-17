import React from "react";
import SortButton from "./SortButton";
import LocationButton from "./LocationButton";
import SeasonButton from "./SeasonButton";

interface TitleBarProps {}

export const TitleBar = ({}: TitleBarProps) => {
  const Title = "同志社楽単サーチ";

  return (
    <>
      <div className="bg-gray-100 rounded-lg p-5">
        <span className=" text-violet-500 text-xl">{Title}</span>
        <div className="flex mt-2">
          <div className="mt-2 w-1/3">
            <SortButton />
          </div>
          <div className="mt-2 w-1/3">
            <LocationButton />
          </div>
          <div className="mt-2 w-1/3">
            <SeasonButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default TitleBar;
