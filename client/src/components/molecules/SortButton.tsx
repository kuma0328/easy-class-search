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
      <button
        onClick={onClickOpen}
        className="p-1 rounded-md hover:bg-blue-100"
      >
        <ImportExportIcon color="primary" />
        <span className="px-2 text-blue-300">{sortText}</span>
      </button>
      {isOpen ? (
        <div className="bg-gray-100 border border-gray-300 mt-1 rounded-lg text-sm text-gray-900 p-2.5 w-fit">
          {sortList.map((value) => (
            <div
              key={value}
              onClick={() => selectText(value)}
              className="hover:bg-gray-300 block text-gray-500"
            >
              <span>{value}</span>
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
};

export default SortButton;
