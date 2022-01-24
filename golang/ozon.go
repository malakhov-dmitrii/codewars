package main

import "fmt"

// XIX Задача о поиске элемента ⭐⭐

// Дан упорядоченный массив чисел размером N Нужно реализовать алгоритм поиска вхождения упорядоченного подмассива размера M, где M << N

func isInclude(array []int, subarray []int) bool {
	res := true
	for a, i := range array {
		for b, j := range subarray {
			fmt.Println(a, b, i, j)
		}
	}
	return res
}

// Что хочется увидеть:
// Алгоритм со сложность быстрее чем O(N) по времени

// func TestSomething(t *testing.T) {
//     i1 := []int{1, 2, 3, 5, 7, 9, 11}

//     assert.True(isInclude(i1, []int{}))
//     // assert(isInclude([1, 2, 3, 5, 7, 9, 11], []) == true)
//     // assert(isInclude([1, 2, 3, 5, 7, 9, 11], [3, 5, 7]) == true)

// }

func main() {
	res := isInclude([]int{1, 2, 3, 5, 7, 9, 11}, []int{})
	println(res)
}
