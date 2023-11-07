package usecase

import (
	"context"

	"github.com/kuma0328/easy-class-search/internal/app/domain"
)

type teacherUsecase struct {
	teacherRepo domain.TeacherRepository
}

func NewTeacherUsecase(tu domain.TeacherRepository) domain.TeacherUsecase {
	return &teacherUsecase{
		teacherRepo: tu,
	}
}

func (tu *teacherUsecase) GetTeacherAll(ctx context.Context) ([]domain.Teacher, error) {
	t, err := tu.teacherRepo.GetTeacherAll(ctx)
	return t, err
}
