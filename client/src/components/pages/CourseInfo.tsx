import React from "react";
import { useParams } from "react-router-dom";

interface CourseInfoProps {}

export const CourseInfo = ({}: CourseInfoProps) => {
  const { id } = useParams<{ id: string }>();

  return (
    <>
      <div>
        <h1>{id}</h1>
      </div>
    </>
  );
};

export default CourseInfo;
