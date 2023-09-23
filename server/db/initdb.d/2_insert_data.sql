-- "courses" テーブルへのデータ挿入
INSERT INTO course (code)
VALUES
  ('COURSE001'),
  ('COURSE002'),
  ('COURSE003');

-- "course_info" テーブルへのデータ挿入
INSERT INTO course_info (course_id, code, teacher, people, major, year, season, course_url, rate_a, rate_b, rate_c, rate_d, rate_f, rate_average)
VALUES
  ('11111111-1111-1111-1111-111111111111', 'COURSE001', 'John Doe', 50, 'Computer Science', 2023, 'Spring', 'http://example.com/course1', 0.2, 0.3, 0.4, 0.05, 0.05, 3.5),
  ('22222222-2222-2222-2222-222222222222', 'COURSE002', 'Jane Smith', 45, 'Physics', 2023, 'Fall', 'http://example.com/course2', 0.3, 0.4, 0.2, 0.05, 0.05, 3.8),
  ('33333333-3333-3333-3333-333333333333', 'COURSE003', 'Bob Johnson', 55, 'Mathematics', 2023, 'Spring', 'http://example.com/course3', 0.1, 0.4, 0.3, 0.1, 0.1, 3.2);

-- "teacher_list" テーブルへのデータ挿入
INSERT INTO teacher_list (teacher)
VALUES
  ('John Doe'),
  ('Jane Smith'),
  ('Bob Johnson');
