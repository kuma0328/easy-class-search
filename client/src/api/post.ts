import axios from "axios";
import TCourseInfo from "src/types/Course";
import TSyllabus from "src/types/Syllabus";

export const getCourseInfoPosts = async (): Promise<TCourseInfo[]> => {
  const result = await axios.get(`/course_info`);
  return result.data;
};

export const getSyllabusPosts = async (
  code: string | undefined
): Promise<TSyllabus[]> => {
  const result = await axios.get(`/syllabus?code=${code}`);
  return result.data;
};
