from selenium import webdriver
from selenium.webdriver.support.ui import Select
from bs4 import BeautifulSoup
from selenium.webdriver.common.by import By
import time
import re
import uuid

course_id_list = set()

i = 214

def driver_setup(url):
  options = webdriver.ChromeOptions()
  options.headless = True  # Headlessモードを無効にする
  #WebDriverのセットアップ
  driver = webdriver.Chrome(executable_path="/opt/homebrew/bin/chromedriver",options=options)
  #Webサイトにアクセス
  driver.get(url)
  return driver

def get_html_data(driver):
  page_source = driver.page_source
  soup = BeautifulSoup(page_source, "html.parser")
  return soup

def select_value(driver, id, changeValue):
  # 学部選択の<select>要素を取得j
  select_element = driver.find_element(By.NAME, id)
  # Selectオブジェクトを作成
  select = Select(select_element)
  # 新しい選択肢を選択
  select.select_by_value(changeValue)  # 例: "文学部"を選択
  time.sleep(1)
  # 変更を保存（この行はサイトによっては不要かもしれません）a
  select_element.submit()

def click_value(driver, id):
  search_button = driver.find_element(By.ID, id)
  search_button.click()

def insert_courses_table(data, major_code, year):
   with open(f'data/{i}_{year}_{major_code}_insert_courses.sql', 'a') as file:
      formatted_string = f"('{data}'),"
      file.write(formatted_string + '\n')

def insert_course_info_table(data, major_code, year):
   with open(f'data/{i+1}_{year}_{major_code}_insert_course_info.sql', 'a') as file:
    formatted_string = f" ('{data[0]}', '{data[1]}', '{data[2]}', {data[3]}, '{data[4]}', '{data[5]}', '{data[6]}', {data[7]}, '{data[8]}', '{data[9]}', {data[10]}, {data[11]}, {data[12]}, {data[13]}, {data[14]}, {data[15]}, {data[16][0]}, '{data[17]}'),"
    file.write(formatted_string + '\n')

def insert_teacher_list_table(data, major_code, year):
   with open(f'data/{i+2}_{year}_{major_code}_insert_teacher_list.sql', 'a') as file:
      formatted_string = f"('{data[0]}', '{data[1]}', '{data[2]}'),"
      file.write(formatted_string + '\n')

def insert_syllabus_list_table(data, major_code, year):
   with open(f'data/{i+3}_{year}_{major_code}_insert_syllabus_list.sql', 'a') as file:
      formatted_string = f"('{data[0]}', '{data[1]}', '{data[2]}', {data[3]}),"
      print(formatted_string)
      file.write(formatted_string + '\n')

def get_course_info_data_2022(soup):
  #授業形態の取得
  b_elements = soup.find_all("b")
  if not b_elements or len(b_elements) < 2:
    return ["", "", "", "" ,""]
  try:
        # b_elementsが存在し、1番目の要素がある場合
    a, b = b_elements[1].get_text().strip().split('\n')
  except (IndexError, ValueError):
        # インデックスエラーが発生した場合の処理
    return ["", "", "", "", ""]
  course_time = a.strip("()")
  class_format = b.strip()
  print("------------------")

  #授業単位の取得
  p_elements = soup.find_all("p")
  if not p_elements or len(p_elements) < 7:
     return [course_time, class_format, "", "", ""]
  text = p_elements[6].get_text()
  # テキストから必要な情報を抽出
  info_list = [info.strip() for info in text.split("\n") if info.strip()]
  info_list = [item for item in info_list if '/' in item]
  print(info_list)
  # 必要な情報を表
  if len(info_list) < 3:
     return [course_time, "", "", "", ""]
  credit = info_list[0]
  season = info_list[1].split("/")[0]
  place = info_list[2].split("/")[0]
  return [course_time, class_format, credit, season, place]

def get_course_info_data_2021(soup):
   b_elements = soup.find_all("b")
   if not b_elements or len(b_elements) < 2:
      return ["", "", "", "" ,""]
   course_time = b_elements[1].get_text().strip().split('\n')[0].strip("()")
   p_elements = soup.find_all("p")
   if not p_elements or len(p_elements) < 4:
     return [course_time, "", "", "", ""]
   text = p_elements[3].get_text()
   info_list = [info.strip() for info in text.split("\n") if info.strip()]
   info_list = [item for item in info_list if '/' in item]
   if len(info_list) < 4:
     return [course_time, "", "", "", ""]
   credit = info_list[0]
   season = info_list[1].split("/")[0]
   place = info_list[2].split("/")[0]
   class_format = info_list[3]
   return [course_time, class_format, credit, season, place]

def get_course_info_data_2020(soup): 
  p_elements = soup.find_all("p")
  if not p_elements or len(p_elements) < 4:
     return ["", "", "", "", ""]
  text = p_elements[3].get_text()
  info_list = [info.strip() for info in text.split("\n") if info.strip()]
  info_list = [item for item in info_list if '/' in item]
  if len(info_list) < 3:
    return ["", "", "", "", ""]
  credit = info_list[0]
  season = info_list[1].split("/")[0]
  place = info_list[2].split("/")[0]
  return ["", "", credit, season, place]

def get_syllabus_data(syllabus_driver, uid, year, major_code):
  soup = get_html_data(driver=syllabus_driver)

  #評価形態の取得
  table = soup.find('table', class_='show__grades')  # ここで'class'属性を使用して特定
  if table is not None:
    tr_elements = table.find_all('tr')
    for tr in tr_elements:
        td_elements = tr.find_all('td')[:2]  # 上位2つの<td>要素取得
        evaluation_text = td_elements[0].get_text().strip()
        evaluation_percent = td_elements[1].get_text().strip().replace('%', '').replace('分', '')
        if (evaluation_text == "") or (evaluation_percent == ""):
          continue
        insert_syllabus_list_table([uuid.uuid1(), uid, evaluation_text, evaluation_percent], major_code=major_code, year=year)
        # for td in td_elements:
        #     print(td.get_text().strip())  # テキストを取得して表示
  if year == "2022":
     return get_course_info_data_2022(soup=soup)
  if year == "2021":
     return get_course_info_data_2021(soup=soup)
  if year == "2020":
     return get_course_info_data_2020(soup=soup)
  return []

def get_grades_data(soup, year, major_name, major_code):
  # <tbody>要素を全て取得
  tbody_elements = soup.find_all("tbody")
  for tbody in tbody_elements:
    rows = tbody.find_all("tr")
    for row in rows:
      td_elements = row.find_all("td", rowspan="2")
      values = [td.get_text().strip().replace('\u3000', ' ') for td in td_elements]
      a_element = row.find("a", class_="syllabus")
      if a_element is not None:
        # onclick属性からURLを抽出
        onclick_value = a_element.get("onclick")
        pattern = r"callSyllabusInfo\('(.+?)'\)"
        match = re.search(pattern, onclick_value)
        if match:
            syllabus_url = match.group(1)
            print("------------------")
            print(syllabus_url)
            print(values)
            name_part = values[3]
            teacher_name = [name.strip() for name in name_part.split('\n') if name.strip()]
            uid = uuid.uuid1()
            syllabus_driver = driver_setup(syllabus_url)
            if syllabus_driver.title == "404 Not Found":
               continue
            
            course_id_list.add(values[0])

            for t in teacher_name:
               insert_teacher_list_table([t, major_name, uid], major_code=major_code, year=year)
               
            print("------------------")
            res = get_syllabus_data(syllabus_driver=syllabus_driver, uid=uid, year=year, major_code=major_code)
            data = (uid, values[0], values[2], values[4], res[4], 
                    res[0], major_name, year, res[3], syllabus_url, 
                    values[5], values[6], values[7], values[8], values[9], 
                    values[11], res[2], res[1])
            print(data)
            insert_courses_table(values[0], major_code=major_code, year=year)
            data = tuple("-1" if item == '' else item for item in data)
            insert_course_info_table(data=data, major_code=major_code, year=year)   
        else:
            print("URLが見つかりませんでした")

def loadAllPage(driver, year, major_name, major_code):
  page = 2
  pre_soup = ""
  soup = get_html_data(driver=driver)

  while pre_soup != soup.get_text():
    get_grades_data(soup=soup, year=year, major_name=major_name, major_code=major_code)
    next_page = f"setPage({page});return doAction('form1','doPage')"
    driver.execute_script(next_page)
    page += 1
    pre_soup = soup.get_text()
    soup = get_html_data(driver=driver)


grades_url = "https://duet.doshisha.ac.jp/kokai/html/fi/fi020/FI02001G.html"
course_id = "form1:_id94"
search_id = "form1:enterDodoZikko"
year_id = "form1:kaikoNendolist"

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
   "2022", "2021", "2020"
]


driver = driver_setup(grades_url)
for year in year_array:
   for major_code, major_name in major_array:
      driver = driver_setup(grades_url)
      select_value(driver=driver, id=year_id, changeValue=year)
      time.sleep(1)
      print(major_code, major_name)
      select_value(driver=driver, id=course_id, changeValue=major_code)
      time.sleep(1)
      click_value(driver=driver, id=search_id)
      time.sleep(1)
      loadAllPage(driver=driver, year=year, major_name=major_name, major_code=major_code)
      i += 4
      driver.quit()

for s in course_id_list:
   insert_courses_table(s)