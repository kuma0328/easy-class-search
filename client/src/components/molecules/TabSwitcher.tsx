import { Link } from "react-router-dom";

interface TabSwitcherProps {
  activeTab: string;
}

export const TabSwitcher = ({ activeTab }: TabSwitcherProps) => {
  const classSearch = "授業検索";
  const teacherSearch = "先生検索";
  return (
    <div>
      <div className="flex space-x-1">
        <Link
          to={"/"}
          className={`rounded-lg border w-1/2 p-2 hover:bg-gray-100 text-gray-600 font-bold flex items-center justify-center ${
            activeTab === classSearch ? "bg-gray-200 text-gray-900" : "bg-white"
          }`}
        >
          {classSearch}
        </Link>
        <Link
          to={"/teacher"}
          className={`rounded-lg border w-1/2 p-2 hover:bg-gray-100 text-gray-600 font-bold flex items-center justify-center ${
            activeTab === teacherSearch
              ? "bg-gray-200 text-gray-900"
              : "bg-white"
          }`}
        >
          {teacherSearch}
        </Link>
      </div>
    </div>
  );
};

export default TabSwitcher;
