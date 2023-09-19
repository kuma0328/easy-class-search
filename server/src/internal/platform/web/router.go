package web

import (
	"fmt"
	"net/http"

	"github.com/kuma0328/easy-class-search/config"
	"github.com/kuma0328/easy-class-search/internal/platform/database"
)

func InitRouter() {
	c := config.LoadConfig()

	db, err := database.NewDB(c.DBInfo)
	if err != nil {
		panic(err)
	}
	defer db.Close()

	addr := c.HTTTPInfo.Addr
	fmt.Println("Server Listening", addr)
	if err := http.ListenAndServe(addr, nil); err != nil {
		fmt.Println("Server Error:", err.Error())
	}
}
