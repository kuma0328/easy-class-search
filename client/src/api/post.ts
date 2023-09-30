import axios from "axios";
import TCourseInfo from "src/types/Course";

export const getCourseInfoPosts = async (): Promise<TCourseInfo[]> => {
  const result = await axios.get(`/course_info`);
  return result.data;
};
