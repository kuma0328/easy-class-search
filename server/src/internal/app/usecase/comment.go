package usecase

import (
	"context"

	"github.com/kuma0328/easy-class-search/internal/app/domain"
)

type commentUsecase struct {
	commentRepo domain.CommentRepository
}

func NewCommentUsecase(cr domain.CommentRepository) domain.CommentUsecase {
	return &commentUsecase{
		commentRepo: cr,
	}
}

func (cu *commentUsecase) AddCommentOfCode(ctx context.Context, code string, comment string) (domain.Comment, error) {
	c, err := cu.commentRepo.AddCommentOfCode(ctx, code, comment)
	return c, err
}

func (cu *commentUsecase) GetCommentOfCode(ctx context.Context, code string) ([]*domain.Comment, error) {
	c, err := cu.commentRepo.GetCommentOfCode(ctx, code)
	return c, err
}
