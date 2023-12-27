package usecase

import (
	"context"
	"errors"

	"github.com/kuma0328/easy-class-search/internal/app/domain"
)

type userUsecase struct {
	userRepo domain.UserRepository
}

func NewUserUsecase(ui domain.UserRepository) domain.UserRepository {
	return &userUsecase{
		userRepo: ui,
	}
}

func (ui *userUsecase) GetStarCodeById(ctx context.Context, id string) ([]*domain.StarCode, error) {
	if id == "" {
		return nil, errors.New("id must not be empty")
	}
	u, err := ui.userRepo.GetStarCodeById(ctx, id)
	return u, err
}
func (ui *userUsecase) GetCourseParamById(ctx context.Context, id string) (domain.CourseParam, error) {
	if id == "" {
		return domain.CourseParam{}, errors.New("id must not be empty")
	}
	u, err := ui.userRepo.GetCourseParamById(ctx, id)
	return u, err
}
func (ui *userUsecase) GetTeacherParamById(ctx context.Context, id string) (domain.TeacherParam, error) {
	if id == "" {
		return domain.TeacherParam{}, errors.New("id must not be empty")
	}
	u, err := ui.userRepo.GetTeacherParamById(ctx, id)
	return u, err
}

func (ui *userUsecase) AddStarCode(ctx context.Context, starCode domain.StarCode) error {
	err := ui.userRepo.AddStarCode(ctx, starCode)
	return err
}

func (ui *userUsecase) AddCourseParam(ctx context.Context, courseParam domain.CourseParam) error {
	err := ui.userRepo.AddCourseParam(ctx, courseParam)
	return err
}

func (ui *userUsecase) AddTeacherParam(ctx context.Context, teacherParam domain.TeacherParam) error {
	err := ui.userRepo.AddTeacherParam(ctx, teacherParam)
	return err
}

func (ui *userUsecase) DeleteStarCode(ctx context.Context, starCode domain.StarCode) error {
	err := ui.userRepo.DeleteStarCode(ctx, starCode)
	return err
}
