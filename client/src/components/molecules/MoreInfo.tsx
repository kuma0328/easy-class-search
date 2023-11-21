import React from "react";

interface MoreInfoProps {
  handleBackClick: () => void;
  handleNextClick: () => void;
  isFirstData: boolean;
  isLastData: boolean;
}

export const MoreInfo = ({
  handleNextClick,
  handleBackClick,
  isFirstData,
  isLastData,
}: MoreInfoProps) => {
  return (
    <>
      <div className="flex justify-between bg-purple-50 p-2">
        {!isFirstData ? (
          <button
            onClick={handleBackClick}
            className="bg-white text-purple-200 px-4 py-2 rounded"
          >
            前へ
          </button>
        ) : (
          <div></div>
        )}
        {!isLastData ? (
          <button
            onClick={handleNextClick}
            className="bg-white text-purple-200 px-4 py-2 rounded"
          >
            次へ
          </button>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
};

export default MoreInfo;
