package usecase

import (
	"context"

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
	c, err := cu.courseDetailRepo.GetCourseDetailOfCode(ctx, code)
	return c, err
}
