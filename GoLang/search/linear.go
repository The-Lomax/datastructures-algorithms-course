package search

import "fmt"

func TestLinearSearch() {
	fmt.Println(linear(intArr, 5))
}

func linear(arr []int, target int) int {
	if len(arr) == 0 {
		return -1
	}
	for i, x := range arr {
		if x == target {
			return i
		}
	}
	return -1
}
