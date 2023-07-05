import React, { useState } from "react";

interface EvaluationProps {
  text: string;
  description: string;
  rate: number;
}

export const Evaluation = ({ text, description, rate }: EvaluationProps) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const onHoverEnter = () => {
    setIsHover(true);
  };
  const onHoverLeave = () => {
    setIsHover(false);
  };
  return (
    <>
      <div className="flex flex-col">
        <div>
          <span
            className="rounded-full bg-gray-200 p-2 hover:bg-gray-400"
            onMouseEnter={onHoverEnter}
            onMouseLeave={onHoverLeave}
          >
            {text}
          </span>
          <span className="ml-2">{rate}%</span>
        </div>
        <div>
          {isHover ? (
            <span className=" border border-gray-400 rounded-full p-1 bg-gray-200 mt-2 text-gray-500 absolute">
              {description}
            </span>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Evaluation;
