package domain

import "context"

type SubjectData struct {
	Subject string
	A       float64
}

type Teacher struct {
	Teacher string
	Major   string
	Data    []SubjectData
}

type TeacherRepository interface {
	GetTeacherAll(ctx context.Context, filters map[string][]string) ([]Teacher, error)
	GetTeacherCount(ctx context.Context, filters map[string][]string) (int, error)
}

type TeacherUsecase interface {
	GetTeacherAll(ctx context.Context, filters map[string][]string) ([]Teacher, error)
	GetTeacherCount(ctx context.Context, filters map[string][]string) (int, error)
}
