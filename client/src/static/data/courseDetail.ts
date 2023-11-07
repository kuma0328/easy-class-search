import TCourseDetail from "src/types/CourseDetail";

const sampleCourseDetail: TCourseDetail = {
  title: "サンプルコース",
  code: "COURSE001",
  credit: 2,
  info: [
    {
      year: 2023,
      people: 50,
      teacher: ["John Doe", "Jane Smith"],
      place: "教室A",
      time: "月曜日 10:00 AM - 12:00 PM",
      rate_a: 0.2,
      rate_b: 0.3,
      rate_c: 0.4,
      rate_d: 0.05,
      rate_f: 0.05,
      rate_average: 3.5,
      syllabus_url: "https://example.com/syllabus/1",
      evaluation: [
        { text: "出席", percent: 50 },
        { text: "テスト", percent: 80 },
        // 他の評価項目も追加できます
      ],
    },
    {
      year: 2023,
      people: 40,
      teacher: ["Alice Johnson", "Bob Smith"],
      place: "教室B",
      time: "水曜日 2:00 PM - 4:00 PM",
      rate_a: 0.3,
      rate_b: 0.4,
      rate_c: 0.2,
      rate_d: 0.05,
      rate_f: 0.05,
      rate_average: 3.8,
      syllabus_url: "https://example.com/syllabus/2",
      evaluation: [
        { text: "出席", percent: 60 },
        { text: "テスト", percent: 85 },
        // 他の評価項目も追加できます
      ],
    },
    // 他のコース情報も追加できます
  ],
};
export default sampleCourseDetail;
