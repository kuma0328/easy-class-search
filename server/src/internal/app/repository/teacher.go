package repository

import (
	"context"
	"database/sql"
	"math"

	"github.com/kuma0328/easy-class-search/internal/app/domain"
)

type teacherRepository struct {
	Conn *sql.DB
}

func NewTeacherRepository(conn *sql.DB) domain.TeacherRepository {
	return &teacherRepository{conn}
}

type courseGrades struct {
	People int
	RateA  float64
	RateB  float64
	RateC  float64
	RateD  float64
	RateF  float64
}

type teacherInfo struct {
	Name  string
	Major string
}

func calculatePeopleWithRating(totalPeople int, percentage float64) float64 {
	return float64(totalPeople) * (percentage / 100)
}

func calculatePercentage(peopleWithRating float64, totalPeople int) float64 {
	if totalPeople == 0 {
		return 0.0
	}
	percentage := (peopleWithRating / float64(totalPeople)) * 100.0
	return float64(math.Floor(float64(percentage*10)) / 10)
}

func calculateTeacherEvaluationProbabilities(teacherInfo teacherInfo, grades []courseGrades) domain.Teacher {
	var totalStudent int
	var sumRateA, sumRateB, sumRateC, sumRateD, sumRateF float64

	for _, g := range grades {
		totalStudent += g.People
		sumRateA += calculatePeopleWithRating(g.People, g.RateA)
		sumRateB += calculatePeopleWithRating(g.People, g.RateB)
		sumRateC += calculatePeopleWithRating(g.People, g.RateC)
		sumRateD += calculatePeopleWithRating(g.People, g.RateD)
		sumRateF += calculatePeopleWithRating(g.People, g.RateF)
	}

	subjectData := []domain.SubjectData{
		{Subject: "A", A: calculatePercentage(sumRateA, totalStudent)},
		{Subject: "B", A: calculatePercentage(sumRateB, totalStudent)},
		{Subject: "C", A: calculatePercentage(sumRateC, totalStudent)},
		{Subject: "D", A: calculatePercentage(sumRateD, totalStudent)},
		{Subject: "F", A: calculatePercentage(sumRateF, totalStudent)},
	}

	return domain.Teacher{
		Teacher: teacherInfo.Name,
		Major:   teacherInfo.Major,
		Data:    subjectData,
	}
}

func (tr *teacherRepository) GetTeacherAll(ctx context.Context) ([]domain.Teacher, error) {
	query := `SELECT
	t.teacher,
	t.major,
	ci.people,
	ci.rate_a,
	ci.rate_b,
	ci.rate_c,
	ci.rate_d,
	ci.rate_f
	FROM teacher_list t
	LEFT JOIN course_info ci ON t.course_id = ci.course_id`

	var teacher []domain.Teacher

	rows, err := tr.Conn.Query(query)
	if err != nil {
		return teacher, err
	}
	defer rows.Close()

	m := map[teacherInfo][]courseGrades{}
	for rows.Next() {
		var grades courseGrades
		var info teacherInfo
		if err := rows.Scan(
			&info.Name,
			&info.Major,
			&grades.People,
			&grades.RateA,
			&grades.RateB,
			&grades.RateC,
			&grades.RateD,
			&grades.RateF,
		); err != nil {
			return teacher, err
		}
		m[info] = append(m[info], grades)
	}

	for info, grades := range m {
		teacher = append(teacher, calculateTeacherEvaluationProbabilities(info, grades))
	}
	return teacher, nil
}
