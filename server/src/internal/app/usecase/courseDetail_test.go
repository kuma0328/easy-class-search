package usecase

import (
	"context"
	"testing"

	"github.com/kuma0328/easy-class-search/internal/app/domain"
	"github.com/stretchr/testify/assert"
)

type courseDetailRepositoryMock struct{}

func (m *courseDetailRepositoryMock) GetCourseDetailOfCode(ctx context.Context, code string) (domain.CourseDetail, error) {
	// ここではテスト用のダミーデータを返す
	courseDetail := domain.CourseDetail{
		Code:  "123",
		Title: "Course Title",
		// ... 他の詳細データ
	}
	return courseDetail, nil
}

func TestGetCourseDetailOfCode(t *testing.T) {
	// テストケース1 正常な値
	t.Run("GetCourseDetailOfCode with valid input", func(t *testing.T) {
		courseDetailRepo := &courseDetailRepositoryMock{}
		cu := NewCourseDetailUsecase(courseDetailRepo)

		code := "123"

		res, err := cu.GetCourseDetailOfCode(context.Background(), code)
		assert.NoError(t, err)
		assert.NotNil(t, res)
		assert.Equal(t, code, res.Code)
	})

	// エラーケースをテストすることもできます
	t.Run("GetCourseDetailOfCode with empty code", func(t *testing.T) {
		courseDetailRepo := &courseDetailRepositoryMock{}
		cu := NewCourseDetailUsecase(courseDetailRepo)

		emptyCode := ""

		_, err := cu.GetCourseDetailOfCode(context.Background(), emptyCode)
		assert.Error(t, err)
		assert.Equal(t, "code can not be empty", err.Error())
	})

}
