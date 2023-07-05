interface TClass {
  subjectName: string;
  subjectCode: string;
  teacherName: string;
  season: string;
  place: string;
  classTime: string;
  rank: TRank;
}

interface TRank {
  A: number;
  B: number;
  C: number;
  D: number;
  F: number;
}

export default TClass;
