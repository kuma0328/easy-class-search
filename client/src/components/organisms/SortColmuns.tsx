import React from "react";
import SortButton from "../atoms/SortButton";
import { FilterButton } from "../atoms/FilterButton";
import TabSwitcher from "../molecules/TabSwitcher";
import TitleBar from "./TitleBar";

interface SortColmunsProps {
  text: string;
}

export const SortColmuns = ({ text }: SortColmunsProps) => {
  return (
    <>
      <div className="w-full bg-gray-50 border p-3 sticky top-0 max-w-6xl">
        <TitleBar />
        <div className="p-3 right-0 flex flex-row-reverse">
          <SortButton text={text} />
          <div className="pr-2"></div>
          <FilterButton />
        </div>
      </div>
    </>
  );
};

export default SortColmuns;
