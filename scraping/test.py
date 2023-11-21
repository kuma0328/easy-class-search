major_array = [
   ("11001", "神学部"),
   ("11002", "文学部"),
   ("11003", "法学部"),
   ("11004", "経済学部"),
   ("11005", "商学部"),
   ("11007", "政策学部"),
   ("11008", "文化情報学部"),
   ("11009", "社会学部"),
   ("11014", "生命医科学部"),
   ("11015", "スポーツ健康科学部"),
   ("11016", "理工学部"),
   ("11017", "心理学部"),
   ("11019", "グローバル・コミュニケーション学部"),
   ("11020", "国際教育インスティテュート"),
   ("11022", "グローバル地域学部"),
   ("11060", "一般教養"),
   ("11061", "一般教養"),
   ("11065", "一般教養"),
   ("11090", "日本語・日本文化教育科目")
]

year_array = [
  "2020", "2021", "2022"
]

i = 2

course, course_info, teacher, syllabus = set(), set(), set(), set()

def insert_courses_name(major_code, year):
  file = f'data/{i}_{year}_{major_code}_insert_courses.sql'
  with open(file, "r") as input_file:
     for line in input_file:
        entry = line.strip()
        course.add(entry)

def insert_course_info_name(major_code, year):
  file = f'data/{i+1}_{year}_{major_code}_insert_course_info.sql'
  with open(file, "r") as input_file:
     for line in input_file:
        entry = line.strip()
        course_info.add(entry)

def insert_teacher_list_name(major_code, year):
  file = f'data/{i+2}_{year}_{major_code}_insert_teacher_list.sql'
  with open(file, "r") as input_file:
     for line in input_file:
        entry = line.strip()
        teacher.add(entry)

def insert_syllabus_list_name(major_code, year):
   file = f'data/{i+3}_{year}_{major_code}_insert_syllabus_list.sql'
   with open(file, "r") as input_file:
    for line in input_file:
      entry = line.strip()
      syllabus.add(entry)

for year in year_array:
  for major_code, major_name in major_array:
    insert_courses_name(major_code=major_code, year=year)
    insert_course_info_name(major_code=major_code, year=year)
    insert_teacher_list_name(major_code=major_code, year=year)
    insert_syllabus_list_name(major_code=major_code, year=year)
    i += 4

course_file_path = "2_insert_course.sql"
course_info_file_path = "3_insert_course_info.sql"
teacher_file_path = "4_insert_teacher_list.sql"
syllabus_file_path = "5_insert_syllabus_list.sql"

# 出力ファイルに重複をなくしたデータを書き込む
with open(course_file_path, "w") as output_file:
  for entry in course:
    output_file.write(entry + "\n")

with open(course_info_file_path, "w") as output_file:
  for entry in course_info:
    output_file.write(entry + "\n")

with open(teacher_file_path, "w") as output_file:
  for entry in teacher:
    output_file.write(entry + "\n")

with open(syllabus_file_path, "w") as output_file:
  for entry in syllabus:
    output_file.write(entry + "\n")
