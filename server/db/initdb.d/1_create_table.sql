-- "courses" テーブルの作成
CREATE TABLE IF NOT EXISTS course (
  code TEXT NOT NULL PRIMARY KEY,
);

-- "course_info" テーブルの作成
CREATE TABLE IF NOT EXISTS course_info (
  course_id UUID NOT NULL PRIMARY KEY,
  code TEXT NOT NULL,
  teacher TEXT,
  people INT,
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
  FOREIGN KEY (code) REFERENCES course(code)
);

-- "teacher_list" テーブルの作成
CREATE TABLE IF NOT EXISTS teacher_list (
  teacher TEXT NOT NULL PRIMARY KEY
);
