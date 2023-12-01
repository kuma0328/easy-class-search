package config

import (
	"log"
	"os"
)

type appConfig struct {
	HTTTPInfo *HTTPInfo
	DBInfo    *DBInfo
}

type HTTPInfo struct {
	Addr string
}

type DBInfo struct {
	DBUser     string
	DBPassWord string
	DBAddr     string
	DBName     string
	DBHost     string
}

func LoadConfig() *appConfig {
	addr := os.Getenv("PORT")
	if addr == "" {
		addr = "8080"
		log.Printf("defaulting to addr %s", addr)
	}

	httpInfo := &HTTPInfo{
		Addr: addr,
	}

	dbUser := os.Getenv("POSTGRES_USER")
	dbPassWord := os.Getenv("POSTGRES_PASSWORD")
	dbAddr := os.Getenv("POSTGRES_ADDR")
	dbName := os.Getenv("POSTGRES_DB")
	dbHost := os.Getenv("POSTGRES_HOST")

	dbInfo := &DBInfo{
		DBUser:     dbUser,
		DBPassWord: dbPassWord,
		DBAddr:     dbAddr,
		DBName:     dbName,
		DBHost:     dbHost,
	}

	conf := appConfig{
		DBInfo:    dbInfo,
		HTTTPInfo: httpInfo,
	}

	return &conf
}
