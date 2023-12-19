package repository

import (
	"context"
	"database/sql"
	"strconv"

	"github.com/kuma0328/easy-class-search/internal/app/domain"
)

type courseInfoRepository struct {
	Conn *sql.DB
}

func NewCourseInfoRepository(conn *sql.DB) domain.CourseInfoRepository {
	return &courseInfoRepository{conn}
}

func addAndQuery(s string, query *string, filters map[string][]string, params *[]interface{}) {
	if param, ok := filters[s]; ok {
		for _, v := range param {
			*params = append(*params, v)
			*query += " AND " + s + " = $" + strconv.Itoa(len(*params))

		}
	}
}

func addSortQuery(s string, query *string, filters map[string][]string) {
	if param, ok := filters[s]; ok {
		*query += " ORDER BY CASE WHEN rate_a = -1 THEN 1 ELSE 0 END,"
		if param[0] == "F率昇順" {
			*query += " rate_f ASC"
		} else if param[0] == "F率降順" {
			*query += " rate_f DESC"
		} else if param[0] == "A率昇順" {
			*query += " rate_a ASC"
		} else if param[0] == "A率降順" {
			*query += " rate_a DESC"
		} else {
			*query += " rate_f ASC"
		}
	}
}

func addParticalMatchQuery(s string, query *string, filters map[string][]string, params *[]interface{}) {
	if param, ok := filters[s]; ok {
		for _, v := range param {
			*params = append(*params, "%"+v) // パラメータに % を付けて追加
			*query += " AND " + s + " LIKE $" + strconv.Itoa(len(*params))
		}
	}
}

func addOffsetQuery(s string, query *string, filters map[string][]string, params *[]interface{}) {
	if param, ok := filters[s]; ok {
		*params = append(*params, param[0])
		*query += " OFFSET $" + strconv.Itoa(len(*params))
	}
	*query += " LIMIT 30"
}

func addListQuery(s string, query *string, filters map[string][]string, params *[]interface{}) {
	if param, ok := filters[s]; ok && len(param) > 0 {
		*query += " AND ("
		for i, p := range param {
			if i > 0 {
				*query += " OR "
			}
			*params = append(*params, p)
			*query += s + "= $" + strconv.Itoa(len(*params))
		}
		*query += ")"
	}
}

func makeGetCourseInfoQuery(query *string, filters map[string][]string, params *[]interface{}) {
	addAndQuery("season", query, filters, params)
	addAndQuery("credit", query, filters, params)
	addAndQuery("major", query, filters, params)
	addAndQuery("year", query, filters, params)
	addAndQuery("place", query, filters, params)
	addListQuery("course_time", query, filters, params)
	addParticalMatchQuery("class_format", query, filters, params)
	if param, ok := filters["favorite"]; ok && param[0] == "true" {
		if _, ok := filters["code"]; !ok {
			*query += " AND code='1' "
		}
		addListQuery("code", query, filters, params)
	}
}

// /course_info パラメーターに応じてcourse_infoテーブルのデータを返します
func (cr *courseInfoRepository) GetCourseInfoListWithFliter(ctx context.Context, filters map[string][]string) ([]*domain.CourseInfo, error) {
	query := `SELECT
	course_id, code, title, people, place, course_time, major, year,
	season, course_url, rate_a, rate_b, rate_c, rate_d, rate_f, rate_average, credit, class_format
	FROM course_info WHERE 1=1 
	`
	var params []interface{}
	makeGetCourseInfoQuery(&query, filters, &params)
	addSortQuery("sortBy", &query, filters)

	addOffsetQuery("offset", &query, filters, &params)

	rows, err := cr.Conn.Query(query, params...)
	if err != nil {
		return []*domain.CourseInfo{}, err
	}
	defer rows.Close()
	var coursesInfo []*domain.CourseInfo

	for rows.Next() {
		var courseInfo domain.CourseInfo
		if err := rows.Scan(
			&courseInfo.CourseID,
			&courseInfo.Code,
			&courseInfo.Title,
			&courseInfo.People,
			&courseInfo.Place,
			&courseInfo.CourseTime,
			&courseInfo.Major,
			&courseInfo.Year,
			&courseInfo.Season,
			&courseInfo.CourseURL,
			&courseInfo.RateA,
			&courseInfo.RateB,
			&courseInfo.RateC,
			&courseInfo.RateD,
			&courseInfo.RateF,
			&courseInfo.RateAverage,
			&courseInfo.Credit,
			&courseInfo.ClassFormat,
		); err != nil {
			return []*domain.CourseInfo{}, err
		}
		coursesInfo = append(coursesInfo, &courseInfo)
	}
	return coursesInfo, nil
}

func (cr *courseInfoRepository) GetCountCourseInfo(ctx context.Context, filters map[string][]string) (int, error) {
	query := `SELECT 
	COUNT(*)
	FROM course_info
	WHERE 1=1`
	var params []interface{}
	makeGetCourseInfoQuery(&query, filters, &params)

	var count int
	err := cr.Conn.QueryRow(query, params...).Scan(&count)
	if err != nil {
		return 0, err
	}
	return count, nil
}

func (cr *courseInfoRepository) GetCoursesByTeacher(ctx context.Context, teacher string) ([]*domain.CourseInfo, error) {
	query := `SELECT 
	ci.course_id, ci.code, ci.title, ci.people, ci.place, ci.course_time, ci.major, ci.year,
	ci.season, ci.course_url, ci.rate_a, ci.rate_b, ci.rate_c, ci.rate_d, ci.rate_f, ci.rate_average, ci.credit, ci.class_format
	FROM course_info ci
	JOIN teacher_list tl ON ci.course_id = tl.course_id
	WHERE tl.teacher = $1
	ORDER BY CASE WHEN ci.rate_a = -1 THEN 1 ELSE 0 END, ci.rate_a DESC
	`
	rows, err := cr.Conn.Query(query, teacher)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var coursesInfo []*domain.CourseInfo

	for rows.Next() {
		var courseInfo domain.CourseInfo
		if err := rows.Scan(
			&courseInfo.CourseID,
			&courseInfo.Code,
			&courseInfo.Title,
			&courseInfo.People,
			&courseInfo.Place,
			&courseInfo.CourseTime,
			&courseInfo.Major,
			&courseInfo.Year,
			&courseInfo.Season,
			&courseInfo.CourseURL,
			&courseInfo.RateA,
			&courseInfo.RateB,
			&courseInfo.RateC,
			&courseInfo.RateD,
			&courseInfo.RateF,
			&courseInfo.RateAverage,
			&courseInfo.Credit,
			&courseInfo.ClassFormat,
		); err != nil {
			return []*domain.CourseInfo{}, err
		}
		coursesInfo = append(coursesInfo, &courseInfo)
	}
	return coursesInfo, nil
}
