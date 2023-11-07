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

type SubjectDataJSON struct {
	Subject string  `json:"subject"`
	A       float64 `json:"A"`
}

type teacherResponse struct {
	Teacher string            `json:"teacher"`
	Major   string            `json:"major"`
	Data    []SubjectDataJSON `json:"data"`
}

func newGetTeacherAllResponse(t []domain.Teacher) []teacherResponse {
	var response []teacherResponse

	for _, teacher := range t {
		var subjectData []SubjectDataJSON

		for _, subject := range teacher.Data {
			subjectData = append(subjectData, SubjectDataJSON{
				Subject: subject.Subject,
				A:       subject.A,
			})
		}

		response = append(response, teacherResponse{
			Teacher: teacher.Teacher,
			Major:   teacher.Major,
			Data:    subjectData,
		})
	}

	return response
}

func corsSetTeacher(w http.ResponseWriter) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	w.Header().Set("Access-Allow-Methods", "GET")
}

func GetTeacherAll(db *sql.DB) http.HandlerFunc {
	repoTeacher := repository.NewTeacherRepository(db)
	ucTeacher := usecase.NewTeacherUsecase(repoTeacher)

	handler := func(w http.ResponseWriter, r *http.Request) {
		log.Printf("Received Request for %s %s", r.Method, r.URL.Path)
		corsSetTeacher(w)
		if r.Method == http.MethodGet {
			teacher, err := ucTeacher.GetTeacherAll(r.Context())
			if err != nil {
				http.Error(w, err.Error(), http.StatusInternalServerError)
				return
			}

			res := newGetTeacherAllResponse(teacher)
			if err := json.NewEncoder(w).Encode(res); err != nil {
				http.Error(w, err.Error(), http.StatusInternalServerError)
				return
			}

			w.WriteHeader(http.StatusOK)
		}
	}

	return handler
}
