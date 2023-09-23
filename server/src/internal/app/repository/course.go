package repository

import (
	"context"
	"database/sql"

	"github.com/kuma0328/easy-class-search/internal/app/domain"
)

type courseRepository struct {
	Conn *sql.DB
}

func NewCourseRepository(conn *sql.DB) domain.CourseRepository {
	return &courseRepository{conn}
}

func (cr *courseRepository) GetAll(ctx context.Context) ([]*domain.Course, error) {
	query := `SELECT code FROM course`
	rows, err := cr.Conn.Query(query)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var courses []*domain.Course

	for rows.Next() {
		var course domain.Course
		if err := rows.Scan(&course.Code); err != nil {
			return nil, err
		}

		courses = append(courses, &course)
	}

	return courses, nil
}
