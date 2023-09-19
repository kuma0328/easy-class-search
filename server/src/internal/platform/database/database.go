package database

import (
	"database/sql"
	"fmt"

	"github.com/kuma0328/easy-class-search/config"
)

func NewDB(c *config.DBInfo) (*sql.DB, error) {
	dsn := fmt.Sprintf("user=%s dbname=%s sslmode=disable",
		c.DBUser, c.DBName)

	db, err := sql.Open("postgres", dsn)
	if err != nil {
		return nil, err
	}

	return db, nil
}
