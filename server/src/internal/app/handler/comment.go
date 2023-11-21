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

type commentResponse struct {
	Comment string `json:"comment"`
}

type commentParam struct {
	Code    string
	Comment string
}

func newCommentListResponse(cm []*domain.Comment) []*commentResponse {
	var r []*commentResponse
	for _, c := range cm {
		r = append(r, newCommentResponse(c))
	}
	return r
}

func newCommentResponse(c *domain.Comment) *commentResponse {
	return &commentResponse{
		Comment: c.Comment,
	}
}

func corsSetComment(w http.ResponseWriter) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	w.Header().Set("Access-Control-Allow-Methods", "GET, POST")

}

func CommentHandler(db *sql.DB) http.HandlerFunc {
	repoComment := repository.NewCommentRepository(db)
	ucComment := usecase.NewCommentUsecase(repoComment)

	handler := func(w http.ResponseWriter, r *http.Request) {
		log.Printf("Received Request for %s %s", r.Method, r.URL.Path)
		corsSetComment(w)
		if r.Method == http.MethodPost {
			var params commentParam
			err := json.NewDecoder(r.Body).Decode(&params)
			if err != nil {
				http.Error(w, err.Error(), http.StatusBadRequest)
				return
			}
			comment, err := ucComment.AddCommentOfCode(r.Context(), params.Code, params.Comment)
			if err != nil {
				http.Error(w, err.Error(), http.StatusBadRequest)
				return
			}
			w.Header().Set("Content-Type", "application/json")
			res := newCommentResponse(&comment)
			if err := json.NewEncoder(w).Encode(res); err != nil {
				http.Error(w, err.Error(), http.StatusBadRequest)
			}

			w.WriteHeader(http.StatusOK)
		}

		if r.Method == http.MethodGet {
			paramCode := r.URL.Query().Get("code")
			comments, err := ucComment.GetCommentOfCode(r.Context(), paramCode)
			if err != nil {
				http.Error(w, err.Error(), http.StatusBadRequest)
				return
			}

			res := newCommentListResponse(comments)
			if err := json.NewEncoder(w).Encode(res); err != nil {
				http.Error(w, err.Error(), http.StatusBadRequest)
			}

			w.WriteHeader(http.StatusOK)
		}
	}

	return handler
}
