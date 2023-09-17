import React from "react";
import FilterClass from "../organisms/FilterClass";
import TitleBar from "../molecules/TitleBar";
import ClassList from "../organisms/ClassList";
import TClass from "@/types/Class";

interface MainPageProps {
  classList: TClass[];
}

export const MainPage = ({ classList }: MainPageProps) => {
  return (
    <>
      <TitleBar />
      <FilterClass />
      <ClassList classList={classList} />
    </>
  );
};

export default MainPage;
