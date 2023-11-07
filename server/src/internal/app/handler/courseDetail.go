package handler

import (
	"database/sql"
	"encoding/json"
	"log"
	"net/http"

	"github.com/kuma0328/easy-class-search/internal/app/domain"
	"github.com/kuma0328/easy-class-search/internal/app/repository"
	"github.com/kuma0328/easy-class-search/internal/app/usecase"
)

type evaluationJSON struct {
	Text    string `json:"text"`
	Percent int    `json:"percent"`
}

type courseInfoJSON struct {
	Year        int              `json:"year"`
	People      int              `json:"people"`
	Teacher     []string         `json:"teacher"`
	Place       string           `json:"place"`
	Time        string           `json:"time"`
	RateA       float64          `json:"rate_a"`
	RateB       float64          `json:"rate_b"`
	RateC       float64          `json:"rate_c"`
	RateD       float64          `json:"rate_d"`
	RateF       float64          `json:"rate_f"`
	RateAverage float64          `json:"rate_average"`
	SyllabusURL string           `json:"syllabus_url"`
	Evaluation  []evaluationJSON `json:"evaluation"`
}

type courseDetailResponse struct {
	Title  string           `json:"title"`
	Code   string           `json:"code"`
	Credit int              `json:"credit"`
	Info   []courseInfoJSON `json:"info"`
}

func newGetCourseDetailOfCodeResponse(c domain.CourseDetail) *courseDetailResponse {
	infoJSON := []courseInfoJSON{}
	for _, info := range c.Info {
		evaluationJSONs := []evaluationJSON{}
		for _, eval := range info.Evaluation {
			evaluationJSONs = append(evaluationJSONs, evaluationJSON{
				Text:    eval.Text,
				Percent: eval.Percent,
			})
		}

		infoJSON = append(infoJSON, courseInfoJSON{
			Year:        info.Year,
			People:      info.People,
			Teacher:     info.Teacher,
			Place:       info.Place,
			Time:        info.Time,
			RateA:       info.RateA,
			RateB:       info.RateB,
			RateC:       info.RateC,
			RateD:       info.RateD,
			RateF:       info.RateF,
			RateAverage: info.RateAverage,
			SyllabusURL: info.SyllabusURL,
			Evaluation:  evaluationJSONs,
		})
	}

	return &courseDetailResponse{
		Title:  c.Title,
		Code:   c.Code,
		Credit: c.Credit,
		Info:   infoJSON,
	}
}

func corsSetCourseDetail(w http.ResponseWriter) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	w.Header().Set("Access-Allow-Methods", "GET")
}

func GetCourseDetailOfCode(db *sql.DB) http.HandlerFunc {
	repoCourseDetail := repository.NewCourseDetailRepository(db)
	ucCourseDetail := usecase.NewCourseDetailUsecase(repoCourseDetail)

	handler := func(w http.ResponseWriter, r *http.Request) {
		log.Printf("Received Request for %s %s", r.Method, r.URL.Path)
		corsSetCourseDetail(w)
		if r.Method == http.MethodGet {
			code := r.URL.Query().Get("code")

			courseDetail, err := ucCourseDetail.GetCourseDetailOfCode(r.Context(), code)
			if err != nil {
				http.Error(w, err.Error(), http.StatusInternalServerError)
				return
			}

			res := newGetCourseDetailOfCodeResponse(courseDetail)
			w.Header().Set("Content-Type", "application/json")
			if err := json.NewEncoder(w).Encode(res); err != nil {
				http.Error(w, err.Error(), http.StatusInternalServerError)
				return
			}

			w.WriteHeader(http.StatusOK)
		}
	}

	return handler
}
