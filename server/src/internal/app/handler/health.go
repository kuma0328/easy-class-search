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

	// HEADリクエストも許可する
	if r.Method != http.MethodGet && r.Method != http.MethodHead {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	// 実際のコンテンツはGETリクエストと同様に返す
	if r.Method == http.MethodGet {
		io.WriteString(w, "health OK\n")
	}
}
