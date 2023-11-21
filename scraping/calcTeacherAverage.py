import math

teacher_file_path = "all_data/4_insert_teacher_list.sql"

# テキストファイルからデータを読み込む
with open(teacher_file_path, 'r') as file:
    data = file.readlines()

d = {}

for row in data:
    rowData = [item.strip("()\n") for item in row.split(',')]
    name = rowData[0]
    department = rowData[1].replace(' ', '')
    id = rowData[2].replace(' ', '')
    if id == '93b828c4-829f-11ee-84e9-eecaa15e6882':
        print(1)
    if id not in d:
        d[id] = set()
    d[id].add((name, department))
    
course_info_file_path = "all_data/3_insert_course_info.sql"

with open(course_info_file_path, 'r') as file:
    data = file.readlines()

td = {}

for row in data:
    rowData = [item.strip("()\n") for item in row.split(',')]
    id = rowData[0]
    people = float(rowData[3])
    rate_a = float(rowData[10])
    rate_b = float(rowData[11])
    rate_c = float(rowData[12])
    rate_d = float(rowData[13])
    rate_f = float(rowData[14])

    if rate_a == -1:
       continue

    course_data = {
      'total': people,
      'rate_a': people * rate_a / 100,
      'rate_b': people * rate_b / 100,
      'rate_c': people * rate_c / 100,
      'rate_d': people * rate_d / 100,
      'rate_f': people * rate_f / 100,
    }
    for v in d[id]:
      if v not in td:
        td[v] = course_data
      else:
        td[v]['total'] += course_data['total']
        td[v]['rate_a'] += course_data['rate_a']
        td[v]['rate_b'] += course_data['rate_b']
        td[v]['rate_c'] += course_data['rate_c']
        td[v]['rate_d'] += course_data['rate_d']
        td[v]['rate_f'] += course_data['rate_f']

teacher_rate_file_path = "6_insert_teacher_rate.sql"

for k, v in td.items():
    a = ｍath.floor(v['rate_a'] / v['total'] * 100 * 10) / 10
    b = math.floor(v['rate_b'] / v['total'] * 100 * 10) / 10
    c = math.floor(v['rate_c'] / v['total'] * 100 * 10) / 10
    d = math.floor(v['rate_d'] / v['total'] * 100 * 10) / 10
    f = math.floor(v['rate_f'] / v['total'] * 100 * 10) / 10
    print(k[0], k[1], a,b,c,d,f)
    with open(teacher_rate_file_path, 'a') as file:
      formatted_string = f"({k[0]}, {k[1]}, {a}, {b}, {c}, {d}, {f}),"
      print(formatted_string)
      file.write(formatted_string + '\n')