package repository

import (
	"context"
	"database/sql"

	"github.com/kuma0328/easy-class-search/internal/app/domain"
)

type syllabusRepository struct {
	Conn *sql.DB
}

func NewSyllabusRepository(conn *sql.DB) domain.SyllabusRepository {
	return &syllabusRepository{conn}
}

func (sr *syllabusRepository) GetSyllabusOfCode(ctx context.Context, code string) ([]*domain.Syllabus, error) {
	query := `SELECT * FROM syllabus_list WHERE code = $1`
	rows, err := sr.Conn.Query(query, code)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var syllabusList []*domain.Syllabus

	for rows.Next() {
		var syllabus domain.Syllabus
		if err := rows.Scan(&syllabus.SyllabusID, &syllabus.Code, &syllabus.Syllabus, &syllabus.Year); err != nil {
			return nil, err
		}

		syllabusList = append(syllabusList, &syllabus)
	}

	return syllabusList, nil
}
