package usecase

import (
	"context"
	"errors"

	"github.com/kuma0328/easy-class-search/internal/app/domain"
)

type courseDetailUsecase struct {
	courseDetailRepo domain.CourseDetailRepository
}

func NewCourseDetailUsecase(ci domain.CourseDetailRepository) domain.CourseDetailUsecase {
	return &courseDetailUsecase{
		courseDetailRepo: ci,
	}
}

func (cu *courseDetailUsecase) GetCourseDetailOfCode(ctx context.Context, code string) (domain.CourseDetail, error) {
	if code == "" {
		return domain.CourseDetail{}, errors.New("code can not be empty")
	}

	c, err := cu.courseDetailRepo.GetCourseDetailOfCode(ctx, code)
	return c, err
}
