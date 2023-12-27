package usecase

import (
	"context"
	"testing"

	"github.com/kuma0328/easy-class-search/internal/app/domain"
	"github.com/stretchr/testify/assert"
)

type userRepositoryMock struct{}

func (m *userRepositoryMock) GetStarCodeById(ctx context.Context, id string) ([]*domain.StarCode, error) {
	// ここでは適当なダミーデータを返す
	return []*domain.StarCode{
		{ID: "1", Code: "AAA"},
		{ID: "2", Code: "BBB"},
	}, nil
}

func (m *userRepositoryMock) GetCourseParamById(ctx context.Context, id string) (domain.CourseParam, error) {
	// ここでは適当なダミーデータを返す
	return domain.CourseParam{
		ID:    "1",
		Major: "Computer Science",
		Year:  2022,
		// 他のフィールドも適当な値で埋める
	}, nil
}

func (m *userRepositoryMock) GetTeacherParamById(ctx context.Context, id string) (domain.TeacherParam, error) {
	// ここでは適当なダミーデータを返す
	return domain.TeacherParam{
		ID:    "1",
		Major: "Computer Science",
		// 他のフィールドも適当な値で埋める
	}, nil
}

func (m *userRepositoryMock) AddStarCode(ctx context.Context, starCode domain.StarCode) error {
	// ここでは何もせずエラーも発生させない
	return nil
}

func (m *userRepositoryMock) AddCourseParam(ctx context.Context, courseParam domain.CourseParam) error {
	// ここでは何もせずエラーも発生させない
	return nil
}

func (m *userRepositoryMock) AddTeacherParam(ctx context.Context, teacherParam domain.TeacherParam) error {
	// ここでは何もせずエラーも発生させない
	return nil
}

func (m *userRepositoryMock) DeleteStarCode(ctx context.Context, starCode domain.StarCode) error {
	// ここでは何もせずエラーも発生させない
	return nil
}

func TestGetStarCodeById(t *testing.T) {
	// テストケース1 正常な値
	t.Run("GetStarCodeById with valid input", func(t *testing.T) {
		repoMock := &userRepositoryMock{}
		ui := NewUserUsecase(repoMock)

		id := "user1"

		res, err := ui.GetStarCodeById(context.Background(), id)
		assert.NoError(t, err)
		assert.NotNil(t, res)
		assert.Equal(t, 2, len(res))
	})

	// テストケース2 id が空の場合
	t.Run("GetStarCodeById with empty id", func(t *testing.T) {
		repoMock := &userRepositoryMock{}
		ui := NewUserUsecase(repoMock)

		id := ""

		res, err := ui.GetStarCodeById(context.Background(), id)
		assert.Error(t, err)
		assert.Nil(t, res)
		assert.Equal(t, "id must not be empty", err.Error())
	})
}

func TestGetCourseParamById(t *testing.T) {
	// テストケース1 正常な値
	t.Run("GetCourseParamById with valid input", func(t *testing.T) {
		repoMock := &userRepositoryMock{}
		ui := NewUserUsecase(repoMock)

		id := "user1"

		res, err := ui.GetCourseParamById(context.Background(), id)
		assert.NoError(t, err)
		assert.NotNil(t, res)
	})
	// テストケース2 idが空の場合

	t.Run("GetCourseParamById with empty id", func(t *testing.T) {
		repoMock := &userRepositoryMock{}
		ui := NewUserUsecase(repoMock)

		id := "user1"

		res, err := ui.GetCourseParamById(context.Background(), id)
		assert.NoError(t, err)
		assert.NotNil(t, res)
	})
}

func TestGetTeacherParamById(t *testing.T) {
	// テストケース1 正常な値
	t.Run("GetTeacherParamById with valid input", func(t *testing.T) {
		repoMock := &userRepositoryMock{}
		ui := NewUserUsecase(repoMock)

		id := "user1"

		res, err := ui.GetTeacherParamById(context.Background(), id)
		assert.NoError(t, err)
		assert.NotNil(t, res)
	})
	// テストケース2 idが空の場合

	t.Run("GetTeacherParamById with empty id", func(t *testing.T) {
		repoMock := &userRepositoryMock{}
		ui := NewUserUsecase(repoMock)

		id := "user1"

		res, err := ui.GetTeacherParamById(context.Background(), id)
		assert.NoError(t, err)
		assert.NotNil(t, res)
	})
}
