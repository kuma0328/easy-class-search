package domain

import "context"

type CourseInfo struct {
	CourseID    string
	Code        string
	Title       string
	People      int
	Place       string
	CourseTime  string
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
	Credit      int
}

func NewCourseInfo(courseID, code, title string, people int, place string, courseTime, string, major string, year int, season, courseURL string, rateA, rateB, rateC, rateD, rateF, rateAverage float64, credit int) *CourseInfo {
	return &CourseInfo{
		CourseID:    courseID,
		Code:        code,
		Title:       title,
		People:      people,
		Place:       place,
		CourseTime:  courseTime,
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
		Credit:      credit,
	}
}

type CourseInfoRepository interface {
	GetCourseInfoListWithFliter(ctx context.Context, filters map[string][]string) ([]*CourseInfo, error)
}

type CourseInfoUsecase interface {
	GetCourseInfoListWithFliter(ctx context.Context, filters map[string][]string) ([]*CourseInfo, error)
}
