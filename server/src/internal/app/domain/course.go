package domain

import "context"

type Course struct {
	Code string
}

func NewCourse(code string) *Course {
	return &Course{
		Code: code,
	}
}

type CourseRepository interface {
	GetAll(ctx context.Context) ([]*Course, error)
}

type CourseUsecase interface {
	GetAll(ctx context.Context) ([]*Course, error)
}
