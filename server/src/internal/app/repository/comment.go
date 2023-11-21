package repository

import (
	"context"
	"database/sql"
	"time"

	"github.com/google/uuid"
	"github.com/kuma0328/easy-class-search/internal/app/domain"
)

type commentRepository struct {
	Conn *sql.DB
}

func NewCommentRepository(conn *sql.DB) domain.CommentRepository {
	return &commentRepository{conn}
}

func (cr *commentRepository) AddCommentOfCode(ctx context.Context, code string, comment string) (domain.Comment, error) {
	query := `
		INSERT INTO comment (comment_id, comment, created_at, code)
		VALUES ($1, $2, $3, $4)
		RETURNING comment
	`
	created_at := time.Now() // コメント作成時の日時
	var insertedComment string
	newUUID := uuid.New()
	// UUIDを文字列に変換
	uuidString := newUUID.String()
	err := cr.Conn.QueryRowContext(ctx, query, uuidString, comment, created_at, code).Scan(&insertedComment)
	if err != nil {
		return domain.Comment{}, err
	}
	return *domain.NewComment(insertedComment), nil
}

func (cr *commentRepository) GetCommentOfCode(ctx context.Context, code string) ([]*domain.Comment, error) {
	query := `
	SELECT comment
	FROM comment
	WHERE code = $1
	ORDER BY created_at DESC
	`

	var comments []*domain.Comment
	rows, err := cr.Conn.Query(query, code)
	if err != nil {
		return comments, nil
	}
	defer rows.Close()

	for rows.Next() {
		var comment domain.Comment
		if err := rows.Scan(&comment.Comment); err != nil {
			return comments, nil
		}
		comments = append(comments, &comment)
	}

	return comments, nil
}
