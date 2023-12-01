import axios from "axios";
import TComment from "src/types/Comment";
import TCommentParam from "src/types/CommentParam";
import TCourseInfo from "src/types/Course";
import TCourseCount from "src/types/CourseCount";
import TCourseDetail from "src/types/CourseDetail";
import TFavoriteCourseParam from "src/types/FavoriteCourseParam";
import TRadarChart from "src/types/RadarChart";
import TSyllabus from "src/types/Syllabus";
import TTeacherCount from "src/types/TeacherCount";
import TTeacherParam from "src/types/TeacherParam";

export const getCourseInfoPosts = async (
  params: TFavoriteCourseParam
): Promise<TCourseInfo[]> => {
  const serverURL = process.env.REACT_APP_SERVER_URL;
  const queryString = Object.entries(params)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
  const result = await axios.get(`${serverURL}/course_info?${queryString}`);
  return result.data;
};

export const getCourseCountPosts = async (
  params: TFavoriteCourseParam
): Promise<TCourseCount> => {
  const serverURL = process.env.REACT_APP_SERVER_URL;
  const queryString = Object.entries(params)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
  const result = await axios.get(`${serverURL}/course_count?${queryString}`);
  return result.data;
};

export const getSyllabusPosts = async (
  code: string | undefined
): Promise<TSyllabus[]> => {
  const serverURL = process.env.REACT_APP_SERVER_URL;
  const result = await axios.get(`${serverURL}/syllabus?code=${code}`);
  return result.data;
};

export const getCourseDetailPosts = async (
  code: string | undefined
): Promise<TCourseDetail> => {
  const serverURL = process.env.REACT_APP_SERVER_URL;
  const result = await axios.get(`${serverURL}/course_detail?code=${code}`);
  return result.data;
};

export const getTeacherGradesPosts = async (
  params: TTeacherParam
): Promise<TRadarChart[]> => {
  const serverURL = process.env.REACT_APP_SERVER_URL;
  const queryString = Object.entries(params)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
  const result = await axios.get(`${serverURL}/teacher?${queryString}`);
  return result.data;
};

export const getTeacherCountPosts = async (
  params: TTeacherParam
): Promise<TTeacherCount> => {
  const serverURL = process.env.REACT_APP_SERVER_URL;
  const queryString = Object.entries(params)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
  const result = await axios.get(`${serverURL}/teacher_count?${queryString}`);
  return result.data;
};

export const getCourseInfoByTeacherPosts = async (
  teacher: string | undefined
): Promise<TCourseInfo[]> => {
  const serverURL = process.env.REACT_APP_SERVER_URL;
  const result = await axios.get(
    `${serverURL}/teacher_courses?teacher=${teacher}`
  );
  return result.data;
};

export const getCommentByCodePosts = async (
  code: string | undefined
): Promise<TComment[]> => {
  const serverURL = process.env.REACT_APP_SERVER_URL;

  const result = await axios.get(`${serverURL}/comment?code=${code}`);
  return result.data;
};

export const addCommentByCodePostts = async (
  params: TCommentParam
): Promise<TComment> => {
  const serverURL = process.env.REACT_APP_SERVER_URL;
  const result = await axios.post(`${serverURL}/comment`, params);
  return result.data;
};
