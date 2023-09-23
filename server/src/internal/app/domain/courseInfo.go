package domain

import "context"

type CourseInfo struct {
	CourseID    string
	Code        string
	Teacher     string
	People      int
	Major       string
	Year        int
	Season      string
	CourseURL   string
	RateA       float64
	RateB       float64
	RateC       float64
	RateD       float64
	RateF       float64
	RateAverage float64
}

func NewCourseInfo(courseID, code, teacher string, people int, major string, year int, season, courseURL string, rateA, rateB, rateC, rateD, rateF, rateAverage float64) *CourseInfo {
	return &CourseInfo{
		CourseID:    courseID,
		Code:        code,
		Teacher:     teacher,
		People:      people,
		Major:       major,
		Year:        year,
		Season:      season,
		CourseURL:   courseURL,
		RateA:       rateA,
		RateB:       rateB,
		RateC:       rateC,
		RateD:       rateD,
		RateF:       rateF,
		RateAverage: rateAverage,
	}
}

type CourseInfoRepository interface {
	GetCourseInfoListWithFliter(ctx context.Context, filters map[string][]string) ([]*CourseInfo, error)
}

type CourseInfoUsecase interface {
	GetCourseInfoListWithFliter(ctx context.Context, filters map[string][]string) ([]*CourseInfo, error)
}
