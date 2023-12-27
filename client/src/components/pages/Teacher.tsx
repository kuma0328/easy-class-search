import { useEffect, useState } from "react";
import initialTeacherParam from "src/static/data/teacherParam";
import TRadarChart from "src/types/RadarChart";
import TTeacherCount from "src/types/TeacherCount";
import TTeacherParam from "src/types/TeacherParam";
import { v4 as uuidv4 } from "uuid";
import TeacherColmuns from "../organisms/TeacherColmuns";
import Loading from "../atoms/Loading";
import NoData from "../atoms/NoData";
import MoreInfo from "../molecules/MoreInfo";
import TeacherList from "../organisms/TeacherList";
import Footer from "../molecules/Footer";
import TitleBar from "../organisms/TitleBar";
import {
  getTeacherCount,
  getTeacherGrades,
  getTeacherParam,
} from "src/api/get";
import { postTeacherParamById } from "src/api/post";
export const Teacher = () => {
  // Cookie から情報を読み取る関数
  const readFromCookie = (key: string): string | null => {
    try {
      document.cookie = "SameSite=None; Secure";
      const cookies = decodeURIComponent(document.cookie).split(";");
      for (const cookie of cookies) {
        const [cookieKey, cookieValue] = cookie.trim().split("=");
        if (cookieKey === key) {
          return cookieValue;
        }
      }
      return null;
    } catch (error) {
      return null;
    }
  };
  const [teacherList, setTeacherList] = useState<TRadarChart[]>([]);
  const [teacherParam, setTeacherParam] = useState<TTeacherParam>(
    () => initialTeacherParam
  );
  const [teacherCount, setTeacherCount] = useState<TTeacherCount>();
  const [teacherLoading, setTeacherLoading] = useState(true);
  const [, setUserID] = useState<string>("");

  const teacherParamOfMajor = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTeacherParam((prevParam) => ({
      ...prevParam,
      major: event.target.value,
      teacherOffset: 0,
    }));
  };
  const handleTeacherBackClick = () => {
    window.scrollTo({
      top: 0,
    });
    setTeacherParam((prevParam) => ({
      ...prevParam,
      teacherOffset: prevParam.teacherOffset - 30,
    }));
  };

  const handleTeacherNextClick = () => {
    window.scrollTo({
      top: 0,
    });
    setTeacherParam((prevParam) => ({
      ...prevParam,
      teacherOffset: prevParam.teacherOffset + 30,
    }));
  };

  useEffect(() => {
    const userId = readFromCookie("user");
    if (userId) {
      setUserID(userId);
      const fetchData = async () => {
        const saveTeacherParam = await getTeacherParam(userId);
        if (saveTeacherParam.id === userId) setTeacherParam(saveTeacherParam);
        else setTeacherParam({ ...initialTeacherParam, id: userId });
      };
      fetchData();
    } else {
      const id = uuidv4();
      setUserID(id);
      setTeacherParam({ ...initialTeacherParam, id: id });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (teacherParam.id === "") return;
    postTeacherParamById(teacherParam);
    const fetchData = async () => {
      try {
        setTeacherLoading(true);
        const teacherCount = await getTeacherCount(teacherParam);
        setTeacherCount(teacherCount);
        const teacherInfo = await getTeacherGrades(teacherParam);
        setTeacherList(teacherInfo);
      } catch (error) {
        console.log(error);
      } finally {
        setTeacherLoading(false);
      }
    };
    fetchData();
  }, [teacherParam]);
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
