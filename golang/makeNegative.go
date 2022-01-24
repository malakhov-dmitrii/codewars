package main

import (
	"fmt"
)

type S string

func north(s string) bool {
	return s == "NORTH"
}

func south(s string) bool {
	return s == "SOUTH"
}

func east(s string) bool {
	return s == "EAST"
}

func west(s string) bool {
	return s == "WEST"
}

func isOpposite(s1 string, s2 string) bool {
	northSouth := north(s1) && south(s2) || north(s2) && south(s1)
	eastWest := east(s1) && west(s2) || east(s2) && west(s1)
	if northSouth || eastWest {
		return true
	}
	return false
}

func DirReduc(arr []string) []string {
	res := []string{}

	for i := 0; i < len(arr); i++ {
		v := arr[i]

		var next string

		if i != len(arr)-1 {
			next = arr[i+1]
		}

		if isOpposite(v, next) {
			// i--
		} else {
			fmt.Println(i, v, next)
		}

	}

	return res
}

func main() {
	var a = []string{"NORTH", "SOUTH", "EAST", "WEST"}
	fmt.Println(DirReduc(a))
}
