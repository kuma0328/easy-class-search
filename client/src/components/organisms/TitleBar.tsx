import React from "react";
import Title from "../atoms/Title";
import TabSwitcher from "../molecules/TabSwitcher";
interface TitleBarProps {}

export const TitleBar = ({}: TitleBarProps) => {
  return (
    <div className="w-full bg-gray-50 border p-3 sticky top-0 max-w-6xl">
      <Title title="同志社楽単サーチ" />
      <div className="pt-3"></div>
      <TabSwitcher />
    </div>
  );
};

export default TitleBar;
