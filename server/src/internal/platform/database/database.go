package database

import (
	"database/sql"
	"fmt"

	"github.com/kuma0328/easy-class-search/config"
	_ "github.com/lib/pq"
)

func NewDB(c *config.DBInfo) (*sql.DB, error) {
	dsn := fmt.Sprintf(
		"host=%s user=%s password=%s dbname=%s sslmode=disable",
		c.DBHost,
		c.DBUser,
		c.DBPassWord,
		c.DBName,
	)
	db, err := sql.Open("postgres", dsn)
	fmt.Println(dsn)
	if err != nil {
		return nil, err
	}

	return db, nil
}
