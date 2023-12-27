package repository

import (
	"context"
	"database/sql"
	"testing"

	"github.com/DATA-DOG/go-sqlmock"
	"github.com/stretchr/testify/assert"
)

func TestGetCommentOfCode(t *testing.T) {
	// モックのセットアップ
	db, mock, err := sqlmock.New()
	if err != nil {
		t.Fatalf("Failed to open a stub database connection: %v", err)
	}
	defer db.Close()

	repo := NewCommentRepository(db)

	// テストケース1: 正常なケース
	t.Run("GetCommentOfCode_with_valid_code", func(t *testing.T) {
		code := "valid_code"
		rows := sqlmock.NewRows([]string{"comment"}).
			AddRow("comment1").
			AddRow("comment2")

		// モックの設定（正常な結果を返す）
		mock.ExpectQuery(`^SELECT comment`).
			WithArgs(code).
			WillReturnRows(rows)

		// テスト対象のメソッド呼び出し
		result, err := repo.GetCommentOfCode(context.Background(), code)

		// アサーション
		assert.NoError(t, err)
		assert.Len(t, result, 2)
		assert.Equal(t, "comment1", result[0].Comment)
		assert.Equal(t, "comment2", result[1].Comment)
	})

	// テストケース2: エラーが発生するケース
	t.Run("GetCommentOfCode_with_error", func(t *testing.T) {
		code := "error_code"

		// モックの設定（エラーを返す）
		mock.ExpectQuery(`^SELECT comment`).
			WithArgs(code).
			WillReturnError(sql.ErrTxDone)

		// テスト対象のメソッド呼び出し
		_, err := repo.GetCommentOfCode(context.Background(), code)

		// アサーション
		assert.ErrorIs(t, err, sql.ErrTxDone)
	})
}

func TestAddCommentOfCode(t *testing.T) {
	// モックのセットアップ
	db, mock, err := sqlmock.New()
	if err != nil {
		t.Fatalf("Failed to open a stub database connection: %v", err)
	}
	defer db.Close()

	repo := NewCommentRepository(db)

	// テストケース1: 正常なケース
	t.Run("AddCommentOfCode_with_valid_input", func(t *testing.T) {
		code := "valid_code"
		comment := "valid_comment"
		rows := sqlmock.NewRows([]string{"comment"}).
			AddRow(comment)

		// モックの設定（正常な結果を返す）
		mock.ExpectQuery(`^INSERT INTO comment`).
			WithArgs(sqlmock.AnyArg(), comment, sqlmock.AnyArg(), code).
			WillReturnRows(rows)

		// テスト対象のメソッド呼び出し
		result, err := repo.AddCommentOfCode(context.Background(), code, comment)

		// アサーション
		assert.NoError(t, err)
		assert.Equal(t, comment, result.Comment)
	})

	// テストケース2: エラーが発生するケース
	t.Run("AddCommentOfCode_with_error", func(t *testing.T) {
		code := "error_code"
		comment := "valid_comment"

		// モックの設定（エラーを返す）
		mock.ExpectQuery(`^INSERT INTO comment`).
			WithArgs(sqlmock.AnyArg(), comment, sqlmock.AnyArg(), code).
			WillReturnError(sql.ErrTxDone)

		// テスト対象のメソッド呼び出し
		_, err := repo.AddCommentOfCode(context.Background(), code, comment)

		// アサーション
		assert.ErrorIs(t, err, sql.ErrTxDone)
	})
}
