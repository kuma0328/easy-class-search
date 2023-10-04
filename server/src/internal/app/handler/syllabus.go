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

type syllabusResponse struct {
	SyllabusID string `json:"syllabus_id"`
	Code       string `json:"code"`
	Syllabus   string `json:"syllabus"`
	Year       int    `json:"year"`
}

func newGetSyllabusOfCodeResponse(sr []*domain.Syllabus) []*syllabusResponse {
	var r []*syllabusResponse
	for _, c := range sr {
		r = append(r, newSyllabusResponse(c))
	}
	return r
}

func newSyllabusResponse(s *domain.Syllabus) *syllabusResponse {
	return &syllabusResponse{
		SyllabusID: s.SyllabusID,
		Code:       s.Code,
		Syllabus:   s.Syllabus,
		Year:       s.Year,
	}
}

func corsSetSyllabus(w http.ResponseWriter) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	w.Header().Set("Access-Allow-Methods", "GET")
}

func GetSyllabusOfCode(db *sql.DB) http.HandlerFunc {
	repoSyllabus := repository.NewSyllabusRepository(db)
	ucSyllabus := usecase.NewSyllabusUsecase(repoSyllabus)

	return func(w http.ResponseWriter, r *http.Request) {
		log.Printf("Received Request for %s %s", r.Method, r.URL.Path)
		corsSetSyllabus(w)
		if r.Method == http.MethodGet {
			code := r.URL.Query().Get("code")
			if code == "" {
				http.Error(w, "Code parameter is missing", http.StatusBadRequest)
				return
			}

			syllabus, err := ucSyllabus.GetSyllabusOfCode(r.Context(), code)
			if err != nil {
				http.Error(w, err.Error(), http.StatusInternalServerError)
				return
			}

			res := newGetSyllabusOfCodeResponse(syllabus)
			w.Header().Set("Content-Type", "application/json")
			if err := json.NewEncoder(w).Encode(res); err != nil {
				http.Error(w, err.Error(), http.StatusInternalServerError)
				return
			}

			w.WriteHeader(http.StatusOK)
		} else {
			http.Error(w, "Invalid request method", http.StatusMethodNotAllowed)
		}
	}
}
