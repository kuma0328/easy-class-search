package domain

import "context"

type Course struct {
	Code  string
	Major string
}

func NewCourse(code string, major string) *Course {
	return &Course{
		Code:  code,
		Major: major,
	}
}

type CourseRepository interface {
	GetAll(ctx context.Context) ([]*Course, error)
}

type CourseUsecase interface {
	GetAll(ctx context.Context) ([]*Course, error)
}
