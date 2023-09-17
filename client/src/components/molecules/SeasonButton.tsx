import React, { useState } from "react";

import DateRangeIcon from "@mui/icons-material/DateRange";
interface SeasonButtonProps {}

export const SeasonButton = ({}: SeasonButtonProps) => {
  const [seasonText, setSeasonText] = useState<string>("全て");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const seasonList: string[] = ["全て", "春", "秋"];

  const onClickOpen = () => {
    setIsOpen(!isOpen);
  };

  const selectText = (text: string) => {
    setSeasonText(text);
    setIsOpen(false);
  };

  return (
    <>
      <div className="flex justify-center">
        <button
          onClick={onClickOpen}
          className="p-1 rounded-md hover:bg-purple-100"
        >
          <DateRangeIcon color="secondary" />
          <span className="px-2 text-purple-500 flex justify-center">
            {seasonText}
          </span>
        </button>
        {isOpen ? (
          <div className="bg-gray-100 border border-gray-300 mt-1 rounded-lg text-sm text-gray-900 p-2.5 w-fit absolute">
            {seasonList.map((value) => (
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

export default SeasonButton;
