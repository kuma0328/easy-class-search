import axios from "axios";
import TCourseInfo from "src/types/Course";
import TCourseDetail from "src/types/CourseDetail";
import TCourseParam from "src/types/CourseParam";
import TRadarChart from "src/types/RadarChart";
import TSyllabus from "src/types/Syllabus";

export const getCourseInfoPosts = async (
  params: TCourseParam
): Promise<TCourseInfo[]> => {
  const result = await axios.get("/course_info", {
    params: params,
  });
  return result.data;
};
export const getSyllabusPosts = async (
  code: string | undefined
): Promise<TSyllabus[]> => {
  const result = await axios.get(`/syllabus?code=${code}`);
  return result.data;
};

export const getCourseDetailPosts = async (
  code: string | undefined
): Promise<TCourseDetail> => {
  const result = await axios.get(`/course_detail?code=${code}`);
  return result.data;
};

export const getTeacherGradesPosts = async (): Promise<TRadarChart[]> => {
  const result = await axios.get(`/teacher`);
  return result.data;
};
