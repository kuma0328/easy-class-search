package usecase

import (
	"context"
	"testing"

	"github.com/kuma0328/easy-class-search/internal/app/domain"
	"github.com/stretchr/testify/assert"
)

type courseInfoRepositoryMock struct{}

func (m *courseInfoRepositoryMock) GetCourseInfoListWithFliter(ctx context.Context, filters map[string][]string) ([]*domain.CourseInfo, error) {
	return []*domain.CourseInfo{
		{CourseID: "1"},
		{CourseID: "2"},
	}, nil
}

func (m *courseInfoRepositoryMock) GetCoursesByTeacher(ctx context.Context, teacher string) ([]*domain.CourseInfo, error) {
	return []*domain.CourseInfo{
		{CourseID: "1"},
		{CourseID: "2"},
	}, nil
}

func (m *courseInfoRepositoryMock) GetCountCourseInfo(ctx context.Context, filters map[string][]string) (int, error) {
	// ここでは適当なダミーデータを返す
	return 2, nil
}

func TestGetCourseInfoListWithFliter(t *testing.T) {
	// テストケース1 正常な値
	t.Run("GetCourseInfoListWithFliter with valid input", func(t *testing.T) {
		repoMock := &courseInfoRepositoryMock{}
		ci := NewCourseInfoUsecase(repoMock)

		filters := map[string][]string{
			"filter1": {"value1"},
			"filter2": {"value2"},
		}

		res, err := ci.GetCourseInfoListWithFliter(context.Background(), filters)
		assert.NoError(t, err)
		assert.NotNil(t, res)
		assert.Equal(t, 2, len(res))
	})

	// テストケース2 teacher が空の場合
	t.Run("GetCourseInfoListWithFliter with empty teacher", func(t *testing.T) {
		repoMock := &courseInfoRepositoryMock{}
		ci := NewCourseInfoUsecase(repoMock)

		teacher := ""

		res, err := ci.GetCoursesByTeacher(context.Background(), teacher)
		assert.Error(t, err)
		assert.Nil(t, res)
		assert.Equal(t, "teacher cannot be empty", err.Error())
	})

	// テストケース3 正常な値
	t.Run("GetCountCourseInfo with valid input", func(t *testing.T) {
		repoMock := &courseInfoRepositoryMock{}
		ci := NewCourseInfoUsecase(repoMock)

		filters := map[string][]string{
			"filter1": {"value1"},
			"filter2": {"value2"},
		}

		res, err := ci.GetCountCourseInfo(context.Background(), filters)
		assert.NoError(t, err)
		assert.Equal(t, 2, res)
	})
}
