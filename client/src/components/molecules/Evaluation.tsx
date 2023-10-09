import React from "react";
import TEvaluation from "src/types/Evaluation";

interface EvaluationProps {
  evaluation: TEvaluation;
}

export const Evaluation = ({ evaluation }: EvaluationProps) => {
  return (
    <div className="flex flex-row w-1/3">
      <div className="border w-1/2 p-2 text-center">{evaluation.text}</div>
      <div className="border w-1/2 p-2 text-center">{evaluation.percent}%</div>
    </div>
  );
};

export default Evaluation;
