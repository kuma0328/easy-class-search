-- "courses" テーブルへのデータ挿入
INSERT INTO courses (code)
VALUES
  ('COURSE001'),
  ('COURSE002'),
  ('COURSE003');

-- "course_info" テーブルへのデータ挿入
INSERT INTO course_info (course_id, code, title, people, place, course_time, major, year, season, course_url, rate_a, rate_b, rate_c, rate_d, rate_f, rate_average)
VALUES
  ('11111111-1111-1111-1111-111111111111', 'COURSE001', 'subject1', 50, '今出川' , '月１', 'Computer Science', 2023, 'Spring', 'http://example.com/course1', 0.2, 0.3, 0.4, 0.05, 0.05, 3.5),
  ('22222222-2222-2222-2222-222222222222', 'COURSE002', 'subject2', 45, 'オンライン', '水３','Physics', 2023, 'Fall', 'http://example.com/course2', 0.3, 0.4, 0.2, 0.05, 0.05, 3.8),
  ('33333333-3333-3333-3333-333333333333', 'COURSE003', 'subject3', 55, '京田辺', '木4','Mathematics', 2023, 'Spring', 'http://example.com/course3', 0.1, 0.4, 0.3, 0.1, 0.1, 3.2);

-- "teacher_list" テーブルへのデータ挿入
INSERT INTO teacher_list (teacher, course_id)
VALUES
  ('John Doe', '11111111-1111-1111-1111-111111111111'),
  ('Jane Smith', '22222222-2222-2222-2222-222222222222'),
  ('Bob Johnson', '33333333-3333-3333-3333-333333333333');
