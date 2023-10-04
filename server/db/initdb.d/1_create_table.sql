-- "courses" テーブルの作成
CREATE TABLE IF NOT EXISTS courses (
  code TEXT NOT NULL PRIMARY KEY
);

-- "course_info" テーブルの作成
CREATE TABLE IF NOT EXISTS course_info (
  course_id UUID NOT NULL PRIMARY KEY,
  code TEXT NOT NULL,
  title TEXT,
  people INT,
  place TEXT,
  course_time TEXT,
  major TEXT,
  year INT,
  season TEXT,
  course_url TEXT,
  rate_a DOUBLE PRECISION,
  rate_b DOUBLE PRECISION,
  rate_c DOUBLE PRECISION,
  rate_d DOUBLE PRECISION,
  rate_f DOUBLE PRECISION,
  rate_average DOUBLE PRECISION,
  FOREIGN KEY (code) REFERENCES courses(code)
);

-- "teacher_list" テーブルの作成
CREATE TABLE IF NOT EXISTS teacher_list (
  teacher TEXT NOT NULL PRIMARY KEY,
  course_id UUID NOT NULL,
  FOREIGN KEY (course_id) REFERENCES course_info(course_id)
);

-- "cousre_syllabus" テーブルの作成
CREATE TABLE IF NOT EXISTS syllabus_list (
  syllabus_id UUID NOT NULL PRIMARY KEY,
  code TEXT NOT NULL,
  syllabus TEXT NOT NULL,
  year INT,
  FOREIGN KEY (code) REFERENCES courses(code)
)