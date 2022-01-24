package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"os"
)

type Post struct {
	Title   string `json:title`
	Body    string `json:body`
	UserId  int    `json:userId`
	Id      int    `json:id`
	Visited bool   `json:visited,omitempty`
}

type Bird struct {
	Species     string
	Description string
}

func getJson(url string, target interface{}) error {
	r, err := http.Get(url)
	if err != nil {
		return err
	}
	defer r.Body.Close()

	return json.NewDecoder(r.Body).Decode(target)
}

func main() {
	posts := []Post{}

	response, err := http.Get("http://jsonplaceholder.typicode.com/posts")

	if err != nil {
		fmt.Print(err.Error())
		os.Exit(1)
	}

	defer response.Body.Close()

	json.NewDecoder(response.Body).Decode(&posts)

	for _, post := range posts {
		post.Visited = true
		fmt.Println(post.Title, "| Id:", post.Id, "| Visited: ", post.Visited)
		fmt.Println(post.Body)
		fmt.Println("============")
	}

	// fmt.Printf("%+v\n", posts)

}
