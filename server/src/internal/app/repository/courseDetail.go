package repository

import (
	"context"
	"database/sql"

	"github.com/kuma0328/easy-class-search/internal/app/domain"
)

type courseDetailRepository struct {
	Conn *sql.DB
}

func NewCourseDetailRepository(conn *sql.DB) domain.CourseDetailRepository {
	return &courseDetailRepository{conn}
}

func (cr *courseDetailRepository) GetCourseDetailOfCode(ctx context.Context, code string) (domain.CourseDetail, error) {
	query := `SELECT
  c.code AS course_code,
  ci.title AS course_title,
  ci.people AS course_people,
  ci.place AS course_place,
  ci.course_time AS course_time,
  ci.year AS course_year,
  ci.course_url AS course_url,
  ci.rate_a AS course_rate_a,
  ci.rate_b AS course_rate_b,
  ci.rate_c AS course_rate_c,
  ci.rate_d AS course_rate_d,
  ci.rate_f AS course_rate_f,
  ci.rate_average AS course_rate_average,
  ci.credit AS course_credit,
  t.teacher AS teacher_name,
  s.evaluation_text AS evaluation_text,
  s.evaluation_value AS evaluation_value
	FROM course_info ci
	JOIN courses c ON ci.code = c.code
	LEFT JOIN teacher_list t ON ci.course_id = t.course_id
	LEFT JOIN syllabus_list s ON ci.course_id = s.course_id
	WHERE c.code = $1`

	rows, err := cr.Conn.Query(query, code)
	if err != nil {
		return domain.CourseDetail{}, err
	}
	defer rows.Close()
	
	var courseDetail domain.CourseDetail
	var courseDetailInfo domain.CourseDetailInfo
	var evaluation domain.Evaluation
	var teacher string
	m := map[int]domain.CourseDetailInfo{}

	for rows.Next() {
		if err := rows.Scan(
			&courseDetail.Code,
			&courseDetail.Title,
			&courseDetailInfo.People,
			&courseDetailInfo.Place,
			&courseDetailInfo.Time,
			&courseDetailInfo.Year,
			&courseDetailInfo.SyllabusURL,
			&courseDetailInfo.RateA,
			&courseDetailInfo.RateB,
			&courseDetailInfo.RateC,
			&courseDetailInfo.RateD,
			&courseDetailInfo.RateF,
			&courseDetailInfo.RateAverage,
			&courseDetailInfo.Credit,
			&teacher,
			&evaluation.Text,
			&evaluation.Percent,
		); err != nil {
			return courseDetail, err
		}

		if v, ok := m[courseDetailInfo.Year]; ok {
			v.Teacher = append(v.Teacher, teacher)
			v.Evaluation = append(v.Evaluation, evaluation)
			m[courseDetailInfo.Year] = v
		} else {
			newCourseInfo := domain.CourseDetailInfo{
				Year:        courseDetailInfo.Year,
				People:      courseDetailInfo.People,
				Place:       courseDetailInfo.Place,
				Time:        courseDetailInfo.Time,
				RateA:       courseDetailInfo.RateA,
				RateB:       courseDetailInfo.RateB,
				RateC:       courseDetailInfo.RateC,
				RateD:       courseDetailInfo.RateD,
				RateF:       courseDetailInfo.RateF,
				RateAverage: courseDetailInfo.RateAverage,
				Credit:      courseDetailInfo.Credit,
				SyllabusURL: courseDetailInfo.SyllabusURL,
				Teacher:     []string{teacher},
				Evaluation:  []domain.Evaluation{evaluation},
			}
			m[courseDetailInfo.Year] = newCourseInfo
		}
	}
	for _, courseInfo := range m {
		courseDetail.Info = append(courseDetail.Info, courseInfo)
	}
	return courseDetail, nil
}
