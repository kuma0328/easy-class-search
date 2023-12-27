import axios from "axios";
import TComment from "src/types/Comment";
import TCourseInfo from "src/types/Course";
import TCourseCount from "src/types/CourseCount";
import TCourseDetail from "src/types/CourseDetail";
import TCourseParam from "src/types/CourseParam";
import TFavoriteCourseParam from "src/types/FavoriteCourseParam";
import TRadarChart from "src/types/RadarChart";
import TTeacherCount from "src/types/TeacherCount";
import TTeacherParam from "src/types/TeacherParam";

export const getCourseInfo = async (
  params: TFavoriteCourseParam
): Promise<TCourseInfo[]> => {
  const serverURL = process.env.REACT_APP_SERVER_URL;
  const queryString = Object.entries(params)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
  const result = await axios.get(`${serverURL}/course_info?${queryString}`);
  return result.data;
};

export const getCourseCount = async (
  params: TFavoriteCourseParam
): Promise<TCourseCount> => {
  const serverURL = process.env.REACT_APP_SERVER_URL;
  const queryString = Object.entries(params)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
  const result = await axios.get(`${serverURL}/course_count?${queryString}`);
  return result.data;
};

export const getCourseDetail = async (
  code: string | undefined
): Promise<TCourseDetail> => {
  const serverURL = process.env.REACT_APP_SERVER_URL;
  const result = await axios.get(`${serverURL}/course_detail?code=${code}`);
  return result.data;
};

export const getTeacherGrades = async (
  params: TTeacherParam
): Promise<TRadarChart[]> => {
  const serverURL = process.env.REACT_APP_SERVER_URL;
  const queryString = Object.entries(params)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
  const result = await axios.get(`${serverURL}/teacher?${queryString}`);
  return result.data;
};

export const getTeacherCount = async (
  params: TTeacherParam
): Promise<TTeacherCount> => {
  const serverURL = process.env.REACT_APP_SERVER_URL;
  const queryString = Object.entries(params)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
  const result = await axios.get(`${serverURL}/teacher_count?${queryString}`);
  return result.data;
};

export const getCourseInfoByTeacher = async (
  teacher: string | undefined
): Promise<TCourseInfo[]> => {
  const serverURL = process.env.REACT_APP_SERVER_URL;
  const result = await axios.get(
    `${serverURL}/teacher_courses?teacher=${teacher}`
  );
  return result.data;
};

export const getCommentByCode = async (
  code: string | undefined
): Promise<TComment[]> => {
  const serverURL = process.env.REACT_APP_SERVER_URL;

  const result = await axios.get(`${serverURL}/comment?code=${code}`);
  return result.data;
};

export const getStarCode = async (params: string): Promise<TStarCode[]> => {
  const serverURL = process.env.REACT_APP_SERVER_URL;
  const result = await axios.get(`${serverURL}/star_code?id=${params}`);
  return result.data;
};
export const getCourseParam = async (params: string): Promise<TCourseParam> => {
  const serverURL = process.env.REACT_APP_SERVER_URL;
  const result = await axios.get(`${serverURL}/course_param?id=${params}`);
  return result.data;
};

export const getTeacherParam = async (
  params: string
): Promise<TTeacherParam> => {
  const serverURL = process.env.REACT_APP_SERVER_URL;
  const result = await axios.get(`${serverURL}/teacher_param?id=${params}`);
  return result.data;
};
