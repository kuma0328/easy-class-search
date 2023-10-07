import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSyllabusPosts } from "src/api/post";
import TSyllabus from "src/types/Syllabus";

interface CourseInfoProps {}

export const CourseInfo = ({}: CourseInfoProps) => {
  const { id } = useParams<{ id: string }>();
  const [syllabusData, setSyllabusData] = useState<TSyllabus[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getSyllabusPosts(id);
        setSyllabusData(res);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData(); // fetchData 関数を呼び出す
  }, [id]);

  return (
    <>
      <div>
        <h1>{id}</h1>
        {syllabusData
          ? syllabusData.map((item, index) => (
              <h1 key={index}>{item.syllabus}</h1>
            ))
          : null}
      </div>
    </>
  );
};

export default CourseInfo;
