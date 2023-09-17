-- course
INSERT INTO course (subject_code, department)
VALUES
  ('COURSE001', 'Computer Science'),
  ('COURSE002', 'Physics'),
  ('COURSE003', 'Mathematics');

-- courses_list
INSERT INTO course_list (course_id, subject_code, year, season, teacher, course_url)
VALUES
  ('11111111-1111-1111-1111-111111111111', 'COURSE001', 2023, 'Spring', 'John Doe', 'http://example.com/course1'),
  ('22222222-2222-2222-2222-222222222222', 'COURSE002', 2023, 'Fall', 'Jane Smith', 'http://example.com/course2'),
  ('33333333-3333-3333-3333-333333333333', 'COURSE003', 2023, 'Spring', 'Bob Johnson', 'http://example.com/course3');

-- course_info
INSERT INTO course_info (course_id, people, rate_a, rate_b, rate_c, rate_d, rate_f, rate_average)
VALUES
  ('11111111-1111-1111-1111-111111111111', 50, 0.2, 0.3, 0.4, 0.05, 0.05, 3.5),
  ('22222222-2222-2222-2222-222222222222', 45, 0.3, 0.4, 0.2, 0.05, 0.05, 3.8),
  ('33333333-3333-3333-3333-333333333333', 55, 0.1, 0.4, 0.3, 0.1, 0.1, 3.2);
