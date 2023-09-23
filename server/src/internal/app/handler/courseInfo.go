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

type courseInfoResponse struct {
	CourseID    string  `json:"course_id"`
	Code        string  `json:"code"`
	Teacher     string  `json:"teacher"`
	People      int     `json:"people"`
	Major       string  `json:"major"`
	Year        int     `json:"year"`
	Season      string  `json:"season"`
	CourseURL   string  `json:"course_url"`
	RateA       float64 `json:"rate_a"`
	RateB       float64 `json:"rate_b"`
	RateC       float64 `json:"rate_c"`
	RateD       float64 `json:"rate_d"`
	RateF       float64 `json:"rate_f"`
	RateAverage float64 `json:"rate_average"`
}

func newGetAllCourseInfoResponse(cr []*domain.CourseInfo) []*courseInfoResponse {
	var r []*courseInfoResponse
	for _, c := range cr {
		r = append(r, newCourseInfoResponse(c))
	}
	return r
}

func newCourseInfoResponse(c *domain.CourseInfo) *courseInfoResponse {
	return &courseInfoResponse{
		CourseID:    c.CourseID,
		Code:        c.Code,
		Teacher:     c.Teacher,
		People:      c.People,
		Major:       c.Major,
		Year:        c.Year,
		Season:      c.Season,
		CourseURL:   c.CourseURL,
		RateA:       c.RateA,
		RateB:       c.RateB,
		RateC:       c.RateC,
		RateD:       c.RateD,
		RateF:       c.RateF,
		RateAverage: c.RateAverage,
	}
}

func getParam(r *http.Request, s string, filter map[string][]string) {
	param := r.URL.Query().Get(s)
	if param != "" {
		filter[s] = append(filter[s], param)
	}
}

func makeFilter(r *http.Request) *map[string][]string {
	filters := make(map[string][]string)

	getParam(r, "season", filters)
	return &filters
}

func GetCourseInfoListWithFliter(db *sql.DB) http.HandlerFunc {

	repoCourseInfo := repository.NewCourseInfoRepository(db)
	ucCourseInfo := usecase.NewCourseInfoUsecase(repoCourseInfo)

	handler := func(w http.ResponseWriter, r *http.Request) {
		log.Printf("Received Request for %s %s", r.Method, r.URL.Path)
		if r.Method == http.MethodGet {
			filters := makeFilter(r)
			course, err := ucCourseInfo.GetCourseInfoListWithFliter(r.Context(), *filters)
			if err != nil {
				http.Error(w, err.Error(), http.StatusBadRequest)
				return
			}

			res := newGetAllCourseInfoResponse(course)
			if err := json.NewEncoder(w).Encode(res); err != nil {
				http.Error(w, err.Error(), http.StatusBadRequest)
			}

			w.WriteHeader(http.StatusOK)
		}
	}
	return handler
}
