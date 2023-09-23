package usecase

import (
	"context"

	"github.com/kuma0328/easy-class-search/internal/app/domain"
)

type courseInfoUsecase struct {
	courseInfoRepo domain.CourseInfoRepository
}

func NewCourseInfoUsecase(ci domain.CourseInfoRepository) domain.CourseInfoRepository {
	return &courseInfoUsecase{
		courseInfoRepo: ci,
	}
}

func (ci *courseInfoUsecase) GetCourseInfoListWithFliter(ctx context.Context, filters map[string][]string) ([]*domain.CourseInfo, error) {
	c, err := ci.courseInfoRepo.GetCourseInfoListWithFliter(ctx, filters)
	return c, err
}
