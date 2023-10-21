import React from "react";
import Title from "../atoms/Title";
import TabSwitcher from "../molecules/TabSwitcher";
interface TitleBarProps {
  activeTab: string;
  handleTabClick: (tab: React.SetStateAction<string>) => void;
}

export const TitleBar = ({ activeTab, handleTabClick }: TitleBarProps) => {
  return (
    <div className="w-full bg-gray-50 border p-3">
      <Title title="同志社楽単サーチ" />
      <div className="pt-3"></div>
      <TabSwitcher activeTab={activeTab} handleTabClick={handleTabClick} />
    </div>
  );
};

export default TitleBar;
