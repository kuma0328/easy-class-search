import React, { useState } from "react";

export const TabSwitcher = () => {
  const [activeTab, setActiveTab] = useState("授業検索"); // 初期値を設定

  const tabs = ["授業検索", "先生検索", "お気に入り"]; // タブのタイトルを定義

  const handleTabClick = (tab: React.SetStateAction<string>) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="flex space-x-1">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className="rounded-lg border w-1/3 p-2"
          >
            {tab}
          </button>
        ))}
      </div>
      <div>{activeTab}</div>
    </div>
  );
};

export default TabSwitcher;
