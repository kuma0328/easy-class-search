package web

import (
	"database/sql"
	"fmt"
	"log"
	"net/http"

	"github.com/kuma0328/easy-class-search/config"
	"github.com/kuma0328/easy-class-search/internal/app/handler"
	"github.com/kuma0328/easy-class-search/internal/platform/database"
)

func InitRouter() {
	c := config.LoadConfig()

	db, err := database.NewDB(c.DBInfo)
	if err != nil {
		log.Println(err)
	}
	defer db.Close()

	newRouter(db)

	addr := c.HTTTPInfo.Addr
	fmt.Println("Server Listening", addr)
	log.Printf("listening on port %s", addr)
	if err := http.ListenAndServe(":"+addr, nil); err != nil {
		log.Fatal(err)
	}
}

func withDBHandler(handler func(http.ResponseWriter, *http.Request, *sql.DB), db *sql.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		handler(w, r, db)
	}
}

func newRouter(db *sql.DB) {
	http.HandleFunc("/health", handler.HealthHandler)
	http.HandleFunc("/course", handler.GetAllCourseHandler(db))
	http.HandleFunc("/course_info", handler.GetCourseInfoListWithFliter(db))
	http.HandleFunc("/syllabus", handler.GetSyllabusOfCode(db))
	http.HandleFunc("/course_detail", handler.GetCourseDetailOfCode(db))
	http.HandleFunc("/teacher", handler.GetTeacherAll(db))
	http.HandleFunc("/teacher_courses", handler.GetCoursesByTeacher(db))
	http.HandleFunc("/comment", handler.CommentHandler(db))
	http.HandleFunc("/course_count", handler.GetCourseCount(db))
	http.HandleFunc("/teacher_count", handler.GetTeacherCount(db))
}
