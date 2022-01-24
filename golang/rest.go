package main

import (
	"crypto/rand"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"math/big"
	"net/http"

	"github.com/gorilla/mux"
)

type Article struct {
	Id          string `json:"id"`
	Title       string `json:"title"`
	Description string `json:"description"`
	Content     string `json:"content"`
}

var Articles []Article

func returnSingleArticle(w http.ResponseWriter, req *http.Request) {
	vars := mux.Vars(req)
	id := vars["id"]

	for _, v := range Articles {
		if v.Id == id {
			json.NewEncoder(w).Encode(v)
		}
	}

	fmt.Println("Endpoint Hit: article by id:", id)
}

func deleteSingleArticle(w http.ResponseWriter, req *http.Request) {
	vars := mux.Vars(req)
	id := vars["id"]

	for idx, v := range Articles {
		if v.Id == id {
			Articles = append(Articles[:idx], Articles[idx+1:]...)
			// json.NewEncoder(w).Encode(v)
		}
	}

	fmt.Println("Endpoint Hit: DELETE article by id:", id)
}

func createArticle(w http.ResponseWriter, req *http.Request) {
	// json.NewEncoder(w).Encode(Articles)
	body, _ := ioutil.ReadAll(req.Body)

	var article Article
	json.Unmarshal(body, &article)
	randomId, _ := rand.Int(rand.Reader, big.NewInt(80))
	article.Id = randomId.String()
	Articles = append(Articles, article)

	json.NewEncoder(w).Encode(article)
	fmt.Println("Endpoint Hit: POST /articles")
}

func returnArticles(w http.ResponseWriter, req *http.Request) {
	json.NewEncoder(w).Encode(Articles)
	fmt.Println("Endpoint Hit: articles")
}

func homePage(w http.ResponseWriter, req *http.Request) {
	fmt.Fprintf(w, "Hello world")
	fmt.Println("Endpoint Hit: homePage")
}

func handleRequests() {
	router := mux.NewRouter().StrictSlash(true)

	router.HandleFunc("/", homePage)
	router.HandleFunc("/articles", createArticle).Methods("POST")
	router.HandleFunc("/articles", returnArticles)
	router.HandleFunc("/articles/{id}", deleteSingleArticle).Methods("DELETE")
	router.HandleFunc("/articles/{id}", returnSingleArticle)
	log.Fatal(http.ListenAndServe(":8080", router))
}

func main() {
	Articles = []Article{
		{Id: "1", Title: "Get started with Golang", Content: "Hello World", Description: "Awesome stuff"},
		{Id: "2", Title: "Get started with Golang", Content: "Hello World", Description: "Awesome stuff"},
		{Id: "3", Title: "Get started with Golang", Content: "Hello World", Description: "Awesome stuff"},
	}

	handleRequests()
}
