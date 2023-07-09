import React from "react";

interface TitleBarProps {}

export const TitleBar = ({}: TitleBarProps) => {
  const Title = "同志社楽単サーチ";

  return (
    <>
      <div>
        <span className=" text-violet-500 text-xl">{Title}</span>
      </div>
    </>
  );
};

export default TitleBar;
