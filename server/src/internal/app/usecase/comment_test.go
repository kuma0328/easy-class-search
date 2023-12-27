package usecase

import (
	"context"
	"testing"

	"github.com/kuma0328/easy-class-search/internal/app/domain"
	"github.com/stretchr/testify/assert"
)

type commentRepositoryMock struct{}

// GetCommentOfCode implements domain.CommentRepository.
func (*commentRepositoryMock) GetCommentOfCode(ctx context.Context, code string) ([]*domain.Comment, error) {
	panic("unimplemented")
}

func (m *commentRepositoryMock) AddCommentOfCode(ctx context.Context, code string, comment string) (domain.Comment, error) {
	return domain.Comment{Comment: comment}, nil
}

func TestAddCommentOfCode(t *testing.T) {
	// テストケース1 正常な値
	t.Run("AddCommentOfCode with valid input", func(t *testing.T) {
		commentRepo := &commentRepositoryMock{}
		cu := NewCommentUsecase(commentRepo)

		code := "111"
		comment := "aaa"

		res, err := cu.AddCommentOfCode(context.Background(), code, comment)
		assert.NoError(t, err)
		assert.Equal(t, comment, res.Comment)
	})

	// テストケース2 エラーケース(空のコメント)
	t.Run("AddCommentOfCode with empty comment", func(t *testing.T) {
		commentRepo := &commentRepositoryMock{}
		cu := NewCommentUsecase(commentRepo)

		code := "111"
		comment := ""

		_, err := cu.AddCommentOfCode(context.Background(), code, comment)
		assert.Error(t, err)
		assert.EqualError(t, err, "Comment can not be empty")
	})

	// テストケース3: エラーケース（空のコード）
	t.Run("AddCommentOfCode with empty code", func(t *testing.T) {
		commentRepo := &commentRepositoryMock{}
		cu := NewCommentUsecase(commentRepo)

		code := ""
		comment := "aaa"

		_, err := cu.AddCommentOfCode(context.Background(), code, comment)

		assert.Error(t, err)                                      // エラーが発生することを確認
		assert.EqualError(t, err, "course_code can not be empty") // 正しいエラーメッセージが返されることを確認
	})
}
