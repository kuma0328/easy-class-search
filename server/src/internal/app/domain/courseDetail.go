package domain

import "context"

type Evaluation struct {
	Text    string // 評価項目のテキスト
	Percent int    // パーセント評価
}

type CourseDetailInfo struct {
	Year        int          // 年
	People      int          // 履修者数
	Credit      int          //単位数
	Teacher     []string     // 担当教員
	Place       string       // 開講場所
	Time        string       // 開講時間
	RateA       float64      // 成績Aの割合
	RateB       float64      // 成績Bの割合
	RateC       float64      // 成績Cの割合
	RateD       float64      // 成績Dの割合
	RateF       float64      // 成績Fの割合
	RateAverage float64      // 平均成績
	SyllabusURL string       // シラバスのURL
	Evaluation  []Evaluation // 評価項目
}

type CourseDetail struct {
	Title  string
	Code   string
	Credit int
	Info   []CourseDetailInfo
}

type CourseDetailRepository interface {
	GetCourseDetailOfCode(ctx context.Context, code string) (CourseDetail, error)
}

type CourseDetailUsecase interface {
	GetCourseDetailOfCode(ctx context.Context, code string) (CourseDetail, error)
}
