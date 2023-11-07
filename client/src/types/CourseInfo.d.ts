interface TCourseInfo {
  year: number;
  people: number;
  teacher: string[];
  place: string;
  time: string;
  rate_a: number;
  rate_b: number;
  rate_c: number;
  rate_d: number;
  rate_f: number;
  rate_average: number;
  syllabus_url: string;
  evaluation: TEvaluation[];
}

export default TCourseInfo;
