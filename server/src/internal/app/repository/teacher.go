package repository

import (
	"context"
	"database/sql"

	"github.com/kuma0328/easy-class-search/internal/app/domain"
)

type teacherRepository struct {
	Conn *sql.DB
}

func NewTeacherRepository(conn *sql.DB) domain.TeacherRepository {
	return &teacherRepository{conn}
}

type courseGrades struct {
	RateA float64
	RateB float64
	RateC float64
	RateD float64
	RateF float64
}

type teacherInfo struct {
	Name  string
	Major string
}

func makeGetTeacherRateQuery(query *string, filters map[string][]string, params *[]interface{}) {
	addAndQuery("major", query, filters, params)
}

func (tr *teacherRepository) GetTeacherAll(ctx context.Context, filters map[string][]string) ([]domain.Teacher, error) {
	query := `SELECT
	teacher_name,
	major,
	rate_a,
	rate_b,
	rate_c,
	rate_d,
	rate_f
	FROM teacher_rate
	WHERE 1=1
	`
	var params []interface{}

	makeGetCourseInfoQuery(&query, filters, &params)
	addOffsetQuery("teacherOffset", &query, filters, &params)

	var teacherList []domain.Teacher

	rows, err := tr.Conn.Query(query, params...)
	if err != nil {
		return teacherList, err
	}
	defer rows.Close()

	for rows.Next() {
		var teacher domain.Teacher
		var grades courseGrades
		if err := rows.Scan(
			&teacher.Teacher,
			&teacher.Major,
			&grades.RateA,
			&grades.RateB,
			&grades.RateC,
			&grades.RateD,
			&grades.RateF,
		); err != nil {
			return teacherList, err
		}
		subjectData := []domain.SubjectData{
			{Subject: "A", A: grades.RateA},
			{Subject: "B", A: grades.RateB},
			{Subject: "C", A: grades.RateC},
			{Subject: "D", A: grades.RateD},
			{Subject: "F", A: grades.RateF},
		}
		teacher.Data = subjectData
		teacherList = append(teacherList, teacher)
	}

	return teacherList, nil
}

func (tr *teacherRepository) GetTeacherCount(ctx context.Context, filters map[string][]string) (int, error) {
	query := `SELECT
	COUNT(*)
	FROM teacher_rate
	WHERE 1=1
	`
	var params []interface{}

	makeGetTeacherRateQuery(&query, filters, &params)
	var count int
	err := tr.Conn.QueryRow(query, params...).Scan(&count)
	if err != nil {
		return 0, err
	}
	return count, nil
}
