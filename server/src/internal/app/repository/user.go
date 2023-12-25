package repository

import (
	"context"
	"database/sql"

	"github.com/kuma0328/easy-class-search/internal/app/domain"
)

type userRepository struct {
	Conn *sql.DB
}

func NewUserRepository(conn *sql.DB) domain.UserRepository {
	return &userRepository{conn}
}

func (ur *userRepository) GetStarCodeById(ctx context.Context, id string) ([]*domain.StarCode, error) {
	query := `
	SELECT id, code
	FROM star_code
	WHERE id = $1
	`

	var starCodeList []*domain.StarCode
	rows, err := ur.Conn.Query(query, id)
	if err != nil {
		return starCodeList, nil
	}
	defer rows.Close()

	for rows.Next() {
		var starCode domain.StarCode
		if err := rows.Scan(&starCode.ID, &starCode.Code); err != nil {
			return starCodeList, nil
		}
		starCodeList = append(starCodeList, &starCode)
	}

	return starCodeList, nil
}

func (ur *userRepository) AddStarCode(ctx context.Context, starCode domain.StarCode) error {
	query := `
	INSERT INTO star_code (id, code)
	VALUES ($1, $2)
	`

	_, err := ur.Conn.ExecContext(
		ctx,
		query,
		starCode.ID,
		starCode.Code,
	)

	if err != nil {
		return err
	}

	return nil
}

func (ur *userRepository) DeleteStarCode(ctx context.Context, starCode domain.StarCode) error {
	query := `
	DELETE FROM star_code
	WHERE id = $1 AND code = $2;
	`

	_, err := ur.Conn.ExecContext(
		ctx,
		query,
		starCode.ID,
		starCode.Code,
	)

	if err != nil {
		return err
	}

	return nil
}

func (ur *userRepository) GetCourseParamById(ctx context.Context, id string) (domain.CourseParam, error) {
	query := `
	SELECT
	id, major, season, place, course_time, sort_by, course_offset, favorite, year, class_format
	FROM course_param
	WHERE id = $1
	LIMIT 1;
	`
	var courseParam domain.CourseParam
	err := ur.Conn.QueryRowContext(ctx, query, id).Scan(
		&courseParam.ID,
		&courseParam.Major,
		&courseParam.Season,
		&courseParam.Place,
		&courseParam.Time,
		&courseParam.SortBy,
		&courseParam.CourseOffset,
		&courseParam.Favorite,
		&courseParam.Year,
		&courseParam.ClassFormat,
	)
	if err != nil {
		return domain.CourseParam{}, nil
	}

	return courseParam, nil
}

func (ur *userRepository) AddCourseParam(ctx context.Context, courseParam domain.CourseParam) error {
	query := `
	INSERT INTO course_param (id, major, season, place, course_time, sort_by, course_offset, favorite, year, class_format)
	VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
	ON CONFLICT (id)
	DO UPDATE SET
		major = EXCLUDED.major,
		season = EXCLUDED.season,
		place = EXCLUDED.place,
		course_time = EXCLUDED.course_time,
		sort_by = EXCLUDED.sort_by,
		course_offset = EXCLUDED.course_offset,
		favorite = EXCLUDED.favorite,
		year = EXCLUDED.year,
		class_format = EXCLUDED.class_format;
	`

	_, err := ur.Conn.ExecContext(
		ctx,
		query,
		courseParam.ID,
		courseParam.Major,
		courseParam.Season,
		courseParam.Place,
		courseParam.Time,
		courseParam.SortBy,
		courseParam.CourseOffset,
		courseParam.Favorite,
		courseParam.Year,
		courseParam.ClassFormat,
	)

	if err != nil {
		return err
	}

	return nil
}

func (ur *userRepository) GetTeacherParamById(ctx context.Context, id string) (domain.TeacherParam, error) {
	query := `
	SELECT id, major, teacher_offset
	FROM teacher_param
	WHERE id = $1
	LIMIT 1;
	`

	var teacherParam domain.TeacherParam
	err := ur.Conn.QueryRowContext(ctx, query, id).Scan(
		&teacherParam.ID,
		&teacherParam.Major,
		&teacherParam.TeacherOffset,
	)
	if err != nil {
		return domain.TeacherParam{}, nil
	}
	return teacherParam, nil
}

func (ur *userRepository) AddTeacherParam(ctx context.Context, teacherParam domain.TeacherParam) error {
	query := `
	INSERT INTO teacher_param (id, major, teacher_offset)
	VALUES ($1, $2, $3)
	ON CONFLICT (id)
	DO UPDATE SET
			major = EXCLUDED.major,
			teacher_offset = EXCLUDED.teacher_offset;
	
	`
	_, err := ur.Conn.ExecContext(
		ctx,
		query,
		teacherParam.ID,
		teacherParam.Major,
		teacherParam.TeacherOffset,
	)

	if err != nil {
		return err
	}

	return nil
}
