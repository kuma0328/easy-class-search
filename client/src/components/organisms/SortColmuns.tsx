import React from "react";
import SortButton from "../atoms/SortButton";
import { FilterButton } from "../atoms/FilterButton";
import TabSwitcher from "../molecules/TabSwitcher";

interface SortColmunsProps {
  text: string;
}

export const SortColmuns = ({ text }: SortColmunsProps) => {
  return (
    <>
      <div className="border p-3">
        <TabSwitcher />
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
