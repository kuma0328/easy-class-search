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

// タイトルも追加する
type courseInfoResponse struct {
	CourseID    string  `json:"course_id"`
	Code        string  `json:"code"`
	Title     string  `json:"title"`
	People      int     `json:"people"`
	Place				string  `json:"place"`
	CourseTime string `json:"course_time"`
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
		Title:     c.Title,
		People:      c.People,
		Major:       c.Major,
		Place: c.Place,
		CourseTime: c.CourseTime,
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

func corsSetCourseInfo(w http.ResponseWriter) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	w.Header().Set("Access-Allow-Methods", "GET")
}

func GetCourseInfoListWithFliter(db *sql.DB) http.HandlerFunc {

	repoCourseInfo := repository.NewCourseInfoRepository(db)
	ucCourseInfo := usecase.NewCourseInfoUsecase(repoCourseInfo)

	handler := func(w http.ResponseWriter, r *http.Request) {
		log.Printf("Received Request for %s %s", r.Method, r.URL.Path)
		corsSetCourseInfo(w)
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
