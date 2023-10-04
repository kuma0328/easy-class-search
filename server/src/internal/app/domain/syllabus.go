package domain

import "context"

type Syllabus struct {
	SyllabusID string
	Code       string
	Syllabus   string
	Year       int
}

func NewSyllabus(syllabusID, code, syllabus string, year int) *Syllabus {
	return &Syllabus{
		SyllabusID: syllabusID,
		Code:       code,
		Syllabus:   syllabus,
		Year:       year,
	}
}

type SyllabusRepository interface {
	GetSyllabusOfCode(ctx context.Context, code string) ([]*Syllabus, error)
}

type SyllabusUsecase interface {
	GetSyllabusOfCode(ctx context.Context, code string) ([]*Syllabus, error)
}
