package search

import "fmt"

func TestBinarySearch() {
	fmt.Println(binary(stringArr, "Minnesota"))
}

func binary(arr []string, target string) int {
	if len(arr) == 0 {
		return -1
	}
	if len(arr) == 1 {
		if arr[0] == target {
			return 0
		} else {
			return -1
		}
	}

	i := 0
	j := len(arr) - 1

	for i < j {
		pivot := (i + j) / 2
		if arr[pivot] == target {
			return pivot
		} else if arr[pivot] > target {
			j = pivot - 1
		} else {
			i = pivot + 1
		}
	}
	if i == j && arr[i] == target {
		return i
	}
	return -1
}
