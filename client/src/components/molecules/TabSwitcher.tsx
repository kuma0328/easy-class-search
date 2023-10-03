import React, { useState } from "react";

export const TabSwitcher = () => {
  const [activeTab, setActiveTab] = useState("授業検索"); // 初期値を設定

  const tabs = ["授業検索", "先生検索"]; // タブのタイトルを定義

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
            className="rounded-lg border w-1/2 p-2 hover:bg-gray-100 text-gray-600 font-bold bg-white"
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TabSwitcher;
