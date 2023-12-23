package domain

import "context"

type StarCode struct {
	ID   string
	Code string
}

type CourseParam struct {
	ID           string
	Major        string
	Season       string
	Place        string
	Time         string
	SortBy       string
	CourseOffset int
	Favorite     bool
	Year         int
	ClassFormat  string
}

type TeacherParam struct {
	ID            string
	Major         string
	TeacherOffset int
}

type ActiveTab struct {
	ID        string
	ActiveTab string
}

type UserRepository interface {
	GetStarCodeById(ctx context.Context, id string) ([]*StarCode, error)
	GetCourseParamById(ctx context.Context, id string) (CourseParam, error)
	GetTeacherParamById(ctx context.Context, id string) (TeacherParam, error)
	AddStarCode(ctx context.Context, starCode StarCode) error
	DeleteStarCode(ctx context.Context, starCode StarCode) error
	AddCourseParam(ctx context.Context, courseParam CourseParam) error
	AddTeacherParam(ctx context.Context, teacherParam TeacherParam) error
	GetActiveTabById(ctx context.Context, id string) (ActiveTab, error)
	AddActiveTabById(ctx context.Context, activeTab ActiveTab) error
}
