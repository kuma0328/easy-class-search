import axios from "axios";
import TComment from "src/types/Comment";
import TCommentParam from "src/types/CommentParam";
import TCourseParam from "src/types/CourseParam";
import TTeacherParam from "src/types/TeacherParam";

export const postCommentByCode = async (
  params: TCommentParam
): Promise<TComment> => {
  const serverURL = process.env.REACT_APP_SERVER_URL;
  const result = await axios.post(`${serverURL}/comment`, params);
  return result.data;
};

export const postStarCode = async (params: TStarCode) => {
  const serverURL = process.env.REACT_APP_SERVER_URL;
  const result = await axios.post(`${serverURL}/star_code`, params);
  return result.data;
};

export const postCourseParamById = async (params: TCourseParam) => {
  const serverURL = process.env.REACT_APP_SERVER_URL;
  const result = await axios.post(`${serverURL}/course_param`, params);
  return result.data;
};

export const postTeacherParamById = async (params: TTeacherParam) => {
  const serverURL = process.env.REACT_APP_SERVER_URL;
  const result = await axios.post(`${serverURL}/teacher_param`, params);
  return result.data;
};
