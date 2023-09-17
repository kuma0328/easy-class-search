package main

import (
	"fmt"
	"net/http"
)

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintln(w, "Hello World")
	})

	fmt.Println("Server is running on :8082")
	if err := http.ListenAndServe(":8082", nil); err != nil {
		panic(err)
	}
}
