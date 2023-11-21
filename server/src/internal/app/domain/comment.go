package domain

import (
	"context"
)

type Comment struct {
	Comment string
}

func NewComment(comment string) *Comment {
	return &Comment{
		Comment: comment,
	}
}

type CommentRepository interface {
	AddCommentOfCode(ctx context.Context, code string, comment string) (Comment, error)
	GetCommentOfCode(ctx context.Context, code string) ([]*Comment, error)
}

type CommentUsecase interface {
	AddCommentOfCode(ctx context.Context, code string, comment string) (Comment, error)
	GetCommentOfCode(ctx context.Context, code string) ([]*Comment, error)
}
