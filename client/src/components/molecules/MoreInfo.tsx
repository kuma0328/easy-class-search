import React from "react";

interface MoreInfoProps {
  handleBackClick: () => void;
  handleNextClick: () => void;
}

export const MoreInfo = ({
  handleNextClick,
  handleBackClick,
}: MoreInfoProps) => {
  return (
    <>
      <div className="flex justify-between bg-purple-50 p-2">
        <button
          onClick={handleBackClick}
          className="bg-white text-purple-200 px-4 py-2 rounded"
        >
          前へ
        </button>
        <button
          onClick={handleNextClick}
          className="bg-white text-purple-200 px-4 py-2 rounded"
        >
          次へ
        </button>
      </div>
    </>
  );
};

export default MoreInfo;
