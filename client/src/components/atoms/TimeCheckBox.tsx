import React, { useState } from "react";

interface TimeCheckBoxProps {
  text: string;
}

export const TimeCheckBox = ({ text }: TimeCheckBoxProps) => {
  const [isClick, setIsClick] = useState<boolean>(false);

  const onClick = () => {
    setIsClick(!isClick);
  };

  return (
    <>
      <div
        className={` h-11 flex items-center justify-center border ${
          isClick ? "bg-purple-300" : "bg-gray-300 hover:bg-gray-400"
        }`}
        onClick={onClick}
      >
        {text}
      </div>
    </>
  );
};

export default TimeCheckBox;
