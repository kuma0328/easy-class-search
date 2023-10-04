import React from "react";
import SortIcon from "@mui/icons-material/Sort";
interface SortButtonProps {
  text: string;
}

export const SortButton = ({ text }: SortButtonProps) => {
  return (
    <>
      <button className="border p-3 rounded-full">
        <SortIcon />
        <span>{text}</span>
      </button>
    </>
  );
};

export default SortButton;
