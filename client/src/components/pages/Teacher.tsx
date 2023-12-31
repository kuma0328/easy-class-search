import { useEffect, useState } from "react";
import initialTeacherParam from "src/static/data/teacherParam";
import TRadarChart from "src/types/RadarChart";
import TTeacherCount from "src/types/TeacherCount";
import TTeacherParam from "src/types/TeacherParam";
import TeacherColmuns from "../organisms/TeacherColmuns";
import Loading from "../atoms/Loading";
import NoData from "../atoms/NoData";
import MoreInfo from "../molecules/MoreInfo";
import TeacherList from "../organisms/TeacherList";
import Footer from "../molecules/Footer";
import TitleBar from "../organisms/TitleBar";
import { getTeacherCount, getTeacherGrades } from "src/api/get";
import { postTeacherParamById } from "src/api/post";
export const Teacher = () => {
  const [teacherList, setTeacherList] = useState<TRadarChart[]>([]);
  const [teacherParam, setTeacherParam] = useState<TTeacherParam>(
    () => initialTeacherParam
  );
  const [teacherCount, setTeacherCount] = useState<TTeacherCount>();
  const [teacherLoading, setTeacherLoading] = useState(false);

  const teacherParamOfMajor = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTeacherParam((prevParam) => ({
      ...prevParam,
      major: event.target.value,
      teacherOffset: 0,
    }));
    setTeacherLoading(true);
  };
  const handleTeacherBackClick = () => {
    window.scrollTo({
      top: 0,
    });
    setTeacherParam((prevParam) => ({
      ...prevParam,
      teacherOffset: prevParam.teacherOffset - 30,
    }));
    setTeacherLoading(true);
  };

  const handleTeacherNextClick = () => {
    window.scrollTo({
      top: 0,
    });
    setTeacherParam((prevParam) => ({
      ...prevParam,
      teacherOffset: prevParam.teacherOffset + 30,
    }));
    setTeacherLoading(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      const cacheTeacherParam = localStorage.getItem("teacherParam");
      if (cacheTeacherParam) {
        setTeacherParam(JSON.parse(cacheTeacherParam));
      } else {
        setTeacherParam(initialTeacherParam);
        localStorage.setItem(
          "teacherParam",
          JSON.stringify(initialTeacherParam)
        );
      }

      const cacheTeacherInfo = localStorage.getItem("teacherInfo");
      if (cacheTeacherInfo) {
        setTeacherList(JSON.parse(cacheTeacherInfo));
      } else {
        setTeacherLoading(true);
        const teacherInfo = await getTeacherGrades(initialTeacherParam);
        setTeacherList(teacherInfo);
        localStorage.setItem("teacherInfo", JSON.stringify(teacherInfo));
        setTeacherLoading(false);
      }

      const cacheTeacherCount = localStorage.getItem("teacherCount");
      if (cacheTeacherCount) {
        setTeacherCount(JSON.parse(cacheTeacherCount));
      } else {
        setTeacherLoading(true);
        const teacherCount = await getTeacherCount(initialTeacherParam);
        setTeacherCount(teacherCount);
        localStorage.setItem("teacherCount", JSON.stringify(teacherCount));
        setTeacherLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setTeacherLoading(true);
        const teacherCount = await getTeacherCount(teacherParam);
        setTeacherCount(teacherCount);
        localStorage.setItem("teacherCount", JSON.stringify(teacherCount));
        const teacherInfo = await getTeacherGrades(teacherParam);
        setTeacherList(teacherInfo);
        localStorage.setItem("teacherInfo", JSON.stringify(teacherInfo));
      } catch (error) {
        console.log(error);
      } finally {
        setTeacherLoading(false);
      }
    };
    if (teacherLoading) {
      localStorage.setItem("teacherParam", JSON.stringify(teacherParam));
      fetchData();
    }
  }, [teacherLoading, teacherParam]);

  return (
    <div className="w-screen h-screen">
      <TitleBar activeTab="先生検索" />
      <div>
        <TeacherColmuns
          majorText={teacherParam.major}
          changeParamOfMajor={teacherParamOfMajor}
        />
        {teacherLoading ? (
          <Loading />
        ) : (
          <>
            {teacherList ? (
              <TeacherList teacherList={teacherList} />
            ) : (
              <NoData />
            )}
          </>
        )}
        <MoreInfo
          handleBackClick={handleTeacherBackClick}
          handleNextClick={handleTeacherNextClick}
          isFirstData={
            teacherList === null ||
            teacherParam.teacherOffset === 0 ||
            teacherList.length === 0
          }
          isLastData={
            teacherList === null ||
            teacherParam.teacherOffset + 30 >= teacherCount?.teacher_count ||
            teacherList.length === 0
          }
        />
      </div>
      <Footer />
    </div>
  );
};

export default Teacher;
