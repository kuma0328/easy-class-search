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

type courseResponse struct {
	Code string `json:"code"`
}

func newGetAllCourseResponse(cr []*domain.Course) []*courseResponse {
	var r []*courseResponse
	for _, c := range cr {
		r = append(r, newCourseResponse(c))
	}
	return r
}

func newCourseResponse(c *domain.Course) *courseResponse {
	return &courseResponse{
		Code: c.Code,
	}
}

func GetAllCourseHandler(db *sql.DB) http.HandlerFunc {
	repoCourse := repository.NewCourseRepository(db)
	ucCourse := usecase.NewCourseUsecase(repoCourse)

	handler := func(w http.ResponseWriter, r *http.Request) {
		log.Printf("Received Request for %s %s", r.Method, r.URL.Path)
		if r.Method == http.MethodGet {
			course, err := ucCourse.GetAll(r.Context())
			if err != nil {
				http.Error(w, err.Error(), http.StatusBadRequest)
				return
			}

			res := newGetAllCourseResponse(course)
			if err := json.NewEncoder(w).Encode(res); err != nil {
				http.Error(w, err.Error(), http.StatusBadRequest)
			}

			w.WriteHeader(http.StatusOK)
		}
	}
	return handler
}
