interface TCourseParam {
  id: string;
  major: string;
  season: string;
  place: string;
  time: string[];
  sortBy: string;
  courseOffset: number;
  favorite: boolean;
  year: number;
  classFormat: string;
}

export default TCourseParam;
