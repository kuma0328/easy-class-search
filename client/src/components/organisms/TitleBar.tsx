import React from "react";
import Title from "../atoms/Title";
import TabSwitcher from "../molecules/TabSwitcher";
interface TitleBarProps {
  activeTab: string;
}

export const TitleBar = ({ activeTab }: TitleBarProps) => {
  return (
    <div className=" bg-gray-50 border p-3">
      <Title title="同志社楽単サーチ" />
      <div className="pt-3"></div>
      <TabSwitcher activeTab={activeTab} />
    </div>
  );
};

export default TitleBar;
