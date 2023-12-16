FROM golang:1.21.1-alpine

WORKDIR /src

COPY go.mod ./
COPY go.sum ./

RUN go mod download

# RUN go install github.com/cosmtrek/air@latest

COPY ./ ./

RUN go build -o /main

EXPOSE 8080

CMD [ "/main" ]
