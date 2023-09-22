package usecase

import (
	"context"

	"github.com/kuma0328/easy-class-search/internal/app/domain"
)

type courseUsecase struct {
	courseRepo domain.CourseRepository
}

func NewCourseUsecase(cr domain.CourseRepository) domain.CourseUsecase {
	return &courseUsecase{
		courseRepo: cr,
	}
}

func (cu *courseUsecase) GetAll(ctx context.Context) ([]*domain.Course, error) {
	c, err := cu.courseRepo.GetAll(ctx)
	return c, err
}
