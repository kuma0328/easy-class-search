-- "courses" テーブルの作成
CREATE TABLE IF NOT EXISTS course (
  code TEXT NOT NULL PRIMARY KEY,
  major TEXT NOT NULL
);

-- "courses-info" テーブルの作成
CREATE TABLE IF NOT EXISTS course_info (
  course_id UUID NOT NULL PRIMARY KEY,
  people INT,
  rate_a DOUBLE PRECISION,
  rate_b DOUBLE PRECISION,
  rate_c DOUBLE PRECISION,
  rate_d DOUBLE PRECISION,
  rate_f DOUBLE PRECISION,
  rate_average DOUBLE PRECISION
);

-- "courses-list" テーブルの作成
CREATE TABLE IF NOT EXISTS course_list (
  course_id UUID NOT NULL PRIMARY KEY,
  code TEXT NOT NULL,
  year INT,
  season TEXT,
  teacher TEXT,
  course_url TEXT,
  FOREIGN KEY (code) REFERENCES course(code),
  FOREIGN KEY (course_id) REFERENCES course_info(course_id)
);
