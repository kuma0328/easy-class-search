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
  credit INT,
  class_format TEXT,
  FOREIGN KEY (code) REFERENCES courses(code)
);

-- "teacher_list" テーブルの作成
CREATE TABLE IF NOT EXISTS teacher_list (
  teacher TEXT NOT NULL,
  major TEXT NOT NULL,
  course_id UUID NOT NULL,
  FOREIGN KEY (course_id) REFERENCES course_info(course_id)
);

-- "cousre_syllabus" テーブルの作成
CREATE TABLE IF NOT EXISTS syllabus_list (
  syllabus_id UUID NOT NULL PRIMARY KEY,
  course_id UUID NOT NULL,
  evaluation_text TEXT,
  evaluation_value INT,
  FOREIGN KEY (course_id) REFERENCES course_info(course_id)
);

-- "comment" テーブルの作成
CREATE TABLE IF NOT EXISTS comment (
  comment_id UUID NOT NULL PRIMARY KEY,
  comment TEXT,
  created_at TIMESTAMP,
  code TEXT,
  FOREIGN KEY (code) REFERENCES courses(code)
);

-- "teacher_rate" テーブルの作成
CREATE TABLE IF NOT EXISTS teacher_rate (
  teacher_name TEXT,
  major TEXT,
  rate_a DOUBLE PRECISION,
  rate_b DOUBLE PRECISION,
  rate_c DOUBLE PRECISION,
  rate_d DOUBLE PRECISION,
  rate_f DOUBLE PRECISION
);

-- "star_code_list" テーブル作成
CREATE TABLE IF NOT EXISTS star_code (
  id UUID NOT NULL,
  code TEXT
);

-- "course_param" テーブル作成
CREATE TABLE IF NOT EXISTS course_param (
  id UUID NOT NULL PRIMARY KEY,
  major TEXT,
  season TEXT,
  place TEXT,
  course_time TEXT,
  sort_by TEXT,
  course_offset INT,
  favorite BOOLEAN,
  year INT,
  class_format TEXT
);

-- "teacher_param" テーブルの作成
CREATE TABLE IF NOT EXISTS teacher_param (
  id UUID NOT NULL PRIMARY KEY,
  major TEXT,
  teacher_offset INT
);