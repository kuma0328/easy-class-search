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
        className={` h-16 flex items-center justify-center border ${
          isClick ? "bg-gray-500" : "bg-gray-300 hover:bg-gray-400"
        }`}
        onClick={onClick}
      >
        {text}
      </div>
    </>
  );
};

export default TimeCheckBox;
