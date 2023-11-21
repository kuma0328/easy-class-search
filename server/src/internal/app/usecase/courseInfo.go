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

func (ci *courseInfoUsecase) GetCoursesByTeacher(ctx context.Context, teacher string) ([]*domain.CourseInfo, error) {
	c, err := ci.courseInfoRepo.GetCoursesByTeacher(ctx, teacher)
	return c, err
}

func (ci *courseInfoUsecase) GetCountCourseInfo(ctx context.Context, filters map[string][]string) (int, error) {
	c, err := ci.courseInfoRepo.GetCountCourseInfo(ctx, filters)
	return c, err
}
