package handler

import (
	"io"
	"log"
	"net/http"
)

// HealthHandlerは/healthにエンドポイントを貼り、GETリクエストでhealth OKを返します。
func HealthHandler(w http.ResponseWriter, r *http.Request) {
	log.Printf("Received Request for %s %s", r.Method, r.URL.Path)
	w.Header().Set("X-Content-Type-Options", "nosniff")
	if r.Method != http.MethodGet {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}
	io.WriteString(w, "health OK\n")
}
