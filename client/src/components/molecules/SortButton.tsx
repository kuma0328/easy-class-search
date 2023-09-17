import React, { useState } from "react";
import ImportExportIcon from "@mui/icons-material/ImportExport";
interface SortButtonProps {}

export const SortButton = ({}: SortButtonProps) => {
  const [sortText, setSortText] = useState<string>("F率昇順");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const sortList: string[] = ["F率昇順", "F率降順", "A率昇順", "A率降順"];

  const onClickOpen = () => {
    setIsOpen(!isOpen);
  };

  const selectText = (text: string) => {
    setSortText(text);
    setIsOpen(false);
  };

  return (
    <>
      <div className="flex justify-center">
        <button
          onClick={onClickOpen}
          className="p-1 rounded-md hover:bg-purple-100"
        >
          <ImportExportIcon color="secondary" />
          <span className="px-2 text-purple-500 flex justify-center">
            {sortText}
          </span>
        </button>
        {isOpen ? (
          <div className="bg-gray-100 border border-gray-300 mt-1 rounded-lg text-sm text-gray-900 p-2.5 w-fit absolute">
            {sortList.map((value) => (
              <div
                key={value}
                onClick={() => selectText(value)}
                className="hover:bg-gray-300 block text-gray-500 p-1"
              >
                <span>{value}</span>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </>
  );
};

export default SortButton;
