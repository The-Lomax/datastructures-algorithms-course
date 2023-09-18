package sorting

import "fmt"

var (
	stringArr []string
	intArr    []int
)

func init() {
	stringArr = []string{
		"Alabama", "Alaska", "Delaware", "Florida", "Georgia", "Guam", "Maryland", "Minnesota", "Vermont", "Wyoming",
	}
	intArr = []int{
		4, 743, 247, 444, 543, 6, 437, 56, 57, 64, 86, 5, 64, 5236,
		538, 6, 8764, 7, 542, 64, 3, 765, 38, 64, 7, 6, 54, 6245, 25,
		43, 54, 7, 547,
	}
}

func TestSorting(algo string) {
	switch algo {
	case "bubble":
		bubble(intArr)
		fmt.Println(intArr)
	case "selection":
		selection(intArr)
		fmt.Println(intArr)
	case "insertion":
		insertion(intArr)
		fmt.Println(intArr)
	case "merge":
		fmt.Println(mergeSort(intArr))
	case "quick":
		quickSort(intArr, 0, len(intArr)-1)
		fmt.Println(intArr)
	case "radix":
		fmt.Println(radixSort(intArr))
	}
}

func swap(arr []int, i, j int) {
	temp := arr[i]
	arr[i] = arr[j]
	arr[j] = temp
}

func mergeArrays(arr1, arr2 []int) []int {
	if len(arr1) == 0 {
		return arr2
	} else if len(arr2) == 0 {
		return arr1
	}
	var res []int
	i := 0
	j := 0
	for i < len(arr1) && j < len(arr2) {
		if arr1[i] < arr2[j] {
			res = append(res, arr1[i])
			i++
		} else if arr2[j] < arr1[i] {
			res = append(res, arr2[j])
			j++
		} else {
			res = append(res, arr1[i])
			res = append(res, arr2[j])
			i++
			j++
		}
	}
	if i == len(arr1) && j < len(arr2) {
		res = append(res, arr2[j:]...)
	} else if j == len(arr2) && i < len(arr1) {
		res = append(res, arr1[i:]...)
	}
	return res
}
