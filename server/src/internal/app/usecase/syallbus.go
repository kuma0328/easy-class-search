package usecase

import (
	"context"

	"github.com/kuma0328/easy-class-search/internal/app/domain"
)

type syllabusUsecase struct {
	syllabusRepo domain.SyllabusRepository
}

func NewSyllabusUsecase(sr domain.SyllabusRepository) domain.SyllabusUsecase {
	return &syllabusUsecase{
		syllabusRepo: sr,
	}
}

func (su *syllabusUsecase) GetSyllabusOfCode(ctx context.Context, code string) ([]*domain.Syllabus, error) {
	s, err := su.syllabusRepo.GetSyllabusOfCode(ctx, code)
	return s, err
}
