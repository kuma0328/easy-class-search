package handler

import (
	"database/sql"
	"encoding/json"
	"log"
	"net/http"
	"strings"

	"github.com/kuma0328/easy-class-search/internal/app/domain"
	"github.com/kuma0328/easy-class-search/internal/app/repository"
	"github.com/kuma0328/easy-class-search/internal/app/usecase"
)

func corsSetUser(w http.ResponseWriter) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	w.Header().Set("Access-Control-Allow-Methods", "GET, POST, DELETE")
}

type userParam struct {
	id string
}

type starCodeResponse struct {
	ID   string `json:"id"`
	Code string `json:"code"`
}

type courseParamResponse struct {
	ID          string   `json:"id"`
	Major       string   `json:"major"`
	Season      string   `json:"season"`
	Place       string   `json:"place"`
	Time        []string `json:"time"`
	SortBy      string   `json:"sortBy"`
	Offset      int      `json:"courseOffset"`
	Favorite    bool     `json:"favorite"`
	Year        int      `json:"year"`
	ClassFormat string   `json:"classFormat"`
}

type courseParamTmp struct {
	ID           string
	Major        string
	Season       string
	Place        string
	Time         []string
	SortBy       string
	CourseOffset int
	Favorite     bool
	Year         int
	ClassFormat  string
}

type teacherParamResponse struct {
	ID     string `json:"id"`
	Major  string `json:"major"`
	Offset int    `json:"teacherOffset"`
}

func newTeacherParamResponse(t *domain.TeacherParam) *teacherParamResponse {
	return &teacherParamResponse{
		ID:     t.ID,
		Major:  t.Major,
		Offset: t.TeacherOffset,
	}
}

func newCourseParamResponse(c *domain.CourseParam) *courseParamResponse {
	return &courseParamResponse{
		ID:          c.ID,
		Major:       c.Major,
		Season:      c.Season,
		Place:       c.Place,
		Time:        strings.Split(c.Time, ","),
		SortBy:      c.SortBy,
		Offset:      c.CourseOffset,
		Favorite:    c.Favorite,
		Year:        c.Year,
		ClassFormat: c.ClassFormat,
	}
}

func newStarCodeListResponse(sl []*domain.StarCode) []*starCodeResponse {
	var sc []*starCodeResponse
	for _, s := range sl {
		sc = append(sc, newStarCodeResponse(s))
	}
	return sc
}

func newStarCodeResponse(s *domain.StarCode) *starCodeResponse {
	return &starCodeResponse{
		ID:   s.ID,
		Code: s.Code,
	}
}

func GetStarCodeById(db *sql.DB) http.HandlerFunc {
	repoUser := repository.NewUserRepository(db)
	ucUser := usecase.NewUserUsecase(repoUser)

	handler := func(w http.ResponseWriter, r *http.Request) {
		log.Printf("Received Request for %s %s", r.Method, r.URL.Path)
		corsSetUser(w)
		if r.Method == http.MethodGet {
			id := r.URL.Query().Get("id")
			starCodeList, err := ucUser.GetStarCodeById(r.Context(), id)
			if err != nil {
				http.Error(w, err.Error(), http.StatusBadRequest)
				return
			}
			w.Header().Set("Content-Type", "application/json")
			res := newStarCodeListResponse(starCodeList)
			if err := json.NewEncoder(w).Encode(res); err != nil {
				http.Error(w, err.Error(), http.StatusBadRequest)
			}

			w.WriteHeader(http.StatusOK)
		}

		if r.Method == http.MethodPost {
			var starCode domain.StarCode
			err := json.NewDecoder(r.Body).Decode(&starCode)
			if err != nil {
				http.Error(w, err.Error(), http.StatusBadRequest)
				return
			}
			err = ucUser.AddStarCode(r.Context(), starCode)
			if err != nil {
				http.Error(w, err.Error(), http.StatusBadRequest)
				return
			}
			w.WriteHeader(http.StatusOK)
		}

		if r.Method == http.MethodDelete {
			var starCode domain.StarCode
			err := json.NewDecoder(r.Body).Decode(&starCode)
			if err != nil {
				http.Error(w, err.Error(), http.StatusBadRequest)
				return
			}
			err = ucUser.DeleteStarCode(r.Context(), starCode)
			if err != nil {
				http.Error(w, err.Error(), http.StatusBadRequest)
				return
			}
			w.WriteHeader(http.StatusOK)
		}
	}
	return handler
}

func GetCourseParamById(db *sql.DB) http.HandlerFunc {
	repoUser := repository.NewUserRepository(db)
	ucUser := usecase.NewUserUsecase(repoUser)

	handler := func(w http.ResponseWriter, r *http.Request) {
		log.Printf("Received Request for %s %s", r.Method, r.URL.Path)
		corsSetUser(w)
		if r.Method == http.MethodGet {
			id := r.URL.Query().Get("id")
			courseParam, err := ucUser.GetCourseParamById(r.Context(), id)
			if err != nil {
				http.Error(w, err.Error(), http.StatusBadRequest)
				return
			}
			w.Header().Set("Content-Type", "application/json")
			res := newCourseParamResponse(&courseParam)
			if err := json.NewEncoder(w).Encode(res); err != nil {
				http.Error(w, err.Error(), http.StatusBadRequest)
			}

			w.WriteHeader(http.StatusOK)
		}
		if r.Method == http.MethodPost {
			var courseTmp courseParamTmp
			err := json.NewDecoder(r.Body).Decode(&courseTmp)
			if err != nil {
				http.Error(w, err.Error(), http.StatusBadRequest)
				return
			}

			err = ucUser.AddCourseParam(r.Context(), domain.CourseParam{
				ID:           courseTmp.ID,
				Major:        courseTmp.Major,
				Season:       courseTmp.Season,
				Place:        courseTmp.Place,
				Time:         strings.Join(courseTmp.Time, ","),
				SortBy:       courseTmp.SortBy,
				CourseOffset: courseTmp.CourseOffset,
				Favorite:     courseTmp.Favorite,
				Year:         courseTmp.Year,
				ClassFormat:  courseTmp.ClassFormat,
			})
			if err != nil {
				http.Error(w, err.Error(), http.StatusBadRequest)
				return
			}
			w.WriteHeader(http.StatusOK)
		}
	}
	return handler
}

func GetTeacherParamById(db *sql.DB) http.HandlerFunc {
	repoUser := repository.NewUserRepository(db)
	ucUser := usecase.NewUserUsecase(repoUser)

	handler := func(w http.ResponseWriter, r *http.Request) {
		log.Printf("Received Request for %s %s", r.Method, r.URL.Path)
		corsSetUser(w)
		if r.Method == http.MethodGet {
			id := r.URL.Query().Get("id")
			teacherParam, err := ucUser.GetTeacherParamById(r.Context(), id)
			if err != nil {
				http.Error(w, err.Error(), http.StatusBadRequest)
				return
			}
			w.Header().Set("Content-Type", "application/json")
			res := newTeacherParamResponse(&teacherParam)
			if err := json.NewEncoder(w).Encode(res); err != nil {
				http.Error(w, err.Error(), http.StatusBadRequest)
			}

			w.WriteHeader(http.StatusOK)
		}
		if r.Method == http.MethodPost {
			var teacherParam domain.TeacherParam
			err := json.NewDecoder(r.Body).Decode(&teacherParam)
			if err != nil {
				http.Error(w, err.Error(), http.StatusBadRequest)
				return
			}
			err = ucUser.AddTeacherParam(r.Context(), teacherParam)
			if err != nil {
				http.Error(w, err.Error(), http.StatusBadRequest)
				return
			}
			w.WriteHeader(http.StatusOK)
		}
	}
	return handler
}
