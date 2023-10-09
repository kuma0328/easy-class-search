import React from "react";
import TEvaluation from "src/types/Evaluation";
import Evaluation from "../molecules/Evaluation";

interface EvaluationListProps {
  evaluationList: TEvaluation[];
}

export const EvaluationList = ({ evaluationList }: EvaluationListProps) => {
  return (
    <>
      {evaluationList.map((item, index) => (
        <Evaluation evaluation={item} key={index} />
      ))}
    </>
  );
};

export default EvaluationList;
