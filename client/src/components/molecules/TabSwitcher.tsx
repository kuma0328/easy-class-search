interface TabSwitcherProps {
  activeTab: string;
  handleTabClick: (tab: React.SetStateAction<string>) => void;
}

export const TabSwitcher = ({
  activeTab,
  handleTabClick,
}: TabSwitcherProps) => {
  const tabs = ["授業検索", "先生検索"]; // タブのタイトルを定義

  return (
    <div>
      <div className="flex space-x-1">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`rounded-lg border w-1/2 p-2 hover:bg-gray-100 text-gray-600 font-bold ${
              activeTab === tab ? "bg-gray-200 text-gray-900" : "bg-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TabSwitcher;
