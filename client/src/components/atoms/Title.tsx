import React from "react";

interface TitleProps {
  title: string;
}

export const Title = ({ title }: TitleProps) => {
  return (
    <>
      <div className="flex flex-row">
        <img
          src="logo.svg"
          alt=""
          className="w-10 h-10 object-contain" // アスペクト比を維持
        />
        <div className="text-2xl font-bold text-gray-800 font-sans">
          {title}
        </div>
      </div>
    </>
  );
};

export default Title;
