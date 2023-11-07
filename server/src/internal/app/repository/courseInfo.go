package repository

import (
	"context"
	"database/sql"
	"log"

	"github.com/kuma0328/easy-class-search/internal/app/domain"
)

type courseInfoRepository struct {
	Conn *sql.DB
}

func NewCourseInfoRepository(conn *sql.DB) domain.CourseInfoRepository {
	return &courseInfoRepository{conn}
}

func addQuery(s string, query *string, filters map[string][]string) {
	if param, ok := filters[s]; ok {
		for _, v := range param {
			*query += " AND " + s + "='" + v + "' "
		}
	}
}

func makeGetCourseInfoQuery(filters map[string][]string) string {
	query := "SELECT * FROM course_info WHERE 1=1"
	addQuery("season", &query, filters)
	log.Println(query)
	return query
}

// /course_info パラメーターに応じてcourse_infoテーブルのデータを返します
func (cr *courseInfoRepository) GetCourseInfoListWithFliter(ctx context.Context, filters map[string][]string) ([]*domain.CourseInfo, error) {
	query := makeGetCourseInfoQuery(filters)
	rows, err := cr.Conn.Query(query)
	if err != nil {
		return []*domain.CourseInfo{}, err
	}
	defer rows.Close()

	var coursesInfo []*domain.CourseInfo

	for rows.Next() {
		var courseInfo domain.CourseInfo
		if err := rows.Scan(
			&courseInfo.CourseID,
			&courseInfo.Code,
			&courseInfo.Title,
			&courseInfo.People,
			&courseInfo.Place,
			&courseInfo.CourseTime,
			&courseInfo.Major,
			&courseInfo.Year,
			&courseInfo.Season,
			&courseInfo.CourseURL,
			&courseInfo.RateA,
			&courseInfo.RateB,
			&courseInfo.RateC,
			&courseInfo.RateD,
			&courseInfo.RateF,
			&courseInfo.RateAverage,
			&courseInfo.Credit,
		); err != nil {
			return []*domain.CourseInfo{}, err
		}
		coursesInfo = append(coursesInfo, &courseInfo)
	}
	return coursesInfo, nil
}
